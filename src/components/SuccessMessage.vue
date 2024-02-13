<template>
    <div class="success">
        <span class="success__header">
            <img src="../assets/img/circle-check.svg" alt="Success icon">
            <h3 class="success__title">Registration Successful</h3>
        </span>
        <span class="success__msg">
            <FontAwesomeIcon icon="fa-caret-right" />
            Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.success {
    border: 1px solid #31B63B; background: #F3FEF4;
    color: #3C763D;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 22px 22px;
    margin-bottom: 39px;

    img {
        width: 52px;
    }

    &__header {
        display: flex;
        gap: 14px;
        align-items: center;
    }

    &__title {
        font-size: var(--font-size-headline-small);
        line-height: 117%;
    }

    &__msg {
        font-size: var(  --font-size-small);
        display: flex;
        svg {
            margin: 4px 8px 0 0;
        }
    }

    @media (min-width: 1200px) {
        width: 100%;
    }
}
</style>