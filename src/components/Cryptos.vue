<template>
    <section class="cryptos">
      <div class="cryptos__wrap">
        <div v-for="crypto in cryptos" :key="crypto.id">
           <CryptoCard :data="crypto" />
        </div>
      </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CryptoCard from './CryptoCard.vue'
import type { Crypto } from '@/interfaces';

const cryptos = ref<Array<Crypto>>([]);

const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=10';

async function fetchCryptoData() {
  try {
    const response = await fetch(url);
    const allData = await response.json();
    cryptos.value = allData.data;
  } catch (error) {
    console.error('Error', error);
  }
}

fetchCryptoData();

</script>

<style lang="scss">

.cryptos {
  &__wrap {
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: center;

  }
}
</style>

