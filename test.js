function delay(ms){
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve(ms), ms)
  })
}

delay(1000).then((x)=>console.log(`Выполнилось через ${x/1000} сек`))