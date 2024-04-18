import { createContext, useState } from "react";

const myAuthContext = createContext()

function AuthContext(props) {

    const [token, setToken] = useState(sessionStorage.getItem("token")) // We setting the useState to start at the token issued. not an empty string

    //we passing the token we received from backend as an argument
    function logIn(userToken) {
        console.log(`We have are at login Context the user token is ${userToken}`)
        setToken(userToken)
    }

    function logOut() {
        setToken("")
        sessionStorage.removeItem("token")
    }

    const exportValues = {
        token, logIn, logOut
    }

    return (
        <myAuthContext.Provider value={exportValues} {...props} />
    )
}

export { AuthContext, myAuthContext }