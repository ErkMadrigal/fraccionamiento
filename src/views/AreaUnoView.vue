<template>
  <div>
    <Area1Component />
    <PoppupComponent />
  </div>
</template>

<script>
import Area1Component from '@/components/area1.vue';
import PoppupComponent from '@/components/poppup.vue';

export default {
  name: 'App',
  components: {
    Area1Component,
    PoppupComponent
  },
  methods: {
    
  }
}
</script>
