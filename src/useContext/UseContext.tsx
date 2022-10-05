import NavComponent from "./NavComponent";
import SectionComponent from "./SectionComponent";
import { useThemeContext } from "./ThemeContextProvider";
import './useContext.css'

function UseContext() {

    const { toggleTheme } = useThemeContext();

    return (
            <div className="container">
                <NavComponent />
                <SectionComponent />
                <button onClick={toggleTheme}>Switch Theme</button>
            </div>
    )
}

export default UseContext;