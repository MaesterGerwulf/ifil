
addEventListener("hashchange", (evt) => {window.location.reload(true);})


function getCurrentPage()
{
  if (location.hash)
    return parseInt(location.hash.slice(1));
  else
    return 1;
}

function getNumOfImagesOnPage(currentPage, numOfPages, numOfImages, imgsPerPage)
{
  if (currentPage == numOfPages)
    return (numOfImages - imgsPerPage * (currentPage - 1));
  else
    return imgsPerPage;
}

const xhttp = new XMLHttpRequest();

xhttp.onload = function()
{
  let numOfImages = parseInt(this.responseText);
  const pageNavDiv = document.getElementById("page_nav_div1");
  const nextArrow = document.querySelector(".next_div");
  const quotesDiv = document.getElementById("quotes_div")
  const imgsPerPage = 12;
  const numOfPages = Math.ceil(numOfImages / imgsPerPage)
  let currentPage = getCurrentPage();
  let numOfImagesOnPage = getNumOfImagesOnPage(currentPage, numOfPages, numOfImages, imgsPerPage);


  // create page selectors
  for (let i = 1; i <= numOfPages; i++)
  {
    let pageNum = document.createElement("a");
    
    if (i > 1)
      pageNum.href = "#" + i;
    else
      pageNum.href = "";

    if (i == currentPage)
      pageNum.id = "current_page";

    pageNum.innerHTML = i;
    pageNum.classList.add("page_num");

    if (i == numOfPages)
      pageNum.classList.add("last_page");
    
    pageNavDiv.insertBefore(pageNum, nextArrow)
  }

  // create images
  for (let i = 0; i < numOfImagesOnPage; i++)
  {
    let img = document.createElement("img")
    let imgNum = (numOfImages - i - numOfImagesOnPage * (currentPage - 1));
    img.loading = "lazy";
    img.alt = "Liberty Quote";
    img.src = "images/quotes/" + imgNum + ".jpg";

    img.classList.add("quote_img", "col-xxl-3", "col-lg-4", "col-sm-6")

    quotesDiv.appendChild(img);
  }

  let nextDiv = document.querySelector(".next_div")
  let prevDiv = document.querySelector(".prev_div")
  
  if (currentPage == 1)
  {
    document.querySelector(".prev_txt").style.color = "#888888";
    document.querySelector(".prev_arrow_path").style.fill = "#888888";
  }
  else if (currentPage == 2)
    prevDiv.href = "";
  else
    prevDiv.href = "#" + (currentPage - 1)
  
  if (currentPage == numOfPages)
  {
    document.querySelector(".next_txt").style.color = "#888888";
    document.querySelector(".next_arrow_path").style.fill = "#888888";
  }
  else
    nextDiv.href = "#" + (currentPage + 1);

  // clone 
  var clone = pageNavDiv.cloneNode(true);
  clone.id = "page_nav_div2";
  quotesDiv.appendChild(clone);
}
xhttp.open("GET", "images/quotes/0.txt");
xhttp.send();