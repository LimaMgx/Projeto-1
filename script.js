function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se nao tiver light mode, manter a imagem original
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
  const alt = document.querySelector("#profile alt")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Mayk brito sorrindo olhando pra camera usando olucos escuros no fundo azul e com jaqueta")
  } else {
    img.setAttribute("alt","Mayk brito sorrindo pra camera no fundo amarelo e camisa preta")
  }
}
