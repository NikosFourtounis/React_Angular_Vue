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
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>Do you want to know why a specific smartphone sells more?</strong></p>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>We search the web, do the math and find the answer for you!</strong></p>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">OnePlus 6</p>
              <p class="subtitle">You should wait...</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-warning">
            <div class="content">
              <p class="title">Samsung Galaxy s8</p>
              <p class="subtitle">Just in the right price!</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <div class="content">
              <p class="title">Iphone Xs</p>
              <p class="subtitle">Is it really worth tha much money?</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
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
      heading: 'Price Point',
      subheading:'What is selling, who is buying, we make it clear!'
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
