import { useState } from "react";
import "./styles.scss"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

function Habilidades() {
    const [hability, setHability] = useState(0);
    const [pastClick, setPastClick] = useState("left");
    const [isOpened, setIsOpened] = useState(true);

    const habilities = [
        {
            id: 0,
            name: 'C#',
            icon: 'devicon-csharp-plain'
        },
        {
            id: 1,
            name: '.NET',
            icon: 'devicon-dot-net-plain'
        },
        {
            id: 2,
            name: '.NET Core',
            icon: 'devicon-dotnetcore-plain'
        },
        {
            id: 3,
            name: 'React',
            icon: 'devicon-react-original'
        },
        {
            id: 4,
            name: 'HTML5',
            icon: 'devicon-html5-plain'
        },
        {
            id: 5,
            name: 'CSS3',
            icon: 'devicon-css3-plain'
        },
        {
            id: 6,
            name: 'Javascript',
            icon: 'devicon-javascript-plain'
        },
    ];

    const handlePrevious = () => {
        setPastClick("right");
        setIsOpened(false);

        setTimeout(() => {
            let previous = hability;
            if(previous <= 0) {
                setHability(habilities.length - 1);
            }
            else {
                setHability(hability => hability - 1);
            }
            setPastClick("left");
            setIsOpened(true);
        }, 100)
    }

    const handleNext = () => {
        setPastClick("left");
        setIsOpened(false);

        setTimeout(() => {
            let next = hability + 1;
            if(next === habilities.length) {
                setHability(0);
            }
            else {
                setHability(hability => hability + 1);
            }
            setPastClick("right");
            setIsOpened(true);
        }, 100);
    }

    return (
        <section id="habilidades" className="habilidades">
            {
                habilities && habilities.length > 0 && habilities.map((item) => {
                    return (
                        <div key={item.id} className={hability !== item.id ? "habilidades__box" : (`habilidades__box-${(isOpened ? "opened" : "closed")} ` + `habilidades__box-${(isOpened ? "opened" : "closed")}__` + pastClick)}>
                            <i className={item.icon}></i>
                            <h3>{item.name}</h3>
                        </div>
                    )
                })
            }
            <div className="habilidades__quantity">
                {
                    habilities && habilities.length > 0 && habilities.map((_, index) => {
                        let style = {}
                        if (hability === _.id) 
                            style = { backgroundColor: '#FFF', borderRadius: '50%', transform: 'scale(0.5)' };
                        else 
                            style = { backgroundColor: '#555', borderRadius: '50%', transform: 'scale(0.5)' };

                        return (<span onClick={() => setHability(_.id)} key={index} style={style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)
                    })
                }
            </div>
            <div className="habilidades__buttons">
                <ArrowLeftIcon onClick={handlePrevious}/>
                <ArrowRightIcon onClick={handleNext}/>
            </div>
        </section>
    )
}

export default Habilidades;