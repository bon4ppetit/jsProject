function passView() {
    if (password.type == "text") {
        password.type = 'password'
    }
    else {
        password.type = 'text'
    }
}
function clearInput() {
    inputOne.value = ''
}
function clearInput2() {
    password.value = ''
}
function valuePass() {
    if (password.value.length > 8) {
        button.removeAttribute('disabled')
    }
    else {
        button.setAttribute('disabled', 'disabled')
    }
}
