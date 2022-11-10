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
  <div class="header">
    <ul class="header-button-left">
      <li>{{userName}} 님</li>
    </ul>
    <img src="./assets/logo.png" class="logo">
    <ul class="header-button-rigth">
      <li @click="loginSpace = !loginSpace">{{loginState}}</li>
    </ul>
  </div>
  
  <div class="sample-box"></div>
  <div class="sample-box"></div>
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  

</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import app from './firebase'

const auth = getAuth();
const provider = new GoogleAuthProvider();


export default {
  name: 'App',
  data(){
    return {
      loginSpace: false,
      loginState: 'Login',
      userName: '방문자'
    }
  },
  created() {
      app;
  },
  methods: {
    loginWithGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token)
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
}
body {
  margin: 0;
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
  top: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  color: skyblue;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
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
