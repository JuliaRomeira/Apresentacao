function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
}
// OU
// html.classList.toggle('light') 

//caso tenha uma foto para o modo light

// pegar a tag img
//const img = document.queryselector("#profile img")

//substituir a imagem 
//if(html.classList.contains('light')){
// } 

// se tiver light mode, adicionar a imagem light
// img.setAttribute("src", "./assests/avatar-light.png")
//} else {
// img.setAttribute("src", "./assets/avatar.png")
//}