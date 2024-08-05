<template>
    <div class="tabla">
        {{ fechas }}

      <vs-table>
        <template #header>
          <vs-input v-model="search" border placeholder="Buscar" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th sort @click="fechas = $vs.sortData($event, fechas, 'mensualidades')">
              <box-icon name='credit-card'></box-icon>
            </vs-th>
            <vs-th sort @click="fechas = $vs.sortData($event, fechas, 'Fecha')">
              <box-icon name='calendar'></box-icon>
            </vs-th>
            <vs-th sort @click="fechas = $vs.sortData($event, fechas, 'importe')">
              <box-icon name='money-withdraw'></box-icon>
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage($vs.getSearch(fechas, search), page, max)"
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
          <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(fechas, search), max)" />
        </template>
      </vs-table>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

  export default {
    name: 'tablaMortizacionComponent',
    computed: {
        ...mapState({
            fechas: state => state.fechas
        })
    },
    data() {
      return {
        search: '',
        page: 1,
        max: 7,
        datesTable: []
      };
    },
    watch: {
        fechas(newVal) {
            this.datesTable = newVal;
        }
    },
    mounted() {
        this.datesTable = this.fechas;
        console.log(this.datesTable);
    },
    methods: {
      // tus métodos aquí
    }
  }
  </script>
  
  <style>
  /* tu estilo aquí */
  </style>
  