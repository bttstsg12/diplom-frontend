import { FC } from "react"

interface Props {
    text: string
    onClick: () => void
}

export const PaymentButton: FC<Props> = (props) => {
    const { text, onClick } = props

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: '#FF6500',
                border: '1px solid #FF6500',
                borderRadius: '6px',
                height: '68px',
            }}

        >
            {text}
        </button>
    )
}