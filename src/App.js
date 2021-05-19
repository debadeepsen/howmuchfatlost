import { useState } from 'react';
import './App.css';
import Lib from './Lib';

function App() {

  const [gender, setGender] = useState("M");
  const [height, setHeight] = useState("");
  const [units, setUnits] = useState(Lib.METRIC);
  const [lengthUnit, setLengthUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");

  const [dateOld, setDateOld] = useState("");
  const [weightOld, setWeightOld] = useState("");
  const [waistOld, setWaistOld] = useState("");
  const [neckOld, setNeckOld] = useState("");
  const [hipOld, setHipOld] = useState("");

  const [dateNew, setDateNew] = useState("");
  const [weightNew, setWeightNew] = useState("");
  const [waistNew, setWaistNew] = useState("");
  const [neckNew, setNeckNew] = useState("");
  const [hipNew, setHipNew] = useState("");

  const [bfOld, setBfOld] = useState(0);
  const [bfNew, setBfNew] = useState(0);

  const calculate = () => {
    let waistUnit = units === Lib.METRIC ? 'cm' : 'in';
    let neckUnit = units === Lib.METRIC ? 'cm' : 'in';
    let heightUnit = units === Lib.METRIC ? 'cm' : 'in';
    let hipUnit = units === Lib.METRIC ? 'cm' : 'in';

    console.table({ gender, waistOld, waistUnit, neckOld, neckUnit, height, heightUnit, hipOld, hipUnit })

    setBfOld(Lib.bodyFatPercentage(gender, waistOld, waistUnit, neckOld, neckUnit, height, heightUnit, hipOld, hipUnit));
    setBfNew(Lib.bodyFatPercentage(gender, waistNew, waistUnit, neckNew, neckUnit, height, heightUnit, hipNew, hipUnit));



  }

  return (
    <div className="App">
      <div>
        <div>
          <div>
            <h3>Gender:</h3>
            <select value={gender} onChange={e => setGender(e.target.value)}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div>
            <h3>Units:</h3>
            <select value={units} onChange={e => {
              setUnits(e.target.value);
              setWeightUnit(e.target.value === Lib.METRIC ? "kg" : "lb");
              setLengthUnit(e.target.value === Lib.METRIC ? "cm" : "in")
            }}>
              <option value={Lib.METRIC}>{Lib.METRIC}</option>
              <option value={Lib.IMPERIAL}>{Lib.IMPERIAL}</option>
            </select>
          </div>
          <div>
            <h3>Height:</h3>
            <input type="text" value={height} onChange={e => setHeight(e.target.value)}></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box past-box">
          <div>
            <h3>Date:</h3>
            <input type="date" value={dateOld} onChange={e => setDateOld(e.target.value)}></input>
          </div>
          <div>
            <h3>Weight:</h3>
            <input type="text" value={weightOld} onChange={e => setWeightOld(e.target.value)}></input>
            <span className="unit-display">{weightUnit}</span>
          </div>
          <div>
            <h3>Waist:</h3>
            <input type="text" value={waistOld} onChange={e => setWaistOld(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
          <div>
            <h3>Neck:</h3>
            <input type="text" value={neckOld} onChange={e => setNeckOld(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
          <div>
            <h3>Hip:</h3>
            <input type="text" value={hipOld} onChange={e => setHipOld(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
        </div>
        <div className="box present-box">
          <div>
            <h3>Date:</h3>
            <input type="date" value={dateNew} onChange={e => setDateNew(e.target.value)}></input>
          </div>
          <div>
            <h3>Weight:</h3>
            <input type="text" value={weightNew} onChange={e => setWeightNew(e.target.value)}></input>
            <span className="unit-display">{weightUnit}</span>
          </div>
          <div>
            <h3>Waist:</h3>
            <input type="text" value={waistNew} onChange={e => setWaistNew(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
          <div>
            <h3>Neck:</h3>
            <input type="text" value={neckNew} onChange={e => setNeckNew(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
          <div>
            <h3>Hip:</h3>
            <input type="text" value={hipNew} onChange={e => setHipNew(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <button onClick={() => calculate()}>Calculate</button>
      </div>
      <hr></hr>
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
          <span className="unit-display">{weightUnit}</span>
        </div>
        <div>
          <h3>New fat weight:</h3>
          {Lib.round(bfNew / 100 * weightNew)}
          <span className="unit-display">{weightUnit}</span>
        </div>
      </div>
      <div>
        <div>
          <h3>Weight lost:</h3>
          {Lib.round(weightOld - weightNew)}
          <span className="unit-display">{weightUnit}</span>
        </div>
        <div>
          <h3>Fat lost:</h3>
          {Lib.round(bfOld / 100 * weightOld - bfNew / 100 * weightNew)}
          <span className="unit-display">{weightUnit}</span>&nbsp;
          ({Lib.round((bfOld / 100 * weightOld - bfNew / 100 * weightNew) / (weightOld - weightNew) * 100)}% of weight lost)
        </div>
      </div>
    </div>
  );
}

export default App;
