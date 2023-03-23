import getJokeInfo from "./modules/jokeInfo.js"
import insertCategories from "./modules/insertCategories.js"

getJokeInfo()
  .then(insertCategories)


