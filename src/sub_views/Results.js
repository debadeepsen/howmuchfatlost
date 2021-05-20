import Lib from '../Lib';

const Results = ({ bfOld, bfNew, weightUnit, weightOld, weightNew }) => {

    return (
        <div>
            <div>
                <div>
                    <h3>Old body fat percentage:</h3>
                    {Lib.round(bfOld)}%        
                </div>
                <div>
                    <h3>New body fat percentage:</h3>
                    {Lib.round(bfNew)}%
                </div>
            </div>
            <div>
                <div>
                    <h3>Old fat weight:</h3>
                    {Lib.round(bfOld / 100 * weightOld)}
                    {weightUnit}
                </div>
                <div>
                    <h3>New fat weight:</h3>
                    {Lib.round(bfNew / 100 * weightNew)}
                    {weightUnit}
                </div>
            </div>
            <div>
                <div>
                    <h3>Weight lost:</h3>
                    {Lib.round(weightOld - weightNew)}
                    {weightUnit}
                </div>
                <div>
                    <h3>Fat lost:</h3>
                    {Lib.round(bfOld / 100 * weightOld - bfNew / 100 * weightNew)}
                    {weightUnit}&nbsp;
                    ({Lib.round((bfOld / 100 * weightOld - bfNew / 100 * weightNew) / (weightOld - weightNew) * 100)}% of weight lost)
                </div>
            </div>
        </div>
    )
}

export default Results;