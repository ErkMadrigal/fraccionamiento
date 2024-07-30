<template>
    <div class="Cliente">
      <SidebarComponent/>
      <b-row class="margin-top">
        <b-col lg="3" sm="12">
            <b-card class="card-rounder"
                header="Erick Madrigal Flores"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center">
                <box-icon name='phone' type='solid' ></box-icon>
                <box-icon name='envelope' ></box-icon>
                <box-icon name='whatsapp' type='logo' ></box-icon>
                <b-card-text></b-card-text>
            </b-card>
        </b-col>
        
        <b-col lg="9" sm="12">
            <ClientesComponent/>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  import SidebarComponent from '@/components/Sidebar.vue';
  import ClientesComponent from '@/components/clientes.vue';
  
  export default {
    name: 'HomeView',
    
    components: {
      SidebarComponent,
      ClientesComponent
    },
    methods: {
      
    }
  
  }
  </script>

<style>
.card-rounder {
        border-radius: 1rem !important;
        margin: 0.5rem;
}
</style>
  