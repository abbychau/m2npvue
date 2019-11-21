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
        <fb-signin-button
          :params="fbSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError"
          >Sign in with Facebook</fb-signin-button
        >
      </div>
    </div>
  </div>
</template>

<script>
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
    onSignInSuccess(response) {
      console.log(response);
      // eslint-disable-next-line no-undef
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
        console.log(JSON.stringify(dude));
      });
    },
    onSignInError(error) {
      console.log("OH NOES", error);
    }
  },
  components: {
    // VFacebookLogin
  }
};
</script>
<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
