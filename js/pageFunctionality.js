const xhttp = new XMLHttpRequest();

addEventListener("hashchange", (evt) => {window.location.reload(true);})

xhttp.onload = function()
{
  const result = this.responseText.split(/\r?\n/);
  const numOfPages = Math.ceil(result.length / 24)
  const pageNavDiv = document.getElementById("page_nav_div1");
  const nextArrow = document.querySelector(".next_div");
  const quotesDiv = document.getElementById("quotes_div")
  let numOfImages = 24;
  let currentPage;

  if (location.hash)
    currentPage = parseInt(location.hash.slice(1));
  else
    currentPage = 1;

  if (currentPage == numOfPages)
    numOfImages = result.length - 24 * (currentPage - 1);


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
  for (let i = 1; i <= numOfImages; i++)
  {
    let img = document.createElement("img")
    img.loading = "lazy";
    img.src = result[(currentPage - 1) * 24 + i - 1];
    img.classList.add("quote_img", "col-xxl-3", "col-lg-4", "col-sm-6")

    quotesDiv.appendChild(img);
  }


  let e = document.querySelector(".next_div")
  let r = document.querySelector(".prev_div")
  
  if (currentPage == 1)
  {
    let q = document.querySelector(".prev_txt");
    let w = document.querySelector(".prev_arrow_path");
    q.style.color = "#888888";
    w.style.fill = "#888888";
  }
  else if (currentPage == 2)
    r.href = "";
  else
    r.href = "#" + (currentPage - 1)
  
  if (currentPage == numOfPages)
  {
    let z = document.querySelector(".next_txt")
    let x = document.querySelector(".next_arrow_path")
    z.style.color = "#888888";
    x.style.fill = "#888888";
  }
  else
    e.href = "#" + (currentPage + 1);

  // clone 
  var clone = pageNavDiv.cloneNode(true);
  clone.id = "page_nav_div2";
  quotesDiv.appendChild(clone);

  
}
xhttp.open("GET", "quote_links.txt");
xhttp.send();