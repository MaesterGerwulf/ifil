let campSelectors = document.getElementsByClassName("camp_selector");
let locationTexts = document.getElementsByClassName("camp_slctr_loc_txt");
let photoSelectors = document.getElementsByClassName("photo_selector");

function changeCamp(title)
{
    campSelectors[campIndex % 7].style.fontWeight = "300";
    campSelectors[campIndex % 7].style.backgroundColor = "transparent";
    locationTexts[campIndex % 7].style.fontWeight = "500";
    locationTexts[campIndex % 7].style.color = "#FCAD1D";

    campSelectors[title].style.fontWeight = "500";
    campSelectors[title].style.backgroundColor = "#FCAD1D";
    locationTexts[title].style.fontWeight = "600";
    locationTexts[title].style.color = "#111111";

    campIndex = title + campSection * 7;

    photoSection = 0;
    photoIndexSection = 0;
    changePhoto(0);
    changePhotoSection();

    camp_picture.src = getImgSource("picture", "jpg");


    let camp_date = document.getElementById("camp_date");

    camp_location.firstChild.nodeValue = camp().locationEN + "\xa0\xa0";
    camp_date.textContent = camp().dateEN;
    camp_text.innerHTML = camp().textEN;

    // if (isEng())
    // {
    // }
    // else
    // {
    //   camp_location.innerHTML = camp().locationGE;
    //   camp_date.innerHTML = camp().dateGE;
    //   camp_text.innerHTML = camp().textGE;
// }
}

function changePhoto(title)
{
    photoSelectors[photoIndex % 7].style.outline = "2px solid #FFFDF8";

    photoIndexSection = photoSection;

    // previous
    if (photoIndex == 1)
    {
        video.remove();
        camp_photo.style.display = "inline-block";
    }

    photoIndex = title + photoIndexSection * 7;

    photoSelectors[title].style.outline = "2px solid #FCAD1D";

    if (photoIndex === 0)
    {
        photo_arrow_left.style.display = "none";
        photo_arrow_right.style.display = "block";

        camp_photo.src = getImgSource("speakers", "jpg");
        camp_photo.style.margin = "0";
    }

    else if (photoIndex === 1)
    {
        photo_arrow_left.style.display = "block";
        let photoWidth = camp_photo.width;
        camp_photo.style.display = "none";

        let iFrame = document.createElement("iframe");
        let link = "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1"

        iFrame.id = "video";
        iFrame.setAttribute("frameBorder", "0");

        if (document.documentElement.clientWidth <= 992)
          link += "&fs=0"
        else
        {
            iFrame.setAttribute("allowfullscreen", "allowfullscreen");
            iFrame.setAttribute("mozallowfullscreen", "mozallowfullscreen");
            iFrame.setAttribute("msallowfullscreen", "msallowfullscreen");
            iFrame.setAttribute("oallowfullscreen", "oallowfullscreen");
            iFrame.setAttribute("webkitallowfullscreen", "webkitallowfullscreen");
        }

        iFrame.src = "https://www.youtube.com/embed/" + camp().video + link;
        
        
        camp_photo_div.appendChild(iFrame);
    }
    else 
    {
        camp_photo.src = getImgSource(("photo_" + (photoIndex - 1)), "webp");

        if ((photoIndex - 1) == camp().numOfPhotos)
            photo_arrow_right.style.display = "none";
        else
        {
            photo_arrow_right.style.display = "block";
            photo_arrow_left.style.display = "block";
        }

        if (document.documentElement.clientWidth < 1250)
        {
            heightNeeded = (camp_photo.width * 3 / 4) - camp_photo.height;
            camp_photo.style.margin = (heightNeeded / 2) + "px 0";
        }
    }
}

function changeCampSection() 
{
  for (let i = 0; i < 7; i++)
  {
    let camp = camps[i + campSection * 7];

    if (i + campSection * 7 < camps.length)
    {
      campSelectors[i].innerHTML = camp.year +"</br>" + camp.dateShort + "</br><span title=" + i + " class=camp_slctr_loc_txt>" + camps[i + campSection * 7].locationEN + "</span>";
      
      let img1 = new Image();
      let img2 = new Image();
      img1.src = "images/liberty_weekends/" + camp.locationEN.toLowerCase() + "/picture.jpg";
      img2.src = "images/liberty_weekends/" + camp.locationEN.toLowerCase() + "/speakers.jpg";
      
      for (let i = 1; i <= camp.numOfPhotos; i++)
      {
        let img3 = new Image();
        img3.src = "images/liberty_weekends/" + camp.locationEN.toLowerCase() + "/" + i + "sm.jpg";
      }
      campSelectors[i].style.visibility = "visible";
    }
    else
      campSelectors[i].style.visibility = "hidden";
  }

  if (Math.floor(campIndex / 7) !== campSection)
  {
    campSelectors[campIndex % 7].style.fontWeight = "300";
    campSelectors[campIndex % 7].style.backgroundColor = "transparent";
    locationTexts[campIndex % 7].style.fontWeight = "500";
    locationTexts[campIndex % 7].style.color = "#FCAD1D";
  }
  else
  {
    campSelectors[campIndex % 7].style.fontWeight = "500";
    campSelectors[campIndex % 7].style.backgroundColor = "#FCAD1D";
    locationTexts[campIndex % 7].style.fontWeight = "600";
    locationTexts[campIndex % 7].style.color = "#111111";
  }

  if (campSection == 0)
    camps_arrow_left.style.visibility = "hidden";
  else
    camps_arrow_left.style.visibility = "visible";

  if ((camps.length - (campSection * 7)) > 7)
    camps_arrow_right.style.visibility = "visible";
  else
    camps_arrow_right.style.visibility = "hidden";
}

