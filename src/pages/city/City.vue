<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
    :cities='cities'
    :hotCitie='hotCitie'
    :letter='letter'
    ></city-list>
    <city-alphabet
    :cities='cities'
    @change="handleChange"
    ></city-alphabet>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCitie: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.hanldGetCity)
    },
    hanldGetCity (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCitie = data.hotCities
      }
    },
    handleChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
