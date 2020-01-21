<template>
  <section class="container">
    <div>
      <myTest />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import myTest from '~/components/myTest.vue'
// const Pokedex = require('pokedex.js')

@Component({
  components: {
    Logo,
    myTest
  }
})
export default class Index extends Vue {
  age: number = 1
  $pokemon: any
  onClickButton (): void {
    this.age += 1
  }

  pokemonLog (): void {
    console.log(this.$pokemon.name('ピカチュウ').get())
  }
}
</script>