function changePhotoSection() 
{
  let photoSelectors = document.getElementsByClassName("photo_selector");
  // amount of selectors that should be shown
  let length = 7;
  let photosRemaining;

  if (Math.floor(photoIndex / 7) !== photoSection)
    photoSelectors[photoIndex % 7].style.outline = "2px solid #FFFDF8";
  else
    photoSelectors[photoIndex % 7].style.outline = "2px solid #FCAD1D";


  if (photoSection == 0)
  {
    photos_arrow_left.style.visibility = "hidden";
    
    photosRemaining = camp().numOfPhotos;

    // hide selectors
    if (photosRemaining <= 5)
    {
      length = photosRemaining + 2;

      for (let i = length; i < 7; i++)
      {
        photoSelectors[i].style.visibility = "hidden";
      }

      photos_arrow_right.style.visibility = "hidden";
    }
    else
      photos_arrow_right.style.visibility = "visible";

    photoSelectors[0].style.backgroundImage = "url('images/Speakers.png')"
    photoSelectors[1].style.backgroundImage = "url('images/Video.png')"
    photoSelectors[0].style.visibility = "visible";
    photoSelectors[1].style.visibility = "visible";
    
    for (let i = 2; i < length; i++)
    {
      photoSelectors[i].style.visibility = "visible";
      // camp photos preload
      img = new Image();
      img.src = getImgSource(("photo_" + (i - 1)), "webp");
      photoSelectors[i].style.backgroundImage = "url('" + getImgSource((i - 1) + "sm", "jpg") + "')";
    }
  }
  else
  {
    // -2 because of speakers and video
    photosRemaining = camp().numOfPhotos - (photoSection * 7 - 2);

    photos_arrow_left.style.visibility = "visible";

    if (photosRemaining < 7)
    {
      length = photosRemaining;

      // hide selectors
      for (let i = length; i < 7; i++)
      {
        photoSelectors[i].style.visibility = "hidden";
      }

      photos_arrow_right.style.visibility = "hidden";
    }
    else
      photos_arrow_right.style.visibility = "visible";
    
    for (let i = 0; i < length; i++)
    { // -2 because of speakers and video
      photoSelectors[i].style.visibility = "visible";
      
      photoSelectors[i].style.backgroundImage = "url('" + getImgSource((photoSection * 7 + i - 1) + "sm", "jpg") + "')";
    }
  }
}


// Camp Selector Event Listeners
for (let i = 0; i < campSelectors.length; i++)
{
  campSelectors[i].onmousedown = function(evt){evt.preventDefault();};

  campSelectors[i].addEventListener("click", (evt) =>
  {
      let titleInt = parseInt(evt.target.title);

      scrollToCamps();

      if (campIndex !== (titleInt + campSection * 7))
      changeCamp(titleInt);

  })

  campSelectors[i].addEventListener("mouseover", (evt) =>
  {
    let titleInt = parseInt(evt.target.title);

    if (campIndex !== (titleInt + campSection * 7))
    {
      campSelectors[i].style.outline = "3px solid #FCAD1D";
      campSelectors[i].style.fontWeight = "500";
      locationTexts[i].style.fontWeight = "600";
    }
  })

  campSelectors[i].addEventListener("mouseout", (evt) =>
  {
    let titleInt = parseInt(evt.target.title);

    if (campIndex !== (titleInt + campSection * 7))
    {
      campSelectors[i].style.outline = "2px solid #FCAD1D";
      campSelectors[i].style.fontWeight = "300";
      locationTexts[i].style.fontWeight = "500";
    }
  })
}

  // Photo Selector Event Listeners
for (let i = 0; i < photoSelectors.length; i++)
{
  photoSelectors[i].onmousedown = function(evt){evt.preventDefault();};

  photoSelectors[i].addEventListener("click", (evt) =>
  {
    let titleInt = parseInt(evt.target.title);

    if (photoIndex !== (titleInt + photoSection * 7))
      changePhoto(titleInt);
  })

  photoSelectors[i].addEventListener("mouseover", (evt) =>
  {
    let titleInt = parseInt(evt.target.title);

    if (photoIndex !== (titleInt + photoSection * 7))
    {
      photoSelectors[i].style.outline = "3px solid #FFFDF8";
      photoSelectors[i].style.backgroundSize = "102%";
    }
  })

  photoSelectors[i].addEventListener("mouseout", (evt) =>
  {
    let titleInt = parseInt(evt.target.title);

    if (photoIndex !== (titleInt + photoSection * 7))
    {
      photoSelectors[i].style.outline = "2px solid #FFFDF8";
      photoSelectors[i].style.backgroundSize = "100%";
    }
  })
}
