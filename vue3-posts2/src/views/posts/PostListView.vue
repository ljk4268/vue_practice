<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    ></PostFilter>
    <hr class="my-4" />
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
import { getPosts } from "@/api/posts";
import { ref, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";

const posts = ref([]);
const router = useRouter();
// 페이징관련 데이터
const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _page: 1,
  _limit: 3,
  title_like: "",
});
// 총 데이터 갯수
const totalCount = ref(0);
// 총 페이지 갯수
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit)
);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers["x-total-count"];
  } catch (err) {
    console.log(err);
  }
};
// fetchPosts();
// fetchPosts 메소드내에서 사용하고 있는 반응형 데이터가 변경되면 해당 콜백함수가 재실행된다.
// watchEffect는 watch와 다르게 초기 한 번 실행이 된다.
watchEffect(fetchPosts);
const goPage = (id) => {
  // router.push(`/posts/${id}`);
  router.push({
    name: "PostDetail",
    params: { id },
  });
};
</script>

<style lang="scss" scoped></style>
