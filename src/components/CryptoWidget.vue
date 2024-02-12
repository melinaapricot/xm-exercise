<template>
    <div class="widget">
        <div class="widget__up">
            <img :src="currencyLogo" class="widget__logo" alt="Currency Logo">
            <p class="widget__acronym">{{ currencyData.symbol }}</p>
            <span class="widget__coin">{{ nameFotmatted }}</span>
        </div>
        <div class="widget__down">
            <p class="widget__price">${{ currencyData.price_usd }}</p>
            <span :class="{ 'widget__percent': true, 'negative': isNegativePercent}">
                <FontAwesomeIcon class="widget__arrow" v-if="isNegativePercent" icon="fa-circle-chevron-down" />
                <FontAwesomeIcon class="widget__arrow" v-else icon="fa-circle-chevron-up" />
                {{ currencyData.percent_change_24h }}%

            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Crypto } from '@/interfaces';
import { computed } from 'vue';

const props = defineProps<{
    currencyData: Crypto,
}>()

const currencyLogo = computed(() => {
    return `/src/assets/img/${props.currencyData.symbol}.png`
})

const nameFotmatted = computed(() => {
    return props.currencyData.nameid.toUpperCase().replace(/-/, " ")
})

const isNegativePercent = computed(() => {
   return Number(props.currencyData.percent_change_24h) < 0;
})

</script>
<style scoped lang="scss">
.widget {
    width: 235px;
    height: 135px;
    border: 1px solid rgba(167, 167, 167, 0.20);
    border-radius: 13px;
    background: rgba(140, 140, 140, 0.10); 
    padding: 12px 15px;
    display: block;
    margin-bottom: 20px;

    &__up, 
    &__down {
        display: flex;
    }

    &__up {
        border-bottom: 1px solid rgba(167, 167, 167, 0.20);
        gap: 12px;
        justify-content: start;
        align-items: center;
        padding-bottom: 18px;
    }

    &__down {
        flex-direction: column;
        gap: 8px;
        justify-content: start;
    }

    &__acronym {
        font-weight: var(--font-weight-bold);
    }

    &__coin {
        font-size: 11px;
        display: inline-flex;
        align-items: center;
        height: fit-content;
        font-weight: var(--font-weight-bold);
        background-color: #f4eccd;
        border-radius: 8px;
        padding: 3px 5px;
        color: #000;
        line-height: 120%;
    }

    &__logo {
        width: 34px;
    }

    &__price {
        margin-top: 14px;
        font-size: 18px;
        font-weight: var(--font-weight-extra-bold);
    }

    &__percent {
        color: #B1FFC2;
        font-size: var(--font-size-tiny);
        &.negative {
            color: #FFA3A6;

        }
    }

    &__arrow {
        margin-right: 4px;
    }


    @media (min-width: 768px) {
        height: 128px;

        &__logo {
            width: 31px;
        } 
    }

    @media (min-width: 1200px) {
        height: 135px;

        &__logo {
            width: 34px;
        }    
    }
}

</style>