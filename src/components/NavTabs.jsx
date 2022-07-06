export default function NavTabs() {
    return (
        <div className="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
            <div className="offcanvas-header navbar-shadow">
                <h5 className="mt-1 mb-0">Menu</h5>
                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown-mega active">
                        <a className="nav-link" href="#1">Who are we</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#2">Diet & Nutrition</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#3">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#4">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}