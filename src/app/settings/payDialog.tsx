import { PaymentButton } from "@/components/paymentButton"
import { RegisterInput } from "@/components/registerInput"
import { FC } from "react"

interface Props {
    onClick: () => void
}
export const PayDialog: FC<Props> = ({ onClick }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B1B1B',
                border: '3px solid #FF6500',
                borderRadius: '20px',
                width: '765px',
                padding: '32px',
                gap: '40px'
            }}>
                <div>
                    <span style={{
                        color: '#FFFFFF',
                        fontSize: '32px',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center', gap: '30px',
                    }}>
                        Төлбөр төлөх хэсэг
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {/* <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}> */}
                    <div className="flex flex-col gap-8">
                        <RegisterInput title='Нэр' placeholder="Нэрээ оруулна уу." />
                        <RegisterInput title='Имэйл хаяг' placeholder="Имэйл хаягаа оруулна уу." />
                        <RegisterInput title='Гэрийн хаяг' placeholder="Хаягаа оруулна уу." />
                        <RegisterInput title='Хот' placeholder="Хотоо оруулна уу." />
                        <RegisterInput title='Зип код' placeholder="1234567." type="number" />
                    </div>
                    {/* <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around' }}> */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <span style={{
                                color: '#FFFFFF',
                                fontSize: '20px',
                                fontFamily: '"Open Sans", sans-serif',
                                fontWeight: 400,
                                display: 'flex',
                                justifyContent: 'start',
                            }}>
                                Картын төрөл
                            </span>
                            <div className="flex gap-4">
                                <img src="/image/visa.png" alt="visa" />
                                <img src="/image/master.png" alt="visa" />
                            </div>
                        </div>
                        <RegisterInput title='Картын дугаар' placeholder="1111-2222-3333-4444" />
                        <RegisterInput title='Дуусах огноо' placeholder="YYYY/MM" type="date" />
                        <RegisterInput title='CVV' placeholder="123" type="number" />
                        <PaymentButton text="Төлбөр төлөх" onClick={onClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}