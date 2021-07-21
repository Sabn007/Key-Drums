
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    let key = document.querySelector(`.box[data-key="${e.keyCode}"]`)
   
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('border')
    window.addEventListener('keyup',function(e){
        key.classList.remove('border')
    })
})



