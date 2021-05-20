import { useEffect, useState } from 'react';
import './Slider.css';

const SWITCH_CLASSES={
    LEFT: "switch-left",
    RIGHT: "switch-right"
}

const Slider = ({ option1, option2, changed }) => {
    const [switchClass, setSwitchClass] = useState(SWITCH_CLASSES.RIGHT);

    const [option1_opacity, setOption1_opacity] = useState(1);
    const [option2_opacity, setOption2_opacity] = useState(0);

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setSelectedOption(option1);
    }, [option1])

    const slide = () => {
        if (switchClass === SWITCH_CLASSES.RIGHT) {
            setSelectedOption(option2);
            setSwitchClass(SWITCH_CLASSES.LEFT);
            setOption1_opacity(0);
            setOption2_opacity(1);
            changed && changed(selectedOption);
        }
        else {
            setSelectedOption(option1);
            setSwitchClass(SWITCH_CLASSES.RIGHT);
            setOption1_opacity(1);
            setOption2_opacity(0);
            changed && changed(selectedOption);
        }
    }

    return (
        <>
            <div className="parent" onClick={() => slide()}>
                <div className="option1" style={{ opacity: option1_opacity }}>{option1 && option1.text}</div>
                <div className="option2" style={{ opacity: option2_opacity }}>{option2 && option2.text}</div>
                <div className={"switch " + switchClass}></div>
            </div>
        </>
    )
}

export default Slider;