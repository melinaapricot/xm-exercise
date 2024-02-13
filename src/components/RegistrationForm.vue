<template>
    <div class="registration-form">
        <ValidationFirstStep v-if="!firstStepComplete" @StepOne:StepComplete="firstStepComplete = true"/>
        <ValidationSecondStep v-if="firstStepComplete"/>
        <p class="registration-form__create-account">Don’t have an account? <a href="#">Create one here</a> and register for the event</p>
        <p class="registration-form__disclaimer">Terms and Conditions apply*. To read the full T&Cs,  <a href="#" class="hero__red-link">click here.</a></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

    &__btn:disabled {
        background-color: gray;
    }

    &__create-account {
        font-size: var(--font-size-small);
        margin: 25px 0;
        text-align: center;

        a {
            color: var(--color-red);
        }
    }

    &__disclaimer {
        font-size: var(--font-size-tiny);
        text-align: center;
        a {
            color: var(--color-red);
            text-decoration: none;
        }
    }

    @media (min-width: 768px) {
        width: 530px;
    }
}
</style>