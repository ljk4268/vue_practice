// app.component(): 전역 컴포넌트를 설치할 수 있다.
// app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가 가능
// app.directive 커스텀 디렉티브 가능
// app.provide 다양한 리소스를 자식컴포넌트에서 사용할 수 있게 한다.
// 전역적으로 기능이나 데이터 추가하기
export default {
  install(app, options) {
    const person = {
      name: '이자경',
      say() {
        alert('this.name')
      },
      ...options,
    }
    app.config.globalProperties.$person = person
    app.provide('person', person)
  },
}
