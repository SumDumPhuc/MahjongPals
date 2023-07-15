import React, { useEffect, useState } from 'react';
import {auth} from '../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    },)

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign Out Successful');
            setAuthUser(null);
        }).catch(error => console.log(error))
    }

  return (
    <div className='text-center'>
        { authUser ? <><p>{`Signed in as ${authUser.email}`}</p>
        <button onClick={userSignOut}>Sign Out</button></> : <p>No user signed in</p> }
    </div>
  )
}

export default AuthDetails;