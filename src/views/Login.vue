<template>
  <div>
    <h2>Login</h2>
    <div>
      <div>
        <input
          type="text"
          id="account"
          placeholder="Account"
          v-model="user.account"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div>
        <button @click="login">Login</button>
      </div>
      <div>
        <button
          :params="fbSignInParams"
          @success="onFbSignInSuccess"
          @error="onFbSignInError"
          style="background:blue; color:white"
          @click="goFbLoginLink"
        >
          Sign in with Facebook
        </button>
        <button
          :params="ghSignInParams"
          @success="onGhSignInSuccess"
          @error="onGhSignInError"
          style="background:black; color:white"
        >
          Sign in with Github
        </button>
        <button
          :params="ggSignInParams"
          @success="onGgSignInSuccess"
          @error="onGgSignInError"
          style="background:red; color:white"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        account: "",
        password: ""
      },
      fbSignInParams: {
        scope: "email,user_likes",
        return_scopes: true
      },
      ggSignInParams: {
        scope: "email,user_likes",
        return_scopes: true
      },
      ghSignInParams: {
        scope: "email,user_likes",
        return_scopes: true
      }
    };
  },
  methods: {
    login() {
      this.$cookies.set("token", "asdfsadf");
      this.$store.commit({
        type: "setUserData",
        userData: this.user
      });
      this.$router.push("/");
    },
    goFbLoginLink(){
      axios.get("https://api.m2np.com/oauth/fb_login_url").then(res => {
        //console.log(res);
        window.location.href = res.data.url;
      });
    },
    onFbSignInSuccess(response) {
      console.log(response);
      // eslint-disable-next-line no-undef
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
        console.log(JSON.stringify(dude));
      });
    },
    onFbSignInError(error) {
      console.log("OH NOES", error);
    },

    onGhSignInSuccess(response) {
      console.log(response);
      // eslint-disable-next-line no-undef
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
        console.log(JSON.stringify(dude));
      });
    },
    onGhSignInError(error) {
      console.log("OH NOES", error);
    },

    onGgSignInSuccess(response) {
      console.log(response);
      // eslint-disable-next-line no-undef
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
        console.log(JSON.stringify(dude));
      });
    },
    onGgSignInError(error) {
      console.log("OH NOES", error);
    }
  },
  components: {
    // VFacebookLogin
  }
};
</script>
<style scoped>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
