'use client'
import { createContext, FunctionComponent, useContext, useState } from "react"

interface AuthContext {
    token: string | undefined
    planType: string | undefined
    setToken: (value: string) => void
    setPlanType: (value: string) => void
    logout: () => void
}

const authContext = createContext<AuthContext>({
    token: undefined,
    planType: undefined,
    setToken: (value) => {
        console.log(value)
        throw new Error('setToken function must be overridden')
    },
    setPlanType: (value) => {
        console.log(value)
        throw new Error('setPlanType function must be overridden')
    },
    logout: () => {
    }
})

interface Props {
    children: React.ReactNode
}

export const AuthProvider: FunctionComponent<Props> = ({ children }) => {
    const [token, setToken] = useState<string | undefined>(undefined)
    const [planType, setPlanType] = useState<string | undefined>(undefined)

    return (
        <authContext.Provider
            value={{
                token: token,
                planType,
                setPlanType,
                setToken: setToken,
                logout: () => {
                    setToken(undefined)
                    setPlanType(undefined)
                }
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export const useAuth = (): AuthContext => {
    return useContext(authContext)
}