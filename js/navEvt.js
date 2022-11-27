camp_nav.addEventListener("click", () => scrollToCamps())
members_nav.addEventListener("click", () => scrollToElement("section_3"))


if (!hasTouch())
{
    ifil_icon_nav.addEventListener("mouseover", () => fillWhite("ifil_icon_nav"))
    ifil_icon_nav.addEventListener("mouseout", () => fillOrange("ifil_icon_nav"))
    
    camp_nav.addEventListener("mouseover", () => fillOrange("camp_nav"))
    camp_nav.addEventListener("mouseout", () => fillWhite("camp_nav"))
    
    members_nav.addEventListener("mouseover", () => fillOrange("members_nav"))
    members_nav.addEventListener("mouseout", () => fillWhite("members_nav"))
    
    quotes_icon_1.addEventListener("mouseover", () => fillWhite("quotes_icon_1"))
    quotes_icon_1.addEventListener("mouseout", () => fillOrange("quotes_icon_1"))
    
    quotes_icon_2.addEventListener("mouseover", () => fillWhite("quotes_icon_2"))
    quotes_icon_2.addEventListener("mouseout", () => fillOrange("quotes_icon_2"))
}
else
{
    ifil_icon_nav.addEventListener("touchstart", () => fillWhite("ifil_icon_nav"), {passive: true})
    ifil_icon_nav.addEventListener("mouseout", () => fillOrange("ifil_icon_nav"), {passive: true})

    camp_nav.addEventListener("touchstart", () => fillOrange("camp_nav"), {passive: true})
    camp_nav.addEventListener("touchend", () => fillWhite("camp_nav"), {passive: true})

    members_nav.addEventListener("touchstart", () => fillOrange("members_nav"), {passive: true})
    members_nav.addEventListener("touchend", () => fillWhite("members_nav"), {passive: true})

    quotes_icon_1.addEventListener("touchstart", () => fillWhite("quotes_icon_1"), {passive: true})
    quotes_icon_1.addEventListener("touchend", () => fillOrange("quotes_icon_1"), {passive: true})

    quotes_icon_2.addEventListener("touchstart", () => fillWhite("quotes_icon_2"), {passive: true})
    quotes_icon_2.addEventListener("touchend", () => fillOrange("quotes_icon_2"), {passive: true})
}