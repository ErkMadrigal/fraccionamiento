<template>
    <div class="Cotizador">
      <SidebarComponent/>
      <div class="contenedor">
        <b-row class="margin-top">
          <b-col lg="6" sm="12">
        <!-- {{ datos.dataAPi }}
        {{ datos.enganche }}
        {{ datos.planPagos }}
        {{ datos.sumaTotalTabla }} -->

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
            <b-card class="card-rounder" :title="tipoCompra">
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
                      <p>Importe Enganche: <br><strong> $ {{ formattedNumber(datos.enganche) }} </strong></p>
                    </b-col>
                    <b-col sm="12" lg="4">
                      Precio por m<sup>2</sup> <br> <strong> $  {{ formattedNumber(datos.dataAPi.precio) }} </strong>
                    </b-col>
                    <b-col sm="12" lg="4">
                      Area total: <br><strong> {{ formattedNumber(datos.dataAPi.area) }} </strong>
                    </b-col>
                    <b-col sm="12" lg="4">
                      Descuento: <br><strong> {{descuento}}% </strong>
                    </b-col>
                      
                    <b-col sm="12" lg="4">
                      <p>
                        Pagos al escriturar: <br><strong>$ {{ formattedNumber(totalEscritura) }} </strong>
                      </p>
                    </b-col>
                    <b-col sm="12" lg="4" v-if="datos.sumaTotalTabla != 0">
                      <p>
                        Total Mensualidades: <br><strong> $ {{ formattedNumber( datos.sumaTotalTabla ) }} </strong>
                      </p>
                    </b-col>
                    <b-col sm="12" lg="4">
                      <p>
                        Precio Total: <br><strong> $ {{ formattedNumber( precioTotal ) }} </strong>
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
                  >
                    Liquidar
                  </vs-button>
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card class="card-rounder" title="Enganche">
                  <p class=" commissioner price"> $ {{ formattedNumber(datos.enganche) }}</p>
                  <vs-button
                    class="float-end"
                  >
                    Liquidar
                  </vs-button>
                </b-card>
              </b-col>
              <b-col lg="4" sm="12">
                <b-card class="card-rounder" title="Escrituras">
                  <p class="commissioner price">$ {{ formattedNumber(totalEscritura) }} </p>
                  <vs-button
                    class="float-end"
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
  import { mapGetters } from 'vuex';
  import numberMixin from '@/mixins/numberMixin';



  export default {
    mixins: [numberMixin],
    name: 'HomeView',
    data:() => ({
      nombre: null,
      telefono: null,
      correo: null,
      nombre_ejecutivo: null,
      telefono_ejecutivo: null,
      correo_ejecutivo: null,

      precioTotal: null,
      descuento: null,
      tipoCompra: null,
      totalEscritura: null,
    }),
    
    components: {
      SidebarComponent,
    },
    computed: {
    ...mapGetters(['getDatos']),
      datos() {
        return this.getDatos;
      }
    },
    mounted() {
      this.getPrecioTotal()
      
    },
    methods: {
      getPrecioTotal(){
        
        let descuentoAplicado;
        let precioTotal = parseFloat(this.datos.dataAPi.precioTotal);
        let compra = '';
        
        if (this.datos.planPagos == 1) {
          compra = " Credito"
          if (parseFloat(this.datos.enganche) == 285000.00) {
            descuentoAplicado = precioTotal * 0.09;
            this.descuento = 9;
          } else {
            descuentoAplicado = precioTotal * 0.04;
            this.descuento = 4;
          }
        } else {
          compra = " Contado"
          let descuento = parseFloat(this.datos.dataAPi.descuento);
          descuentoAplicado = precioTotal * (descuento / 100);
          this.descuento = descuento;
        }
        this.tipoCompra = 'lote '+this.datos.dataAPi.num_lote + compra
        this.precioTotal = precioTotal - descuentoAplicado;
        this.totalEscritura = this.precioTotal - (parseFloat(this.datos.enganche) + 15000 + parseFloat(this.datos.sumaTotalTabla))
      }
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