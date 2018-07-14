<template>
    <div class="projects-container">
      <div class="left">
        Retrouvez mes projets et mes réalisations
      </div>
      <div class="right">
        <router-link class="project" v-for="project in projects" :key="project.name" :class="project.name" :to="project.name">
          <span class="project-name">
            {{project.name}}
          </span>
          <span class="project-description">
            {{project.description}}
          </span>
          <span class="project-technologies">
            {{project.technologies}}
          </span>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [
        {name: 'Omega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Pomega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Momega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Somega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Domega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Comega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Lomega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Gomega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Bomega', description: `Hey girl`, technologies: 'Vue.js'},
        {name: 'Romega', description: `Hey girl`, technologies: 'Vue.js'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects-container {
  display: flex;
  margin-top: 112px;
  padding: 5% 15%;
  overflow: auto;
}
.left {
  padding: 0 20px;
  width: 40%;
  display: flex;
  font-size: 64px;
}
.right {
  padding: 0 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
}
.project {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  border-bottom: 1px #e1e4e8 solid !important;
}
.project * {
  margin: 3px 0;
}
.project-name {
  font-size: 18px;
  font-family: 'Montserrat', 'Avenir';
}
.project-description {
  font-size: 14px;
  font-family: 'Montserrat Light', 'Avenir';
}
.project-technologies {
  font-size: 12px;
  font-family: 'Montserrat Light', 'Avenir';
}
</style>
