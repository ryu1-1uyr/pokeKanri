<template>
  <section class="container">
    <div>
      <logo />
      <p>{{ age }}</p>
      <button @click="onClickButton">Click Me!</button>
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

@Component({
  components: {
    Logo: () => import('~/components/Logo.vue')
  }
})
export default class Index extends Vue {
  age = 1
  onClickButton () {
    this.age += 1
  }
}
</script>
