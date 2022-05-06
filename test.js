function snap(flashPile, turtlePile, whoseMove = 'flash', middlePile = [], snaps = 0) {
  if(turtlePile.length === 0){
    return snaps
  }
  if(middlePile.length >= 2 && middlePile[middlePile.length - 1] === middlePile[middlePile.length - 2]){
    snaps++
    flashPile.concat(middlePile)
    return snap(flashPile, turtlePile, whoseMove, [], snaps)
  }
  if(whoseMove === 'flash'){
    middlePile.push(flashPile[0])
    return snap(flashPile.slice(1), turtlePile, 'turtle', middlePile, snaps)
  } else {
    //console.log(middlePile)
    console.log(turtlePile[0])
    middlePile.push(turtlePile[0])
    return snap(flashPile, turtlePile.slice(1), 'flash', middlePile, snaps)
  }
}

console.log(snap([ '9','5','4','4','A','8','4','3','K','J','J','Q','Q','9','8','5','J','6','7','6','A','J','9','K','3','8' ], [ 'K','10','3','4','5','Q','2','7','A','A','Q','10','6','5','K','6','7','10','2','9','2','10','7','8','2','3' ]))