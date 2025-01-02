import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', marginBottom: '30px' }}
        >
            {/* Logo */}
            <Logo />

            {/* Search bar */}
            <div className="flex bg-white rounded-3xl gap-2 px-4">
                <input
                    className="border-none focus:outline-none text-black"
                    type="text"
                    placeholder="Хайх"
                    style={{ width: '326px', height: '40px' }} />
                <button>
                    <img style={{ width: '25px', height: '25px' }} src="/image/search.png" />
                </button>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                <Link href="/history">
                    <img style={{ width: '30px', height: '30px' }} src="/image/menu.png" />
                </Link>
                <Link href="/settings">
                    <img style={{ width: '25px', height: '25px' }} src="/image/settings.png" />
                </Link>

                <Link href="/user">
                    <img style={{ width: '25px', height: '25px' }} src="/image/user.png" />
                </Link>
            </div>
        </div>
    )
}