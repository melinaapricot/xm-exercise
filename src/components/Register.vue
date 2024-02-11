<template>
    <section class="register">
        <h2 class="register__title">- Register Here -</h2>
        <p class="register__subtitle">Join us to celebrate our biggest night of the year.</p>
        <Event />
        <RegistrationForm></RegistrationForm>
    </section>
</template>

<script setup lang="ts">
import Event from './Event.vue';
</script>

<style lang="scss" scoped>
.register {
    margin: 0 auto var(--section-margin-bottom);
    text-align: center;
    padding: 0 6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    &__title {
        font-size: var(--font-size-headline-small);
        font-weight: var(--font-weight-extra-bold);
        margin-bottom: 35px;
    }

    &__subtitle {
        font-size: var(--font-size-normal);
        margin-bottom: 40px;
    }
}

</style>