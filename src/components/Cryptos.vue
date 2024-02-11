<template>
    <section class="cryptos">
      <div class="cryptos__wrap">
        <div v-for="crypto in cryptos" :key="crypto.id">
           <CryptoWidget :currency-data="crypto" />
        </div>
      </div>

    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CryptoWidget from './CryptoWidget.vue'
import type { Crypto } from '@/interfaces';

const cryptos = ref<Array<Crypto>>([]);

const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=19';

async function fetchCryptoData() {
  try {
    const response = await fetch(url);
    const allData = await response.json();
    const currencies = allData.data;
    cryptos.value = [
      currencies[0],
      currencies[1],
      currencies[7],
      currencies[17],
      currencies[18]
    ];
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    gap: 18px;

    @media (min-width: 1200px) {
      margin-bottom: 90px;
    }
  }
}
</style>

