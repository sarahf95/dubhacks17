var storageRef;

// Initialize Firebase
$(function() {
  var config = {
    apiKey: "AIzaSyDxRS_d7YA9B3aX2_wXJIF-UchmSCOTRME",
    authDomain: "emote-e5aea.firebaseapp.com",
    databaseURL: "https://emote-e5aea.firebaseio.com",
    projectId: "",
    storageBucket: "gs://emote-e5aea.appspot.com/",
    messagingSenderId: "533898854208"
  };
  firebase.initializeApp(config);
console.log("hello")

	// Set a reference to a "photos" point in your database
    var photoDataRef = firebase.database().ref('photos')
    var videoDataRef = firebase.database().ref('staticVideos')

	// Create a variable to store the firebase storage object
	var storage = firebase.storage();

	// Set listener: when an child is added, render each photo
    photoDataRef.on('child_added', function(snapshot) {
		// Get the value of the data
		var data = snapshot.val();

		// Using jQuery, create a new img element with the URL of your data
		var img = $('<img>').attr('src', data.url)

		// Append your img to your element with id photos
		$('#photos').append(img);
    });
    
    var vid;
    // Set listener: when an child is added, render each photo
    videoDataRef.on('child_added', function(snapshot) {
		// Get the value of the data
		var data = snapshot.val();

		// Using jQuery, create a new img element with the URL of your data
		vid = $('<video>').attr('src', data.url)

		// Append your img to your element with id photos
		$('#staticVideos').append(vid);
	});


     $('form').on('submit', function(event) {
  		event.preventDefault();
  		// Get the file
  		var file = $("#file-uploadvid")[0].files[0]

  		// Create a reference on Firebase storage using the filename
  		var fileRef = storage.ref(file.name);

  		// // Put a file in the specified location, then...
  		fileRef.put(file).then(function() {
  			// Get the download URL from the reference, then...
  			fileRef.getDownloadURL().then(function(url) {
  				// Push the URL as a new child into your data structure
                  photoDataRef
                        .push({
                                url: url
                            });
                    storageRef = url
                    console.log(storageRef)
  			});

  		});

  		// Reset the form
  		this.reset();
  	});



});


//FIREBASE IMAGE UPLOAD
// $(function() {
//     var params = {
//         // Request parameters
//     };
//     $.ajax({
//         // NOTE: You must use the same location in your REST call as you used to obtain your subscription keys.
//         //   For example, if you obtained your subscription keys from westcentralus, replace "westus" in the
//         //   URL below with "westcentralus".
//         url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize" + $.param(params),
//         beforeSend: function(xhrObj){
//             // Request headers
//             xhrObj.setRequestHeader("Content-Type","application/json");
//             // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
//             xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ab59cf6a880d40e98ad7e9d609ebb36a");
//         },
//         type: "POST",
//         // Request body
//         data: '{"url": "https://i.pinimg.com/736x/28/64/d5/2864d5114f4f7be2abef0fceb6ccb7c2--funny-mugshots-mug-shots.jpg"}',
//     })
//     .done(function(data) {
//       console.log(data)
//       var emotions = data[0].scores
//       console.log(emotions)
//       // array to make keys of emotions in an array
//       dataArray = [];
//       for (key in emotions) {
//         dataArray.push(key);         // Push the key on the array
//         dataArray.push(emotions[key]); // Push the key's value on the array
//       }
//       console.log(dataArray)
//       // finding the max values
//       var array = [];
//       for (var key in emotions) {
//           array.push(emotions[key]);
//       }
//       console.log(array)
//       function findIndicesOfMax(inp, count) {
//         var outp = [];
//         for (var i = 0; i < inp.length; i++) {
//           outp.push(i); // add index to output array
//           if (outp.length > count) {
//             outp.sort(function(a, b) { return inp[b] - inp[a]; }); // descending sort the output array
//             outp.pop(); // remove the last index (index of smallest element in output array)
//           }
//         }
//         return outp;
//       }
//       // getting it out of the function
//       var indices = findIndicesOfMax(array, 3);
//       console.log(indices);
//       topEmotions = [];
//       for (i = 0; i < indices.length; i++) {
//         num = indices[i];
//         if (num == 0){
//           topEmotions.push(dataArray[num])
//         }
//         else if (num == 1){
//           topEmotions.push(dataArray[num+1])
//         } else {
//           topEmotions.push(dataArray[num - 1])
//         }
//       }
//       console.log(topEmotions)
//       $.each(topEmotions, function(index, element) {
//           $('body').append($('<div>', {
//               text: "The emotions the person experiencing likely is " + element
//           }));
//       });
//     })
//     .fail(function() {
//         alert("error");
//     });
// });



$(function() {
    var params = {
        // Request parameters
    };
    var vidurl = '{"url": "' + vid.url + '"' + '}';
    $.ajax({
        // NOTE: You must use the same location in your REST call as you used to obtain your subscription keys.
        //   For example, if you obtained your subscription keys from westcentralus, replace "westus" in the
        //   URL below with "westcentralus".
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","ab59cf6a880d40e98ad7e9d609ebb36a");
        },
        type: "POST",
        // Request body
        data: vidurl,
    })
    .done(function(data) {
      console.log("data " + data)
      var emotions = data[0].scores
      console.log(emotions)
      // array to make keys of emotions in an array
      dataArray = [];
      for (key in emotions) {
        dataArray.push(key);         // Push the key on the array
        dataArray.push(emotions[key]); // Push the key's value on the array
      }
      console.log(dataArray)
      // finding the max values
      var array = [];
      for (var key in emotions) {
          array.push(emotions[key]);
      }
      console.log(array)
      function findIndicesOfMax(inp, count) {
        var outp = [];
        for (var i = 0; i < inp.length; i++) {
          outp.push(i); // add index to output array
          if (outp.length > count) {
            outp.sort(function(a, b) { return inp[b] - inp[a]; }); // descending sort the output array
            outp.pop(); // remove the last index (index of smallest element in output array)
          }
        }
        return outp;
      }
      // getting it out of the function
      var indices = findIndicesOfMax(array, 3);
      console.log(indices);
      topEmotions = [];
      for (i = 0; i < indices.length; i++) {
        num = indices[i];
        if (num == 0){
          topEmotions.push(dataArray[num])
        }
        else if (num == 1){
          topEmotions.push(dataArray[num+1])
        } else {
          topEmotions.push(dataArray[num - 1])
        }
      }
      console.log(topEmotions)
      $.each(topEmotions, function(index, element) {
          $('body').append($('<div>', {
              text: "The emotions the person experiencing likely is " + element
          }));
      });
    })
    .fail(function() {
        alert("error");
    });
});

// // showing the image
// function readURL(input) {
//        if (input.files && input.files[0]) {
//            var reader = new FileReader();

//            reader.onload = function (e) {
//                $('#blah')
//                    .attr('src', e.target.result);
//            };

//            reader.readAsDataURL(input.files[0]);
//        }
//   }


// showing the VID
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}