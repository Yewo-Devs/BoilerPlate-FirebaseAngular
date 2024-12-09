namespace API.Application.Helpers
{
    /// <summary>
    /// Definitions of filtering options we use in our 
    /// Firebase Realtime Database requests for dealing 
    /// with collections of data.
    /// </summary>
    public class FilteringOptions
    {
        /// <summary>
        /// Path refers to a directory inside of a FirebaseDatabaseNode.
        /// In the form ("Folder/Folder1/Folder2 etc...")
        /// which will return a collection of data at the last directory ("Folder2").
        /// Nullable if you wish to return a collection of data at a node.
        /// </summary>
        public string? Path { get; set; } = null;
        /// <summary>
        /// The start of the time period you wish to filter the collection at this path by.
        /// Nullable if you don't wish to filter by time period.
        /// </summary>
        public DateTime? StartDate { get; set; } = null;
        /// <summary>
        /// The end of the time period you wish to filter the collection at this path by.
        /// Nullable if you don't wish to filter by time period.
        /// </summary>
        public DateTime? EndDate { get; set; } = null;
        /// <summary>
        /// Limits the collection returned at this path to the first (limitToFirst)
        /// items. Nullable if you don't wish to filter by number of items.
        /// </summary>
        public int? LimitToFirst { get; set; } = null;
    }
}
