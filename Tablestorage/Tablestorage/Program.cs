using Azure;
using Azure.Data.Tables;
using System;

namespace Tablestorage
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var client = new TableClient(new Uri("https://levelupsolution0016.table.core.windows.net"), "tblSample", new TableSharedKeyCredential("levelupsolution0016", "g2R5jhXdl4zcgPKi3qABwZJLPhyOqo+FAdgKiltiU9WtcA0aYQNtbb67EflGV0ZswEbZKCzxIGCt+AStIYRE3w=="));
            Pageable<TableEntity> queryableTable = client.Query<TableEntity>();
            foreach (TableEntity item in queryableTable)
            {
                Console.WriteLine(item.GetString("Name"));
            }
        }
    }
}
        
