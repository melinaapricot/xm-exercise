
<template>
    <form class="registration-form" @submit.prevent="submitForm">
        <div v-if="!formSubmitted">
            <BaseInput v-model="formDataStep2.eMail" input-type="email" label="Email" @update:modelValue="v$.eMail.$validate"/>
                <span class="registration-form__error" v-for="error in v$.eMail.$errors" :key="error.$uid">{{ error.$message }}</span>

            <BaseInput v-model="formDataStep2.password" input-type="password" label="Password" @update:modelValue="v$.password.$validate"></BaseInput>
            <span class="registration-form__error" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>

            <button class="registration-form__btn" type="submit" :disabled="!canContinue">REGISTER NOW</button>
        </div>
    </form>
    <div v-if="formSubmitted">
        <h3>Registration Successful</h3>
        <p>Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
    </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators';
import { reactive, ref, computed, watch } from 'vue';



const emit = defineEmits(['StepTwo:StepComplete'])

const canContinue = ref(false);

const formSubmitted = ref(false);

const formDataStep2 = reactive({
    eMail: "",
    password: "",
})

const passwordValidator = {
    oneOrMoreNumbers: helpers.withMessage(() => '1 or more numbers', function(value: string):boolean {
        return /\d+/.test(value);
    }),
    oneOrMoreLowerCase: helpers.withMessage(() => '1 or more lowercase letters', function(value: string):boolean {
        return /[a-z]+/.test(value);
    }),
    oneOrMoreUpperCase: helpers.withMessage(() => '1 or more uppercase letters', function(value: string):boolean {
        return /[A-Z]+/.test(value);
    }),
}

const rules = computed(() => {
    return {
        eMail: {email, required},
        password: {
            required,
            minLength: minLength(8), 
            maxLength: maxLength(15),
            ...passwordValidator
        },
    }
})

watch(formDataStep2, () => {
    if( !v$.value.eMail.$invalid && !v$.value.password.$invalid) {
        canContinue.value = true;
    } else canContinue.value = false;

})
const v$ = useVuelidate(rules, formDataStep2);

const submitForm = async () => {
    const result = await v$.value.$validate();
    console.log('FORM SUBMITTED', formDataStep2)

    if (result) {
        formSubmitted.value = true;
        emit('StepTwo:StepComplete')
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
        display: flex;
        flex-direction: column;
    }
    &__btn:disabled {
        background-color: gray;
    }
}

</style>