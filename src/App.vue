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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
body {
  background: url('https://images.unsplash.com/photo-1513705138751-16c75b89180e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;
  background-size: cover;
}
</style>
