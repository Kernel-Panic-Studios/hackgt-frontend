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

    <br><br><br>

    <h3 class="text-center">About Us</h3>
    <h6 class="text-center">
      Orphanages rely on donations and funding for resources for the children. In third world countries, this can cause poor quality of life, as well as lack of financial and emotional support from the community. Especially during a health crising like COVID-19, orphanages cannot rely on volunteers and the connection between the children and the community weakens. In general, children in orphanages around the world are left without the support and mentorship they need to have a financially secure and emotionally balanced future. 
    <br /><br />
This is where famly comes in. Famly is a tool that allows families to find and connect with orphanages around the world, to develop a meaningful relationship with the children there. Famly uses personality insights to search through orphanages and find a child that you could virtually support. During a global pandemic, this is a perfect way to volunteer and show support in communities around the world, while developing a relationship with a child where one can mentor them and support them for years to come. Many orphanages in third-world countries lack the resources for everyone to have constant access to the internet, which is why our system is built for many children to be able to share one platform and schedule events, share progress updates, learn new skills, and receive the emotional and financial support they need from families anywhere in the world.

    </h6>
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
