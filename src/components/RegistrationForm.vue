<template>
    <ValidationFirstStep v-if="!firstStepComplete" @StepOne:StepComplete="firstStepComplete = true"/>
    <ValidationSecondStep v-if="firstStepComplete"/>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ValidationFirstStep from './ValidationFirstStep.vue';
import ValidationSecondStep from './ValidationSecondStep.vue';
import { useMediaQuery } from '@vueuse/core';

const firstStepComplete = ref(false);


const isDesktop = useMediaQuery('(min-width: 1200px)')

watch(isDesktop, () => {
    console.log(isDesktop)
})
</script>
<style scoped lang="scss">
.registration-form {
    text-align: left;
    &__error {
        color: red;
    }
    &__btn:disabled {
        background-color: gray;
    }
}
</style>