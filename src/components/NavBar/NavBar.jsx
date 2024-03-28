import { useState } from "react";
import List from "../List/List";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/404', name: 'Not Found' }
    ];

    return (
        <div className="bg-yellow-300 p-6">
            <ul className="md:flex ">
                <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">

                    {
                        open === true ? <AiOutlineClose></AiOutlineClose>: <GiHamburgerMenu></GiHamburgerMenu> 
                    }

                </div>
                <div className={`md:flex duration-1000 absolute md:static 
                
                ${open ? 'top-16' : '-top-60'}

                bg-yellow-300 px-4 my-4`}>
                    {
                        routes.map(route => <List key={route.id} route={route}></List>)
                    }
                </div>
            </ul>
        </div>
    );
};

export default NavBar;