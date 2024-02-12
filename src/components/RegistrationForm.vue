<template>
    <ValidationFirstStep v-if="!firstStepComplete" @StepOne:StepComplete="firstStepComplete = true"/>
    <ValidationSecondStep v-if="firstStepComplete"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ValidationFirstStep from './ValidationFirstStep.vue';
import ValidationSecondStep from './ValidationSecondStep.vue';

const firstStepComplete = ref(false)
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