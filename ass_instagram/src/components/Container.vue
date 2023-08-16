<template>
  <div>
    <div v-if="step == 0">
      <Post :post="posts[i]" v-for="post,i in posts" :key="i"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div class="image-background">
        <img 
        :class="`${userClickFilter} upload-image`" 
        :src="`${uploadImgUrl}`"/>
      </div>
      <div class="filters">
        <FilterBox
          :uploadImgUrl="uploadImgUrl"
          :filter="filter"
          v-for="filter in filters" :key="filter"
        ></FilterBox>
      </div>
    </div>
    

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="image-background">
        <img 
          :class="`${userClickFilter} upload-image`" 
          :src="`${uploadImgUrl}`"
        />
      </div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
    

    </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
  name: 'container',
  data(){
    return {
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon","earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark","lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      userClickFilter: '',
    }
  },
  mounted() {
    this.emitter.on('clickFilter', (filter)=>{
      this.userClickFilter = filter;
    });
  },
  components: {
    Post,
    FilterBox
  },
  props: {
    posts: Array,
    step: Number,
    uploadImgUrl: String,
  },
  methods: {
    publish(){
      let userPost = {
        name: "Kim Hyun",
        userImage: this.uploadImgUrl,
        postImage: this.uploadImgUrl,
        likes: 0,
        date: "May 15",
        liked: false,
        content: "내가입력한글",
        filter: "perpetua"
      };
    },
  },
}
</script>

<style>
.image-background {
  width: 100%;
  height: 70vh;
  background: black;
  display : flex;
  align-items : center;
}
img {
  display: block;
}
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
  
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filter-1:last-child {
  margin-right: 0; 
  
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>