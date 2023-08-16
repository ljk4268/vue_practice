<template>
  <div class="about">
    <div class="photo">
      <Loader 
        v-if="imageLoading" 
        absolute />
      <img 
        :src="image" 
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '../components/Loader.vue'

export default {
  components: {
    Loader
  },
  data(){
    return {
      imageLoading: true
    }
  },
  computed: {
    // vuex에서 mapState라는 helper를 가지고 와서 
    // 첫번째 인수로는 about이라는 모듈의 이름을 명시해주고, 
    // 두번쨰 인수로는 배열데이터를 추가해서, 가지고 올 상태들의 이름을 명시해준다.
    // 각각의 상태들이 객체데이터로 반환이 될 것이고, 전개연산자(...)를 통해서 하나씩 꺼내준다.
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    async init(){
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';

  .about {
    text-align: center;
    .photo {
      width: 250px;
      height: 250px;
      margin: 40px auto 20px;
      padding: 30px;
      border: 10px solid $gray-300;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      position: relative;
      img {
        width: 100%;
      }
      .name {
        font-size: 40px;
        font-family: "Oswald", sans-serif;
        margin-bottom: 20px;
      }
    }
  }
</style>