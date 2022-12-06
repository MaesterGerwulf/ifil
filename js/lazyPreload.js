function lazyPreload()
{
  let imagesToPreload = [ "images/Map Georgia Green.png",
                          "images/Members/Mirian.png",
                          "images/Members/Tinatin.png",
                          "images/Members/Ana.png",
                          "images/Members/Roko.png",
                          "images/Members/Etuna.png",
                          "images/Members/Giorgi.png",
                          "images/Members/Barbara.png"]
  
  imagesToPreload.forEach(imgSrc =>
  {
    let img = new Image();
    img.src = imgSrc;
  })

  changeCampSection();

  changeCamp(0);
}