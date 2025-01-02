import Link from "next/link"
import { FC } from "react"

export interface ImageButtonProps {
    type: 'create' | 'edit' | 'history',
    isActive: boolean
    href: string
}
export const ImageButton: FC<ImageButtonProps> = ({
    href,
    isActive,
    type
}) => {
    const getImage = () => {
        let cur = '/image'

        if (type === 'create') {
            cur += '/create'
        }
        if (type === 'edit') {
            cur += '/rec'
        }
        if (type === 'history') {
            cur += '/hist'
        }

        if (!isActive) {
            cur += '2'
        }

        cur += '.png'

        return cur
    }

    const getTitle = () => {
        if (type === 'create') {
            return 'Үүсгэх'
        }
        if (type === 'edit') {
            return 'Засах'
        }
        if (type === 'history') {
            return 'Түүх'
        }

        return ''
    }

    return (
        <Link href={href}>
            <div>
                <img alt="" width={45} height={45} src={getImage()} />
                <p>{getTitle()}</p>
            </div>
        </Link>
    )
}