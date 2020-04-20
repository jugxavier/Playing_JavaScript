function getNumber(number){
  let array = [];
  
    for(let i = 0; i<10; i = i + 1){
        let test = Math.floor(Math.random()*4+1)
       array.push(test)
      
    }
    let test = 1
  console.log("ummmmm", test)
  return array;
}
console.log(getNumber())