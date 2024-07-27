
<template>
    <div class="hidden">
      <vs-navbar fixed shadow square v-model="active">
        <!-- <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon >
            <box-icon name='menu-alt-left' flip='vertical' ></box-icon>
          </vs-button>
        </template> -->
        <vs-navbar-item :active="active == 'guide'" id="guide">
          <router-link to="/" class="nav-link">
            <template #icon>
              <box-icon name='home' flip='horizontal' color="#000" ></box-icon>
            </template>
            Home
          </router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <!-- <template #right>
          <vs-button flat >Login</vs-button>
        </template> -->
      </vs-navbar>
      <vs-sidebar
        background="rgb(0,0,0)"
        fixed
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
           <img src="@/assets/img/log.png" alt="logo">
        </template>
        <vs-sidebar-item id="home" >
          <template #icon>
            <box-icon name='home' flip='horizontal' color="#fff" ></box-icon>
          </template>
          Home
        </vs-sidebar-item>
        
        
      </vs-sidebar>
    </div>
  </template>
<script>
  export default {
  name: 'SidebarComponent',

    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
</script>

        