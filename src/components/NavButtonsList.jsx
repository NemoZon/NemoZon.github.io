import React, {useState} from 'react';
import MyNavButton from './UI/buttons/MyNavButton';
import MyInfoMenu from './UI/infomenu/MyInfoMenu';

const NavList = (props) => {
    const [buttons, setButtons] = useState([
        {
            id: 1,
            title: 'About Me',
            state: 'menu',
            infoMenu: {
                id: 1, 
                active: false, 
                img: {
                    src: "./img/AboutMe/s2.webp",
                    alt: "It's Me"
                },
                desc: "J'ai réalisé de nombreux projets de développement front et back-end, et j'ai également créé un bot pour le réseau 'Telegram'. Sérieux dans le travail, je me forme constamment aux langages sur le web.Je souhaite acquérir ma première expérience en entreprise dans la programmation lors d'un stage du 11 avril au 2 juin 2023.",
                title: "Gleb BUSHUKIN", 
                info:{
                    tel: "+33 6 28 34 46 21",
                    address: "17 Rue du Colonel Fabie, 51100 Reims",
                    email: "gleb.bushukin@gmail.com"
                },
                links: null
            }},
        {
            id: 2, 
            title: 'Projects', 
            state: 'menu', 
            infoMenu: {
                id: 2, 
                active: false, 
                img: null,
                desc: null,
                title: null, 
                info: null,
                links: [
                    {
                        href: "https://nemozon.github.io/projects/manicure/",
                        text: "Manicure (fr)",
                        img: "./img/manicure.png"
                    },
                    {
                        href: "https://nemozon.github.io/projects/puls/",
                        text: "Puls (rus)",
                        img: "./img/puls.png"
                    },
                    {
                        href: "https://nemozon.github.io/projects/uber/",
                        text: "Uber (rus)",
                        img: "./img/uber.png"
                    },
                    {
                        href: "https://nemozon.github.io/projects/minigame/",
                        text: "Mini Game via Js (rus)",
                        img: "./img/minigame.png"
                    }
                ]
            }}
    ]);

    function changeState(e) {
        const btn = buttons.find((elem)=>elem.title===e.target.textContent);
        let btns;
        if (btn.state ==='active'){
            btns = buttons.map((elem)=>{return {...elem,infoMenu: {...elem.infoMenu, active: false}, state: 'menu'}});
        } else{
            btns = buttons.map((elem)=>elem.title===e.target.textContent?{...elem,infoMenu: {...elem.infoMenu, active: true}, state: 'active'}:{...elem,infoMenu: {...elem.infoMenu, active: false}, state: 'disabled'});
        }
        setButtons(btns);
    }

    return (
        <nav className='nav'>
            {buttons.map(elem=><MyNavButton {...props} state={elem.state} onClick={changeState} key={elem.id}>{elem.title}</MyNavButton>)}

            {buttons.map(
                elem=>
                <MyInfoMenu 
                key={elem.infoMenu.id} 
                active={elem.infoMenu.active} 
                title={elem.infoMenu.title}
                desc={elem.infoMenu.desc}
                info={elem.infoMenu.info}
                img={elem.infoMenu.img} 
                links={elem.infoMenu.links}>
                </MyInfoMenu>)}
            
        </nav>
    );
};

export default NavList;