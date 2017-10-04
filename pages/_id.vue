<template>
  <section class="container">
    <img src="~assets/img/nuxtexpressvuetify.png" alt="nuxtexpressvuetify" class="nuxtexpressvuetify" />
    <v-card class="card_container">
      <h1 class="title">
        User
      </h1>
      <h2 class="username">
        {{ user.name }}
      </h2>
    </v-card>
    <nuxt-link class="button" to="/">
      Users
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/users/' + params.id)
      .then((res) => {
        return { user: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'User not found' })
      })
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
.container
{
  top: 200px;
}

.title
{
  margin-top: 30px;
}

.username
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}

.button
{
  margin-top: 30px;
}

.card_container
{
  width: 100%;
  left: 0;
  right: 0;
  padding: 40px 0 ;
}

.nuxtexpressvuetify {
  width: 30vw;
  margin-top: 100px;
  min-width: 250px;
  height: auto;
}
</style>
