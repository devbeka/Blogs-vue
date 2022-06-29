<template>
  <div v-if="post" class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ body }}</p>
    <router-link
      :to="{ name: 'Tags', params: { id: tag } }"
      v-for="tag in post.tags"
      :key="tag" >
      #{{ tag }}
    </router-link>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  props: ['post'],
  setup(props) {
    const body = computed(() => {
      return props.post.body.substring(0, 50) + '...'
    })
    return { body }
  },
}
</script>

<style>
.post {
  margin: 0 0 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
  background-color: rgba(192, 192, 192, 0.541);
  border-radius: 40px;
  padding-left: 20px;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
  position: relative;
  z-index: 5;
}
.post p {
  font-size: 18px;
  padding: 15px;
  text-align: start;
}
.post h3::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #f0850c;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

@media  (max-width: 425px) {
  .post h3 {
    font-size: 26px;
  }
  .post p {
    margin: 10px 0;
    font-size: 20px;
    max-width: 310px;
    overflow: hidden;
  }
}
</style>
