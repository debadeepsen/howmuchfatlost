import Lib from '../../helpers/Lib';
import Slider from '../Slider/Slider';
import Constants from '../../helpers/Constants';
import { useState } from 'react';
import { format } from 'date-fns';
import DateBox from '../DateBox/DateBox';
import './Results.css';

const Results = ({ oldStats, newStats }) => {

    const [weightUnit, setWeightUnit] = useState(Constants.KILOGRAM);

    const OLD_COLOR = "#c7523c";
    const NEW_COLOR = "#489";
    const RESULT_COLOR = 'var(--teal)';

    return (
        <div>
            <div className="row" style={{ width: '50%' }}>
                <h3>Weight Unit:</h3>
                <Slider
                    width={65}
                    option1={{ text: Constants.KILOGRAM, value: Constants.KILOGRAM }}
                    option2={{ text: Constants.POUND, value: Constants.POUND }}
                    changed={(selectedOption) => setWeightUnit(selectedOption.value)}></Slider>
            </div>
            <div className="result-graphics">
                <div className="result-row">
                    <DateBox date={oldStats.date ? oldStats.date : 'Day 1'} color={OLD_COLOR}></DateBox>
                    <div className="box" style={{ background: OLD_COLOR }}>
                        You weighed <span className="highlight" style={{ background: '#fff', color: OLD_COLOR }}>{oldStats.weight} {weightUnit}</span>
                        with <span className="highlight" style={{ background: '#fff', color: OLD_COLOR }}>{Lib.round(oldStats.bodyFatPercentage)}%</span> body fat
                    </div>
                </div>
                <div className="result-row">
                    <DateBox date={newStats.date ? newStats.date : 'Day 2'} color={NEW_COLOR}></DateBox>
                    <div className="box" style={{ background: NEW_COLOR }}>
                        You weighed <span className="highlight" style={{ background: '#fff', color: NEW_COLOR }}>{newStats.weight} {weightUnit}</span>
                        with <span className="highlight" style={{ background: '#fff', color: NEW_COLOR }}>{Lib.round(newStats.bodyFatPercentage)}%</span> body fat
                    </div>
                </div>
                <div className="result-row">
                    <div className="box" style={{ background: RESULT_COLOR, padding: 20 }}>
                        You lost  <span className="highlight" style={{ background: '#fff', color: RESULT_COLOR }}>
                            {Lib.round(oldStats.weight - newStats.weight)}&nbsp;{weightUnit}
                        </span> out of which
                        <span className="highlight" style={{ background: '#fff', color: RESULT_COLOR }}>
                            {Lib.round(oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight)}&nbsp;
                            {weightUnit}&nbsp;
                            ({Lib.round((oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight) / (oldStats.weight - newStats.weight) * 100)}%)
                        </span>
                        was fat
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;