<template>
  <div class="skills-container">
    <router-link to="Javascript" class="javascript">
      <h2>Javascript</h2>
      <router-link to="Omega">Omega</router-link>
    </router-link>
    <div class="vuejs">
      <h2>Vue.js</h2>
      <router-link to="Omega">Omega</router-link>
    </div>
    <div class="netcore">
      <h2>.NET Core</h2>
      <router-link to="Omega">Omega</router-link>
    </div>
    <div class="azure">
      <h2>Azure Storage</h2>
      <router-link to="Omega">Omega</router-link>
    </div>
    <router-link to="Autonomie" class="javascript">
      <h2>Autonomie</h2>
      <router-link to="Omega">Omega</router-link>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  margin-top: 112px;
  padding: 5% 15%;
  overflow: auto;
}
</style>


