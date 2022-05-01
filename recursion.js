function maxMatch(sentence, word = sentence[0], arr = []){
    if(sentence.length === 0 || word === undefined){
        return arr
    }
    let hits = Array.from(VALID_WORDS).filter(el => el.slice(0, word.length) === word)
    let nextHits = []
    if(sentence.length > word.length){
        let nextWord = sentence.slice(0, word.length + 1)
        nextHits = Array.from(VALID_WORDS).filter(el => el.slice(0, nextWord.length) === nextWord)
    }

    if(hits.length >= 1 && nextHits.length === 0){    
        arr.push(word)
        return maxMatch(sentence.slice(word.length), sentence.slice(word.length)[0], arr)
    }  
    return maxMatch(sentence, sentence.slice(0, word.length + 1), arr)
}