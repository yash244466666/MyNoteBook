import React from 'react'

export const Alert = (props) => { // returns an alert derived from the props
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}
