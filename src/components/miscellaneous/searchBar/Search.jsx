import './SearchBar.css'
export default function SearchBarMini(){
  
    return(
        <div
         className="searchbar-mini"
        >
            <input
                style={{
                    padding: '0.8rem'
                }}
                placeholder={'🔍  Search For Products'}

            />
        </div>
    )
}