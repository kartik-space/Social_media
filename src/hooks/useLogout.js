import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../Firebase/firebase'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'

const useLogOut = () => {
    const [signOut , isLoggingOut ,error ] = useSignOut(auth)
    const showToast = useShowToast();
    const logoutUser = useAuthStore((state) => state.logout); 

    const handleLogout = async() => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
            console.log("logged out")
            logoutUser()
        } catch (error) {
            showToast('Error' , error.message , 'error')
        } 
    }
  return {handleLogout , isLoggingOut , error}
}

export default useLogOut