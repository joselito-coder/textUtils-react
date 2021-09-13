import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                {capitalize(props.alert.type)} : {props.alert.message}
            </div>
        </div>
    )
}

export default Alert
