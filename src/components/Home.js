import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <div className="home-container">
                <img className='home-image' src="https://m.media-amazon.com/images/I/61OgQJj8NeL._SX3000_.jpg" alt="Home" />
            </div>

            <div className="home-row">
                <Product id={1} title='The Learn stack' image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jupiter22/GW/P3/01--Upgrade-1x._SY116_CB607286890_.jpg'
                    price={2000} rating={4} />
                <Product id={2} title='The Learn stack' image='https://m.media-amazon.com/images/I/416SpYgTVYL._AC_SY200_.jpg'
                    price={1600} rating={5} />                
            </div>

            <div className="home-row">
                <Product id={3} title='The Learn stack' image='https://m.media-amazon.com/images/I/61gyENWb1hL._AC_SY200_.jpg'
                    price={10} rating={3} />
                <Product id={4} title='The Learn stack' image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter22/Phase3/PC_P3/D55798905_PC_CC_1x._SY304_CB609070400_.jpg'
                    price={50} rating={4} />
                <Product id={5} title='The Learn stack' image='https://m.media-amazon.com/images/I/71HVF5nMifL._AC_SY200_.jpg'
                    price={12} rating={4} />

                
            </div>
             <div className="home-row">
                <Product id={6} title='The Learn stack' image='https://images-eu.ssl-images-amazon.com/images/G/31/amazon_basics/ashaln/gw_btf_pc/xcm_banners_phase3-furnpc-qc-x-gl-tile3_372x232_in-en._SY116_CB609065511_.jpg'
                    price={3299.99} rating={5} />
            </div>
        </div>
  )
}

export default Home