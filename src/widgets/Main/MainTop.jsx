const MainTop = ({ gridMode, setGridMode, notesLength }) => {
  return (
    <section className="main__top">
      <div className="main__top-content container">
        <h2 className="top__title">{notesLength > 0 ? 'Все заметки' : 'Нет заметок'}</h2>
        <button className="top__btn" onClick={() => setGridMode(!gridMode)}>
          {gridMode ?
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14H6C6.55 14 7 13.55 7 13V11C7 10.45 6.55 10 6 10H4C3.45 10 3 10.45 3 11V13C3 13.55 3.45 14 4 14ZM4 19H6C6.55 19 7 18.55 7 18V16C7 15.45 6.55 15 6 15H4C3.45 15 3 15.45 3 16V18C3 18.55 3.45 19 4 19ZM4 9H6C6.55 9 7 8.55 7 8V6C7 5.45 6.55 5 6 5H4C3.45 5 3 5.45 3 6V8C3 8.55 3.45 9 4 9ZM9 14H20C20.55 14 21 13.55 21 13V11C21 10.45 20.55 10 20 10H9C8.45 10 8 10.45 8 11V13C8 13.55 8.45 14 9 14ZM9 19H20C20.55 19 21 18.55 21 18V16C21 15.45 20.55 15 20 15H9C8.45 15 8 15.45 8 16V18C8 18.55 8.45 19 9 19ZM8 6V8C8 8.55 8.45 9 9 9H20C20.55 9 21 8.55 21 8V6C21 5.45 20.55 5 20 5H9C8.45 5 8 5.45 8 6Z" fill="#6750A4" />
            </svg>
            :
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 20H5C4.45 20 4 19.55 4 19V16H8V20ZM8 14H4V10H8V14ZM8 8H4V5C4 4.45 4.45 4 5 4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM19 20H16V16H20V19C20 19.55 19.55 20 19 20ZM20 14H16V10H20V14ZM20 8H16V4H19C19.55 4 20 4.45 20 5V8Z" fill="#6750A4" />
            </svg>
          }
          { gridMode ?
            "Список"
            :
            "Сетка"
          }
        </button>
      </div>
    </section>
  );
};
export default MainTop;
