import NavBar from "./NavBar.jsx";

export default function Header() {
    //DATI RICAVATI PER LA GESTIONE DEI LINK DELLA NAVBAR
    const links = [
        { id: 1, text: 'Home', url: '/' },
        { id: 2, text: 'About', url: '/About' },
        { id: 3, text: 'Blogs', url: '/Blogs' },
        { id: 4, text: 'AddBlog', url: '/Blogs/create' },
    ];

    return (
        <header>
            <NavBar linksProp={links} />
        </header>
    );
}