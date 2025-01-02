import Link from "next/link"
import { FC } from "react"

interface Props {
    imagePath: string
    text: string
    href: string
}

export const HomeButton: FC<Props> = (props) => {
    const { href, imagePath, text } = props

    return (
        <Link href={href}>
            <div style={{ border: '1px solid #292929', borderRadius: '10px', padding: '12px' }}>
                <img style={{ width: '510px', height: '310px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} src={imagePath} />
                <div style={{
                    display: 'flex',
                    backgroundColor: '#FF6500',
                    color: 'white',
                    fontSize: '32px',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 500, wordWrap: 'break-word',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px'
                }}>
                    {text}
                </div>
            </div>
        </Link>
    )
}