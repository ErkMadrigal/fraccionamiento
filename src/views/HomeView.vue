<template>
  <div class="center examplex">
    <vs-navbar color="#253626" text-white square center-collapsed v-model="active">
      <template #left>
        <!-- <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt=""> -->
      </template>
      <vs-navbar-item :active="active === 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'license'" id="license">
        License
      </vs-navbar-item>
      <template #right>
        <vs-button color="#fff" flat >Login</vs-button>
        <vs-button color="#fff" border >Get Started</vs-button>
      </template>
    </vs-navbar>
    <div class="square">
      <div class="child">
        <img src="@/assets/img/background.webp" class="kenburns-bottom" alt="almanta">
      </div>
      <div class="child">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
          ><swiper-slide
            ><img
              src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
          ><swiper-slide
            ><img src="https://swiperjs.com/demos/images/nature-9.jpg"
          /></swiper-slide>
        </swiper>
      </div>
      <div class="child">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ratione quidem eos qui voluptates amet rem optio quisquam, sapiente, vero beatae quas laborum numquam inventore laboriosam necessitatibus temporibus, quia possimus.
      </div>
    </div>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>

<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>