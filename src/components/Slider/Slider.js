import { useEffect, useState } from 'react';
import './Slider.css';

const SWITCH_CLASSES = {
    LEFT: "switch-left",
    RIGHT: "switch-right"
}

const Slider = ({ option1, option2, changed, width }) => {
    const [switchClass, setSwitchClass] = useState(SWITCH_CLASSES.RIGHT);
    const [translateBy, setTranslateBy] = useState(0);

    const [option1_opacity, setOption1_opacity] = useState(1);
    const [option2_opacity, setOption2_opacity] = useState(0);

    const [arrowRotation, setArrowRotation] = useState(0);

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setSelectedOption(option1);
    }, [option1])

    const slide = () => {
        if (switchClass === SWITCH_CLASSES.RIGHT) {
            setSelectedOption(option2);
            setSwitchClass(SWITCH_CLASSES.LEFT);
            setTranslateBy(30 - width);
            setArrowRotation(180);
            setOption1_opacity(0);
            setOption2_opacity(1);
            changed && changed(option2);
        }
        else {
            setSelectedOption(option1);
            setSwitchClass(SWITCH_CLASSES.RIGHT);
            setTranslateBy(0);
            setArrowRotation(0);
            setOption1_opacity(1);
            setOption2_opacity(0);
            changed && changed(option1);
        }
    }

    return (
        <>
            <div className="slider-parent" style={{ width: width ? width : 125 }} onClick={() => slide()}>
                <div className="option1" style={{ opacity: option1_opacity }}>
                    {option1 && <i className={option1.iconClass}></i>}
                    {option1 && option1.text}
                </div>
                <div className="option2" style={{ opacity: option2_opacity }}>
                    {option2 && <i className={option2.iconClass}></i>}
                    {option2 && option2.text}
                </div>
                <div className="switch" style={{ transform: 'translateX(' + translateBy + 'px)' }}>
                    <i className="las la-angle-double-left" style={{ transform: `rotateZ(${arrowRotation}deg)` }}></i>
                </div>
            </div>
        </>
    )
}

export default Slider;