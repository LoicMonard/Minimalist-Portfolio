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
          <div class="project-technologies">
            <span v-for="technology in project.technologies" :key="technology.name">
              <i class="material-icons" v-bind:style="{color: technology.color}">fiber_manual_record</i>
              {{technology.name}}
            </span>
          </div>
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
        {name: 'Omega', description: `Single Page Application`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}, {name: '.NET Core', color:'#6919E6'}, {name: 'Azure Storage', color:'#0078D4'}]},
        {name: 'Pomega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Momega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Somega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Domega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Comega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Lomega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Gomega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Bomega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]},
        {name: 'Romega', description: `Hey girl`, technologies: [{name: 'Vue.js', color: '#41B883'}, {name: 'Javascript',  color: '#F1E05A'}]}
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
  flex-grow: 1;
  display: flex;
  font-size: 64px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
}
.right {
  padding: 0 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
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
  display: flex;
  flex-direction: row;
  font-size: 12px;
  line-height: 14px;
  font-family: 'Montserrat Light', 'Avenir';
}
.project-technologies span:not(:nth-child(1)) {
  margin-left: 4px;
}
.project-technologies i {
  display: inline-flex;
  vertical-align: middle;
  font-size: 16px !important;
}
@media screen and (max-width: 1200px) {
  .projects-container {
    flex-direction: column;
  }
}
@media screen and (max-width: 600px) {
  .projects-container {
    padding: 5% 0;
  }
  .left {
    font-size: 34px;
  }  
}
</style>
