import './DarkModeToggle.scss'
import { MdOutlineDarkMode } from "react-icons/md";

// Props
interface DarkModeToggleProps {
    toggle_theme: () => void
}

function DarkModeToggle({ toggle_theme }: DarkModeToggleProps) {
    return (
        <button onClick={toggle_theme} className='dark_mode_toggle'>
            <MdOutlineDarkMode />
        </button>
    );
}

export default DarkModeToggle;