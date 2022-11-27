let mapPinDivs = document.getElementsByClassName("map_pin_div");

// i = 0 is tbilisi
for (let i = 1; i < mapPinDivs.length; i++)
{
  mapPinDivs[i].addEventListener("mouseover", (evt) =>
  {
    map_pin_popup.style.display = "block";

    map_pin_popup_year.innerHTML = camps[mapPinDivs.length - 1 - i].year + "&nbsp&nbsp";
    map_pin_popup_date.textContent = camps[mapPinDivs.length - 1 - i].dateShort;

    // map pin width = 12
    
    if (mapPinDivs[i].classList.contains("txt_right_div"))
      map_pin_popup.style.left = (parseInt(mapPinDivs[i].offsetLeft) + 6 - parseInt(map_pin_popup.offsetWidth) / 2).toString() + "px";
    else
      map_pin_popup.style.left = (parseInt(mapPinDivs[i].offsetLeft) + parseInt(mapPinDivs[i].offsetWidth) - 6 - parseInt(map_pin_popup.offsetWidth) / 2).toString() + "px";

    map_pin_popup.style.top = (parseInt(mapPinDivs[i].offsetTop) - map_pin_popup.offsetHeight).toString() + "px";
  })

  mapPinDivs[i].addEventListener("mouseout", (evt) =>
  {
    console.log(mapPinDivs[i].style.width);
    map_pin_popup.style.display = "none";
  })
}

map_pin_popup.addEventListener("mouseover", (evt) => {
  map_pin_popup.style.display = "block";
})

map_pin_popup.addEventListener("mouseout", (evt) => {
  map_pin_popup.style.display = "none";
})