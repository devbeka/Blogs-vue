<template>
  <header v-if="user">
      <h1>Блог {{ user.displayName }}</h1>
      <nav>
          <router-link :to="{name: 'Home'}">Главная</router-link>
          <router-link :to="{name: 'Create'}">Создать Пост</router-link>
          <button @click="handleClick">Выйти</button>
      </nav>
  </header>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
  import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    };
    return { error, handleClick, user };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
header nav{
  display: flex;
  align-items: center;
}
header nav button {
  margin: 0 0 0 20px;
}
</style>