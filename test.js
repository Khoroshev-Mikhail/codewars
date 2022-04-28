function alexMistakes(numberOfKata, timeLimit, sum = 0, count = 0){
    sum += count * 5 + count * 6
    if(sum >= timeLimit - numberOfKata * 6 ){
        return count
    }
    return alexMistakes(numberOfKata, timeLimit, sum, count + 1)
}

console.log(alexMistakes(10, 120)) //3
console.log(alexMistakes(11, 120)) //3
console.log(alexMistakes(3, 45)) //2
console.log(alexMistakes(8, 120)) //3
console.log(alexMistakes(6, 60)) //2
console.log(alexMistakes(9, 180)) //4

/*
Одна ката 6 минут
Одна ошибка 5 минут
Каждый раз время ошибки увеличивается * 2

Общее время ошибок

*/