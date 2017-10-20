<template>
  <v-app>
    <myHeader/>
    <main>
      <v-content>
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
    <myFooter/>
  </v-app>
</template>

<script>
import myHeader from '~/components/Header.vue'
import myFooter from '~/components/Footer.vue'

export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style scoped>

</style>
