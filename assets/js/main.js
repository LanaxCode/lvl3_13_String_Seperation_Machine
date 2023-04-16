const inputZeichenkette = document.querySelector('#inputZeichenkette')
const inputWord = document.querySelector('#inputWord')

const radioButton = document.querySelector('input[type="radio"]')
const buttonDavor = document.querySelector('#davor')
const buttonDanach = document.querySelector('#danach')
const textDavor = document.querySelector('#textVorne')
const textDanach = document.querySelector('#textHinten')

const stringCut = () => {
    // console.log(inputZeichenkette.value)
    // console.log(inputWord.value)
    // console.log(radioButton.checked)

    let text = inputZeichenkette.value;
    let word = inputWord.value

    textDavor.innerHTML = ""

    if (buttonDavor.checked) {
        console.log(text.slice(0, text.indexOf(word)))
        textDavor.innerHTML = text.slice(0, text.indexOf(word))
        textDanach.innerHTML = text.slice(text.indexOf(word))
    } else {
        console.log(text.slice(text.indexOf(word)))
        textDavor.innerHTML = text.slice(0, text.indexOf(word)) + word
        // textDanach.innerHTML = text.slice(word.length + text.indexOf(word))
        textDanach.innerHTML = text.slice()
    }

}
