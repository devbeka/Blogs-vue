import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set(posts.flatMap(item => item.tags))

    tags.value = [...tagSet]
    
    return { tags }
}

export default useTags