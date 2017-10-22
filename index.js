(function(){

})();

console.log("hello")

// Initialize Firebase
$(function() {
  var config = {
    apiKey: "AIzaSyDxRS_d7YA9B3aX2_wXJIF-UchmSCOTRME",
    authDomain: "emote-e5aea.firebaseapp.com",
    databaseURL: "https://emote-e5aea.firebaseio.com",
    projectId: "emote-e5aea",
    storageBucket: "",
    messagingSenderId: "533898854208"
  };
  firebase.initializeApp(config);

})

// showing the image
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
