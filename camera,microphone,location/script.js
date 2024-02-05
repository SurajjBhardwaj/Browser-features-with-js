document.addEventListener("DOMContentLoaded", () => {
  let location = document.getElementById("location");
  let but = document.getElementById("but");
  let video = document.getElementById("vid");
  let mediaDevices = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {
    // Accessing the user camera and video.
    mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        // Changing the source of video to current stream.
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch(alert);
  });

  location.addEventListener("click", () => {
    // Accessing the user location.
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      location.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
    });
  });



});
