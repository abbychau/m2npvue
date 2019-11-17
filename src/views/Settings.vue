<template>
    <button @click="logout">Logout</button>
</template>
<script>
export default {
    methods:{
        logout(){
            this.$cookies.remove('token')
            this.$router.push('/')
        }
    }
}
</script>