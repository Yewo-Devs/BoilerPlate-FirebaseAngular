namespace API.Application.Interfaces
{
    public interface IFirebaseStorageService
    {
		/// <summary>
		/// Returns the url for the stored file
		/// </summary>
		/// <param name="file"></param>
		/// <param name="fileName"></param>
		/// <returns></returns>
		Task<Core.Models.File> StoreFile(string path, string uid, string fileName);

		string GetDownloadUrl(string objectName, TimeSpan urlDuration);

		Task<string> StoreProfilePhoto(string path, string uid, string fileName);

        Task DeleteFile(string uid, string fileName);
    }
}
