import { auth, storage } from './firebase'

export const signup = async (email, password, additionalInfo) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    const photoURL = await storage
        .ref('avatars/defaultAvatar.png')
        .getDownloadURL()

    await user.updateProfile({
        photoURL,
        ...additionalInfo,
    })
}

export const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

export const logout = () => auth.signOut()
