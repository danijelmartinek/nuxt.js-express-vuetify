<template>
  <v-footer dark class="primary pa-3 footer">
    <v-spacer></v-spacer>
    <div class="white--text">© {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style type="css">
.footer
{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}
</style>
