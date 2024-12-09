namespace API.Core.Models
{
    public class File
    {
        public string Uid { get; set; }
        public string FileName { get; set; }
        public string FileUrl { get; set; }
        public long FileSizeBytes { get; set; }

        public long GetFileSizeInBytes(string filePath)
        {
            int n = filePath.IndexOf("base64,");

            filePath = filePath.Remove(0, n + 7);

            var bytes = Convert.FromBase64String(filePath);

            return bytes.LongLength;
        }
    }
}
