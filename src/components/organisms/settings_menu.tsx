
// Props
interface SettingsMenuProps {
    toggle_theme: () => void
}

// Component
export default function AccountMenu({ toggle_theme }: SettingsMenuProps) {
    return (
        <>
            <div onClick={toggle_theme}>Settings menu</div>
        </>
    );
}