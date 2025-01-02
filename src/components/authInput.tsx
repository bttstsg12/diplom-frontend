import { FC } from "react"

interface Props {
    placeholder: string
    value: string
    onChange: (value: string) => void
}

export const AuthInput: FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <input
            placeholder={placeholder}
            style={{
                color: 'white',
                backgroundColor: '#292929',
                border: '1px solid #FF6500',
                borderRadius: '12px',
                width: '422px',
                height: '54px',
                padding: '0 20px',
            }}
            value={value} onChange={e => { onChange(e.target.value) }}
        />
    )
}