
$("#camera_button").click(function(){
    
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess(imageURI) {
            var imagen = document.getElementById("myimage");
            imagen.src=imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
});