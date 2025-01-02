import { FC } from "react"

interface Props {
    onClick: () => void
    text: string
}

export const AuthButton: FC<Props> = (props) => {
    const { onClick, text } = props

    return (
        <button
            style={{
                color: 'white',
                backgroundColor: '#FF6500',
                border: '1px solid #FF6500',
                borderRadius: '12px',
                width: '422px', height: '54px',
            }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}