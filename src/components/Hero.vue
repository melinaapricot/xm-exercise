<template>
    <section class="hero">
        <div class="hero__wrap">
            <div class="hero__texts">
                <span class="hero__pre-title">TRADE WITH</span>
                <h1 class="hero__title"> 
                    <b>Zero Swaps</b> on All XM Ultra Low Accounts for more than 25 instruments!
                </h1>
                <p class="hero__subtitle">Enjoy spreads <b>as low as 0.6 pips</b> and <b>leverage up to 1000:1</b> on instruments like <b>EURUSD, USDJPY, EURJPY, GBPUSD,</b> and <b>Gold</b>.</p>
            </div>
            <button class="hero__button">OPEN ACCOUNT</button>
            <p class="hero__demo">New to trading? Try a <a href="#">Demo account</a>.</p>
            <span class="hero__disclaimer">Terms and Conditions apply<small>*</small>. To read the full T&Cs,  <a class="hero__red-link">click here</a>.</span>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.hero {
    display: block;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__wrap {
        margin-top: 83px;
        margin-bottom: 100px;
        max-width: 500px;
        padding: 0 15px;
    }

    &__pre-title {
        width: 100%;
        display: block;
        font-size: var(--font-size-small);
        text-align: center; 
        color: #ddd;
        line-height: 246.875%;
        margin-bottom: 20px;
        letter-spacing: 2px;
    }

    &__title {
        line-height: 135.714%;
    }

    &__title, &__subtitle {
        margin-bottom: 30px;
    }

    &__subtitle, &__demo {
        font-size: var(--font-size-small);
    }

    &__disclaimer {
        margin-top: 15px;
        font-size: var(--font-size-tiny);
        line-height: 18px;
        small {
            color: var(--color-red);
        }
    }

    &__red-link {
        text-decoration: none;
        color: var(--color-red);
        cursor: pointer
    }

    &__button {
        width: 290px;
        text-decoration: none;
        border: none;
        height: 40px;
        display: inline-block;
        text-align: center;
        font-size: 24px;
        padding: 6px;
        margin-bottom: 15px;
        cursor: pointer;
    }

    @media (min-width: 768px) {

        &__wrap {
            margin: 100px auto;
        }

        &__pre-title, &__title, &__subtitle, &__button {
            margin-bottom: 25px;
        }

        &__button {
            width: 345px;
        }
    }

    @media (min-width: 1200px) {

        &__title, &__subtitle, &__button {
            margin-bottom: 30px;
        }

        &__title {
            font-size: 36px;
        }

        &__subtitle {
            font-size: var(--font-size-normal);
        }

        &__wrap {
            max-width: 640px;
        }
    }
}

</style>