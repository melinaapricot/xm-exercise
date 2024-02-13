<template>
    <form class="form" @submit.prevent="submitStepOne">
        <Stepper 
            :can-continue="canContinue" 
            :active="v$.$anyDirty" 
            :step="'1'"
        />
    <div>
        <BaseInput 
            v-model="formDataStep1.fullName" 
            :valid-state="v$.fullName.$dirty && (v$.fullName.$errors.length <= 0)" 
            :error-state="v$.fullName.$dirty && (v$.fullName.$errors.length > 0)" 
            input-type="text" 
            label="Full Name" 
            @update:modelValue="v$.fullName.$validate"
        />
        <div class="form__error" v-for="error in v$.fullName.$errors" :key="error.$uid">
            <span class="form__error-msg">
                <img :src="errorIcon" alt="error icon" />
                <p>{{ error.$message }}</p>
            </span>
        </div>
        <BaseInput 
            v-model="formDataStep1.age" 
            :valid-state="v$.age.$dirty && (v$.age.$errors.length <= 0)" 
            input-type="date" 
            label="Date of Birth" 
            @update:modelValue="v$.age.$validate"
        />
        <div class="form__error" 
            v-for="error in v$.age.$errors" 
            :key="error.$uid"
        > 
            <span class="form__error-msg">
                <img :src="errorIcon" alt="error icon" />
                <p>{{ error.$message }}</p>
            </span>
        </div>
        <button class="form__btn" 
            input-type="submit" 
            :disabled="!canContinue"
        >
            CONTINUE
        </button>
    </div>
</form>
</template>
<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import Stepper from './Stepper.vue'
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, ref, computed, watch } from 'vue';

const errorIcon = new URL(`../assets/img/error-dot.svg`, import.meta.url).href;

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

const getAge = (ageString: string) => {
    const today = new Date();
        const birthDate = new Date(ageString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;

}
const ageValidator = {
    //Minimum age requirements, 18 years old
    minAge: helpers.withMessage(() => 'Minimum age requirements, 18 years old', function(value: string): boolean {
        return getAge(value) >= 18;
    }),
    maxAge: helpers.withMessage(() => 'Maximum age requirements, 60 years old', function(value: string): boolean {
        return getAge(value) <= 60;
    }),
}

const rules = computed(() => {
    return {
        fullName: {
            required: helpers.withMessage('Please Enter Valid Name', required),
            ...nameValidator,
        },
        age: {
            required,
            ...ageValidator
        },
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
.form {
    text-align: left;
    &__error {
        color:var(--color-red);
        img {
            margin-right: 10px;
            width: 9px;
        }
    }

    &__error-msg {
        display: flex;
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

    &__stepper {
        display: flex;

        .form__half1, .form__half2 {
            width: 50%;
            height: 5px;
            background-color: #ddd;
        }
        .form__half1,  {
            height: 5px;
        }
        &.active {
            .form__half1 {
                background-color: var(--primary-green);
            }
        }

        &.complete {
            .form__half1 {
                background-color: var(--primary-green);
            }
            .form__half2 {
                background-color: var(--primary-green);
            }
        }
    }
}

</style>