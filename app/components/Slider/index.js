import React, {Component} from 'react';
import {Tile, Slider} from 'tinper-bee';


import './index.less';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const RangeTooltip = createSliderWithTooltip(Slider.Range);
const SliderTooltip = createSliderWithTooltip(Slider);

export default class SliderDemo extends Component {
    state = {
        open: true
    }

    render() {

        const marks = {
            '-10': '-10°C',
            0: <strong>0°C</strong>,
            26: '26°C',
            47: '47°C',
            100: {
                style: {
                    color: 'red',
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div className="slider-demo">
                <Tile className="slider-demo-tile">
                    <h3>滑块</h3>
                    <div className="slider-demo-row">
                        <Slider defaultValue={20} />
                    </div>
                    <div className="slider-demo-row">
                        <Slider.Range min={-10} marks={marks} onChange={() => {}} defaultValue={[20, 40]} />
                    </div>
                    <div className="slider-demo-row">
                        <SliderTooltip min={0} max={100} defaultValue={45} tipFormatter={value => `${value}%`}/>
                    </div>
                    <div className="slider-demo-row">
                        <RangeTooltip min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                    </div>
                </Tile>
            </div>
        )
    }
}