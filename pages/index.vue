<template>
  <div class="container">    
    <div v-if="!$store.state.authUser">
      <p><a href="/auth/strava">Log in with Strava</a></p>
    </div>
    <div v-else>
      <p><a href="/logout">Log out</a></p>
    </div>
    <h1>Please login to acess the <nuxt-link to="/user">user</nuxt-link> page</h1>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.container {
  padding: 100px;
}
</style>
