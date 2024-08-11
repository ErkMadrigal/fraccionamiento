
<template>
    <div>
      <b-card v-if="isLoading" class="mt-3">
        <b-skeleton animation="fade" width="85%"></b-skeleton>
        <b-skeleton animation="fade" width="55%"></b-skeleton>
        <b-skeleton animation="fade" width="70%"></b-skeleton>
      </b-card>

      <b-card v-else style="max-width: 540px;" :class="[{ 'card-border-warning': cardDatos.id_estatus == 6, 'card-border-danger': cardDatos.id_estatus == 7 }, 'card-rounder']"   :title="generateTitle()" :sub-title="cardDatos.area + 'm2'">
        <b-row>
            <b-col lg="4" sm="6">
              <p>
                Numero de lote: <br><strong> {{ cardDatos.num_lote }}</strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                largo x ancho: <br><strong> {{ textoLxA }}</strong>
              </p>
            </b-col>
            <b-col lg="4" sm="6">
              <p>
                M<sup>2</sup> Lote:<br> <strong>{{ formattedNumber(area) }}m<sup>2</sup></strong>
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
                Importe apartado <br> <strong>$ {{ formattedNumber(15000.00) }}</strong>
              </p>
            </b-col>
          </b-row>
  
        <b-card-text><br> precio total <strong>${{ formattedNumber(precio-descuento) }}</strong></b-card-text>
      </b-card>
    </div>
  </template>
<script>
import numberMixin from '@/mixins/numberMixin';

export default {
  mixins: [numberMixin],

  name: 'cardEstatusComponent',

  data:() => ({
      precio: null,
      area: null,
      descuento: null,
      textoLxA: null,
      isLoading: true,
  }),
  computed: {
    cardDatos() {
      return this.$store.state.cardEstatusDatos;
    }
  },
  mounted() {
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
    }
  }

  
}
</script>

        