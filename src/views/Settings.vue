<template>
  <div>
    <button @click="logout">Logout</button>
    Facebook Archive Import: <input type="file" />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$router.push("/");
    }
  }
};
</script>
