'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function Navbar() {

    const pathname = usePathname()
    console.log(pathname);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Blog
                </span>
                <ul className="navbar-nav mr-auto gap-2 flex-nowrap">
                    {/*<li className="nav-item">*/}
                    {/*    <Link className={"nav-link" + (pathname === '/' ? ' active' : '')} href="/">Home</Link>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <Link className={clsx({'nav-link': true, 'active':pathname === '/'})} href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={clsx({'nav-link': true, 'active':pathname === '/about'})} href="/about"
                             >About</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

