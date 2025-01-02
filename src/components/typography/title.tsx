import { FC } from "react"

interface Props {
    title: string
}

export const Title: FC<Props> = ({
    title
}) => {
    return <p className="text-2xl text-white font-bold">{title}</p>
}