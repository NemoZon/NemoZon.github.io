import React, {useState} from 'react';
import MyIcon from './UI/icons/MyIcon';

const IconsList = (props) => {
    const [icons, setIcons] = useState([
        {
            id: 1,
            href: 'https://github.com/NemoZon', 
            src: './img/icons/icons8-github.svg', 
            alt: 'github'
        },
        {
            id: 2,
            href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrjDvXnHdjdLPwTQnBKpfmxRNhnFjtgNFlLFXtVpjnNwrWJfWKzXTRfJdNMWjcvmnlTKPL', 
            src: './img/icons/icons8-google-plus.svg', 
            alt: 'google'
        },
        {
            id: 3,
            href: 'https://www.instagram.com/_gleb_bush_/', 
            src: './img/icons/icons8-instagram.svg', 
            alt: 'instagram'
        },
        {
            id: 4,
            href: 'https://www.linkedin.com/in/gleb-bushukin-b3a35024b/', 
            src: './img/icons/icons8-linkedin.svg', 
            alt: 'linkedin'
        },
        {
            id: 5,
            href: 'https://vk.com/lllllllllllllllllillli', 
            src: './img/icons/icons8-vk-com.svg', 
            alt: 'vk'
        },
        {
            id: 6,
            href: 'wa.me/79373644330', 
            src: './img/icons/icons8-whatsapp.svg', 
            alt: 'whatsapp'
        }
    ]);
    return (
        <div className="icons">
            {icons.map(elem=><MyIcon {...elem} key={elem.id} />)}
        </div>
    );
};

export default IconsList;