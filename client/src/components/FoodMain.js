import React, { useEffect, useState } from 'react'
import { Icon, Header } from 'semantic-ui-react'
import Swipe from './Swipe'

import NoResults from './NoResults';
import {useSelector} from 'react-redux'
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
        <Header id="foodmainheader"as='h2'>
            <button className="ui basic button">
                <i className="icon user"></i>
            </button>
            <Header.Content className="kananame">
                Kana
            </Header.Content>
        </Header>
            <Swipe />
    </div> : <GifLoading/>}
    </div>
    )


}