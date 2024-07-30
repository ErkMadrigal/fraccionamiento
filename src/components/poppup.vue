<template>
    <div class="center">
      <vs-dialog overflow-hidden full-screen v-model="active">
        <template #header>
          <h4 class="not-margin">
            Bienvenido <b>Vuesax</b>
          </h4>
        </template>
        <div class="con-form">
          <Area1Component v-if="vista == 'Area1Component'"/>
          <!-- <Area2Component v-if="vista == 'Area2Component'"/>
          <Area3Component v-if="vista == 'Area3Component'"/>
          <Area4Component v-if="vista == 'Area4Component'"/>
          <Area5Component v-if="vista == 'Area5Component'"/>
          <Area6Component v-if="vista == 'Area6Component'"/>
          <Area7Component v-if="vista == 'Area7Component'"/>
          <Area8Component v-if="vista == 'Area8Component'"/> -->
        </div>
        <!-- <template #footer>
          {{ vista }}
          <div class="footer-dialog">
            <vs-button block>
              Sign In
            </vs-button>
            <div class="new">
              New Here? <a href="#">Create New Account</a>
            </div>
          </div>
        </template> -->
      </vs-dialog>
    </div>
  </template>
  
  <script>
  import { EventBus } from '@/utils/eventBus';
  import Area1Component from '@/components/area1.vue';
  // import Area2Component from '@/components/area2.vue';
  // import Area3Component from '@/components/area3.vue';
  // import Area4Component from '@/components/area4.vue';
  // import Area5Component from '@/components/area5.vue';
  // import Area6Component from '@/components/area6.vue';
  // import Area7Component from '@/components/area7.vue';
  // import Area8Component from '@/components/area8.vue';
  
  export default {
    name: "PoppupComponent",
    components: {
      Area1Component,
      // Area2Component,
      // Area3Component,
      // Area4Component,
      // Area5Component,
      // Area6Component,
      // Area7Component,
      // Area8Component,
    },
    props: {
      vista: {
        type: String,
      },
    },
    data:() => ({
      active: false,
        input1: '',
        input2: '',
        checkbox1: false
    }),
    mounted() {
      EventBus.$on('activate-modal', this.showModal);
    },
    methods: {
      showModal() {
        this.active = true;
      }
    },
    beforeDestroy() {
      EventBus.$off('activate-modal', this.showModal);
    }
  }
  </script>
  
<style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
        