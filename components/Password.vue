<template>
  <mp-flex gap="3" direction="column">
    <mp-text font-weight="bold" text-align="center">Password</mp-text>
    <mp-form-control control-id="name" :is-invalid="$v.form.password.$error">
      <mp-form-label> Password </mp-form-label>
      <mp-input v-model="form.password" placeholder="input your password" />
      <mp-form-error-message v-if="$v.form.password.$error">
        You must fill password
      </mp-form-error-message>
    </mp-form-control>

    <mp-form-control
      control-id="name"
      :is-invalid="$v.form.confirmPassword.$error"
    >
      <mp-form-label> Confirm password </mp-form-label>
      <mp-input
        v-model="form.confirmPassword"
        placeholder="input your password"
      />
      <mp-form-error-message v-if="!$v.form.confirmPassword.required">
        You must fill confirm password
      </mp-form-error-message>
      <mp-form-error-message v-else-if="!$v.form.confirmPassword.sameAsPassword">
        Passwords must same as password
      </mp-form-error-message>
    </mp-form-control>
    <mp-flex gap="3">
      <mp-button @click="onSubmit"> Submit </mp-button>
      <mp-button @click="onReset"> Reset </mp-button>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Password",
  data() {
    return {
      form: {
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    form: {
      password: { required },
      confirmPassword: {
        required,
        sameAsPassword: sameAs(function () {
          return this.form.password;
        }),
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      console.log(this.form);
    },
    onReset() {
      this.$v.$reset();
    },
  },
};
</script>
