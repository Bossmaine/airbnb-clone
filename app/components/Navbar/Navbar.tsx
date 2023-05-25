import Container from "../Container"
import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./Search"

const Navbar = () => {
    return (
        <div className="fixed bg-white w-full">
            <div className="py-4 border-b-2">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-4 md:gap-0">
                        <Logo />
                        <Search />
                        <Menu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar