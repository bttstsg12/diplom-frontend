'use client'
import { ImageButton, ImageButtonProps } from "@/components/buttons/ImageButton"
import { Title } from "@/components/typography/title"
import { useAuth } from "@/context/authContext"
import { FC, useState } from "react"

interface GenerateResult {
    cost: number
    image: string
    seed: number

}
const Page: FC = () => {
    const { token } = useAuth()
    console.log('token: ', token);

    const buttons: ImageButtonProps[] = [
        {
            type: 'create',
            isActive: true,
            href: '/generate'
        },
        {
            type: 'edit',
            isActive: false,
            href: '/edit'
        },
        {
            type: 'history',
            isActive: false,
            href: '/history'
        }
    ]

    const [isLoading, setIsLoading] = useState(false)

    const [imageCount, setImageCount] = useState(1)
    const [description, setDescription] = useState('')
    const [type, setType] = useState('anime')

    const [data, setData] = useState<Array<GenerateResult> | undefined>()

    const onSubmit = async () => {
        if (!token) {
            alert('Та системд нэвтэрнэ үү.')
            return
        }

        setIsLoading(true)
        setData(undefined)

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pictures/generate`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                description,
                count: imageCount,
                type
            }),
        })

        const data = await result.json()

        setIsLoading(false)

        if (data.success === false) {
            alert(data.message)
            return
        }

        setData(data.result)
    }

    return (
        <div className="flex divide-x divide-y">
            <div className="flex flex-col gap-8 px-4">
                {
                    buttons.map((button, index) => {
                        return (
                            <ImageButton key={index} {...button} />
                        )
                    })
                }
            </div>
            <div className="flex flex-col divide-y gap-8">
                <div className="flex flex-col p-4">
                    <Title title="Төрөл сонгох" />
                    <span>
                        <input checked={type === 'anime'} onChange={() => { setType('anime') }} type="checkbox" /> Аниме зураг
                    </span>
                    <span>
                        <input checked={type === 'grayscale drawing'} onChange={() => { setType('grayscale drawing') }} type="checkbox" /> Хар зураг
                    </span>
                    <span>
                        <input checked={type === 'classic'} onChange={() => { setType('classic') }} type="checkbox" /> Энгийн зураг
                    </span>
                </div>
                <div className="flex flex-col p-4 gap-4">
                    <Title title="Текст оруулах" />
                    <textarea
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        placeholder="текст оруулна уу..."
                        style={{ width: '184px', height: '140px', background: '#292929', borderRadius: '19px', border: '1px #FF6500 solid' }}
                    />
                </div>
                <div className="flex flex-col p-4 gap-4">
                    <div className="flex justify-between items-center">
                        <Title title="Зургийн тоо" />
                        <span className="bg-[#292929] text-[#FF6500] font-bold p-2">{imageCount}</span>
                    </div>
                    <input value={imageCount} onChange={(e) => { setImageCount(parseInt(e.target.value)) }} type="range" min={1} max={3} style={{ width: '185px' }} />
                </div>
                <div>
                    <button
                        disabled={isLoading}
                        className="bg-[#FF6500] font-bold w-full p-4 text-2xl"
                        onClick={onSubmit}
                    >{isLoading ? '...' : 'Зураг үүсгэх'}</button>
                </div>
            </div>
            <div className="flex flex-col p-4 gap-4 w-full">
                <p className="text-[#FF6500] text-3xl font-bold">Зураг зурах хэсэг</p>
                <div className="grid grid-cols-2 gap-4">
                    {
                        data && data.map((item: GenerateResult, index: number) => {
                            return (
                                <div key={index}>
                                    <img height={250} src={`data:image/png;base64,${item.image}`} />
                                </div>
                            )
                        })
                    }
                    {
                        !data && <div>Та зураг үүсгэнэ үү.</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page