import * as DateFns from "date-fns";
import './DateBox.css';

const DateBox = ({ date, color='#777' }) => {

    if (date === 'Day 1' || date === 'Day 2')
        return (
            <div className="date-box">
                {date}
            </div>
        )

    const fullDate = DateFns.format(new Date(date), 'd-MMMM-yyyy');

    const dateParts = fullDate.split("-");
    const D = dateParts[0];
    const M = dateParts[1];
    const Y = dateParts[2];

    return (
        <div className="date-box" style={{borderColor: color}}>
            <div className="D" style={{borderColor: color, color: color}}>{D}</div>
            <div className="M" style={{borderColor: color, background: color, color: '#fff'}}>{M}</div>
            <div className="Y" style={{borderColor: color, background: color, color: '#fff'}}>{Y}</div>
        </div>
    )
}

export default DateBox;