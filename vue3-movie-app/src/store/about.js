// 개발자 정보 사용자 정보에 대한 데이터 
export default {
  // store에 하나의 모듈일 될 수 있게 해주는 속성
  namespaced: true,
  // 참조형 데이터인 객체. 데이터의 불변성을 유지하려면 함수로 만들어서 데이터 반환
  state: () => ({
    name: 'HEROPY',
    email: 'thesecon@gmail.com',
    blog: 'https://heropy.blog',
    phone: '+82-10-1234-5678',
    image: 'https://heropy.blog/css/images/logo.png'
  })
}