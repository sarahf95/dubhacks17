(function(){
    var AUDIO_API_KEY = "db029f63-f579-4375-8ebb-83b03589ebeb";
    var audioForm = document.getElementById("audioForm");
    console.log(audioForm);
    
    audioForm.addEventListener("click", function(e) {
        e.preventDefault();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://apiv3.beyondverbal.com/v3/recording/start",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "authorization": "Bearer xJntLSkEXokS0qBnSpYFhY9aPCcooMdxvErjBf3sp2-37v3JbNwFtUKec9WXsYrpGXm0wxvFXcklXfpM4eLTSQcIIWSw8PBgWq56hkf2KjJTcPTJkEdsPf772EdClUeBsLT6Iywa6ufw_7-RHZdiRktfaFatTRbCci_DJiLqWShCIDC3-_T1ebjgXPOJl_MgOXVFNyMvHchL45IbhhNgXwkURGZB_VES7OLsrkvZPf7zOnBg0U8cZ6AhJPjP9ZjSHxtlft_52Cy9cHa7P6Bk0T-te0b05uBjofDwNOLhzYYk0w4WoZ3VFXZTnkGwGHprAfdyYUu1gecyF-xUSCxYGI0EZ7s9D_KKFLWyD-hLfmUFY_49Dbg-f-fTa9QK1X9cXESV2O8tLre_iB4YYsATGV8GFwBWNpKk7gwPBDejhXX1YWbm8dNWH9a9ZuWRq2aWOWly7i3uZ1O45d5xBJJDVRBZz4KdHrxggl_UDqtA8bcYUcd6vXDUMtngkoVYh8zZKIPm18uT7XngMrPsWyaEMvaWI_HsmSwjmphNVOrXDI324vRJO3BIKmvc6Wi8GCTOPJUp8fip_A5whC_X1cr5k1kl7qGDQytQtYA6VAAQwKfti_1fMB2aENMKbf7F3AMr4yDZjyjkMj08_zg4Q6E-L7UgNnysw_bur0bHd0GnnSsxVn6Rn8qrcZaT7tIOJIci9vrALxG8pPIGlnwVOrDETOKRlfyPE-HBZgQ7F4VrQEoNm1dLqDCusqCP_-hyx68PCu1zGQ",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": "{\n\t\"dataFormat\": {\n\t\t\"type\": \"wav\"\n\t}\n}"
          }
          var recID;
          $.ajax(settings).done(function (response) {
              recID = response.recordingID;
            console.log(response);
          });



          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://apiv3.beyondverbal.com/v3/recording/" + recID,
            "method": "POST",
            "headers": {
              "content-length": "75",
              "authorization": "Bearer xJntLSkEXokS0qBnSpYFhY9aPCcooMdxvErjBf3sp2-37v3JbNwFtUKec9WXsYrpGXm0wxvFXcklXfpM4eLTSQcIIWSw8PBgWq56hkf2KjJTcPTJkEdsPf772EdClUeBsLT6Iywa6ufw_7-RHZdiRktfaFatTRbCci_DJiLqWShCIDC3-_T1ebjgXPOJl_MgOXVFNyMvHchL45IbhhNgXwkURGZB_VES7OLsrkvZPf7zOnBg0U8cZ6AhJPjP9ZjSHxtlft_52Cy9cHa7P6Bk0T-te0b05uBjofDwNOLhzYYk0w4WoZ3VFXZTnkGwGHprAfdyYUu1gecyF-xUSCxYGI0EZ7s9D_KKFLWyD-hLfmUFY_49Dbg-f-fTa9QK1X9cXESV2O8tLre_iB4YYsATGV8GFwBWNpKk7gwPBDejhXX1YWbm8dNWH9a9ZuWRq2aWOWly7i3uZ1O45d5xBJJDVRBZz4KdHrxggl_UDqtA8bcYUcd6vXDUMtngkoVYh8zZKIPm18uT7XngMrPsWyaEMvaWI_HsmSwjmphNVOrXDI324vRJO3BIKmvc6Wi8GCTOPJUp8fip_A5whC_X1cr5k1kl7qGDQytQtYA6VAAQwKfti_1fMB2aENMKbf7F3AMr4yDZjyjkMj08_zg4Q6E-L7UgNnysw_bur0bHd0GnnSsxVn6Rn8qrcZaT7tIOJIci9vrALxG8pPIGlnwVOrDETOKRlfyPE-HBZgQ7F4VrQEoNm1dLqDCusqCP_-hyx68PCu1zGQ",
              "cache-control": "no-cache",
              "postman-token": "f25891a4-2cf0-cf95-3cd9-05e7ab6d5c5c"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });

    });
})();
