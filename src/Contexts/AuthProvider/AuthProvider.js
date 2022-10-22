import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firbase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            console.log('cuurent user in the changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscriber()
    }, [])

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const registerWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        LogOut,
        updateUserProfile,
        registerWithEmail,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;