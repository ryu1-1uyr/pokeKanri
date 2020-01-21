import Vue from 'vue'
// @ts-ignore
import Pokedex from 'pokedex.js'

Vue.prototype.$pokemon = new Pokedex('ja')
