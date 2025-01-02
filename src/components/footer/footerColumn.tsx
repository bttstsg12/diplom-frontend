import Link from "next/link"
import { FC } from "react"

interface Props {
    title: string
    items: Array<{ title: string, href: string }>
}

export const FooterColumn: FC<Props> = ({ title, items }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}>{title}</p>
            {
                items.map((el, idx) => {
                    return (
                        <Link
                            key={idx}
                            href={el.href}
                            style={{ color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word' }}
                        >{el.title}
                        </Link>
                    )
                })
            }
        </div>
    )
}