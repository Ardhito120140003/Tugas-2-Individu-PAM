//Contoh Immediately Invoked Function Expression

//contoh 1
(function () {
    console.log('Hello Bang');
})();

//contoh 2
function sayHi() {
    console.log('Hi Bang');
}
// kita bisa memanggil function di atas dengan
window.sayHi;

//contoh 3
let word = 'Hi Bang';
console.log(window.word); // 'Hi Bang'