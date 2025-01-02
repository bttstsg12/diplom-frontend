import { FC } from "react"

interface Props {
    children: string
}

export const OrangeTitle: FC<Props> = ({
    children
}) => {
    return <p className="text-[#FF6500] text-3xl font-bold">{children}</p>
}