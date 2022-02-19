<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="name" type="text" required placeholder="Введите ваше имя">
      <input v-model="email" type="email" required placeholder="Введите вашу почту">
      <input v-model="password" type="password" required placeholder="Введите пароль">
      <button>Создать Аккаунт</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from "@/composables/useSignup";
export default {
    setup(props, context) {
        const name = ref("")
        const email = ref("")
        const password = ref("")

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup(email.value, password.value, name.value);
            if(!error.value) {
                context.emit("signup")
            }
        }

        return { email, password, name, handleSubmit, error}
    }
}
</script>

<style>

</style>