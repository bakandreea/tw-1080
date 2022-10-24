function fdist(text) {
    const result = {}
    const words = text.split(' ')
    for(const elem of words){
        if (elem in result){
            result[elem]++
        }
        else {
            result[elem] = 1
        }
    }
    for (const word in result){
        result[word] /= words.length
    }
    return result
}

console.log(fdist('the quick brown fox jumps over the lazy dog'))