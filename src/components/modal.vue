<template>
    <b-modal scrollable id="modal-xl" size="xl" :title="'Fraccionamiento Amanecer' + titulo">
        <Area1Component v-if="vista == 'Area1Component'"/>

        <!-- <Area2Component v-if="vista == 'Area2Component'"/>
        <Area3Component v-if="vista == 'Area3Component'"/>
        <Area4Component v-if="vista == 'Area4Component'"/>
        <Area5Component v-if="vista == 'Area5Component'"/>
        <Area6Component v-if="vista == 'Area6Component'"/>
        <Area7Component v-if="vista == 'Area7Component'"/>
        <Area8Component v-if="vista == 'Area8Component'"/> -->

    </b-modal>
</template>
  
<script>
    import { openNotification } from "@/utils/notification.js"

    import Area1Component from '@/components/area1.vue';
    // import Area2Component from '@/components/area2.vue';
    // import Area3Component from '@/components/area3.vue';
    // import Area4Component from '@/components/area4.vue';
    // import Area5Component from '@/components/area5.vue';
    // import Area6Component from '@/components/area6.vue';
    // import Area7Component from '@/components/area7.vue';
    // import Area8Component from '@/components/area8.vue';
    export default {
        name: 'ModalComponent',
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
        }),
        computed: {
            titulo() {
                return this.vista === 'Area1Component' ? ' Area 1' : '';
            }
        },
        mounted() {
            this.$root.$on('bv::show::modal', this.showModal);
        },
        beforeDestroy() {
            this.$root.$off('bv::show::modal', this.showModal);
        },
        methods: {
            showModal(modalId) {
                if (!this.isShowingModal && modalId === 'modal-xl') {
                    this.isShowingModal = true;
                    this.$bvModal.show(modalId);
                    this.isShowingModal = false;
                }
            },
            notifySuccess() {
                this.mostrarLibre = true;
                this.mostrarApartado = false;

                openNotification(this, 'top-center', 'success', 'Exito', 'Area adquirida con exito');
            },
            notifyDanger() {
                this.mostrarApartado = true;
                this.mostrarLibre = false;

                openNotification(this, 'top-center', 'danger', 'Area Apartada', 'Esta area ya se encuentra apartada intenta con las areas en verde');
            },
        }
    }
</script>

<style>
#modal-xl___BV_modal_content_{
    margin-top: 6rem;
}
.close{
    display: none;
}
</style>