<template>
  <mp-flex gap="3" direction="column">
    <mp-text font-weight="bold" text-align="center">Form submission</mp-text>
    <mp-form-control control-id="name" :is-invalid="$v.form.name.$error">
      <mp-form-label>Name</mp-form-label>
      <mp-input v-model="form.name" placeholder="input your name" />
      <mp-form-error-message v-if="$v.form.name.$error">
        You must fill name
      </mp-form-error-message>
    </mp-form-control>
    <mp-flex gap="3">
      <mp-button @click="onSubmit"> Submit </mp-button>
      <mp-button @click="onReset"> Reset </mp-button>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "FormSubmission",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  validations: {
    form: {
      name: { required },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      console.log(this.form.name);
    },
    onReset() {
      this.$v.$reset();
    },
  },
};
</script>
