using System;
using System.IO;

namespace Lernia.LocalData
{
    public static class Data
    {
        public static string SearchResponse()
        {
            return ReadFromFile("LocalData/SearchResponse.txt");
        }

        public static string DeparturesResponse()
        {
            return ReadFromFile("LocalData/DeparturesResponse.txt");
        }

        public static string StopsResponse()
        {
            return ReadFromFile("LocalData/StopsResponse.txt");
        }

         public static string SearchBackupResponse()
        {
            return ReadFromFile("LocalData/searchBackup.txt");
        }

        private static string ReadFromFile(string path)
        {
            try
            {   // Open the text file using a stream reader.
                using (StreamReader sr = new StreamReader(path))
                {
                    // Read the stream to a string, and write the string to the console.
                    String line = sr.ReadToEnd();
                    Console.WriteLine(line);
                    return line;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("The file could not be read:");
                Console.WriteLine(e.Message);
                return "The file could not be read:";
            }
        }
    }
}