// 코드가 작성되는 순서대로 작동되는 것을  = 동기방식 
// 처리가 지연되는 로직이 있다면 처리가 지연되는 로직을 먼저 처리되게끔 만들어주는게 비동기방식

// function a(callback){
//   setTimeout(()=>{
//     console.log('A')
//     callback()
//   },1000)
// }

function a(){
  // Promise: 약속의 객체!
  return new Promise(function (resolve){
    setTimeout(function(){
      console.log('A')
      resolve('Hello A!')
    },1000)
  })
}
function b(){
  // Promise: 약속의 객체!
  return new Promise(function (resolve){
    setTimeout(function(){
      console.log('B')
      resolve('Hello B!')
    },1000)
  })
}
function c(){
  // Promise: 약속의 객체!
  return new Promise(function (resolve){
    setTimeout(function(){
      console.log('C')
      resolve('Hello C!')
    },1000)
  })
}
function d(){
  // Promise: 약속의 객체!
  return new Promise(function (resolve){
    setTimeout(function(){
      console.log('D')
      resolve('Hello D!')
    },1000)
  })
}

// 실행순서를 보장해주는 비동기처리방식
async function test(){
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  console.log('done!')
  console.log(h1,h2,h3,h4)
}

test()

