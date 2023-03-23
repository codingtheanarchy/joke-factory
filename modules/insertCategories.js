export default function insertCategories(jokeInfo) {
const figuresBox = document.querySelector("#figures-box") 
  // 1. We need to display the supported categories
  jokeInfo.categories.forEach(function (element) {
    if (element === 'Any') {
      return null
    }
    console.log(element)
    // create a figure element
    const figure = document.createElement('figure')
    // create 3 children elements, which will be contained in figure
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const div = document.createElement('div')

    // Add atributes and/or content to the children
    img.src = `./images/categories/${element}.png`
    h3.textContent = `${element}`

    // Insert the 3 children elements into figure
    figure.insertAdjacentElement('beforeend', img)
    figure.insertAdjacentElement('beforeend', h3)
    figure.insertAdjacentElement('beforeend', div)

    // Insert the figure into the #figures-box
    figuresBox.insertAdjacentElement('beforeend', figure)
  })
}
