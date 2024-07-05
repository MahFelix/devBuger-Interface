import React, { createContext, useContext} from 'react'

import PropTypes from 'prop-types'


const UserContext = createContext({})
 
export const UserProvider = (children) => {
    const user = { name: 'Rodolfo', age: 18}
    const outroUser = { name: 'Jojo', age: 20}

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)


    if(!context){
        throw new Error("useUser must be used with UserContext")
    }
}




UserProvider.propTypes = {
    children: PropTypes.node
}