<template>
  <div class="container">
    <h1>User</h1>
    <img :src="this.$store.state.authUser.image">
    <h4>{{ this.$store.state.authUser.firstname }}</h4>
    <h4>{{ this.$store.state.authUser.lastname }}</h4>
    <h4>{{ this.$store.state.authUser.sex }}</h4>
    <h4>{{ this.$store.state.authUser.id }}</h4>
    <p><nuxt-link to="/">Home</nuxt-link></p>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
