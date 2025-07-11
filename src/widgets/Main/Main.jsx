import "./Main.css";
import MainList from "./MainList";
import MainTop from "./MainTop";

const Main = ({ gridMode, setGridMode, notes, removeNote, showEditNoteModal }) => {
  return (
    <main className="main">
      <MainTop setGridMode={setGridMode} gridMode={gridMode} notesLength={notes?.length}/>
      <MainList gridMode={gridMode} notes={notes} removeNote={removeNote} showEditNoteModal={showEditNoteModal} />
    </main>
  );
};
export default Main;
