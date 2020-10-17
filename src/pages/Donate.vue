<template>
  <q-page padding>
    <!-- content -->
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      @token="tokenCreated"
    >
    </stripe-elements>
    <q-btn @click="checkout">Donate $50</q-btn>
  </q-page>
</template>

<script>
import { StripeElements } from 'vue-stripe-checkout';

export default {
  name: 'Donate',
  components: {
    StripeElements
  },
  data () {
    return {
      amount: 50,
      token: null,
      charge: null,
      publishableKey: 'pk_test_51HdLzhL2M4LnNr3iWD6bDwe87gADvvVHmdK0W4XoMraKWL39rznBz1VBIJMK3rlhn53wv541WbpRiKXzcaYv043F00BWinWUje',
    }
  },
  methods: {
    checkout() {
      console.log("checkout");
      this.$refs.elementsRef.submit();
    },
    tokenCreated (token) {
      this.token = token;
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.id,
        amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
        description: this.description // optional description that will show up on stripe when looking at payments
      }
      this.$router.push("/family");
    }
  }
}
</script>
