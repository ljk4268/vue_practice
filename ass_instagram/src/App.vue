<template>

<!-- SNS 로그인 창 -->
  <div class="black-bg" v-if="loginSpace">
    <div class="white-bg">
      <sapn class="btn_close" @click="loginSpace = !loginSpace">&times;</sapn>
      <h3>Google 계정으로 로그인</h3>
      <img 
        src="./assets/btn_google_signin_dark_normal_web.png" 
        class="google-login"
        @click="loginWithGoogle()"
      >
    </div>
  </div>

  <!-- mainPage -->
  <div class="header">
    <ul class="header-button-left">
      <li>{{userName}}</li>
    </ul>
    <img src="./assets/logo.png" class="logo">
    <ul class="header-button-rigth">
      <li @click="loginSpace = !loginSpace">{{loginState}}</li>
    </ul>
  </div>
  <Container 
    :posts="posts"
    :step="step"
    :uploadImgUrl="uploadImgUrl"
  />

  <div class="footer" >
    <ul class="footer-button-plus" v-if="step == 0">
        <input 
          type="file" 
          id="file" 
          class="inputfile"
          @change="upload"
        />
        <label for="file" class="input-plus">+</label>
    </ul>
    <ul class="footer-button-plus" v-if="step == 1 || step == 2">
        <input 
          id="file" 
          class="inputfile"
          @click="step++"
        />
        <label for="file" class="input-plus"> Next </label>
    </ul>
  </div>
  
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence  } from "firebase/auth";
import { app, db } from './firebase'
import { collection, getDocs } from "firebase/firestore"
import Container from './components/Container.vue'

const auth = getAuth();


export default {
  name: 'App',
  components: {
    Container
  },
  data(){
    return {
      loginSpace: false,
      loginState: 'Login',
      userName: '방문자',
      posts: [],
      step: 0,
      uploadImgUrl: '',
    }
  },
  created() {
      this.getPostData();
      app;
      let sessionStorage_userData = JSON.parse(sessionStorage.getItem("firebase:authUser:AIzaSyBzxc7HBE9sxvHNUqZeD-TCQ5y_52BQxk8:[DEFAULT]"))
      if(sessionStorage_userData != null){
        this.userName = sessionStorage_userData.displayName;
        this.loginState = 'Logout'
      }
      
  },
  updated() {
    if ( this.step == 1 || this.step == 2){
      this.userName = 'Cancel';
    }
  },
  methods: {
    loginWithGoogle() {
      setPersistence(auth, browserSessionPersistence)
      .then(()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token)
        console.log(user)
        this.userName = user.displayName;
        this.loginState = 'LogOut';
        this.loginSpace = !this.loginSpace; 
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorCode,errorMessage,email,credential)
        });
      })
    },
    async getPostData(){
      const querySnapshot = await getDocs(collection(db, "postmore"));
      querySnapshot.forEach((doc) => {
        this.posts.push(doc.data());
      });
    },
    upload(e){
      let file = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = () => {
        this.uploadImgUrl = reader.result;
      }
      this.step ++;
    },
  },
  
}


</script>

<style>
#app {
  box-sizing: border-box;
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
}
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
}
ul {
  margin: auto;
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  position: sticky;
  z-index: 1;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  color: skyblue;
  border-bottom: 1px solid #eee;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: #cddce3;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.inputfile{
  display: none;
}
.input-plus {
  font-size: 16px;
}
.input-plus, .header-button-left, .header-button-rigth {
  cursor: pointer;
}

.sample-box{
  width: 100%;
  height: 600px;
  background-color: bisque;
}

/* SNS 로그인 창 */
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
}
.white-bg {
  width: 85%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  text-align: center;
}
.google-login{
  width: 60%;
  cursor: pointer;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
}
.btn_close {
  display: block;
  text-align: end;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}



</style>
