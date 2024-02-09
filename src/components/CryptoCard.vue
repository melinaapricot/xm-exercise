<template>
    <div class="card">
        <img :src="currencyLogo" class="card__logo" alt="Currency Logo">
        <p>{{ currencyData.symbol }}</p>
        <p>{{ currencyData.name }}</p>
        <p>$ {{ currencyData.price_usd }}</p>
        <p>{{ currencyData.percent_change_7d }}</p>
    </div>
</template>

<script lang="ts" setup>
import type { Crypto } from '@/interfaces';
import { computed, onMounted } from 'vue';
const props = defineProps<{
    currencyData: Crypto,
    imgLink: string,
}>()

const currencyLogo = computed(() => {
    return `/src/assets/img/${props.currencyData.symbol}.png`
})

onMounted(() => {
    console.log(props.imgLink)
})

</script>
<style scoped lang="scss">
.card {
    &__logo {
        width: 34px;
    }

    @media (min-width: 768px) {
        &__logo {
            width: 31px;
        } 
    }

    @media (min-width: 1200) {
        &__logo {
            width: 34px;
        }    
    }
}

</style>