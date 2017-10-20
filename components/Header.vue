<template>
  <div class="appheader">
      
    <v-toolbar class="hidden-sm-and-up white" fixed dark>
      <v-toolbar-side-icon light @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="center nav_text"><v-toolbar-title>CARLESS</v-toolbar-title></span>
    </v-toolbar>

    <v-navigation-drawer class="hidden-sm-and-up" temporary v-model="drawer" light>
      <v-toolbar flat color="white"></v-toolbar>
      <v-list dense class="pt-0">
        <v-list-tile>
          <nuxt-link to="/" class="nav_mobile_link">
              <v-btn color="black" flat dark><span class="headline">Početna</span></v-btn>
          </nuxt-link>
        </v-list-tile>
        <v-list-tile>
          <span v-if="!$store.state.authUser">
          </span>
          <nuxt-link to="/profile" class="nav_mobile_link" v-else>
              <v-btn color="black" flat dark><span class="headline">Profil</span></v-btn>
          </nuxt-link>
        </v-list-tile>
        
        <v-toolbar height="20" color="white" flat></v-toolbar>
        <div class="divider"></div>
        <v-toolbar height="20" color="white" flat></v-toolbar>

        <v-list-tile>
          <v-btn href="/auth/strava" class="center" flat dark large v-if="!$store.state.authUser">
            <img src="~assets/svg/btn_strava_connectwith_orange.svg">
          </v-btn>
          <v-btn href="/logout" class="logout_mobile_button" color="black" flat dark v-else>
            <span class="subheading">Logout</span>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="hidden-xs-only white" fixed dark>
      <v-toolbar-title><span class="nav_text">CARLESS</span></v-toolbar-title>
      <nuxt-link to="/" class="nav_link">
        <v-btn color="black" flat dark>Početna</v-btn>
      </nuxt-link>
      <span v-if="!$store.state.authUser">
      </span>
      <nuxt-link to="/profile" class="nav_link" v-else>
        <v-btn color="black" flat dark>Profil</v-btn>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn flat dark large href="/auth/strava" v-if="!$store.state.authUser">
        <img src="~assets/svg/btn_strava_connectwith_orange.svg">
      </v-btn>
      <v-btn href="/logout" color="black" flat dark v-else>
        <span>Logout</span>
      </v-btn>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {
      drawer: null,
      right: null
    }
  }
}
</script>

<style scoped>
.center{
  width: 100%;
  text-align: center;
}
.nav_text{
  color: #000000;
}
.nav_link{
  text-decoration: none;
}
.nav_mobile_link{
  text-decoration: none;
  margin: 50px;
}
.logout_mobile_button{
  margin: 60px;
}
</style>