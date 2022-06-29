<template>
  <div class="tags-cloud">
    <h3>Теги</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { id: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from '@/composables/useTags'
export default {
  props: ['posts'],
  setup(props) {
    const { tags } = useTags(props.posts)

    return { tags }
  },
}
</script>

<style>
.tags-cloud {
  padding: 10px;
  background-color: rgb(231, 204, 154);
  border-radius: 20px;
}
.tags-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tags-cloud div {
  display: inline-block;
  padding: 10px;
}
.tags-cloud a {
  color: #444;
  text-decoration: none;
  transition: 1s;
}
.tags-cloud a:hover {
  border-bottom: 2px solid #ff8800;
}

.tags-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
