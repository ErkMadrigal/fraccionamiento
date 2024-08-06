<template>
    <div class="Cotizador">
      <SidebarComponent class="no-print"/>
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
            <b-card class="card-rounder" :title="tipoCompra">
              <b-row>
                <b-col lg="3" sm="12">
                  <img style="width: 9rem;" :src="setImagen(this.datos.dataAPi.num_lote)" alt="lotes amanecer" />
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
            <b-row class="mt-4">
              <b-col>
                <vs-button block  @click="printPage">
                  <box-icon color="#fff" name='printer' ></box-icon> imprimir
                </vs-button>
              </b-col>
              <b-col>
                <vs-button block @click="enviarEmail">
                  <box-icon color="#fff" name='send'></box-icon> Correo
                </vs-button>
              </b-col>
            </b-row>
          </b-col>
         
          <b-col lg="12" sm="12" class="mt-3 card-rounder mb-5" v-if="datos.mostrarTabla">
            <vs-table>
              <template #header>
                <vs-input v-model="search" border placeholder="Buscar" />
              </template>
              <template #thead>
                <vs-tr>
                  <vs-th sort @click="dates = $vs.sortData($event ,dates, 'mensualidades')">
                    <box-icon name='credit-card' ></box-icon>
                  </vs-th>
                  <vs-th sort @click="dates = $vs.sortData($event ,dates, 'Fecha')">
                    <box-icon name='calendar' ></box-icon>
                  </vs-th>
                  <vs-th sort @click="dates = $vs.sortData($event ,dates, 'importe')">
                    <box-icon name='money-withdraw' ></box-icon>
                  </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(tr, i) in $vs.getPage($vs.getSearch(dates, search), page, max)"
                  :data="tr"
                >
                  <vs-td>
                    {{ tr.mensualidad }}
                  </vs-td>
                  <vs-td>
                    {{ tr.fecha }}
                  </vs-td>
                  <vs-td>
                    {{ tr.importe }}
                  </vs-td>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(dates, search), max)" />
              </template>
            </vs-table>
            <!-- <tablaNortizacionComponent :fechas="datos.fechas"  /> -->
          </b-col>
        </b-row>
      </div>
    </div>
  </template>
  
  <script>
  import SidebarComponent from '@/components/Sidebar.vue';
  import { mapGetters,  } from 'vuex';
  import numberMixin from '@/mixins/numberMixin';
  import { openLoading, openNotification } from "@/utils/notification.js"

  // import tablaNortizacionComponent from '@/components/tablaMortizacion.vue';



  export default {
    mixins: [numberMixin],
    name: 'HomeView',
    data:() => ({
      mesesFaltantes: null,
      nombre: null,
      telefono: null,
      correo: null,
      nombre_ejecutivo: null,
      telefono_ejecutivo: null,
      correo_ejecutivo: null,
      dates: [],
      search: '',
      page: 1,
      max: 7,

      precioTotal: null,
      descuento: null,
      tipoCompra: null,
      totalEscritura: null,
      
    }),
    
    components: {
      SidebarComponent,
      // tablaNortizacionComponent
    },
    computed: {
    ...mapGetters(['getDatos']),
      datos() {
        return this.getDatos;
      }
    },
    mounted() {
      this.getPrecioTotal()
      this.generateDates();
    },
    methods: {
      printPage() {
        openLoading(this)
        this.max = 21
        setTimeout(() => {
          window.print();
        }, 3500);
        setTimeout(() => {
          this.max = 7
        }, 4000);
      },
      enviarEmail(){
        console.log("entre")
        this.notify('success', 'Correo enviado Con exito', 'Recuerda ver en Spam');
      },
      notify(color, title, text) {
        openNotification(this, 'top-center', color, title, text);
      },
      setImagen(id) {
        const imageMap = {
          108: require('@/assets/mapas/area/lote_108.png'),
          106: require('@/assets/mapas/area/lote_108.png'),
          120: require('@/assets/mapas/area/lote_120.png'),
          121: require('@/assets/mapas/area/lote_138_121.png'),
          137: require('@/assets/mapas/area/lote_154_137.png'),
          138: require('@/assets/mapas/area/lote_138_121.png'),
          154: require('@/assets/mapas/area/lote_154_137.png'),
          default: require('@/assets/mapas/area/lote_128m_gen.png')
        };
        return imageMap[id] || imageMap.default;
      },

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
      },
      generateDates() {
        // Fecha actual
        const fechaActual = new Date();
        
        // Año y mes de destino (abril 2026)
        const añoDestino = 2026;
        const mesDestino = 3; // Abril es el mes 3 (0-indexado)
        
        // Calcular la diferencia en años y meses
        const diferenciaAños = añoDestino - fechaActual.getFullYear();
        const diferenciaMeses = mesDestino - fechaActual.getMonth();
        
        // Total de meses faltantes
        this.mesesFaltantes = (diferenciaAños * 12) + diferenciaMeses;


        const dates = [];
        const today = new Date();
        
        for (let i = 0; i < this.mesesFaltantes; i++) {
          const newDate = new Date(today);
          newDate.setMonth(today.getMonth() + i);
          let pagos = {
            id: i,
            mensualidad: "Mensualidad " + (i+1),
            fecha: newDate.toLocaleDateString(),
            importe: "00.00",
          }
          if(this.datos.enganche == '285000.00'){
            pagos.importe = "10,000.00" 
          }else{
            pagos.importe = "13,500.00" 
          }
          
          dates.push(pagos);
        }
        this.dates = dates;
      },
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
@media print {
  .no-print {
    display: none;
  }

  /* Asegúrate de que la tabla ocupe toda la página */
  .print-table {
    width: 100%;
  }
}
</style>