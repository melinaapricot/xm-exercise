<template>
    <form class="registration-form" @submit.prevent="submitStepOne">
        <Stepper :can-continue="canContinue" :active="v$.$anyDirty"/>
    <div>
        <BaseInput v-model="formDataStep1.fullName" :valid-state="v$.fullName.$dirty && (v$.fullName.$errors.length <= 0)" :error-state="v$.fullName.$dirty && (v$.fullName.$errors.length > 0)" input-type="text" label="Full Name" @update:modelValue="v$.fullName.$validate"/>
        <span class="registration-form__error" v-for="error in v$.fullName.$errors" :key="error.$uid">{{ error.$message }}</span>

        <BaseInput v-model="formDataStep1.age" :valid-state="v$.age.$dirty && (v$.age.$errors.length <= 0)" input-type="date" label="Age" @update:modelValue="v$.age.$validate"/>
        <span v-for="error in v$.age.$errors" :key="error.$uid">{{ error.$message }}</span>

        <button class="registration-form__btn" input-type="submit" :disabled="!canContinue">CONTINUE</button>
    </div>
</form>
</template>
<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import Stepper from './Stepper.vue'
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, ref, computed, watch } from 'vue';


const emit = defineEmits(['StepOne:StepComplete'])

const stepOneComplete = ref(false);

const formActive = ref(false);

const canContinue = ref(false);

const formDataStep1 = reactive({
    fullName: "",
    age: null,
})

const nameValidator = {
    noNumbersOrSpecialCharacters: helpers.withMessage(() => 'Please Enter Valid Name', function(value: string):boolean {
        return /^[a-zA-Z\s]*$/.test(value);
    })
}

const rules = computed(() => {
    return {
        fullName: {
            required: helpers.withMessage('Please Enter Valid Name', required),
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

watch(formDataStep1, () => {
    if(v$.value.$anyDirty) {
        formActive.value = true
    }

    if( !v$.value.fullName.$invalid && !v$.value.age.$invalid) {
        canContinue.value = true;
    } else canContinue.value = false;
})
</script>

<style scoped lang="scss">
.registration-form {
    text-align: left;
    &__error {
        color:var(--color-red);
    }
    &__btn {
        margin-top: 30px;
        width: 290px;
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

    &__stepper {
        display: flex;

        .registration-form__half1, .registration-form__half2 {
            width: 50%;
            height: 5px;
            background-color: #ddd;
        }
        .registration-form__half1,  {
            height: 5px;
        }
        &.active {
            .registration-form__half1 {
                background-color: var(--primary-green);
            }
        }

        &.complete {
            .registration-form__half1 {
                background-color: var(--primary-green);
            }
            .registration-form__half2 {
                background-color: var(--primary-green);
            }
        }
    }
}

</style>