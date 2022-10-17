function cleanString(s, stopwords, minLenght){
    return s.split(' ').filter(e => e.length >= minLenght).filter(e => stopwords.indexOf(e) === -1).join(' ')
}

console.log(cleanString('the cat in a hat has a bat', ['the','in'], 2))