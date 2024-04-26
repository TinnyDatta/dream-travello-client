
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
// google & github providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ( {children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    // user creation
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
     return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
     return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

     // observer
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
         console.log(user)
             if (user) {
               setUser(user);
               
               
             }
            //  setLoading(false);
             
           });
           return () => {
             unSubscribe();
           }
     }, [])

const allValues = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    user
}

    return (
        <AuthContext.Provider value={allValues}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
