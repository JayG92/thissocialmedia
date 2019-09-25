import React from "react";

export const UserContext=React.createContext({
    user:{},
    token:"",
    updateUser:() => {}
});


export const withContext = Component => {
return props => {
    return (
        <UserContext.Consumer>
            {globalState => {
                return <Component {...globalState}{...props}/>
            }}
        </UserContext.Consumer>
    )
}

}
