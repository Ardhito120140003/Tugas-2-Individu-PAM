//Contoh Immediately Invoked Function Expression

//contoh 1
(function () {
    console.log('Hello Brachio');
  })();

//contoh 2
function sayHi() {
    console.log('Hi Brachio');
  }
  // kita bisa memanggil function di atas dengan
  window.sayHi;

//contoh 3
let word = 'Hi Brachio';
console.log(window.word); // 'Hi Brachio'