<template>
  <section class="container">
    <h2>
      error: {{ error.statusCode }}
    </h2>
    <nuxt-link class="button" to="/">
      Homepage
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
  margin-top: 50px;
}

.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}

.nuxtexpressvuetify {
  width: 30vw;
  min-width: 250px;
  height: auto;
}
</style>
