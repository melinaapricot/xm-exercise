<template>
    <div class="input">
        <label>{{ label }}</label>
        <div :class="{'input__wrap': true }">
            <input :class="{'input__field': true, 'error': errorState, 'valid': validState && !errorState}" :type="inputType" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)" v-bind="$attrs">
        </div>
    </div>

</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';


interface Props {
    label: string,
    modelValue: string | number | null,
    inputType: InputTypeHTMLAttribute;
    errorState?: boolean,
    validState: boolean,
}

withDefaults(defineProps<Props>(), {
    label: '',
    modelValue: '',
    inputType: 'text',
    errorState: undefined,
    validState: false,
});

</script>

<style scoped lang="scss">

.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    &__field {
        height: 40px;
        background: #f7f7f7;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #A9A9A9;
        
        &.valid {
            border: 2px solid var(--primary-green); 
        }

        &.error {
            border: 2px solid var(--color-red); 
        }
    }
}

</style>