let drums = document.getElementsByClassName("drum")
speedList = [25, 30, 35, 40, 45, 50]
for (let drum = 0; drum < drums.length; drum++) {
    drums[drum].addEventListener('click', (element) => {
        element.target.style.transform = `rotate(${
            speedList[Math.floor(Math.random() * speedList.length)]
        }rad)`
        return false
    })
}
