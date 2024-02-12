<template>
    <div :class="{'stepper': true, 'active': active, 'complete': canContinue }">
        <span class="stepper__half1"></span>
        <span class="stepper__half2"></span>
    </div>
</template>

<script setup lang="ts">

interface Props {
    canContinue: boolean,
    active: boolean,
}

withDefaults(defineProps<Props>(), {
    canContinue: false,
    active: false,
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