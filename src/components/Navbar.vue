<template>
  <header v-if="user">
    <h1>Блог {{ user.displayName }}</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Главная</router-link>
      <router-link :to="{ name: 'Create' }">Создать Пост</router-link>
      <button @click="handleClick">Выйти</button>
    </nav>
  </header>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
export default {
  components: {},
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        router.push({ name: 'Welcome' })
      }
    }
    return { error, handleClick, user }
  },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: rgba(32, 131, 218, 0.493);
  border-radius: 30px;
}
header h1 {
  color: #333;
  font-size: 48px;
}
@media (max-width: 465px) {
  header h1 {
    font-size: 28px;
  }
}
header a {
  color: #333;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;
}
header a.router-link-active {
  color: #222;
  border-bottom: 3px solid #ff8800;
  font-weight: bold;
}
header nav {
  display: flex;
  align-items: center;
}
@media (max-width: 465px) {
  header nav {
    display: block;
    text-align: right;
  }
}
header nav button {
  margin: 0 0 0 20px;
  border-radius: 15px;
  transition: 1s;
}
@media (max-width: 465px) {
  header nav button{
    text-align: right;
    margin-left: 50%;
    margin-top: 10px;
  }
}
header nav button:hover {
  background: #cf7b1b;
}
</style>
