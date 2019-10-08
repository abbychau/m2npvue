<template>
  <a-popover placement="topLeft">
    <template slot="content"  v-auto-link>
      {{ $store.state.users[this.$props.userId].description }}
    </template>
    <span slot="title">{{ $store.state.users[this.$props.userId].username }}</span>
    <span :style="{color:'#777'}">~{{ $store.state.users[this.$props.userId].username }}</span>
  </a-popover>
</template>

<script>
export default {
  name: 'Username',
  props: ['userId']
}
</script>
