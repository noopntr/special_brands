import React from 'react'

function ErrorTxt() {
    return (
        <div id="errorPage" className="errorPage">
            <div className="error">
                <h1>ERROR</h1>
            </div>
            <div className="404">
                <h1>404</h1>
                <p>Page not found</p>
            </div>
            <button>Back to Home</button>
        </div>
    )
}

export default ErrorTxt
