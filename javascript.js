let removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing'); 
}
let playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`a[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

let playThis = (obj)=>{
  const audioz = document.querySelector(`audio[data-key="${obj.getAttribute('data-key')}"]`);
  const keyz = document.querySelector(`a[data-key="${obj.getAttribute('data-key')}"]`);
  if (!audioz) return;
  keyz.classList.add('playing');
  audioz.currentTime = 0;
  audioz.play(); 
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.onclick = function(e) {
  if (!e.target.localName == 'a' || 'kbd' || 'span') return 
    else {
      clickFunction();
    }
  }