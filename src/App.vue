<template>
  <div id="app">
    <div class="toolbar">
      <div class="left">
        <span class="toolbar-item">Accueil</span>
      </div>
      <div class="right">
        <span class="toolbar-item">Projets</span>
        <span class="toolbar-item">Compétences</span>
        <span class="toolbar-item">
          <i class="material-icons">mail_outline</i>
        </span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.toolbar {
  position: absolute;
  height: 112px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}

.toolbar .toolbar-item {
  margin: 40px;
}

.toolbar .right .toolbar-item {
  margin: 0;
  margin-right: 40px;
}

.toolbar .toolbar-item {
  display: inline-flex;
  vertical-align: middle;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
