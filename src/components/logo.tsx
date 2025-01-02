import Link from "next/link"
import { FC } from "react"

export const Logo: FC = () => {
    return (
        <Link href="/">
            <div>
                <span
                    style={{
                        color: 'white',
                        fontSize: '48px',
                        fontFamily: 'Jaini',
                        fontWeight: 400,
                        wordWrap: 'break-word'
                    }}
                >
                    Mongol
                </span>
                <span
                    style={{
                        color: '#FF6500',
                        fontSize: '48px',
                        fontFamily: 'Jaini',
                        fontWeight: 400,
                        wordWrap: 'break-word'
                    }}
                >
                    Art
                </span>
            </div>
        </Link>
    )
}