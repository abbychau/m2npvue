<template>
  <div>
    <h2>Messenger</h2>
    <p>
      Hi, <strong>{{ user.account }}</strong> !
    </p>
    <p>
      Here are your messages:
      <br />
<ol id="example-1">
  <li v-for="item in items" v-bind:key="item.id">
    {{ item.message }}
  </li>
</ol>
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [{ id: 1, message: "Foo" }, { id: 2, message: "Bar" }]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
