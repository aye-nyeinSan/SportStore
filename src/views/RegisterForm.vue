<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true
      return 'Name needs to be at least 2 characters.'
    },
    phone(value) {
      if (/^[0-9-]{7,}$/.test(value)) return true
      return 'Phone number needs to be at least 7 digits.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
      return 'Must be a valid e-mail.'
    },
    select(value) {
      if (value) return true
      return 'Select an item.'
    },
    checkbox(value) {
      if (value === '1') return true
      return 'Must be checked.'
    },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <v-container class="form-container">
    <div class="form-wrapper">
      <h2 class="form-title">Register</h2>
      <form @submit.prevent="submit" class="form-content">
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Firstname"
          class="form-input"
        ></v-text-field>

        <v-text-field
          v-model="phone.value.value"
          :counter="7"
          :error-messages="phone.errorMessage.value"
          label="Last Name"
          class="form-input"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Email"
          class="form-input"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Password"
          class="form-input"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="Confirm Password"
          class="form-input"
        ></v-text-field>
        <v-checkbox label="Would you like to accept terms and conditions?"></v-checkbox>

        <v-btn type="submit" class="form-button">Register</v-btn>
      </form>
    </div>
  </v-container>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.form-wrapper {
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.form-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-input {
  background-color: #f8f8f8;
  border-radius: 5px;
}

.form-checkbox {
  display: flex;
  align-items: center;
}

.form-button {
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
