/*
$(function() {
    var params = {
        // Request parameters
        "startDatum": "{string}",
        "eindDatum": "{string}",
        "taalCode": "NEDERLANDS",
    };
  
    $.ajax({
        url: "https://api.delijn.be/DLKernOpenData/api/v1/omleidingen?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
    })
    .fail(function() {
        alert("error");
    });
});
*/