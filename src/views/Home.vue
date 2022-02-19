<template>
  <div>
    <div v-if="posts.length" class="grid ">
      <div>
        <PostsList :posts="posts"/>
      </div>
      <TagsCloud :posts="posts"/>
    </div>
    <Spinner v-else/>
    <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner'
import TagsCloud from '@/components/TagsCloud'
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { watch } from '@vue/runtime-core'
export default {
  components:{PostsList, Spinner, TagsCloud},
  setup() {
    const { user } = getUser()
    const router = useRouter()
    watch(user, ()=> {
      if (!user.value) {
        router.push("/Welcome");
      }
    })

    const {posts, error, fetchPosts} = getPosts()
    fetchPosts()
    return {posts, error}
  }
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>