import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../../auth/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { userAtom } from '../store/user.atom';


const Auth = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) =>
      console.error('Error during sign in:', error)
    );
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          // email: user.email,
          photoURL: user.photoURL,
          // uid: user.uid
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  useEffect(() => {
    if (user && user.photoURL) {
      navigate('/')
    }
  }, [navigate, user]);

  return (
    <section className="min-h-screen pt-16 pb-6 px-4 flex justify-center items-center">
      <div className="border border-white p-6 rounded-md flex flex-col items-center">
        <h1 className="text-center text-2xl">Authentication</h1>
        <button
          onClick={signUpWithGoogle}
          className="mt-6 bg-[#9d9d9d] hover:bg-secondary py-2 px-4 rounded-md text-white"
        >
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default Auth;
