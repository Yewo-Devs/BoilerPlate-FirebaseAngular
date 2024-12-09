using API.Application.Helpers;
using static API.Core.Models.Enums;

namespace API.Application.Interfaces
{
    /// <summary>
    /// This is a wrapper for the Firebase Realtime Database API.
    /// Our goals were to avoid materialization of collections at request time.
    /// We achieve this as the wrapper returns collections in the form IReadOnlyCollection.
    /// Which we then convert to IEnumerables of the type required by the service requesting the data.
    /// It also has the ability to filter data returned by a request greatly reducing the number of 
    /// operations we need to run on returned data. We implemented filtering by time period by storing
    /// our information chronologically by using the Ticks representation of the DateTime 
    /// the data was recorded at.
    /// It also has the ability to return a single instance of a type located at a particular path 
    /// in the Database.
    /// I decided to store Firebase node names in an enum to reduce spelling mistakes and promote consistency.
    /// </summary>
    public interface IFirebaseService
    {
        /// <summary>
        /// Get single instance of type T at node/path.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="node"></param>
        /// <param name="path"></param>
        /// <returns>Single instance of type T</returns>
        public Task<T> GetInstanceOfType<T>(FirebaseDataNodes node, string path = null);
        /// <summary>
        /// Get collection of type T at node/path.
        /// With filtering options available.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="node"></param>
        /// <param name="path"></param>
        /// <returns>Collection of type T</returns>
        public Task<IEnumerable<T>> GetCollectionOfType<T>(FirebaseDataNodes node, FilteringOptions? filteringOptions = null);
        /// <summary>
        /// Stores data with options to store at a path 
        /// and generate a unique key for the data.
        /// </summary>
        /// <param name="node"></param>
        /// <param name="path"></param>
        /// <param name="data"></param>
        /// <returns>IEnumerable of type T</returns>
        public Task StoreData(FirebaseDataNodes node, object data, string? path = null, bool generateKey = false);
        /// <summary>
        /// Updating an object can be done at a single property of an 
        /// object or the entire object or collection.
        /// </summary>
        /// <param name="node"></param>
        /// <param name="path"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public Task UpdateData(FirebaseDataNodes node, string path, object data);
        /// <summary>
        /// Deletes the data at the directory defined by the node and path
        /// </summary>
        /// <param name="node"></param>
        /// <param name="path"></param>
        /// <returns></returns>
        public Task DeleteData(FirebaseDataNodes node, string path);
    }
}