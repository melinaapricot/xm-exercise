<template>
    <div>
        <p>{{ cryptoData.id }}</p>
        <p>{{ cryptoData.name }}</p>
        <p>{{ cryptoData.nameid }}</p>
        <p>{{ cryptoData.price_btc }}</p>

    </div>
</template>

<script lang="ts" setup>
import type { Crypto } from '@/interfaces';
import { computed, onMounted } from 'vue';

interface Props {
    data: Crypto
}

const props = withDefaults(defineProps<Props>(), {})

const cryptoData = computed((): Crypto => props.data)


onMounted(() => {
    console.log('Hello', cryptoData.value)
})

</script>
<style>
</style>