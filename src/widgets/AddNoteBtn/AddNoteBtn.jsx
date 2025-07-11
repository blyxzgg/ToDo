import "./AddNoteBtn.css";
import { motion } from "framer-motion";

const AddNoteBtn = ({ setShowModel, showModel }) => {
  return (
    <motion.button
      className="addNot"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileTap={{ scale: 0.8 }}
      onClick={() => setShowModel(!showModel)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z"
          fill="#6750A4"
        />
      </svg>
    </motion.button>
  );
};

export default AddNoteBtn;
