console.log('----------------------------Task:521 "File Finder"----------------------------')
let files = {
  'one': {
    'one2': {}
  },
  'two': {
    'two2': {
      'funnyjoke.txt': 'lol i pranked you!!!'
    }
  },
  'three': {}
};
//throw new Error('No files!');
// New folder (1)/New folder/funnyjoke.txt
function search(files, path = []) {
  if (typeof files === 'string')
    return path.join('/')
  for(let folder in files){
    try {
      return search(files[folder], [...path, folder]);
    }
    catch(e) {}
  }
  throw new Error('No files!');
}
console.log(search(files))

















