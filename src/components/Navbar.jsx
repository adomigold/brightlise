import ToggleBtn from "./MobileMenu";
import NavTabs from "./NavTabs";
import ToggleClose from "./ToggleClose";

export default function NavBar() {
    return (
        <>
            <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
                <div className="navbar-search bg-light">
                    <ToggleClose />
                </div>
                <div className="container px-0 px-xl-3">
                    <ToggleBtn />
                    <NavTabs />
                </div>
            </header>
        </>
    )
}