<template>
  <div id="app">
    <Header />
    <Gallery />
  </div>
</template>

<script>
import Header from './components/Header';
import Gallery from './components/Gallery';

export default {
  name: 'app',
  components: {
    Header,
    Gallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
