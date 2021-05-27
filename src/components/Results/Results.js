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
                    <DateBox date={newStats.date ? newStats.date : 'Day 2'} color={NEW_COLOR}></DateBox>
                    <div className="box" style={{ background: NEW_COLOR }}>
                        You weighed <span className="highlight" style={{ background: '#fff', color: NEW_COLOR }}>{newStats.weight} {weightUnit}</span>
                        with <span className="highlight" style={{ background: '#fff', color: NEW_COLOR }}>{Lib.round(newStats.bodyFatPercentage)}%</span> body fat
                    </div>
                </div>
                <div className="result-row">
                    <div className="box" style={{ background: RESULT_COLOR, padding: 30 }}>
                        You lost  <span className="highlight" style={{ background: '#fff', color: RESULT_COLOR }}>
                            {Lib.round(oldStats.weight - newStats.weight)}{weightUnit}
                        </span> of which
                        <span className="highlight" style={{ background: '#fff', color: RESULT_COLOR }}>
                            {Lib.round(oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight)}
                            {oldStats.weightUnit}&nbsp;
                            ({Lib.round((oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight) / (oldStats.weight - newStats.weight) * 100)}%)
                        </span>
                        was fat
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <div>
                <div>
                    <h3>Old body fat percentage:</h3>
                    {Lib.round(oldStats.bodyFatPercentage)}%
                </div>
                <div>
                    <h3>New body fat percentage:</h3>
                    {Lib.round(newStats.bodyFatPercentage)}%
                </div>
            </div>
            <div>
                <div>
                    <h3>Old fat weight:</h3>
                    {Lib.round(oldStats.bodyFatPercentage / 100 * oldStats.weight)}
                    {oldStats.weightUnit}
                </div>
                <div>
                    <h3>New fat weight:</h3>
                    {Lib.round(newStats.bodyFatPercentage / 100 * newStats.weight)}
                    {oldStats.weightUnit}
                </div>
            </div>
            <div>
                <div>
                    <h3>Weight lost:</h3>
                    {Lib.round(oldStats.weight - newStats.weight)}
                    {oldStats.weightUnit}
                </div>
                <div>
                    <h3>Fat lost:</h3>
                    {Lib.round(oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight)}
                    {oldStats.weightUnit}&nbsp;
                    ({Lib.round((oldStats.bodyFatPercentage / 100 * oldStats.weight - newStats.bodyFatPercentage / 100 * newStats.weight) / (oldStats.weight - newStats.weight) * 100)}% of weight lost)
                </div>
            </div>
        </div>
    )
}

export default Results;