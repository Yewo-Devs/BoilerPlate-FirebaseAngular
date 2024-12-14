using API.Application.Interfaces;
using Firebase.Storage;
using Google.Cloud.Storage.V1;
using HeyRed.Mime;
using File = API.Core.Models.File;

namespace API.Infrastructure.Services
{
	public class FirebaseStorageService : IFirebaseStorageService
	{
		private readonly string Bucket = Environment.GetEnvironmentVariable("Firebase_Storage_Bucket");
		private readonly string Firebase_Admin_Sdk_Path = Environment.GetEnvironmentVariable("Firebase_Admin_Sdk_Path");
		private readonly IPhotoService _photoService;

		public FirebaseStorageService(IPhotoService photoService)
		{
			_photoService = photoService;
		}
		public async Task DeleteFile(string uid, string fileName)
		{
			try
			{
				await new FirebaseStorage(Bucket, new FirebaseStorageOptions()).Child("Files").Child(uid).Child(fileName).DeleteAsync();
			}
			catch (Exception ex)
			{
				Exception e = ex;
			}
		}

		public string GetDownloadUrl(string objectName, TimeSpan urlDuration)
		{
			UrlSigner urlSigner = UrlSigner
				.FromCredentialFile(Firebase_Admin_Sdk_Path);

			string url = urlSigner.Sign(
				bucket: Bucket,
				objectName: $"Files/{objectName}",
				duration: urlDuration,
				HttpMethod.Get);

			return url;
		}

		public async Task<File> StoreFile(string path, string uid, string fileName)
		{
			// Get the content type from the base64 string
			int start = path.IndexOf("data:") + 5;
			int end = path.IndexOf(";");
			string contentType = path.Substring(start, end - start);

			// Remove the data URL scheme part of the string
			int n = path.IndexOf("base64,");
			path = path.Remove(0, n + 7);

			// Convert base64 string to byte array
			var bytes = Convert.FromBase64String(path);

			// Create a memory stream from the byte array
			var stream = new MemoryStream(bytes);

			fileName += GetFileExtension(contentType);

			try
			{
				// Upload file with metadata
				var downloadUrl = await new FirebaseStorage(Bucket, new FirebaseStorageOptions())
					.Child("Files")
					.Child(uid)
					.Child(fileName)
					.PutAsync(stream, new CancellationToken(false), contentType);

				return new File()
				{
					FileUrl = downloadUrl,
					FileName = fileName,
				};
			}
			catch (Exception ex)
			{
				// Log the exception if necessary
				Exception e = ex;
				return null;
			}
		}

		public string GetFileExtension(string mimeType)
		{
			if (mimeType == "application/x-zip-compressed")
				return ".zip";

			return "." + MimeTypesMap.GetExtension(mimeType);
		}

		public async Task<string> StoreProfilePhoto(string path, string uid, string fileName)
		{
			//Crop Photo
			var bytes = await _photoService.CropPhotoAsync(path);

			var stream = new MemoryStream(bytes);

			// Get the content type from the base64 string
			int start = path.IndexOf("data:") + 5;
			int end = path.IndexOf(";");
			string contentType = path.Substring(start, end - start);

			fileName += GetFileExtension(contentType);

			try
			{
				var downloadUrl = await new FirebaseStorage(Bucket, new FirebaseStorageOptions()).Child("Files").Child(uid).Child(fileName).PutAsync(stream);
				return downloadUrl;
			}
			catch (Exception ex)
			{
				Exception e = ex;
				return null;
			}
		}
	}
}
