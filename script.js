// 1. Get categories and blacklist flags
const jokeApiInfo = fetch("https://v2.jokeapi.dev/info")

// Handle the fufilled promise, whos value will be a Response object 
jokeApiInfo
  .then(function(response){
    // Reads the bodys
    return response.json()
  })
  .then(function(jokeInfo){
    // the joke information 
    
    // Store categories, blacklist flags, and languages
    const { categories, flags, safeJokes:languageObjects } = jokeInfo.jokes 
  

    // language table
    const languageTable = {
      en: "English",
      cs: "Czech",
      de: "German",
      es: "Spanish",
      fr: "French",
      pt: "Portuguese"
    }

    // Contains the supported languages 
    const languages = languageObjects.map(function(element, index){
        return languageTable[element.lang]
    })

    
  }) 


