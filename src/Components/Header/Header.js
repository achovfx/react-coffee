import React from 'react';
import Navbar from './Navbar/Navbar';
import MainBtn from '../MainBtn/MainBtn';
import './Header.css';

export default function Header() {
  return (
    <header className='header-container' style={{ backgroundImage: `url(./images/header-background.svg)`,height: window.screen.height - 160}}>
        <div className="hContainer">
            <Navbar>
                <li>
                    <a href="#">فروشگاه</a>
                </li>
                <li>
                    <a href="#">پشتیبانی</a>
                </li>
                <li>
                    <a href="#">ارتباط با ما</a>
                </li>
                <li>
                    <a href="#">درباره ما</a>
                </li>
                <li>
                    <a href="#">بلاگ</a>
                </li>
            </Navbar>

            <div className="main">
                <div className="right">
                    <div className="background">
                        <img src="./images/header-bg-coffee copy.png" height="738px" alt="coffee background"/>
                    </div>
                    <div className="details">
                        <div className="title">
                            <img src="./images/typography.svg" alt="typography" />
                        </div>
                        <p className='desc'>فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب</p>
                        <MainBtn text="خرید و مشاوره" />
                    </div>
                </div>
                <div className="left">
                    <img src="./images/header-coffee.svg" alt="coffee"/>
                </div>
            </div>
        </div>
    </header>
  )
}