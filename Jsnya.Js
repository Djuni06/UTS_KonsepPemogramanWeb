let box = document.getElementById('box');
document.onmousemove = (event) => {
  box.style.left = event.clientX - box.clientWidth / 2 + 'px';
  box.style.top = event.clientY - box.clientHeight / 2 + 'px';
};

function random(number) {
  return Math.floor(Math.random() * number);
}
document.onclick = function () {
  BgAcak = 'rgb(' + random(155) + ',' + random(125) + ',' + random(255) + ')';
  box.style.background = BgAcak;
};
