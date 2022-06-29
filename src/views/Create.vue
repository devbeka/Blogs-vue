<template>
  <div class="create">
    <form>
      <label>Заголовок: </label>
      <input placeholder="Заголовок" v-model="title" type="text" />
      <label>Контент</label>
      <textarea placeholder="Контент..." v-model="body"></textarea>
      <label>Тэги</label>
      <input placeholder="добавляйте #теги по одному" v-model="tag" type="text" />
      <div class="pill" v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
      <button @click.prevent="handleAddTag">Добавить тэг</button>
      <button class="createBtn" @click.prevent="handleSubmit">Создать</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { firestore, timestamp } from '@/firebase/config'
export default {
  setup() {
    const router = useRouter()

    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const handleAddTag = () => {
      if (
        !tag.value.includes(' ') &&
        tag.value.length != 0 &&
        !tags.value.includes(tag.value.toLowerCase())
      ) {
        tags.value = [...tags.value, tag.value.toLowerCase()]
      }

      tag.value = ''
    }

    const handleSubmit = async () => {
      try {
        const newPost = {
          title: title.value,
          body: body.value,
          tags: tags.value,
          createdAt: timestamp(),
        }
        await firestore.collection('posts').add(newPost)

        await router.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    return { title, body, tags, tag, handleAddTag, handleSubmit }
  },
}
</script>

<style>
.create {
  background-color: #555;
  border-radius: 20px;
  padding: 15px;
}
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 20px;
  font-size: 16px;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  padding: 2px 0;
  position: relative;
  z-index: 2;
}
label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #f38c16;
  position: absolute;
  top: 0;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
button {
  display: block;
  margin-top: 30px;
  background: rgb(89, 182, 89);
  border-radius: 15px;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.createBtn {
  margin-top: 50px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
