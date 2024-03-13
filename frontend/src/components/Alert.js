import React from 'react'

export const Alert = (props) => { //Alert component
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
