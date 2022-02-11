<template>
  <li>
    <product-enter>
     @add-info="addInfo"
    </product-enter>
    <ul>
      <product-name
        v-for="product in products"
        :key="product.id"
        :product-id="product.id"
        :product-name="product.name"
        :product-description="product.description"
        @change-name="changeFriend"
        @change-desc="changed">
      </product-name>
    </ul>
  </li>

</template>

<script>
import productName from './FriendName.vue'
import ProductEnter from './ProductEnter.vue'
export default {
  components: {
    productName,
    ProductEnter
  },

  data () {
    return {
      DetailsAreVisible: false,
      products: [
        {
          id: '1001',
          name: 'iphone',
          description: 'Apple phone that looks cool!'
        },
        {
          id: '1003',
          name: 'Redme',
          description: 'phones that are affordable!'
        }
      ]
    }
  },
  methods: {
    changeFriend (value) {
      this.products.name = value
    },
    changed (value) {
      this.products.description = value
    },
    addInfo (enteredname, enteredd) {
      const enteredvalues = {
        id: new Date().toISOString(),
        name: enteredname,
        description: enteredd
      }
      this.products.push(enteredvalues)
    }

  }
}
</script>

<!-- style..................................-->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
