<template>
  <div class="home">
    <SidebarComponent/>

    <MapaComponent/>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar.vue'
import MapaComponent from '@/components/mapa.vue'

export default {
  name: 'HomeView',
  
  components: {
    SidebarComponent,
    MapaComponent
  },
  methods: {
    
  }

}
</script>
