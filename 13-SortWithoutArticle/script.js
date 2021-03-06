  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  
  // console.log('Input')
  // console.table(bands)
  
  // first attempt
  // const articles = ['the', 'a', 'an']
  // const result = [...bands].sort((a, b) => {
  //   const aArticle = a.split(' ')[0].toLowerCase()
  //   const bArticle = b.split(' ')[0].toLowerCase()

  //   const isArticleA = articles.some(article => article === aArticle)
  //   const isArticleB = articles.some(article => article === bArticle)

  //   let aSortingWord = ''
  //   let bSortingWord = ''

  //   isArticleA 
  //     ? aSortingWord = a.split(' ')[1].toLowerCase()
  //     : aSortingWord = aArticle

  //   isArticleB 
  //     ? bSortingWord = b.split(' ')[1].toLowerCase()
  //     : bSortingWord = bArticle

  //   if(aSortingWord < bSortingWord) return -1;
  //   if(aSortingWord > bSortingWord) return 1;
  //     return 0;
  // })

  // second attempt
  function removeArticle(word) {
    const articlesRegExp = /^(the |a |an )/i
    return word.replace(articlesRegExp, '').trim()
  }

  const result = [...bands].sort((a, b) => {
    if(removeArticle(a) < removeArticle(b)) return -1;
    if(removeArticle(a) > removeArticle(b)) return 1;
    return 0;
  })

  console.log('Output')
  console.table(result)
