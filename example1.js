const nicoInfo = {
  name: 'Nico',
  age: 33,
  gender: 'Male',
  isHandsome: true,
};

// Object에 key값이 없으므로.. undefiend가 출력
// console.log(nicoInfo.favFood);

// 각 funcfion의 key값이 출력된다.
//console.log(nicoInfo, console);

// function sayHello() {
//   console.log('Hello!');
// }

// sayHello 함수 안에 있는 console.log()가 실행된다.
sayHello('Nicolas', 15);
// console Object 안에 있는 log라는 함수이다.
console.log('Hi');

/**
 * 왜 위의 있는 함수 sayHello("Nicolas")는 sayHello()와 동일하게 실행될까?
 * 해당 함수의 인자가 주어지지 않았기 때문
 */

// 함수의 argument 갯수만큼 함수의 파라미터의 갯수를 넣어줘야함
function sayHello(name, age) {
  console.log('Hello', name, ' you have ', age, ' years of age.');
}
