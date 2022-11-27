function toImgURL(str) {
    return imgSite + str;
  }

  function camp() {
    return camps[campIndex];
  }

  function isEng() {
    return true;
  }

  function getImgSource(name, imgExtension){
    return "images/" + camp().locationEN + "/" + name + "." + imgExtension;
  }

  function fillWhite(id) {
    document.getElementById(id + "_path").style.fill = "#FFFDF8";
  }

  function fillOrange(id) {
    document.getElementById(id + "_path").style.fill = "#FCAD1D";
  }

  function fillBlack(id) {
    document.getElementById(id + "_path").style.fill = "#111111";
  }

  function scrollToCamps()
  {
    let elDistanceToTop = Math.round(window.pageYOffset + camps_select_div.getBoundingClientRect().top);
    if (isVertical)
      window.scrollTo(0, elDistanceToTop - (window.innerHeight / 31));
    else
      window.scrollTo(0, elDistanceToTop - 52);
  }

  function scrollToElement(id)
  {
    const elDistanceToTop = Math.round(window.pageYOffset + document.getElementById(id).getBoundingClientRect().top);
    window.scrollTo(0, elDistanceToTop);
  }

  function scrollToBottom()
  {
    const elDistanceToTop = Math.round(window.pageYOffset + section_3.getBoundingClientRect().bottom);
    window.scrollTo(0, elDistanceToTop);
  }

  function hasTouch()
  {
    return 'ontouchstart' in document.documentElement
          || navigator.maxTouchPoints > 0
          || navigator.msMaxTouchPoints > 0;
  }

  function clWidth() {
    return document.documentElement.clientWidth;
  }