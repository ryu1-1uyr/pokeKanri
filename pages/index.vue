<template>
  <section class="container">
    <div>
      <logo />
      <p>{{ age }}</p>
      <button @click="onClickButton">Click Me!</button>
      <button @click="pokemonLog">poke</button>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Pokedex from 'pokedex.js'
import Logo from '~/components/Logo.vue'
// const Pokedex = require('pokedex.js')

const pokedex = new Pokedex('ja')

@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  age: number = 1
  onClickButton (): void {
    this.age += 1
  }

  pokemonLog (): void {
    console.log(pokedex.id(25).get())
  }
}
</script>
