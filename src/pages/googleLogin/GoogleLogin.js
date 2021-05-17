import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { storage as LocalStorage } from "../../services/config/storage";



const googleLogin = () => {

    const responseGoogle = (response) => {
        // debugger

        console.log(response && response.tokenId, 'success condition' );
       LocalStorage.set.authToken(response && response.tokenId);

    }

        return (
            <>
                
                                <GoogleLogin
                                    clientId="643459324249-lpj6kr7rieecrffiqmddsellu4up8vue.apps.googleusercontent.com"
                                    buttonText="Sign in With Google"
                                    onSuccess={(res)=> responseGoogle(res)}
                                    onFailure={(res)=>responseGoogle(res)}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
            </>
        )
}

export default googleLogin;



