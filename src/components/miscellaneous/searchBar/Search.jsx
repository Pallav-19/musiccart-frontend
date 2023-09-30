import { useLocation } from 'react-router-dom'
import './SearchBar.css'
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs'

export default function SearchBarMini() {
    const location = useLocation()
    return (
        <div
            className="searchbar-mini"
        >
            {!(location.pathname.includes('login') || location.pathname.includes('register')) ? < input
                style={{
                    padding: '0.8rem'
                }}
                placeholder={'🔍  Search For Products'}

            /> :
                <p
                    style={{
                        fontSize: "1.45rem",
                        margin: 0,
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                        textAlign: !(location.pathname.includes('register') || location.pathname.includes('login')) && 'left',
                        width: '100%',
                        color: '#fff'

                    }}
                >
                    <BsFillFileEarmarkMusicFill /> Musicart
                </p>}
        </div>
    )
}