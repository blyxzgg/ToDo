import './Modal.css';
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const modalVariants = {
    hidden: { y: "-50%", opacity: 0, scale: 0.8 },
    visible: { y: "0%", opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { y: "-50%", opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const Modal = ({ showModel, setShowModel, addNote, note, title, setTitle, setNote, editMode, editNote }) => {
    return (
        <AnimatePresence>
            {showModel && (
                <motion.div
                    className="modal"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={setShowModel}
                >
                    <motion.div
                        className="modal__view"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>{editMode ? 'Изменить заметку' : 'Добавить заметку'}</h3>
                        <label className="modal__label" htmlFor='title'>
                            <span>Title</span>
                            <input type="text" placeholder='Title' id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </label>
                        <label className="modal__label" htmlFor='content'>
                            <span>Content</span>
                            <input type="text" placeholder='Content' id="content" value={note} onChange={(e) => setNote(e.target.value)}/>
                        </label>
                        <div className="modal__buttons">
                            <button className="red" onClick={setShowModel}>Отмена</button>
                            {
                                editMode ? <button onClick={editNote}>Сохранить</button> : <button onClick={() => addNote()}>Добавить</button>
                            }
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
