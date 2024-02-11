<template>
    <header class="navbar">
        <img src="../assets/img/XMLogo.svg" alt="Company Logo" class="navbar__logo">
        <ul class="navbar__menu">
            <li>
                <a href="#" class="navbar__link">XM Homepage</a>
            </li>
            <li>
                <a href="#" class="navbar__link">Support</a>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    
    &__logo {
        width: 139px;
    }

    &__menu { 
        display: none;
    }



    @media (min-width: 1200px) {
        height: 113px;
        justify-content: space-between;

        &__logo {
            margin-left: 30px;
        }

        &__menu {
            display: flex;
            list-style: none;
            gap: 40px;
            margin-right: 54px;
        }

        &__link {
            text-decoration: none;
            color: var(--color-text);
            font-size: 15px;
        }
    }
}

</style>