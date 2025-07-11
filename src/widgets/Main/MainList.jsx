import { motion } from "framer-motion";
import MainListItem from "./MainListItem";

const MainList = ({ gridMode, notes, removeNote, showEditNoteModal }) => {

  return (
    <section
      className={`main__list container ${gridMode ? '' : 'column'}`}>
      {notes.map((note, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <MainListItem gridMode={gridMode} note={note} removeNote={removeNote} showEditNoteModal={showEditNoteModal} />
        </motion.div>
      ))}
    </section>
  );
};

export default MainList;
