// 2.1 More Function fun

function sayHello(name, age) {
  // console.log(`Hello ${name} you are ${age} years old`);
  return `Hello ${name} you are ${age} years old`;
}

//sayHello('Nicolas', 15);

// 다음의 변수는 sayHello 함수의 return 값이다.
const greetNiclas = sayHello('Nicolas', 14);

// 이것은 출력이 되지 않음 (undefined) 이미 console.log로 출력이 끝난 상태 및 return 값이 없기 때문에/ 함수에서 console.log를 지우고 return을 해주면 출력 됨
// console.log(greetNiclas);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

// console.log(greetNiclas);
const plus = calculator.plus(5, 5);
console.log(plus);
