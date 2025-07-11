const MainListItem = ({ gridMode, note, removeNote, showEditNoteModal }) => {
  return (
    <article>
      <div className={`top ${gridMode ? '' : 'row'}`}>
        <h2>{note.title}</h2>
        <span>{note.date}</span>
      </div>
      <p>
        {note.note}
      </p>
      <div className={`options`}>
        <button onClick={() => showEditNoteModal(note.id)}>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z"
                fill="#6750A4"
              />
            </svg>
            РЕДАКТИРОВАТЬ
          </span>
        </button>
        <button onClick={() => removeNote(note.id)}>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                fill="#CF1B1B"
              />
            </svg>
            УДАЛИТЬ
          </span>
        </button>
      </div>
    </article>
  );
};
export default MainListItem;
