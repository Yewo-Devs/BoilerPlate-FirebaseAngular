using API.Application.Interfaces;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System.Net;

namespace API.Infrastructure.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly Cloudinary _cloudinary;
        public PhotoService()
        {
            var acc = new Account
                (
                Environment.GetEnvironmentVariable("Cloudinary_CloudName"),
                Environment.GetEnvironmentVariable("Cloudinary_ApiKey"),
                Environment.GetEnvironmentVariable("Cloudinary_ApiSecret")
                );

            _cloudinary = new Cloudinary(acc);
        }
        public async Task<byte[]> CropPhotoAsync(string path)
        {
            var uploadResult = new ImageUploadResult();

            int n = path.IndexOf("base64,");

            path = path.Remove(0, n + 7);
            var bytes = Convert.FromBase64String(path);

            FormFile file;

            var myStream = new MemoryStream(bytes);
            file = new FormFile(myStream, 0, myStream.Length, null, "imageName");

            if (file.Length > 0)
            {
                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription("Avatar", stream),
                    Transformation = new Transformation().Height(128).Width(128).Crop("fill").Gravity("face")
                };

                uploadResult = await _cloudinary.UploadAsync(uploadParams);

                if (uploadResult.StatusCode == HttpStatusCode.OK)
                {
                    var downloadUrl = uploadResult.SecureUrl;
                    using (var webClient = new WebClient())
                    {
                        var croppedImageBytes = webClient.DownloadData(downloadUrl);

                        // Delete the image after download
                        var deleteParams = new DeletionParams(uploadResult.PublicId);
                        var deletionResult = await _cloudinary.DestroyAsync(deleteParams);

                        if (deletionResult.Result == "ok")
                        {
                            return croppedImageBytes;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
                else
                {
                    return null;
                }
            }

            return null;
        }
    }
}
