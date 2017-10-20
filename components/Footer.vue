<template>
  <div class="appfooter">
    <v-footer class="pa-3 white" elevation-2 light>
      <h6 headline>QUANTi © {{ new Date().getFullYear() }} </h6>
      <v-spacer></v-spacer>
      <img class="pwrdbystrava" src="~assets/svg/api_logo_pwrdBy_strava_horiz_gray.svg">
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'appfooter'
}
</script>

<style scoped>
h6{
  margin-top: 20px;
}

.pwrdbystrava{
  width: auto;
  height: 50px;
}

@media all and (max-width: 600px) 
{ 
  .pwrdbystrava{
    width: auto;
    height: 25px;
  }
}
</style>