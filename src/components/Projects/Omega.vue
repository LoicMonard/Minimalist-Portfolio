<template>
  <div class="omega-container">
    <h1>Omega</h1>
    <div class="technologies">
      <router-link class="technology" v-for="technology in technologies" :key="technology.name" :to="technology.link">
        <i class="material-icons" v-bind:style="{color: technology.color}">fiber_manual_record</i>
        <span>{{technology.name}}</span>
      </router-link>
    </div>
    <h3>Présentation</h3>
    <p>Omega est une application web permettant aux utilisateurs de plateformes de streaming musical de mixer leurs playlists avec d’autres utilisateurs, de façon simple et ludique.</p>
    <h3>Objectifs, contexte, enjeu et risques</h3>
    <ul>
      <li>Authentification via Facebook, Deezer et Spotify. </li>
      <li>Mettre en place une chaîne de build.</li>
      <li>Gestion de la création et de la sauvegarde des playlists. </li>
      <li>Permettre à un utilisateur de lier ses comptes Facebook, Spotify et Deezer s’il utilise des adresses mail différentes. </li>
      <li>Permettre une lecture fluide de titres musicaux quelle que soit la plateforme dont ils sont issus. </li>
      <li>Création d’un site web avec un design simple et épuré.</li>
      <li>Améliorer les performances de l’application au niveau du chargement des interfaces dans le navigateur.</li>
    </ul>
    <p>Ce projet a été réalisé dans le contexte du projet informatique du semestre 5, à IN’TECH. Il avait pour but de mettre en pratique ce que nous avions appris durant la scolarité, ainsi que de trouver des contacts pour notre stage de 6 mois qui suivait. 
Le projet nous a été initialement proposé par un client, Adjévi Koudossou en semestre 4. Nous avions accepté l’offre, et décidé et réitérer l’expérience en semestre 5. Nous avions la possibilité de continuer le projet après l’école comme projet professionnel, si les résultats étaient prometteurs. 
    </p>
    <h3>Les étapes</h3>
    <p>Lors de ce projet, j’ai endossé le rôle de scrum master. J’étais en l’occurrence chargé de l’organisation du projet et de coordonner les actions et la communication avec les collaborateurs. De plus, je travaillais sur la partie front-end du projet. J’ai également produit des maquettes et le design de l’application. </p>
    <h3>Les acteurs</h3>
    <ul>
      <li>Le principal acteur du projet n’était autre que l’équipe de projet.</li>
      <li>Les seconds acteurs étaient les professeurs de l’écoles, qui s’assuraient du bon déroulement du projet.</li>
      <li>Les derniers acteurs étaient les utilisateurs qui étaient chargés d’utiliser l’application et de faire remonter les idées et les bugs.</li>
    </ul>
    <h3>Les résultats</h3>
    <p>Nous avons été évalués à la fin des 6 mois de projets par des professionnels et des entreprises externes. Le projet a obtenu la première place au forum est projets informatiques d’INTECH en 2017, parmi une quarantaine de projets d’étudiants. </p>
    <h3>Les lendemains du projet</h3>
    <p>Une fois le projet d’école terminé, nous avons continué à le développer un certain temps, puis nous avons arrêté. Aujourd’hui, nous prévoyons encore de reprendre le projet dans un futur proche. </p>
    <h3>Mon regard critique</h3>
    <p>Ce projet a été pour moi ma première fierté dans le monde du développement. Il m’a permis d’appréhender la création d’une application web du début à la fin, du front au back, et d’évoluer sur l’ensemble de la stack technique. De plus, nous avons formé un groupe soudé sur le projet et j’ai pris énormément de plaisir à le réaliser avec mes collègues. </p>
  </div>
</template>

<script>
export default {
  name: 'Omega',
  data () {
    return {
      technologies: [
        {name: 'Javascript', color:'#F1E05A', link: "Javascript"},
        {name: 'Vue.js', color:'#41B883', link: "Vuejs"},
        {name: '.NET Core', color:'#6919E6', link: "NetCore"},
        {name: 'Azure Storage', color:'#0078D4', link: "Azure"}
      ]
    }
  }
}
</script>

<style scoped>
.omega-container {
  display: flex;
  flex-direction: column;
  margin-top: 112px;
  padding: 5% 15%;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 12px !important;
  align-items: center;
}

.technologies a:not(:nth-child(1)) {
  margin-left: 8px;
}

.technologies i {
  font-size: 16px !important;
  vertical-align: bottom;
}

.technology {
  display: flex;
}
@media screen and (max-width: 600px) {
  .omega-container {
    padding: 0 20px;
  }
}
</style>
