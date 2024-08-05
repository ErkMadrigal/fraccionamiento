<template>
  <div class="center examplex">
    <vs-navbar color="#253626" text-white square center-collapsed v-model="active" class="p-2">
      <template #left>
        <img src="@/assets/img/logo.webp" alt="" class="navbar-logo">
      </template>
      <template #right>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <box-icon name='menu' color="#fff"></box-icon>
        </button>
        <div :class="['collapse', { 'show': isNavbarCollapsed }]">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </template>
    </vs-navbar>
    <div>
      <div class="child">
        <img src="@/assets/img/background.webp" class="kenburns-bottom" alt="almanta">
      </div>
      <div class="mt-5 text-center">
        <carousel-3d>
          <slide :index="0" class="custom-slide p-3" @click="iniciar('/Mapa')">
            <h3 class="mt-5">Selecciona un Fraccionamiento</h3>
            <!-- <img src="@/assets/img/vistaAerea.webp" alt="almanta"> -->
          </slide>
          <slide :index="1" class="custom-slide">
            <img src="@/assets/img/vistaAerea.webp" alt="almanta" @click="iniciar('/Mapa')">
          </slide>
          <slide :index="2" class="custom-slide">
            <img src="@/assets/img/background.webp" alt="almanta" @click="iniciar('/Desarrollo')">
          </slide>
          <slide :index="3" class="custom-slide">
            <img src="@/assets/img/background.webp" alt="almanta" @click="iniciar('/Desarrollo')">
          </slide>
          
          <slide :index="4" class="custom-slide">
            <img src="@/assets/img/background.webp" alt="almanta" @click="iniciar('/Desarrollo')">
          </slide>
          
          <slide :index="5" class="custom-slide">
            <img src="@/assets/img/background.webp" alt="almanta" @click="iniciar('/Desarrollo')">
          </slide>
        </carousel-3d>
      </div>
      <div class="color-change-2x">
        <div class="p-5 text-center">
          <p class="commissioner title">MÁS DE 40 AMENIDADES</p>
          <p class="commissioner body">
            Descubre un paraíso natural con más de 300,000 m2 de exuberante bosque que te espera para explorar y disfrutar.
          </p>
        </div>
      </div>
      <div class="child">
        <img src="@/assets/img/img.webp" alt="almanta">
      </div>
      <div class="child">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#186960" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,245.3C480,277,600,267,720,224C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    components: {
      Carousel3d,
      Slide
    },
    data:() => ({
      active: false,
      isNavbarCollapsed: false
    }),
    methods: {
      toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
      },
      iniciar(ruta){
        this.$router.push(ruta);
        console.log(ruta)
      }
    }
  };
</script>
<style scoped>
.custom-slide {
  transform: scale(1.2); /* Aumenta el tamaño de los slides */
}
.navbar-logo {
  max-width: 150px;
}
.navbar-toggler {
  border: none;
  background: transparent;
}

.collapse.show {
  display: block;
}

.title{
  font-size: 4rem;
  color: #ffffff;
}
.body{
  font-size: 1rem;
  color: #ffffff;
}
</style>