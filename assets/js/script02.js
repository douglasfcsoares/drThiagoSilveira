const controlC = document.querySelectorAll(".controlComments")
let currentItemC = 0
const itemsC = document.querySelectorAll(".commentsItem")
const maxItemsC = itemsC.length

controlC.forEach(controlComments => {
  controlComments.addEventListener("click", e => {
    isLeftControl = e.target.classList.contains("leftC")

    if (isLeftControl) {
      currentItemC -= 1
    } else {
      currentItemC += 1
    }

    if (currentItemC >= maxItemsC) {
      currentItemC = 0
    }

    if (currentItemC < 0) {
      currentItemC = maxItemsC - 1
    }

    itemsC.forEach(itemC => itemC.classList.remove("currentItemC"))

    itemsC[currentItemC].scrollIntoView({
      inline: "center"
    })

    itemsC[currentItemC].classList.add("currentItemC")
  })
})
