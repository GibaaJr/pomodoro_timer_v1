import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { buttonPause, buttonPlay, buttonSet, buttonStop, buttonSoundOff, 
    buttonSoundOn, minutesDisplay, secondsDisplay } from "./elements.js"




let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})

// events
buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})
buttonSoundOn.addEventListener('click', () => {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
})

buttonSet.addEventListener('click', () => {
   let newMinutes = controls.getMinutes()

   if (!newMinutes) {
    timer.reset()
    return
   }

   minutes = newMinutes
   timer.updateDisplay(minutes, 0)
   timer.updateMinutes(minutes)
})
