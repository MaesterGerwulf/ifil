camps_arrow_left.addEventListener("click", (evt) =>
{
  campSection--;

  changeCampSection();
})

camps_arrow_right.addEventListener("click", (evt) =>
{
  campSection++;

  changeCampSection();
})

photo_arrow_left.addEventListener("click", () => 
{
  let selectedIndex = (photoIndex % 7);

  if (selectedIndex == 0)
  {
    photoIndexSection--;
    photoSection = photoIndexSection;
    changePhotoSection();
    changePhoto(6);
  }
  else
  {
    photoSection = photoIndexSection;
    changePhotoSection();
    changePhoto(selectedIndex - 1);
  }
})

photo_arrow_right.addEventListener("click", () => 
{
  let selectedIndex = (photoIndex % 7);   
    
  if (selectedIndex == 6)
  {
    photoIndexSection++;
    photoSection = photoIndexSection;
    changePhotoSection();
    changePhoto(0);
  }
  else
  {
    photoSection = photoIndexSection;
    changePhotoSection();
    changePhoto(selectedIndex + 1);
  }
    
})

photos_arrow_left.addEventListener("click", (evt) =>
{
  photoSection--;

  changePhotoSection();
})

photos_arrow_right.addEventListener("click", (evt) =>
{
  photoSection++;

  changePhotoSection();
})

if (!hasTouch())
{
  camps_arrow_left.addEventListener("mouseover", () => {if (!hasTouch()) fillWhite("camp_arrow_left")})
  camps_arrow_left.addEventListener("mouseout", () => {if (!hasTouch()) fillOrange("camp_arrow_left")})

  camps_arrow_right.addEventListener("mouseover", () => {if (!hasTouch()) fillWhite("camp_arrow_right")})
  camps_arrow_right.addEventListener("mouseout", () => {if (!hasTouch()) fillOrange("camp_arrow_right")})

  photo_arrow_left.addEventListener("mouseover", () => {if (!hasTouch()) fillOrange("photo_arrow_left")})
  photo_arrow_left.addEventListener("mouseout", () => {if (!hasTouch()) fillWhite("photo_arrow_left")})

  photo_arrow_right.addEventListener("mouseover", () => {if (!hasTouch()) fillOrange("photo_arrow_right")})
  photo_arrow_right.addEventListener("mouseout", () => {if (!hasTouch()) fillWhite("photo_arrow_right")})

  photos_arrow_left.addEventListener("mouseover", () => fillOrange("photos_arrow_left"))
  photos_arrow_left.addEventListener("mouseout", () => fillWhite("photos_arrow_left"))

  photos_arrow_right.addEventListener("mouseover", () => fillOrange("photos_arrow_right"))
  photos_arrow_right.addEventListener("mouseout", () => fillWhite("photos_arrow_right"))
}
else
{
  camps_arrow_left.addEventListener("touchstart", () => fillWhite("camp_arrow_left"), {passive: true})
  camps_arrow_left.addEventListener("touchend", () => fillOrange("camp_arrow_left"), {passive: true})
  
  camps_arrow_right.addEventListener("touchstart", () => fillWhite("camp_arrow_right"), {passive: true})
  camps_arrow_right.addEventListener("touchend", () => fillOrange("camp_arrow_right"), {passive: true})
  
  photo_arrow_left.addEventListener("touchstart", () => fillOrange("photo_arrow_left"), {passive: true})
  photo_arrow_left.addEventListener("touchend", () => fillWhite("photo_arrow_left"), {passive: true})
  
  photo_arrow_right.addEventListener("touchstart", () => fillOrange("photo_arrow_right"), {passive: true})
  photo_arrow_right.addEventListener("touchend", () => fillWhite("photo_arrow_right"), {passive: true})
}