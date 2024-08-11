
<template>
    <div>
      <b-card v-if="isLoading" class="mt-3">
        <b-skeleton animation="fade" width="85%"></b-skeleton>
        <b-skeleton animation="fade" width="55%"></b-skeleton>
        <b-skeleton animation="fade" width="70%"></b-skeleton>
      </b-card>

      <b-card v-else style="max-width: 1200px;" class="card-rounder mt-3 card-border-success" :title="'Esquema y plan de compra '+cardDatos.num_lote" >
        <b-card-text>
          <b-row>
            <b-col lg="4" sm="6">
              <p>
                largo x ancho: <br><strong> {{ textoLxA }}</strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                M<sup>2</sup> Lote:<br> <strong>{{ formattedNumber(cardDatos.area) }}m<sup>2</sup></strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p >
                Exedente: <br> <strong> {{ formattedNumber(cardDatos.excedente) }}m<sup>2</sup></strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p >
                total: <br> <strong> {{ formattedNumber(area + cardDatos.excedente) }}m<sup>2</sup></strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                Importe apartado <br> <strong>$ {{ formattedNumber(importeApartado) }}</strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                Fecha de contrato <br> <strong>{{ formattedDate  }}</strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                Precio por m<sup>2</sup> <strong> $ {{ formattedNumber(cardDatos.precio) }}</strong>
              </p>
            </b-col>
          </b-row>
        </b-card-text>
        <div class="center con-selects mb-4 w-25">
          <label for="Plan de Compra">Plan de Compra</label>
          <v-select 
            v-model="planPago" 
            :options="planCompra" 
            :reduce="option => option.value"
            label="label" 
            placeholder="--Selecciona una opcion--"
            :searchable="true"
            no-results-text="No se encontraron resultados" 

          />
        </div>
        <b-row>
          <b-col cols="12">
            <b-card class="mt-3" title="contado" v-if="planPago == '2'">
              <b-row>
                <b-col lg="4" sm="6">
                  <label for="Enganche">Enganche</label>
                  <v-select 
                    v-model="enganche" 
                    :options="montosEnganche" 
                    :reduce="option => option.value"
                    label="label" 
                    placeholder="--Selecciona una opcion--"
                    :searchable="true"
                    no-results-text="No se encontraron resultados" 

                  />
                </b-col>
                <b-col lg="4" sm="6">
                  <p>
                    Precio Lista: <br><strong> $ {{ formattedNumber(cardDatos.precio*cardDatos.areaTotal) }} </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                  <p>
                    Descuento: <br><strong> {{  cardDatos.descuento  }}% </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                  <p>
                    Total Descuento: <br><strong> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal)*(cardDatos.descuento/100) ) }} </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                    <p>Total pagos: <br><strong> $ {{ formattedNumber(parseFloat(importeApartado) + parseFloat(enganche)) }} </strong></p>
                </b-col>
                <b-col lg="4" sm="6">
                    <p>Pago al escriturar: <br><strong> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(cardDatos.descuento/100))-(parseFloat(importeApartado) + parseFloat(enganche)) ) }} </strong></p>
                </b-col>
  
              </b-row>
              <b-card-text class="float-end">
                <p>Precio Total: <br><strong> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(cardDatos.descuento/100)) ) }} </strong></p>
              </b-card-text>
              <vs-button
                block
                @click="enviarDatos(cardDatos, enganche, planPago, 0, false)"
              >
                <box-icon name='log-in-circle' color="#fff"></box-icon> Iniciar
              </vs-button>
            </b-card>
            <b-card title="credito" v-if="planPago == '1'">
              <b-row>
                <b-col lg="4" sm="6">
                  <label for="Enganche">Enganche</label>
                  <v-select 
                    v-model="enganche" 
                    :options="montosEnganche" 
                    :reduce="option => option.value"
                    label="label" 
                    placeholder="--Selecciona una opcion--"
                    :searchable="true"
                    no-results-text="No se encontraron resultados" 

                  />
                </b-col>
                <b-col lg="4" sm="6">
                  <p>
                    Precio Lista: <br><strong> $ {{ formattedNumber(cardDatos.precio*cardDatos.areaTotal) }} </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                  <p >
                    Descuento: <br><strong v-if="enganche == '285000.00'"> 9% </strong><strong v-else> 4% </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                  <p >
                    Total Descuento: <br><strong v-if="enganche == '285000.00'"> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal)*(9/100) ) }} </strong> <strong v-else> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal)*(4/100) ) }} </strong>
                  </p>
                </b-col>
                
                <b-col lg="4" sm="6">
                  <p >
                    Precio Total: <br><strong v-if="enganche == '285000.00'"> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(9/100)) ) }} </strong> <strong v-else> $ {{ formattedNumber( (cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(4/100)) ) }} </strong>
                  </p>
                </b-col>
                
                
                <b-col lg="4" sm="6">
                  <p>
                    Mensualidades: <br><strong> {{mesesFaltantes}} </strong>
                  </p>
                </b-col>
                <b-col lg="4" sm="6">
                  <p>Total pagos: <br><strong> $ {{ formattedNumber(parseFloat(importeApartado) + parseFloat(enganche)) }} </strong></p>
                </b-col>

                <b-col lg="4" sm="6">
                  <p>Total Mensualidades: <br><strong> $ {{ formattedNumber(sumaTotalTabla) }} </strong></p>
                </b-col>
                
                <b-col lg="4" sm="6">
                  
                  <p>
                      Pago al escriturar: <br><strong v-if="enganche == '285000.00'"> $ {{ formattedNumber( ((cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(9/100))) - (parseFloat(importeApartado) + parseFloat(enganche) +   parseFloat(sumaTotalTabla)) ) }} </strong> <strong v-else> $ {{ formattedNumber( ((cardDatos.precio*cardDatos.areaTotal) - ((cardDatos.precio*cardDatos.areaTotal)*(4/100))) -(parseFloat(importeApartado) + parseFloat(enganche) + parseFloat(sumaTotalTabla)) ) }} </strong>
                  </p>
                </b-col>
              </b-row>
              <vs-table v-if="mostrarTabla">
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
              <vs-button
                block
                @click="enviarDatos(cardDatos, enganche, planPago, sumaTotalTabla, true)"
              >
                <box-icon name='log-in-circle' color="#fff"></box-icon> Iniciar
              </vs-button>
            </b-card>
            
          </b-col>
        </b-row>
      </b-card>
    </div>
  </template>
