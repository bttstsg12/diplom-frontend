import { FC } from "react"
import { Logo } from "../logo"
import { FooterColumn } from "./footerColumn"

export const Footer: FC = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '64px' }}>
                <div>
                    <Logo />
                </div>
                <FooterColumn title="Зураг үүсгэх" items={[{ title: 'Энгийн зураг', href: '/generate' }, { title: 'Аниме зураг', href: '/generate' }, { title: 'Хар зураг', href: '/generate' }]} />
                <FooterColumn title="Зураг засах" items={[{ title: 'Зураг оруулах', href: '/edit' }]} />
                <FooterColumn title="Мэдээлэл" items={[{ title: 'Бидний тухай', href: '/about-us' }, { title: 'Бидэнтэй холбогдох', href: '/about-us' }]} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', marginTop: '24px', marginBottom: '12px' }}>
                <img style={{ width: '20px', height: '20px', }} src="/image/copyright.png" />
                <div style={{ color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word' }}>2024 MongolArt | Бүх эрх хуулиар хамгаалагдсан</div>
            </div>
        </div>
    )
}