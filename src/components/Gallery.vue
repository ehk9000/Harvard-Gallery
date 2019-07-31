<template>
  <section>
    <Photo /> 
  </section>
</template>

<script>
import Photo from './Photo';
import fetchPhotos from '../utils/fetchPhotos';
import { apiKey } from '../utils/apikey.js'

export default {
  name:'Gallery',
  components: {
    Photo
  },
    data() {
      return {
        images: [],
        error: ''
      }
    },
    mounted: function() {
      console.log(apiKey)
      const url = `https://api.harvardartmuseums.org/image?apikey=${apiKey}&size=100`;
        fetch(url)
          .then(response => response.json())
          .then(results => (this.images = results.records))
          .catch(error => this.error = error)
    }    
  }
</script>

<style>

</style>


