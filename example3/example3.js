// 2.2 JS DOM Functions

// 아래 코드는 html 문서를 document로 제공한다.
// console.log(document);

// document는 많은 .을 가지고 있는데 우리는 id에 접근하려한다
const title = document.getElementById('title');

//이하 아래의 title을 DOM이라 한다
console.log(title);

title.innerHTML = 'Hi! From JS';
