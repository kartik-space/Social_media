import { doc, setDoc } from 'firebase/firestore';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../Firebase/firebase';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast'; // Correct import statement

const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser  = useAuthStore(state => state.login)
    // const logoutUser  = useAuthStore(state => state.logout)
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
            showToast("error", "please fill all the fields", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
              console.log("Inputs:", inputs);
                showToast("error", error.message, "error");
                return; 
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch (error) {
            showToast("error", error.message, "error");
        }
    };
    return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
