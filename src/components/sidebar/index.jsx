import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./styles.scss"
import { useEffect, useState } from "react";

function SideBar() {
    const [isOpened, setIsOpened] = useState(false);
    
    useEffect(() => {
        const links = document.getElementsByClassName("sidebar__box__list__link");
        for(const link of links) {
            link.addEventListener("click", () => {
                setIsOpened(false);
            })
        }
    }, []);

    return (
        <aside className="sidebar">
            {
                !isOpened && <HamburgerMenuIcon className="sidebar__out-hamburger" onClick={() => setIsOpened(isOpened => !isOpened)}/>
            }
            
            <div className={ !isOpened ? "sidebar__box" : "opened" }>
                <div className="sidebar__box__icons">
                    <HamburgerMenuIcon onClick={() => setIsOpened(isOpened => !isOpened)}/>
                </div>
                <ul className="sidebar__box__list">
                    <li><a className="sidebar__box__list__link" href="#inicio">Início</a></li>
                    <li><a className="sidebar__box__list__link" href="#habilidades">Habilidades</a></li>
                    <li><a className="sidebar__box__list__link" href="#contato">Contato</a></li>
                </ul>
                <div></div>
            </div>
        </aside>
    )
}

export default SideBar;