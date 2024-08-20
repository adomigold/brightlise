import Link from "next/link";

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
                        <Link href="/#1">
                            <a className="nav-link">Who are we</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link href="/#3">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link href="/#2">
                            <a className="nav-link" href="#2">Diet & Nutrition</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link href="/#4">
                            <a className="nav-link">Contact Us</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}