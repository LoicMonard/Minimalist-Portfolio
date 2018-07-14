<template>
  <div id="app">
    <div class="toolbar">
      <div class="left">
        <router-link to="Home"><span class="toolbar-item">Accueil</span></router-link>
      </div>
      <div class="right">
        <router-link to="Projects"><span class="toolbar-item">Projets</span></router-link>
        <span class="toolbar-item">Compétences</span>
        <span class="toolbar-item">
          <i class="material-icons">mail_outline</i>
        </span>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    Home,
    Projects
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
  overflow: auto;
}

#app {
  font-family: 'Montserrat Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

.toolbar {
  position: absolute;
  z-index: 1;
  height: 112px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}

.toolbar .toolbar-item {
  padding: 10px 10px;
  margin-left: 30px;
  cursor: pointer;
}

.toolbar .right .toolbar-item {
  margin: 0 4px;
}

.toolbar .right .toolbar-item:nth-child(3) {
  margin: 0 30px 0 4px;
}

.toolbar .toolbar-item {
  display: inline-flex;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: inherit;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10%);
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .toolbar {
    justify-content: space-around;
  }
  .toolbar .toolbar-item {
    margin: 0 10px;
    font-size: 14px;
  }
  .toolbar .right .toolbar-item {
    margin: 0 10px;
  }
}
</style>