<script>
import { fetchApi } from "@/service/service.js"

import numberMixin from '@/mixins/numberMixin';
import { mapActions } from 'vuex';

export default {
  mixins: [numberMixin],

  name: 'cardCotizacionComponent',

  data:() => ({
        lote: '',
        search: '',
        page: 1,
        max: 7,
        mostrarTabla: false,
        sumaTotalTabla: 0,
        dates: [],
        precio: null,
        area: null,
        descuento: null,
        textoLxA: null,
        isLoading: true,
        importeApartado: 15000, 
        planPago: '',
        mesesFaltantes: null,
        enganche: 0,
        montosEnganche: [],
        planCompra: [],
        currentDate: new Date(),

        apiUrl: process.env.VUE_APP_API_URL,

  }),
  computed: {
    cardDatos() {
      return this.$store.state.cardCotizacionDatos;
    },
    formattedDate() {
      return this.currentDate.toLocaleDateString('es-ES', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  },
  watch: {
    enganche() {
      this.generateDates();
      this.mostrarTabla = true;
    },
    planPago(){
      this.mostrarTabla = false;
      this.sumaTotalTabla = 0;
    }
  },
  mounted() {
        this.getPlanCompra();
        this.getEnganche();
        this.area = this.cardDatos.ancho * this.cardDatos.largo
        this.precio = this.area * this.cardDatos.precio
        this.descuento = this.precio * (this.cardDatos.descuento/100)
        this.textoLxA = this.cardDatos.ancho+'m x '+ this.cardDatos.largo+'m';
        setTimeout(() => {
        this.isLoading = false;
        }, 2000); // Simula 2 segundos de carga

  },
  methods: {
    generateTitle() {
      let titlePrefix = '';
      if (this.cardDatos.id_estatus === 6) {
        titlePrefix = 'Lote apartado por';
      } else if (this.cardDatos.id_estatus === 7) {
        titlePrefix = 'Lote comprado por';
      }
      return `${titlePrefix} ${this.cardDatos.nombre_usuario}`;
    },
    ...mapActions(['updateDatos']),
    enviarDatos(dataAPi, enganche, planPagos, sumaTotalTabla, mostrarTabla){

      if(enganche != 0){
        const datos = { dataAPi, enganche, planPagos, sumaTotalTabla, mostrarTabla };
        this.updateDatos(datos);
        this.$router.push({ name: 'Cotizador' });
      }else{
        this.notify('danger', 'Error al obtener la cotizacion', 'es requerido seleccionar el enganche')
      }
    },
    getEnganche(){
      fetchApi(this.apiUrl+'catalogos/?tipo_catalogo=precio_enganche', 'GET')
      .then(data => {
        this.montosEnganche = data.map(item => ({
          value: item.valor_numero,
          label: this.formattedNumber(item.valor_numero)
        }));    
      })
    },
    
    getPlanCompra(){
      fetchApi(this.apiUrl+'catalogos/?tipo_catalogo=plan_compra', 'GET')
      .then(data => {
        this.planCompra = data.map(item => ({
          value: item.id,
          label: item.valor_text
        }));   
      })
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
        if(this.enganche == '285000.00'){
          pagos.importe = "10,000.00" 
          this.sumaTotalTabla = "210000.00" 
        }else{
          pagos.importe = "13,500.00" 
          this.sumaTotalTabla = "283500.00" 
        }
        
        dates.push(pagos);
      }
      this.dates = dates;
    },
  }

  
}
</script>

        