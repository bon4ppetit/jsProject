function changeColorButton(color) {
    document.body.style.backgroundColor = color
    historyColors(color)
}
function changeColorInput() {
    color = enter.value
    document.body.style.backgroundColor = color
    historyColors(color)
}
function cahngeColorMenu(color) {
    document.body.style.backgroundColor = color
    historyColors(color)
}


function historyColors(color) {
    let newElement = document.createElement('div')
    newElement.style.backgroundColor = color
    historyContent.appendChild(newElement, historyContent)
    newElement.title = color
    newElement.id = 'historyElement'
    style = window.getComputedStyle(newElement);
    styleColorRgb = style.backgroundColor

    var a = styleColorRgb.split("(")[1].split(")")[0];
    a = a.split(",");
    var b = a.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    b = "#"+b.join("");

    console.log(b);
    newElement.setAttribute('onclick', `changeColorButton('${b}')`)
}
function clearHistory() {
    historyContent.innerText = ''
    
}