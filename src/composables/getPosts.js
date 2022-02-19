import {ref} from 'vue'
import { firestore } from '@/firebase/config'
const getPosts = () => {
    const posts = ref([])
    const error = ref('')
    const fetchPosts = async () => {
        try{
          const response = await firestore.collection('posts').orderBy('createdAt', 'desc').get()
    
          posts.value = response.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          })
        }
        catch(err){
          error.value = err.message
        }
    }
    return {posts, error, fetchPosts}
}

export default getPosts