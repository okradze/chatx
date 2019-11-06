import { auth, firestore } from './firebase'

export const createUserProfileDocument = async (user, additionalData = {}) => {
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { email, metadata } = user

        await userRef.set({
            email,
            ...additionalData,
            createdAt: metadata.creationTime,
        })
    }

    return userRef
}

export const signup = async (email, password, additionalData) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    const photoURL =
        'https://firebasestorage.googleapis.com/v0/b/chatx-150d6.appspot.com/o/avatars%2FdefaultAvatar.png?alt=media&token=0d38b49b-44ca-4fb1-8425-0ed6b174c489'

    await createUserProfileDocument(user, { photoURL, ...additionalData })
}

export const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

export const logout = () => auth.signOut()
