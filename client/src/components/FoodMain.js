import React, { useEffect, useState } from 'react'

import Swipe from './Swipe'
import GifLoading from './GifLoading'

export default props => {
    const [showLoading, setShowLoading] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setShowLoading(true), 3000);
        return () => clearTimeout(timer)
    }, []);

    return (
        <div>
        {showLoading === true ?  <div className="foodmainpage">
            <Swipe />
    </div> : <GifLoading/>}
    </div>
    )


}