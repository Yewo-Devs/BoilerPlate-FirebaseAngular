namespace API.Application.Interfaces
{
    public interface IPhotoService
    {
        Task<byte[]> CropPhotoAsync(string path);
    }
}
