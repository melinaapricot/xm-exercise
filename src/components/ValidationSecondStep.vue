
<template>
    <form class="form" @submit.prevent="submitForm">
        <Stepper v-if="!formSubmitted" :can-continue="canContinue" :active="v$.$anyDirty" :step="'2'"/>
        <div v-if="!formSubmitted">
            <BaseInput v-model="formDataStep2.eMail" :valid-state="v$.eMail.$dirty && (v$.eMail.$errors.length <= 0)" :error-state="v$.eMail.$dirty && (v$.eMail.$errors.length > 0)" input-type="email" label="Email" @update:modelValue="v$.eMail.$validate"/>
            <span class="form__error" v-for="error in v$.eMail.$errors" :key="error.$uid">{{ error.$message }}</span>

            <BaseInput v-model="formDataStep2.password" :valid-state="v$.password.$dirty && (v$.password.$errors.length <= 0)" :error-state="v$.password.$dirty && (v$.password.$errors.length > 0)" input-type="password" label="Password" @update:modelValue="v$.password.$validate"></BaseInput>
            <span class="form__error" v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>

            <button class="form__btn" type="submit" :disabled="!canContinue">REGISTER NOW</button>
        </div>
    </form>
    <div v-if="formSubmitted">
        <h3>Registration Successful</h3>
        <p>Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your registration.</p>
    </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import Stepper from './Stepper.vue'
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
    oneOrMoreSpecialChars: helpers.withMessage(() => "1 or more special characters (#[]()@$&*!?|,.^/\\+_-)", function(value: string):boolean {
        return /[#[\]()@$&*!?|,.^+_-]+/.test(value);
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
const v$ = useVuelidate(rules, formDataStep2);

watch(formDataStep2, () => {
    if( !v$.value.eMail.$invalid && !v$.value.password.$invalid) {
        canContinue.value = true;
    } else canContinue.value = false;
})

const submitForm = async () => {
    const result = await v$.value.$validate();

    if (result) {
        formSubmitted.value = true;
        emit('StepTwo:StepComplete')
    } else {
        console.error('error, form not submitted');
    }
}


</script>

<style scoped lang="scss">
.form {
    text-align: left;
    &__error {
        color: var(--color-red);
        display: flex;
        flex-direction: column;
    }

    &__btn {
        margin-top: 30px;
        width: 100%;
        text-decoration: none;
        border: none;
        height: 40px;
        display: inline-block;
        text-align: center;
        font-size: 24px;
        padding: 6px;
        cursor: pointer;
    }

    &__btn:disabled {
        background-color: #cccccc;
    }
}

</style>