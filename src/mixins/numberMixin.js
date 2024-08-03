// mixins/numberMixin.js
import numeral from 'numeral';

export default {
  methods: {
    formattedNumber(number) {
      return numeral(number).format('0,0.00');
    }
  }
};
