<template>
    <img :src="getImageSrc" alt="Stepper Count">
    <div :class="{'stepper': true, 'active': active, 'complete': canContinue }">
        <span class="stepper__half1"></span>
        <span class="stepper__half2"></span>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';


interface Props {
    canContinue: boolean,
    active: boolean,
    step: '1' | '2';
}

const props = withDefaults(defineProps<Props>(), {
    canContinue: false,
    active: false,
    step: '1',
});

const color = computed(() => {
    return props.active || props.canContinue ? 'green' : 'gray'
})

const getImageSrc = computed(() =>  {
   return new URL(`../assets/img/${props.step}${color.value}.svg`, import.meta.url).href;
});

</script>

<style scoped lang="scss">

.stepper {
    display: flex;
    margin-bottom: 20px;

    &__half1, &__half2 {
        width: 50%;
        height: 5px;
        background-color: #ddd;
    }

    &.active {
        .stepper__half1 {
            background-color: var(--primary-green);
        }
    }

    &.complete {
        .stepper__half1, 
        .stepper__half2 {
            background-color: var(--primary-green);
        }
    }
}
</style>