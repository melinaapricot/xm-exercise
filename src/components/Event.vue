<template>
   <div class="event__wrap">
        <div class="event__details">
            <div class="event__inner-wrap">
                <FontAwesomeIcon class="event__icon" icon="fa-regular fa-calendar-check" />
                <span class="event__text">05 NOVEMBER 2022</span>
            </div>
        </div>
        <div class="event__details">
                <div class="event__inner-wrap">
                    <FontAwesomeIcon class="event__icon" icon="fa-regular fa-clock" />
                    <span class="event__text">16:00 – 23:00</span>
                </div>
        </div>
        <div class="event__details">
            <div class="event__inner-wrap">
                <FontAwesomeIcon class="event__icon" icon="location-dot" />
                <span class="event__text">CENTARA GRAND & BANGKOK CONVENTION CENTRE, BANGKOK</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.event {
    &__wrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }  
    
    &__icon {
        font-size: 26px;
    }

    &__details {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding-bottom: 20px;
    }

    &__details:last-of-type {
        border-bottom: unset;
    }

    &__text {
        font-size: var(--font-weight-bold);
        font-weight: 500;
        line-height: 22px;
    }

    &__inner-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    @media (min-width: 768px) {
        &__wrap {
            flex-direction: row;
            gap: 0;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            height: 137px;
            align-items: center;
            max-width: 656px;
        }

        &__details {
            border-bottom: unset;
            border-right: 1px solid white;
            padding-bottom: unset;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 217px;
        }

        &__details:last-of-type {
            border-right: none;
            padding: 19px 0 0 25px;
            width: 280px;
        }
    }
}
</style>