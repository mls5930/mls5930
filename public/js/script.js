const red = document.querySelector(".red")

const btn = document.createElement("button")
btn.innerHTML = "버튼을 눌러주세요"

red.append(btn)
const button = (e) => {
    alert("버튼을 누르면 나오는 알렛 창을 수정하였습니다.")
} 

btn.addEventListener("click",button)

