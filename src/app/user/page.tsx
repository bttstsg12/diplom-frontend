'use client'
import { AuthButton } from "@/components/authButton"
import { Title } from "@/components/typography/title"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
// import { AuthContainer } from "./components/container/authContainer"
// import { Button } from "../button"

const Page: FC = () => {
    const router = useRouter()
    const { token, logout } = useAuth()
    const [data, setData] = useState<{
        user: {
            id: number
            username: string
        },
        credits: {
            createLimit: number
            editLimit: number
        }
    } | undefined>()

    const init = async () => {
        if (!token) {
            router.replace('/login')
            return
        }

        const me = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })

        const data = await me.json()

        if (!data.success) {
            alert(data.message)
            return
        }

        setData(data)
    }

    useEffect(() => {
        init()
    }, [])

    const onLogout = () => {
        logout()

        alert('Амжилттай гарлаа.')

        router.replace('/login')
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
                <Title title="Миний мэдээлэл" />
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>

                <AuthButton text="Гарах" onClick={onLogout} />
            </div>
        </div>

    )
}

export default Page