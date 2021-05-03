import React from 'react'
import './Button.scss'

//types are primary, secondary, view-more

const Button = ({text, type='primary', icon}) => {
    let classtype = ''
    switch (type) {
        case "primary":
            classtype = 'btn btn-primary'
            break;
        case 'secondary':
            classtype = 'btn btn-secondary'
            break;
        case 'view-more':
            classtype = 'btn btn-viewMore'
            break;
        default:
            break;
    }
    return (
        <button className={classtype} >
            <span>{text}</span>
            <span style={{marginLeft: '0.5rem'}}>{icon}</span>
        </button>
    )
}

export default Button
