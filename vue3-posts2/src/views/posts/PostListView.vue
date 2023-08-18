<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    ></PostFilter>
    <hr class="my-4" />

    <AppLoading v-if="loading" />

    <AppError v-else-if="error" :message="error.message" />
    <template v-else>
      <AppGrid :items="posts">
        <template v-slot="{ item }">
          <PostItem
            :title="item.title"
            :content="item.content"
            :createdAt="item.createdAt"
            @click="goPage(item.id)"
          ></PostItem>
        </template>
      </AppGrid>
      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="(page) => (params._page = page)"
      />
    </template>
    <hr class="my-5" />
    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetail :id="posts[0].id"></PostDetail>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetail from "@/views/posts/PostDetailView.vue";
import PostFilter from "../../components/posts/PostFilter.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAxios } from "@/composables/useAxios.js";

const router = useRouter();
// 페이징관련 데이터
const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _page: 1,
  _limit: 3,
  title_like: "",
});
const {
  response,
  data: posts,
  error,
  loading,
} = useAxios("/posts", { method: "get", params });
// 총 데이터 갯수
const totalCount = computed(() => response.value.headers["x-total-count"]);
// 총 페이지 갯수
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit)
);

const goPage = (id) => {
  // router.push(`/posts/${id}`);
  router.push({
    name: "PostDetail",
    params: { id },
  });
};
</script>

<style lang="scss" scoped></style>
