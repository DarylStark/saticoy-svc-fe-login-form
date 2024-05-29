import './DarkModeToggle.scss'
import { MdOutlineDarkMode } from "react-icons/md";

function ToggleDarkMode() {
    document.body.classList.toggle("dark");
}

function DarkModeToggle() {
    return (
        <button onClick={ToggleDarkMode} className='dark_mode_toggle'>
            <MdOutlineDarkMode />
        </button>
    );
}

export default DarkModeToggle;