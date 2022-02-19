<template>
  <div v-if="post" class="post">
      <h3>{{post.title}}</h3>
      <p class="pre">{{post.body}}</p>
      <button class="delete" @click="handleDelete">Удалить Пост</button>
  </div>
  <div v-else>
      <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner'
import { firestore } from '@/firebase/config'
import { useRouter } from 'vue-router'
export default {
    components:{ Spinner },
    props: ['id'],
    setup(props) {
        const router = useRouter()

        const {post, error, fetchPost} = getPost(props.id);


        fetchPost();

        const handleDelete = async () => {

          await firestore.collection('posts').doc(props.id).delete()
          router.push('/')
        }

        return {post, error, handleDelete}
    }
}
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>