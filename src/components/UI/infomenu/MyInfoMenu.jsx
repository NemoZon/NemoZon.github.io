import React from 'react';
import classes from './MyInfoMenu.module.css';

const MyInfoMenu = ({id, active, info, desc, title,  img, links}) => {
    let classState = active?classes.infoMenu_active:classes.infoMenu_disabled;
    
    return ( 
        <div key={id} className={classes.infoMenu + ` ${classState}`}>
            {title?<h1 className={classes.title}>{title}</h1>:""}
            {img||desc?<div className={classes.aboutMe}>
                {img?<img src={img.src} alt={img.alt} />:""}
                {desc?<div className={classes.description}>{desc}</div>:""} 
            </div>:""}
            {info?<ul className="info">
                {info.tel?<li className='info__tel'>{info.tel}</li>:""}
                {info.address?<li className='info__address'>{info.address}</li>:""}
                {info.email?<li className='info__email'>{info.email}</li>:""}
            </ul>:""}
            {links?<ul className='links'>{links.map((elem, index)=><li key={index}><a href={elem.href} rel="noopener noreferrer" target="_blank">{elem.text}{elem.img?<img src={elem.img} alt='Screenshot of project'/>:""}</a></li>)}</ul>:""}
        </div>
    );
}

export default MyInfoMenu;