<template>
  <div class="welcome">
    <div v-if="showForm">
      <h2>Регистрация</h2>
      <Signup @signup="enterChat" />
      <p>Уже есть аккаунт? <span @click="showForm = !showForm">Войти</span></p>
    </div>
    <div v-else>
      <h2>Войти</h2>
      <Login @login="enterChat" />
      <p>
        Всё ещё нет аккаунта?
        <span @click="showForm = !showForm">Создать аккаунт</span>
      </p>
    </div>
  </div>
</template>

<script>
import Signup from './auth/Signup.vue'
import Login from './auth/Login.vue'
import { useRouter } from 'vue-router'
import { ref } from '@vue/reactivity'
export default {
  components: { Signup, Login },
  setup() {
    const showForm = ref(true)
    const router = useRouter()
    const enterChat = () => {
      router.push({ name: 'Home' })
    }
    return { showForm, enterChat }
  },
}
</script>

<style>
p {
  font-size: 20px;
   text-align: center;
}
h2 {
  text-align: center;
  font-size: 40px;
}
@media(max-width: 340px) {
  h2 {
  font-size: 25px;
}
}
.welcome form {
  max-width: 400px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
  color: #999;
  margin: 20px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  border-radius: 20px;
}
</style>
