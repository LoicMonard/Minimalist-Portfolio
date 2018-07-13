<template>
    <div class="home-container">
        <div class="left">
        </div>
        <div class="right">
        </div>
        <div class="pitch">
            <span class="title">Mon portfolio</span>
            <span class="display">Bienvenue</span><br>
            <span class="subtitle">Jeune développeur, j'essaie de devenir un vieux développeur.</span>
            <div class="discover">
                <span><i class="material-icons">arrow_forward</i> Me voir nu</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
    height: 100vh;
    display: flex;
}
.left {
    width: 20%;
    background-color: #fff;
}
.right {
    width: 80%;
    background-image: url("../assets/glen-carrie-2092-unsplash.jpg");
    background-position: right;
    background-size: cover;
}
.pitch {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 20%;
    top: 50%;
    left: 10%;
}
.pitch .display {
    font-size: 64px;
    font-weight: 600;
}
.pitch .title {
    font-size: 24px;
    font-weight: 600;
}
.pitch .subtitle {
    font-size: 18px;
    color: #595959;
}
.discover {
  display: inline-flex;
  vertical-align: middle;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
}
.discover i {
  font-size: 20px;
}

@media screen and (max-width: 1200px) {
    .pitch {
        width: 40%;
    }
}

@media screen and (max-width: 600px) {
    .pitch {
        width: 90%;
        left: 0%;
        top: 20%;
        padding: 5%;
    }
    .left {
        display: none;
    }
    .right {
        width: 100%;
    }
}
</style>
