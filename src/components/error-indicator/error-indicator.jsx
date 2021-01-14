import React from 'react'
import './error-indicator.scss'


const ErrorIndicator = () => {
    return (
        <div className='error-page'>
            <div className="error-page__content">
                <h1 className='error-page__title'>
                    Something goes wrong...
                </h1>

                <div className='error-page__subtitle'>
                    don`t worry we will fix it
                </div>
            </div>
        </div>
    )
}

export default ErrorIndicator
