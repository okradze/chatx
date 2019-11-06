import { firestore, auth } from './firebase'

export const fetchChats = async () => {
    const uid = auth.currentUser.uid

    const snapshot = await firestore
        .collection('chats')
        .where('users', 'array-contains', `users/${uid}`)
        .get()

    console.log(snapshot)

    snapshot.docs.forEach(doc => {
        console.log(doc)
    })

    return snapshot.docs
}
