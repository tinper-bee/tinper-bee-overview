import React, {Component} from 'react';
import {Carousel, Tile} from 'tinper-bee';


import './index.less';

export default class CarouselDemo extends Component {
    state = {
        open: true
    }

    render() {
        const params = {
            pagination: {   //配置页码参数 其中 renderBullet 是自定义页码
                el: '.swiper-pagination',
                clickable: true,  //可点击页码切换swiper
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },

            },
            navigation: {   //配置上一页下一页按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 20  //配置两页之前切换距离
        }
        return (
            <div className="carousel-demo">
                <Tile className="calendar-demo-tile">
                    <h3>轮播图</h3>
                    <div className="carousel-demo-row">
                        <div id="customized-pagination">
                            <Carousel {...params}>
                                <div className="carousel-demo-1"></div>
                                <div className="carousel-demo-2"></div>
                                <div className="carousel-demo-3"></div>
                                <div className="carousel-demo-4"></div>
                                <div className="carousel-demo-5"></div>
                            </Carousel>
                        </div>
                    </div>
                </Tile>
            </div>
        )
    }
}