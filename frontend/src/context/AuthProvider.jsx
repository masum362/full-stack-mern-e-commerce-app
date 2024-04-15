import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    const updateUser = (currentUser, name, image) => {
        return updateProfile(currentUser, {
            displayName: name, photoURL: image
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
            } else {
                console.log("there's no current user");
                setUser(null)
                setLoading(false);
            }
        })


        return () => {
            unSubscribe();
        }
    }, [])


    const authItem = { user, loading, registerUser, loginUser, logoutUser, updateUser }

    return (
        <AuthContext.Provider value={authItem}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider