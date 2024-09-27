import React from 'react'
import "./loader.css"

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
        </div>

    )
}


const ButtonLoader = () => {
    return (
        <div className="mobile loader">
            <div className="spinner"></div>
        </div>

    )

};

export { Loader, ButtonLoader }