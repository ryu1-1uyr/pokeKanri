<template>
  <div>
    <input v-model="pokename" type="text" />
    <input type="button" value="検索" @click="pokemonLog" />
    <p>{{ pokename }}</p>
    <div>{{ this.sample }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {
  pokename: string = ''
  sample: string = ''
  $pokemon: any
  onClickButton (name: string): void {
    this.pokename = this.$pokemon.name(name).get()
  }

  pokemonLog (): void {
    this.sample = this.$pokemon.name(this.pokename).get()
    // eslint-disable-next-line no-console
    console.log(this.sample)
  }
}
</script>
