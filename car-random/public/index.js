const url = "https://www.kia.com/"

const carUrl = [
  "/content/dam/kwp/kr/ko/vehicles/represent/krtm138/ray-ev_q_eu3.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krsg078/niro-ev_q_swp.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krdp079/niro-plus_q_m7g.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krcv177/ev6_q_glb.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krcv173/ev6-gt_q_klm.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krmv107/ev9_q_ism.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krb1167/bongo3-ev_q_ud.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krb1081/bongo3-ev-frozen-s_q_ud.png",
  "/content/dam/kwp/kr/ko/vehicles/represent/krb1084/bongo3-ev-power_q_ud.png"
]

const names = [
  "레이 EV",
  "니로 EV",
  "니로 플러스",
  "EV6",
  "EV6 GT",
  "EV9",
  "봉고Ⅲ EV",
  "봉고III EV 탑차/윙바디",
  "봉고III EV 파워게이트"
]

const root = document.getElementById('root')
const h1 = document.createElement('h1')
const button = document.getElementById('button')
const img = new Image(300)
root.appendChild(img)
root.appendChild(h1)

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function kia(carurl, names) {
  const random = getRandomInt(0, 9)
  for(let i = 0; i < 9; i++) {
    if(i === random) {
      img.src = url + carurl[i]
      h1.textContent = names[i]
    }
  }
}

button.addEventListener('click', function() {
  kia(carUrl, names)
})