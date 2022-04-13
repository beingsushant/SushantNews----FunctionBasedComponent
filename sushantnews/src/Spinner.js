import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
    return (
        <div className="text-center">
            <img className="" src={loading} alt="loading" style={{width: '40px', height: '40px'}}/>
        </div>
    )
}

export default Spinner