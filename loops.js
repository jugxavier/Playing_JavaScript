// "["moto", 101, {name:"Juliana", age:"60"}]"
let arr = ["carro", 18, {name:"Ju", age:17}]
arr[0]="moto";
arr[1]=101;
arr[2].name="Juliana";
arr[2].age=60;

function getMoto(array){

  let result=[]
  for(let i=0;i<array.length;i=i+1){
    if(array[i]==101){
      console.log("ello")
      
    }
    else{
      console.log(array[i])
    }
    
  }

}
getMoto(arr)


let person ={
  name:"ju",
  age:17
}

person.name="aajsajshj"
// console.log(arr)