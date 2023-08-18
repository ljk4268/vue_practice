<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";
import PostForm from "@/components/posts/PostForm.vue";
import { useAxios } from "@/composables/useAxios.js";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const { data: form, error, loading } = useAxios(`/posts/${id}`);

// const fetchPost = async () => {
//   try {
//     loading.value = true;
//     const { data } = await getPostById(id);
//     setForm(data);
//   } catch (err) {
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// };
// const setForm = ({ title, content }) => {
//   form.value.title = title;
//   form.value.content = content;
// };
// fetchPost();

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    router.push({ name: "PostDetail", params: { id } });
  } catch (err) {
    console.log(err);
  }
};
const goDetailPage = () => router.push({ name: "PostDetail", params: { id } });
</script>

<style lang="scss" scoped></style>
