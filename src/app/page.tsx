import { FC } from "react"
import Link from "next/link"
import { HomeButton } from "@/components/buttons/HomeButton"

const Page: FC = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2
                    style={{
                        color: 'white', fontSize: '40px', fontFamily: '"Open Sans", sans-serif', fontOpticalSizing: 'auto', fontWeight: 700, wordWrap: 'break-word'
                    }}>
                    Та хийх үйлдлээ сонгоно уу
                </h2>
                <div style={{ color: 'rgb(190, 190, 190)', fontSize: '22px', fontFamily: '"Open sans", sans-serif', fontWeight: 300, wordWrap: 'break-word' }}>Бүртгүүлээд илүү олон зураг үүсгээрэй! 😉</div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '30px', marginTop: '75px', marginBottom: '75px' }}>
                    <HomeButton imagePath="image/1.jpg" text="Зураг үүсгэх" href='/generate' />
                    <HomeButton imagePath="image/2.jpg" text="Зураг засах" href='/edit' />
                </div>

                <div style={{ background: "url(/image/home_background.png)", width: '100vw', height: '560px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ color: 'rgb(190, 190, 190)', fontSize: '36px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word' }}>Хүссэн зургаа үүсгэх боломж!</p>
                </div>

                <Link href="/edit">
                    <div style={{ display: 'flex', gap: '80px', marginTop: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
                            <div style={{ color: 'white', fontSize: '40px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word' }}>Зураг засах</div>
                            <div><span style={{ color: '#737373', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word' }}>Зургаа илүү </span><span style={{ color: '#FF6500', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word' }}>чанар</span><span style={{ color: '#737373', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word' }}>тай болгоорой!</span></div>
                        </div>
                        <img style={{ width: '746px', height: '500px', opacity: '0.50' }} src="/image/13.jpg" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Page