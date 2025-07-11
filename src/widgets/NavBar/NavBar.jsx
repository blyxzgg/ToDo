import './NavBar.css';
const NavBar = ({ searchMode, setSearchMode, inputValue, setInputValue }) => {
    return (
        <nav className="nav">
            {
                !searchMode ?
                    <div></div>
                    : <button on onClick={() => setSearchMode(false)} className="butik">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 16.5H11.745L20.13 8.115L18 6L6 18L18 30L20.115 27.885L11.745 19.5H30V16.5Z" fill="#1C1B1F" />
                        </svg>
                    </button>
            }
            {
                !searchMode ? <h1 className="nav__title">
                    Заметки
                </h1>
                    :<input type="text" placeholder='Поиск...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            }
            <button className="nav__btn" on onClick={() => setSearchMode(prev => prev = !prev)}>
                {
                    !searchMode
                        ?
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.14 19.905L30.735 28.5L28.5 30.735L19.905 22.14C18.3 23.295 16.365 24 14.25 24C8.865 24 4.5 19.635 4.5 14.25C4.5 8.865 8.865 4.5 14.25 4.5C19.635 4.5 24 8.865 24 14.25C24 16.365 23.295 18.3 22.14 19.905ZM14.25 7.5C10.515 7.5 7.5 10.515 7.5 14.25C7.5 17.985 10.515 21 14.25 21C17.985 21 21 17.985 21 14.25C21 10.515 17.985 7.5 14.25 7.5Z" fill="#49454F" />
                        </svg>
                        : <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C9.705 3 3 9.705 3 18C3 26.295 9.705 33 18 33C26.295 33 33 26.295 33 18C33 9.705 26.295 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM18 15.885L23.385 10.5L25.5 12.615L20.115 18L25.5 23.385L23.385 25.5L18 20.115L12.615 25.5L10.5 23.385L15.885 18L10.5 12.615L12.615 10.5L18 15.885Z" fill="#49454F" />
                        </svg>
                }
            </button>


        </nav>
    )
}

export default NavBar