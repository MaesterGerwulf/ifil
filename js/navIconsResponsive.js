let isVertical = true;
let lazyLoaded = false;
  
if ((window.scrollY >= 815 && document.documentElement.clientWidth < 1800))
  navHorizontal();

window.addEventListener("resize", () => 
{
  if (document.documentElement.clientWidth >= 1800)
  {
    if (!isVertical)
      navVertical();
  }
  else if (document.documentElement.clientWidth <= 992)
  {
    if (isVertical && window.scrollY >= 40)
      navHorizontal();
    else if (!isVertical &&  window.scrollY < 40)
      navVertical();
  }
  else if (document.documentElement.clientWidth < 1800)
  {
    if (isVertical && window.scrollY >= 815)
      navHorizontal();
    else if (!isVertical &&  window.scrollY < 815)
      navVertical();
  }
})


window.addEventListener("scroll", (evt) =>
{
  if (lazyLoaded == false)
  {
    changeCamp(0);
    lazyLoaded = true
  }

  if (isVertical)
  {
    if ((window.scrollY >= 815 && clWidth() > 992 && clWidth() < 1800) ||
        (window.scrollY >= 40 && clWidth() <= 992))
      navHorizontal();
  }
  else
  {
    if ((window.scrollY < 815 && clWidth() > 992) || 
        (window.scrollY < 40 && clWidth() <= 992))
      navVertical();
  }

}, {passive: true})


function navHorizontal() 
{
  let navIcon = document.getElementsByClassName("nav_icon");

  for (let i = 0; i < navIcon.length; i++)
  {
    navIcon[i].style.display = "inline-block";
  }

  navIcon[3].style.display = "none";

  isVertical = false;
}

function navVertical() 
{
  let navIcon = document.getElementsByClassName("nav_icon");

  for (let i = 0; i < navIcon.length; i++)
  {
    navIcon[i].style.display = "block";
  }

  navIcon[4].style.display = "none";

  isVertical = true;
}