import { useState } from 'react';
import Constants from '../helpers/Constants';
import Slider from './Slider';

const StatsForm = () => {

    const [date, setDate] = useState("");
    const [weight, setWeight] = useState("");
    const [weightUnit, setWeightUnit] = useState("");
    const [waist, setWaist] = useState("");
    const [waistUnit, setWaistUnit] = useState("");
    const [neck, setNeck] = useState("");
    const [neckUnit, setNeckUnit] = useState("");
    const [hip, setHip] = useState("");
    const [hipUnit, setHipUnit] = useState("");

    return (
        <>
            <div className="box past-box">
                <div>
                    <h3>Date:</h3>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                </div>
                <div>
                    <h3>Weight:</h3>
                    <input type="text" value={weight} onChange={e => setWeight(e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.KILOGRAM, value: Constants.KILOGRAM }}
                        option2={{ text: Constants.POUND, value: Constants.POUND }}
                        changed={(selectedOption) => setWeightUnit(selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Waist:</h3>
                    <input type="text" value={waist} onChange={e => setWaist(e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setWaistUnit(selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Neck:</h3>
                    <input type="text" value={neck} onChange={e => setNeck(e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setNeckUnit(selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Hip:</h3>
                    <input type="text" value={hip} onChange={e => setHip(e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setHipUnit(selectedOption.value)}></Slider>
                </div>
            </div>
        </>
    )
}

export default StatsForm;