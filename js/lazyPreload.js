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
  
  // its close enough that even with lazy load it loads
  map.src = "images/Map Georgia Green.png";
  
  // preload background
  section_3.style.backgroundImage = "url('images/Statue.webp')"

  imagesToPreload.forEach(imgSrc =>
  {
    let img = new Image();
    img.src = imgSrc;
  })

  changeCampSection();

  changeCamp(0);
}