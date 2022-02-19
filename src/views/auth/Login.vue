<template>
  <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" required placeholder="Введите вашу почту">
      <input v-model="password" type="password" required placeholder="Введите пароль">
      <button>Войти</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '@/composables/useLogin'
export default {
    setup(props, context) {
        const email = ref("")
        const password = ref("")

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value);
            if(!error.value) {
                context.emit("login")
            }
        }


        return { email, password, handleSubmit, error}
    }
}
</script>

<style>

</style>