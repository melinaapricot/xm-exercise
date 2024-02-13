<template>
    <div class="registration-form">
        <ValidationFirstStep v-if="!firstStepComplete" @StepOne:StepComplete="firstStepComplete = true"/>
        <ValidationSecondStep v-if="firstStepComplete"/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ValidationFirstStep from './ValidationFirstStep.vue';
import ValidationSecondStep from './ValidationSecondStep.vue';
import { useMediaQuery } from '@vueuse/core';

const firstStepComplete = ref(false);


const isTablet = useMediaQuery('(min-width: 768px)')

</script>
<style scoped lang="scss">
.registration-form {
    text-align: left;
    width: 100%;
    &__error {
        color: red;
    }
    &__btn:disabled {
        background-color: gray;
    }

    @media (min-width: 768px) {
        width: 530px;
    }
}
</style>