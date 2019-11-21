<template>
  <div>
    <h2>Login Success</h2>
    <p>
      Hi, <strong>{{ user.account }}</strong> !
    </p>
  </div>
</template>

<script>
export default {
  created() {
    if (!this.user.account) {
      this.$router.push("login");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
