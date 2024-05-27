

import React, {useContext, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

import { AuthContext } from './AuthContext'; 






function SesionExpired() {
    const timeout = 700000 //Activity Timeout in milliseconds.
    const authContext = useContext(AuthContext);
   const cookies = new Cookies()
   const onIdle = () => {
    authContext.handleLogout();
    cookies.remove('email')
    window.location.hash = '/login'
    Swal.fire({

        title: "La sesión expiró por inactividad. Inicie sesión de nuevo.", 
        icon: "info"
       
        })
}
 
const getRemainingTime = useIdleTimer({
    onIdle,
    timeout,
    throttle: 500
})
console.log(getRemainingTime)
    return (

        <div>
        </div>
    )
}
export default SesionExpired