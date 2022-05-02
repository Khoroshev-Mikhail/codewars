const Folder =require("./folder");

const f = Folder([
  "a",
  "b",
  Folder([
    "c",
    "d",
    Folder([]),
    Folder([
      "x",
    ]),
  ]),
  Folder([
    "z",
    "p",
  ]),
  "e",
]);

// f.size((result) => {
//   console.log("size", result);
// });

// f.read(1, (result) => {
//   console.log("read", result);
// });

// https://learn.javascript.ru/async
// 1-4 темы

//Четверг в 17:30
//ДЗ: Собрать в правильном порядке
function allFiles(folder, cb) {
    let result = []
    let count = 0;
    folder.size(el => {

        if(el === 0){
            cb(result)
        }

        for(let i = 0; i < el; i++){

            folder.read(i, (file) => {
                if(file instanceof Folder){
                    allFiles(file, (underEl) => {
                        count++
                        result.push(...underEl)
                        if(count === el){
                            cb(result)
                        }
                    })
                }else{
                    count++
                    result.push(file) 
                    if(count === el){
                        cb(result)
                    }   
                }       
            })
            
        }
    })
}


allFiles(f, result => {
  console.log("result", result); // ["a", "b", "c", "d", "e", "z", "x", "p"]
})