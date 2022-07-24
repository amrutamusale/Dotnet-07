using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using TwitAppApi.ViewModels;
using System.Net.Http.Headers;
using Azure.Storage.Blobs;


namespace TwitAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UploadController : ControllerBase
    { 
    [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> Upload()
    {
        try
        {
            var formCollection = await Request.ReadFormAsync();
            var file = formCollection.Files.First();
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory());
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    fileName = Path.GetFileNameWithoutExtension(fileName) + DateTime.Now.ToString("yyyyMMddHHmmssfff") + ".jpg";
                    var fullPath = Path.Combine(pathToSave, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                string connectionString = "DefaultEndpointsProtocol=https;AccountName=tweetapp;AccountKey=UDK9VYsBYyRs1s34GkPabIFfl4SSMMUt3JtFYAGIbsDqpqtY3a3S2wU4eyxOWcG4174EUWFuIq3N+AStJR/d8w==;EndpointSuffix=core.windows.net";
                string containerName = "images";
                BlobContainerClient container = new BlobContainerClient(connectionString, containerName);
                var blob = container.GetBlobClient(fileName);
                var blobstream = System.IO.File.OpenRead(fileName);
                await blob.UploadAsync(blobstream);
                var Uri = blob.Uri.AbsoluteUri;
                return Ok(new ImageViewModel() { ImageUrl = Uri });
            }
            else
            {
                return BadRequest();
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500);

        }
    }
}
}