<template>
  <v-layout class="container" center>
    <v-flex xs12 sm10 md10 lg8 xl6 offset-sm3>
      <v-card>
        <img src="~assets/img/nuxtexpressvuetify.png" alt="nuxtexpressvuetify" class="nuxtexpressvuetify" />
        <h1 class="title">
          USERS
        </h1>
        <ul class="users">
          <li v-for="(user, index) in users" :key="index" class="user">
            <nuxt-link :to="{ name: 'id', params: { id: index }}">
              {{ user.name }}
            </nuxt-link>
          </li>
        </ul>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}

.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}

.user
{
  margin: 15px 0;
}

.nuxtexpressvuetify 
{
  width: 30vw;
  min-width: 250px;
  height: auto;
}
</style>
