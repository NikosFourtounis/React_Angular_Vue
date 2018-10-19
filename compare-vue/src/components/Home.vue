<template>
  <div class="home">
    <section class="hero is-light is-medium ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{heading}}</h1>
          
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{subheading}}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'My Website',
      subheading:'This is a website build with Vue javascript framework and Bulma css framework.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
@import '../mq'

.hero
  background: url('../assets/header.jpg')
  background-repeat: no-repeat
  background-size: 300px 100px
  background-size: cover

h2
  margin: 1.5rem 0 2rem 0 !important
    
</style>
