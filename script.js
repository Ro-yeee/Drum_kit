window.addEventListener('keydown',(e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`)
    const key = document.querySelector(`.key[data-key=${e.code}]`)
    if(!audio || !key) return
    audio.currentTime = 0
    audio.play()
    console.log(key)
    key.classList.add('playing')
})
window.addEventListener('keyup',(e) => {
    const key = document.querySelector(`.key[data-key=${e.code}]`)
    if(!key) return
    key.classList.remove('playing')
})