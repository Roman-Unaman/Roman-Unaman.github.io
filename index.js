let instagramPhotos = document.querySelectorAll('.inst-photo');

instagramPhotos.forEach(function(instPhoto) {
  instPhoto.onclick = function() {
    instPhoto.classList.toggle('up')
  }
})