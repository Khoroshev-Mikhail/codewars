function autocomplete(input, dictionary){
  input = input.replace(/[\W\d\s]/gi, '')
  const result = dictionary.filter(el => input.test(el))
  return result.length <= 5 ? result : result.slice(0, 5)
}

console.log(autocomplete('ai', ['airplane','airport','apple','ball', 'ais']))

/*
Expected: '[\'airplane\', \'apple\', \'air\', \'avenue\', \'airport\']', 
instead got: '[\'airplane\', \'apple\', \'air\', \'avenue\', \'airport\', \'adamantium\', \'awkwardness\', \'awesome\', \'amazing\']'
*/