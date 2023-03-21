// This function will get the categories, blacklist flags, and languages
export default function getJokeInfo() {
  // 1. Get categories and blacklist flags
  const jokeApiInfo = fetch('https://v2.jokeapi.dev/info')

  // Handle the fufilled promise, whos value will be a Response object
  return jokeApiInfo
    .then(function (response) {
      // Reads the bodys
      return response.json()
    })
    .then(function (jokeInfo) {
      // the joke information
      // Store categories, blacklist flags, and languages
      const { categories, flags, safeJokes: languageObjects } = jokeInfo.jokes

      // language table
      const languageTable = {
        names: {
          en: 'English',
          cs: 'Czech',
          de: 'German',
          es: 'Spanish',
          fr: 'French',
          pt: 'Portuguese',
        },
        codes: {
          english: 'en',
          czech: 'cz',
          german: 'de',
          spanish: 'es',
          french: 'fr',
          portuguese: 'pt'
        }
      }


      return {
        categories,
        flags,
        languageTable
      }
    })
}
