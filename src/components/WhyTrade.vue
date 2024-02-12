<template>
    <section class="trade">
        <h2 class="trade__title">
            Why <span>Trade</span> with XM?
        </h2>
        <div class="trade__divider"></div>
        <p class="trade__text">
            We have been providing traders around the world with the same <b>premium experience</b> for over a decade. As an <b>industry-leader</b>, we know what the modern trader needs to be <b>successful</b> in the markets.
        </p>
        <div class="trade__cards-wrap">
            <TradingBenefitsCard
                v-for="(card, index) in cardContent" 
                :key="index"
                :title="card.title"
                :text="card.text"
                :icon-src="card.iconSrc"
                :icon-alt="card.iconAlt"
                class="trade__card"
            />
        </div>
    </section> 
</template>
<script lang="ts" setup>
import TradingBenefitsCard from '@/components/TradingBenefitsCard.vue';

const getImageSrc = ( imgName:string ) =>  new URL(`../assets/img/${imgName}.png`, import.meta.url).href;

const cardContent = [
    {
        title: 'Superior Trade Execution',
        text: '<b>99%</b> of trades are executed in <b>less than a second</b>, with no requotes or rejections.',
        iconSrc: getImageSrc('fast-execusion-icon'),
        iconAlt:'Fast execution symbolic icon',
    },
    {
        title: 'Competitive Pricing',
        text: 'We offer some of the <b>lowest spreads</b>  and we don’t charge commissions.',
        iconSrc: getImageSrc('competitive-pricing-icon'),
        iconAlt:'Competitive pricing symbolic icon',
    },
    {
        title: 'Advanced Technology',
        text: 'Trade on <b>MT4</b> or <b>MT5</b> , with expert tools, across desktop, web and mobile',
        iconSrc: getImageSrc('tech-icon'),
        iconAlt:'Advanced technology symbolic icon',
    },
    {
        title: 'Start with $5',
        text: 'Start trading your preferred instruments with as little as a <b>$5 minimum deposit.</b>',
        iconSrc: getImageSrc('dollar-icon'),
        iconAlt:'Dollar icon',
    }
]

</script>
<style lang="scss" scoped>

.trade {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;
    padding: 0 6%;
    margin-bottom: var(--section-margin-bottom);


    &__title {
        font-size: var(--font-size-headline);
        font-weight: var(--font-weight-light);
        padding: 0 40px;
        line-height: 43px;

        span {
            font-weight: var(--font-weight-extra-bold);
        }
    }

    &__divider {
        border-bottom: 2px solid var(--primary-green);
        margin: 25px 0;
        width: 50px;
    }


    &__text {
        font-size: var(--font-size-small);
        line-height: 20px;
    }


    &__cards-wrap {
        margin-top: 60px;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: (4, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }


    &__card:nth-of-type(1) { 
        grid-area: 1 / 1 / 2 / 2;
    }
    &__card:nth-of-type(2) { 
        grid-area: 2 / 1 / 3 / 2;
    }
    &__card:nth-of-type(3) { 
        grid-area: 3 / 1 / 4 / 2;
    }
    &__card:nth-of-type(4) { 
        grid-area: 4 / 1 / 5 / 2;
    } 

    @media(min-width: 768px) {
        &__cards-wrap {
            max-width: 530px;
        }

        &__text {
            max-width: 642px;
            line-height: 22px;
        }
    }

    @media (min-width: 1200px) {
        margin-bottom: var(--section-margin-bottom-medium);

        &__cards-wrap {
            max-width: 1020px;
            margin-top: 32px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
        &__card:nth-of-type(1) { 
            grid-area: 1 / 1 / 3 / 2;
            height: 543px;
            position: relative;

            :deep(.card__header) {
                margin-top: 30px;
            }
            :deep(.card__icon) {
                position: absolute;
                bottom: 37px;
                left: 42px;
                height: 203px;
            }
        }
        &__card:nth-of-type(2) { 
            grid-area: 1 / 2 / 2 / 4;
            :deep(.card__header) {
                align-items: end;
            }

            :deep(.card__text) {
                max-width: 70%;
            }

            :deep(.card__title) {
                max-width: 212px;
            }

            :deep(.card__icon) {
                height: 90px;
            }

            
        }
        &__card:nth-of-type(3) { 
            grid-area: 2 / 2 / 3 / 3;
        }
        &__card:nth-of-type(4) { 
            grid-area: 2 / 3 / 3 / 4;
        }
    }
}

</style>