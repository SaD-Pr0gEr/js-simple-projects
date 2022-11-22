let clickers = document.getElementsByClassName("clicker");
for (let clicker = 0; clicker < clickers.length; clicker++) {
    let removeBtn = clickers[clicker].querySelector(".clicker__button_remove")
    let addBtn = clickers[clicker].querySelector(".clicker__button_add")
    let clickerCountObj = clickers[clicker].querySelector(".clicker__click_count")
    let clickerCount = parseInt(clickerCountObj.innerHTML)
    removeBtn.addEventListener("click", () => {
        if (clickerCount > 0) {
            --clickerCount
        }
        clickerCountObj.innerHTML = clickerCount
    })
    addBtn.addEventListener("click", () => {
        clickerCount++
        clickerCountObj.innerHTML = clickerCount
        if (clickerCount === 10) {
            alert("Cool! You won 1000$")
        }
    })
}
