'use client'
import { AuthButton } from "@/components/authButton"
import { AuthInput } from "@/components/authInput"
import { useAuth } from "@/context/authContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
// import { AuthContainer } from "./components/container/authContainer"
// import { Button } from "../button"

const Page: FC = () => {
    const router = useRouter()
    const { setToken } = useAuth()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onLogin = async () => {
        if (!username || !password) {
            alert('Нэр эсвэл нууц үг хоосон байна')
            return
        }

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await result.json()

        if (!data.success) {
            alert(data.message)

            return
        }

        alert('Амжилттай нэвтэрлээ.')
        setToken(data.token)

        router.replace('/')
    }

    const onRegister = async () => {
        router.replace('/register')
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B1B1B',
                border: '3px solid #FF6500',
                borderRadius: '20px',
                width: '765px',
                paddingTop: '32px',
                paddingBottom: '32px',
                paddingLeft: '170px',
                paddingRight: '170px',
                gap: '40px'
            }}>
                <div>
                    <span style={{
                        color: '#FFFFFF',
                        fontSize: '32px',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center', gap: '30px',
                    }}>
                        Нэвтрэх
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <AuthInput placeholder="Нэвтрэх нэр" value={username} onChange={setUsername} />
                    <AuthInput placeholder="Нууц үг" value={password} onChange={setPassword} />
                </div>
                <hr />
                <div className="flex flex-col gap-4">
                    <AuthButton onClick={onLogin} text="Нэвтрэх" />
                    <AuthButton onClick={onRegister} text="Бүртгүүлэх" />
                </div>
                <div>
                    <Link href="/forgot-password">
                        <span style={{
                            color: '#FFFFFF',
                            fontSize: '20px',
                            fontFamily: '"Open Sans", sans-serif',
                            fontWeight: 400,
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            Нууц үг мартсан?
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Page