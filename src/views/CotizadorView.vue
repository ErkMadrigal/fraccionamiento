<template>
    <div class="Cotizador">
      <SidebarComponent/>
      <div class="contenedor">
        <b-row class="margin-top">
          <b-col lg="6" sm="12">
              <b-card class="card-rounder" title="Datos personales">
                <b-row>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Nombre Completo"
                      v-model="nombre"
                    >
                      <template #icon>
                        <box-icon name='user'></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Telefono de Contacto"
                      v-model="telefono"
                    >
                      <template #icon>
                        <box-icon name='phone'></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Correo"
                      v-model="correo"
                    >
                      <template #icon>
                        <box-icon name='envelope' ></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                </b-row>
              </b-card>
          </b-col>
          
          <b-col lg="6" sm="12">
            <b-card class="card-rounder" title="Lote 108">
              <b-row>
                <b-col lg="3" sm="12">
                  <!-- <img src="@/assets/mapas/area/svg/lote_108.svg" alt="area108" /> -->
                  <img src="@/assets/mapas/area/lote_108.png" alt="area108" />
                </b-col>
                
                <b-col lg="9" sm="12">
                  <b-row>
                    <b-col sm="12" lg="4">
                      Importe apartado <br> <strong>$ 15,000.00</strong>
                    </b-col>
                    <b-col sm="12" lg="4">
                      <p>Importe Enganche: <br><strong> $ 285,000.00 </strong></p>
                    </b-col>
                    <b-col sm="12" lg="4">
                      Precio por m<sup>2</sup> <br> <strong> $ 5,250.00</strong>
                    </b-col>
                    <b-col sm="12" lg="4">
                      Descuento: <br><strong> 20% </strong>
                    </b-col>
                    <b-col sm="12" lg="4">
                      <p>
                        Pagos al escriturar: <br><strong>$ 475,992.00 </strong>
                      </p>
                    </b-col>
                    <b-col sm="12" lg="4">
                      <p>
                        Precio Total: <br><strong> $ 611,520.00 </strong>
                      </p>
                    </b-col>
                  </b-row>
                </b-col>
  
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" md="12">
            <b-card class="card-rounder" title="Datos Ejecutivo">
              <b-row>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Nombre Completo Ejecutivo"
                      v-model="nombre_ejecutivo"
                    >
                      <template #icon>
                        <box-icon name='user'></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Telefono de Contacto"
                      v-model="telefono_ejecutivo"
                    >
                      <template #icon>
                        <box-icon name='phone'></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                  <b-col lg="6" sm="12">
                    <vs-input
                      primary
                      class="margin-top4"
                      label="Correo"
                      v-model="correo_ejecutivo"
                    >
                      <template #icon>
                        <box-icon name='envelope' ></box-icon>
                      </template>
                    </vs-input>
                  </b-col>
                </b-row>
            </b-card>
          </b-col>
          <b-col lg="6" sm="12">
            <b-row>
              <b-col lg="4" sm="12">
                <b-card class="card-rounder" title="Apartar">
                  <p class=" commissioner price">$ 15,000.00</p>
                  <vs-button
                    class="float-end"
                    :active="active == 0"
                    @click="active = 0"
                  >
                    Liquidar
                  </vs-button>
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card class="card-rounder" title="Enganche">
                  <p class=" commissioner price">$ 285,000.00</p>
                  <b-badge pill variant="success" style=" font-size: initial; color: initial;">- 25%</b-badge>
                  <vs-button
                    class="float-end"
                    :active="active == 0"
                    @click="active = 0"
                  >
                    Liquidar
                  </vs-button>
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card class="card-rounder" title="Escrituras">
                  <p class="commissioner price">$ 475,992.00</p>
                  <vs-button
                    class="float-end"
                    :active="active == 0"
                    @click="active = 0"
                  >
                    Liquidar
                  </vs-button>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </template>
  
  <script>
  import SidebarComponent from '@/components/Sidebar.vue';

  export default {
    name: 'HomeView',
    data:() => ({
      nombre: null,
      telefono: null,
      correo: null,
      nombre_ejecutivo: null,
      telefono_ejecutivo: null,
      correo_ejecutivo: null
    }),
    
    components: {
      SidebarComponent,
    },
    methods: {
      
    }
  
  }
</script>

<style scoped>
::v-deep .vs-input {
  width: 600px; /* Ajusta el ancho a tu necesidad */
}
.price{
  font-size: 2rem;
  color: #9fa7a4;
}
</style>