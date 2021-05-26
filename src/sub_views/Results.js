import Lib from '../helpers/Lib';
import Slider from '../components/Slider';
import Constants from '../helpers/Constants';

const Results = ({ oldStats, newStats }) => {

    return (
        <div>
            <Slider
                option1={{ text: Constants.METRIC.text, value: Constants.METRIC.value }}
                option2={{ text: Constants.IMPERIAL.text, value: Constants.IMPERIAL.value }}
            ></Slider>
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