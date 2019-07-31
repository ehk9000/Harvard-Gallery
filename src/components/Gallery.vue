<template>
  <section>
    <Photo v-bind:images="images" /> 
  </section>
</template>

<script>
import Photo from './Photo.vue';

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
      const url = `https://api.harvardartmuseums.org/image?apikey=${process.env.HARVARD_MUSEUM_API_KEY}&size=100`;
        fetch(url)
          .then(response => response.json())
          .then(results => (this.images = results.records))
          .catch(error => this.error = error)
    },
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

</style>


