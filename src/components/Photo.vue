<template>
  <section>
    <article v-for="image in images" v-bind:key="image.id">
        <img v-bind:src="image.baseimageurl" alt="">

    </article>
  </section>
</template>

<script>
export default {
  name: 'Photo',
  props: ['images']
}
</script>

<style scoped>
  img { 
    height:300px;
    width: 300px;
    padding: 20px;
    min-width: 300px;
  }

  article {
    margin: 15px;
    align-items: center;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  }
</style>
