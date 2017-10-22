
   var url= "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognizeInVideo";

   var myHeaders = new Headers();
   myHeaders.append("ocp-apim-subscription-key", "ab59cf6a880d40e98ad7e9d609ebb36a");
   
   var myInit = { method: 'POST',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' };
   
   fetch(url, myInit).then(function(response) {
     return response.blob();
   }).then(function(myBlob) {
     var objectURL = URL.createObjectURL(myBlob);
     myImage.src = objectURL;
   });

   //upload i think
    // var videoOperation;
    // var fs = new FileStream("C:\Videos\Sample.mp4", FileMode.Open)
    // videoOperation = await videoServiceClient.CreateOperationAsync(fs, OperationType.recognizeInVideo);
   
    //from url
    var videoUrl = "http://www.example.com/sample.mp4";
    videoOperation = await videoServiceClient.CreateOperationAsync(videoUrl, OperationType. recognizeInVideo);
