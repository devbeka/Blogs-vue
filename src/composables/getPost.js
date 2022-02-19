import {ref} from 'vue'
import {firestore} from '../firebase/config';
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const fetchPost = async () => {
        try {
            const response = await firestore.collection('posts').doc(id).get()

            if(!response.exists) {
                throw Error('Нет данных в базе')
            }

            post.value = {...response.data(), id}
        }
        catch(err) {
            error.value = err.message
        }
    }
    return {post, error, fetchPost}
}

export default getPost