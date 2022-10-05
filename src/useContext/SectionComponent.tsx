import { useThemeContext } from './ThemeContextProvider'

function SectionComponent() {

    const { theme } = useThemeContext()

    return (
        <section className={`flow-content ${theme === "dark" ? "dark" : "basic"}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio nesciunt ratione laborum beatae commodi expedita maiores nemo, perferendis amet fuga eligendi eius ut alias dolores sequi non voluptas vel!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam saepe unde aperiam architecto repudiandae autem voluptas magni ipsum rem, dolorum voluptatem beatae asperiores? Commodi debitis pariatur, cupiditate doloremque provident aut.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde deleniti nobis exercitationem quis aspernatur nisi blanditiis natus, amet obcaecati perferendis, consequatur, quos molestias. Perspiciatis blanditiis autem voluptates voluptatibus voluptas accusamus.</p>
        </section>
    )
}

export default SectionComponent;