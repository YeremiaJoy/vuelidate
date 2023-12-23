<template>
  <mp-flex gap="3" direction="column">
    <mp-text font-weight="bold" text-align="center">Array</mp-text>
    <template v-for="(category, index) in form.categories">
      <mp-form-control
        :key="index"
        control-id="name"
        :is-invalid="$v.form.categories.$each[index].$error"
      >
        <mp-form-label>{{ category.label }}</mp-form-label>
        <mp-input
          v-model="form.categories[index].value"
          placeholder="input your name"
        />
        <mp-form-error-message v-if="$v.form.categories.$each[index].$error">
          You must fill category {{ index + 1 }}
        </mp-form-error-message>
      </mp-form-control>
    </template>
    <mp-flex gap="3">
      <mp-button @click="onSubmit"> Submit </mp-button>
      <mp-button @click="onReset"> Reset </mp-button>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Array",
  data() {
    return {
      form: {
        categories: [
          {
            label: "Category 1",
            value: "",
          },
          {
            label: "Category 2",
            value: "",
          },
        ],
      },
    };
  },
  validations: {
    form: {
      categories: {
        $each: {
          value: { required },
        },
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      console.log(this.form.categories);
    },
    onReset() {
      this.$v.$reset();
    },
  },
};
</script>
