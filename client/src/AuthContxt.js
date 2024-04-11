import { createContext, useState } from "react";

const myAuthContext = createContext()

function AuthContext(props) {

    const [token, setToken] = useState(sessionStorage.getItem("token"))

    function logIn(userToken) {
        console.log(`We have are at login Context the user token is ${userToken}`)
        setToken(userToken)
    }

    function logOut() {
        setToken("")
    }

    const exportValues = {
        token, logIn, logOut
    }

    return (
        <myAuthContext.Provider value={exportValues} {...props} />
    )
}

export { AuthContext, myAuthContext }