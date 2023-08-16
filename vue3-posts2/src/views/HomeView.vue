<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <p>컴포넌트 이름은: {{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$person.name);
    this.$person.say()
  },
};
</script>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import AppGrid from "@/components/AppGrid.vue";
import AppCard from "../components/AppCard.vue";
// Person이라는 객체는 모든 자식 컴포넌트 인스턴스에서 사용 가능하다.
// 컴포너트 인스턴스는 setup라이프사이클 이후에 생성이 된다.
// 그래서 setup훅에서는 사용이 불가하다.

const router = useRouter();
const goAboutPage = () => {
  router.push("/about");
};

const items = ref[("사과", "딸기", "포도", "바나나")];
</script>

<style lang="scss" scoped></style>
