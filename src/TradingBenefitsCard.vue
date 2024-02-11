<template>
    <div class="card">
        <div class="card__header">
            <h3 class="card__title">{{ props.title }}</h3>
            <img class="card__icon" :src="props.iconSrc" :alt="props.iconAlt">
        </div>
        <div class="card__divider"></div>
        <p class="card__text" v-html="props.text"> </p>
     </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    text: string,
    iconSrc: string,
    iconAlt: string,
}>()


</script>

<style scoped lang="scss">


.card {
        background-color: #000;
        height: 220px; 
        border-radius: 10px;
        padding: 18px 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    &__title {
        font-size: 20px;
        font-weight: var(--font-weight-extra-bold);
        line-height: 25px;
        text-align: left;
    }

    &__icon {
        height: 58px;
    }

    &__text {
        width: 85%;
        text-align: left;
    }


    &__divider {
        border-bottom: 2px solid var(--primary-green);
        margin: 20px 0;
        width: 50px;
    }

    @media(min-width: 768px) {
        height: 200px;

        &__title {
            font-size: 25px;
            margin-bottom: 12px;
            line-height: 30px;
        }

        &__header {
        justify-content: space-between;
        align-items: flex-end;
    }

        &__icon {
        height: 85px;
        }

        &__divider {
            margin: 15px 0 15px;
        }

        &__text {
            width: 70%;
            text-align: left;
        }
    }

    @media(min-width: 1200px) {
        padding: 25px 25px 0 45px;
        height: 249px;

        &__title {
            margin-bottom: 0;
        }

        &__icon {
            height: 71px;
        }

        &__divider {
            margin: 17px 0 17px;
        }

        &__text {
            font-size: var(--font-size-normal);
            width: 90%;
        }

    }
}

</style>