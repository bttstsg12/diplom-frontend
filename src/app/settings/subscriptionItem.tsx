import { FC } from "react"
import { SubscriptionItemProps } from './page'

interface Props {
    item: SubscriptionItemProps
    onSelect: (id: number) => void
}
export const SubscriptionItem: FC<Props> = (props) => {
    const { item, onSelect } = props

    return (
        <div className="flex flex-col items-center justify-center py-8 px-12 bg-[#202020] border-[#FF6500]  border-2 rounded-2xl">
            <h1 className="text-2xl">{item.name}</h1>
            <p className="font-bold text-3xl mt-8 mb-8">₮{item.price}</p>
            <p>{item.createCount} зураг үүсгэх</p>
            <hr className="py-4" />
            <p>{item.editCount} зураг засах</p>

            <button
                className="bg-[#FF6500] w-full py-4 rounded-2xl mt-12 mx-12"
                onClick={() => onSelect(item.id)}
            >Сонгох</button>
        </div>
    )

}