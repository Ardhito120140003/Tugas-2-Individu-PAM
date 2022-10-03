//contoh First-class function

// 1. Assign ke dalam variable : 
let fn = function doSomething() {
    console.log('Hallo')
}
fn() // Hallo
  
// 2. Assign ke dalam object : 
let obj = { 
  doSomething : function doSomething()
  {
    console.log('Hallo')
  }
}
obj.doSomething() // Hallo

//3. Assign ke dalam array : 
let arr = []
arr.push(function doSomething() 
  {
    console.log('Hallo')     
  }
)
arr[0]() // Hallo