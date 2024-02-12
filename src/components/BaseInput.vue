<template>
    <div class="input">
        <label>{{ label }}</label>
        <input :type="inputType" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)" v-bind="$attrs">
    </div>

</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';


interface Props {
    label: string,
    modelValue: string | number | null,
    inputType: InputTypeHTMLAttribute;
}

withDefaults(defineProps<Props>(), {
    label: '',
    modelValue: '',
    inputType: 'text'
});

</script>

<style scoped lang="scss">

.input {
    display: flex;
    flex-direction: column;
}

</style>