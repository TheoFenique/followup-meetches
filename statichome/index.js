const hiwImages = [...document.querySelectorAll(".howitworks__slider img")]
const hiwButton = [...document.querySelectorAll("button.principle")]
const hiwText = [...document.querySelectorAll("p.principle")]
const hiwContent = {
    hiwImages,
    hiwButton,
    hiwText
}


console.log(hiwContent)

let hiwSlider = (elements) => {
    elements.hiwButton.map((v, i, a) => {
        v.addEventListener("click", (_e) => {
            elements.hiwButton.map((v, i, a) => { v.classList.remove("active") })
            elements.hiwText.map((v, i, a) => { v.classList.remove("active") })
            elements.hiwImages.map((v, i, a) => { v.classList.remove("active") })
            v.classList.add("active")
            hiwText[i].classList.add("active")
            hiwImages[i].classList.add("active")
        })
    })
}
hiwSlider(hiwContent)