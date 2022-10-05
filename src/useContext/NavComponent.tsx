import { useThemeContext } from './ThemeContextProvider'
import './useContext.css'

function NavComponent() {

    const { theme } = useThemeContext()

    return (
        <nav className={theme === 'dark' ? "dark" : "basic"}>
            <ul>
                <li>Products</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavComponent;