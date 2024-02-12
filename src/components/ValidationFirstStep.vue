<template>
    <form class="registration-form" @submit.prevent="submitStepOne">
    <div>
        <BaseInput v-model="formDataStep1.fullName" input-type="text" label="Full Name" @update:modelValue="v$.fullName.$validate"/>
        <span class="registration-form__error" v-for="error in v$.fullName.$errors" :key="error.$uid">{{ error.$message }}</span>

        <BaseInput v-model="formDataStep1.age" input-type="date" label="Age" @update:modelValue="v$.fullName.$validate"/>
        <span v-for="error in v$.age.$errors" :key="error.$uid">{{ error.$message }}</span>

        <button class="registration-form__btn" input-type="submit" :disabled="!canContinue">CONTINUE</button>
    </div>
</form>
</template>
<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, ref, computed, watch } from 'vue';

const emit = defineEmits(['StepOne:StepComplete'])

const stepOneComplete = ref(false);

const canContinue = ref(false);

const formDataStep1 = reactive({
    fullName: "",
    age: null,
})

watch(formDataStep1, () => {
    if( !v$.value.fullName.$invalid && !v$.value.age.$invalid) {
        canContinue.value = true;
    } else canContinue.value = false;

})
const nameValidator = {
    noNumbersOrSpecialCharacters: helpers.withMessage(() => 'No numbers or special characters allowed', function(value: string):boolean {
        return /^[a-zA-Z\s]*$/.test(value);
    })
}

const rules = computed(() => {
    return {
        fullName: {
            required,
            ...nameValidator,
        },
        age: {required},
    }
})

const v$ = useVuelidate(rules, formDataStep1);

const submitStepOne = async () => {
    const result = await v$.value.$validate();

    if (result) {
        stepOneComplete.value = true;
        emit('StepOne:StepComplete')
    } else {
        console.error('error, form not submitted');
    }
}

</script>

<style scoped lang="scss">
.registration-form {
    text-align: left;
    &__error {
        color: red;
    }
    &__btn:disabled {
        background-color: gray;
    }
}

</style>