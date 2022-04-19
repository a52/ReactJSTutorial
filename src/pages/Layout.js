import {Outlet, Link } from 'react-router-dom';


const Layout = () => {
    const myStyle = {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
        textDecoration: 'underline',
        margin: '10px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'lightblue'
    };
    return (
        <div>
            <h1>[alluberes]</h1>
            <nav>
                <ul style={myStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/todos">To Do</Link> </li>
                </ul>

            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;