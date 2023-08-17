<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <p>컴포넌트 이름은: {{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <hr class="my-4" />
    <!-- 컴포넌트 인스턴스 속성을 템플릿안에서 사용할때 예시 -->
  </div>
</template>

<script>
export default {
  // Person이라는 객체는 모든 자식 컴포넌트 인스턴스에서 사용 가능하다.
  // 컴포너트 인스턴스는 setup라이프사이클 이후에 생성이 된다.
  // 그래서 setup훅에서는 사용이 불가하다.
  created() {
    // console.log(this.$person.name);
    // this.$person.say()
  },
};
</script>

<script setup>
import { useRouter } from "vue-router";
import { inject, ref } from "vue";

const router = useRouter();
const goAboutPage = () => {
  router.push("/about");
};

</script>

<style lang="scss" scoped></style>
