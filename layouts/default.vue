<template>
  <div>
    <myHeader/>
      <nuxt/>
    <myFooter/>
  </div>
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

<style>
.container
{
  text-align: center;
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
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
