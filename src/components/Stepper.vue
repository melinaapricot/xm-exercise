<template class="stepper">
    <div class="stepper__header">
        <img class="stepper__icon" :src="getImageSrc" alt="Stepper Count">
        <p class="stepper__step-number">Step {{ step }}</p>
    </div>
    <div :class="{'stepper__bar': true, 'active': active, 'complete': canContinue }">
        <span class="stepper__half1"></span>
        <span class="stepper__half2"></span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


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

.stepper__bar {
    display: flex;
    margin-bottom: 27px;

    .stepper__half1, .stepper__half2 {
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
.stepper__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}
.stepper__icon {
    width: 23px;

    @media (min-width: 768px) {
        width: 32px;
    }
}

.stepper__step-number {
    font-size: 15px;
    font-weight: var(--font-weight-extra-bold);
}
</style>