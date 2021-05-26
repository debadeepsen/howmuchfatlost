import { useState } from 'react';
import Constants from '../helpers/Constants';
import Slider from './Slider';

const StatsForm = ({ formId, statChanged }) => {

    const [stats, setStats] = useState({
        date: "",
        weight: "",
        weightUnit: "",
        waist: "",
        waistUnit: "",
        neck: "",
        neckUnit: "",
        hip: "",
        hipUnit: ""
    });

    const setStatsProperty = (property, value) => {
        let clone = JSON.parse(JSON.stringify(stats));
        clone[property] = value;
        setStats(clone);
        statChanged(stats);
    }

    return (
        <>
            <div className="box past-box">
                <div>
                    <h3>Date:</h3>
                    <input type="date" value={stats.date} onChange={e => setStatsProperty("date", e.target.value)}></input>
                </div>
                <div>
                    <h3>Weight:</h3>
                    <input type="text" value={stats.weight} onChange={e => setStatsProperty("weight", e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.KILOGRAM, value: Constants.KILOGRAM }}
                        option2={{ text: Constants.POUND, value: Constants.POUND }}
                        changed={(selectedOption) => setStatsProperty("weightUnit", selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Waist:</h3>
                    <input type="text" value={stats.waist} onChange={e => setStatsProperty("waist", e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setStatsProperty("waistUnit", selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Neck:</h3>
                    <input type="text" value={stats.neck} onChange={e => setStatsProperty("neck", e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setStatsProperty("neckUnit", selectedOption.value)}></Slider>
                </div>
                <div>
                    <h3>Hip:</h3>
                    <input type="text" value={stats.hip} onChange={e => setStatsProperty("hip", e.target.value)}></input>
                    <Slider
                        width={65}
                        option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                        option2={{ text: Constants.INCH, value: Constants.INCH }}
                        changed={(selectedOption) => setStatsProperty("hipUnit", selectedOption.value)}></Slider>
                </div>
            </div>
        </>
    )
}

export default StatsForm;