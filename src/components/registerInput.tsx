import { FC } from "react"

interface Props {
    title: string
    placeholder: string
    type?: string
}

export const RegisterInput: FC<Props> = ({ title, placeholder, type = 'text' }) => {
    return (
        <div className="flex flex-col gap-2">
            <span style={{
                color: '#FFFFFF',
                fontSize: '20px',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 400,
                display: 'flex',
                justifyContent: 'start',
            }}>
                {title}
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full"
                style={{
                    backgroundColor: '#1B1B1B',
                    border: '1px solid #FF6500',
                    borderRadius: '4px',
                    padding: '32px 16px',
                    fontSize: '14px',
                    height: '32px',
                    // width: '280px',
                }}>
            </input>
        </div>
        // <div>
        //     <span style={{
        //     color: '#FFFFFF',
        //     fontSize: '20px',
        //     fontFamily: '"Open Sans", sans-serif',
        //     fontWeight: 400,
        //     display: 'flex',
        //     justifyContent: 'start', 
        //     }}>
        //     {title}
        //     </span>
        //     <input
        //     placeholder={placeholder}
        //     style={{
        //         backgroundColor: '#1B1B1B',
        //         border: '1px solid #FF6500',
        //         borderRadius: '4px',
        //         width: '280px',
        //         height: '32px',
        //         padding: '0 20px',
        //         }}>
        //     </input>
        //  </div>
    )
}