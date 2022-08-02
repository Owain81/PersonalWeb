import Link from 'next/link';

export const HeaderBar = () =>  {
    return (
        <header className="header">
            <h2>Dit is de header</h2>

            <nav>
                <ul>
                    <li>
                        <Link href="/About" passHref>About Me</Link>
                    </li>
                    <li>
                        <Link href="/Projects" passHref>Projects</Link>
                    </li>
                    <li>
                        <Link href="/Contact" passHref>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}