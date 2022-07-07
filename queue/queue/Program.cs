using Azure.Storage.Queues;
using System;

namespace queue
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            InsertMessage("Order with ORD12345 is processed");
        }
        public static void InsertMessage(string message)
        {
            string connectionstring = "DefaultEndpointsProtocol=https;AccountName=levelupsolution0016;AccountKey=g2R5jhXdl4zcgPKi3qABwZJLPhyOqo+FAdgKiltiU9WtcA0aYQNtbb67EflGV0ZswEbZKCzxIGCt+AStIYRE3w==;EndpointSuffix=core.windows.net";
            QueueClient queueClient = new QueueClient(connectionstring, "sample-queue");
            queueClient.CreateIfNotExists();
            if (queueClient.Exists())
            {
                queueClient.SendMessage(message);
            }
            Console.WriteLine("Message is inserted");

        }
    }
}

        