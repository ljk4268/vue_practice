<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message" />
    <!-- @submit.prevent : 페이지가 다시 로드되지 않는다. -->
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          목록
        </button>
        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden" role="status">Loading...</span>
          </template>
          <template v-else> 저장 </template>
        </button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/api/posts.js";
import PostForm from "@/components/posts/PostForm.vue";
import { useAxios } from "@/composables/useAxios.js";

const router = useRouter();

const form = ref({
  title: null,
  content: null,
});
const { error, loading, execute } = useAxios(
  "/posts",
  {
    method: "post",
  },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: "PostList" });
    },
    onError: () => {
      alert("실패함");
    },
  }
);

const save = async () => {
  execute({ ...form.value, createdAt: Date.now() });
  // 구조분해할당할때 전체괄호를 사용하면 JavaScript 엔진이 코드를 해석할 때 구조 분해 할당 구문을 더 명확하게 인식하고 올바르게 처리할 수 있다고 한다.
};
// const save = async () => {
//   try {
//     loading.value = true;
//     const data = { ...form.value, createdAt: Date.now() };
//     await createPost(data);
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//     router.push({ name: "PostList" });
//   }
// };
const goListPage = () => router.push({ name: "PostList" });
</script>

<style lang="scss" scoped></style>
