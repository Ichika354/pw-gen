let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "1234567890"
    const simbol = "~`!@#$%^&*()_+{}[]:;|\<,>.?/'"

    const data = lowerAlphabet + upperAlphabet + numeric + simbol
    let generator = '';
    for (let index = 0 ; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    } return generator
}


function getPassword() {
    const newPasswod = generatePassword(passwordLength.value)
    password.value = newPasswod
    setTimeout(() => {
        alert('Password has been generated')

    },700)
}

function savePassword() {
    localStorage.setItem = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${localStorage.setItem}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout (() => {
        alert('Password has been saved in your notepad')
    }, 700)
}