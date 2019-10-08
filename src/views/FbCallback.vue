<template>
  <div>
    <h2>Login Success</h2>
    <p>Hi,
      <strong>{{user.account}}</strong> !</p>
  </div>
</template>

<script>
export default {
  created () {

  },
  computed: {
    user () {
      return { account: 'test' }// this.$store.state.user
    }
  }
}
</script>
