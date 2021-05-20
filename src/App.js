import { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import Content from './Content';
import Lib from './Lib';
import Results from './sub_views/Results';


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

  const [dateNew, setDateNew] = useState(Date());
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

    setBfOld(Lib.bodyFatPercentage(gender, waistOld, waistUnit, neckOld, neckUnit, height, heightUnit, hipOld, hipUnit));
    setBfNew(Lib.bodyFatPercentage(gender, waistNew, waistUnit, neckNew, neckUnit, height, heightUnit, hipNew, hipUnit));
  }

  const setSelectedUnits = (value) => {
    console.log('setting units...' + JSON.stringify(value));
    setUnits(value);
    setWeightUnit(value === Lib.METRIC.value ? "kg" : "lb");
    setLengthUnit(value === Lib.METRIC.value ? "cm" : "in")
  }

  return (
    <div className="App">
      <h1>{Content.Caption1}</h1>
      <div style={{ textAlign: 'justify' }}>
        {Content.Description}
      </div>
      <h6>{JSON.stringify(units)}</h6>
      <h6>{JSON.stringify(weightUnit)}</h6>
      <h6>{JSON.stringify(lengthUnit)}</h6>
      <div className="separator"></div>

      <h1 className="wrapped-around">{Content.Caption2}</h1>
      <div>
        <div className="know-you-box">
          <div className="box">
            <h3>Gender:</h3>
            <Slider
              option1={{ text: "Male", value: "M" }}
              option2={{ text: "Female", value: "F" }}
              changed={(selectedOption) => setGender(selectedOption.value)}></Slider>
          </div>
          <div className="box">
            <h3>Units:</h3>
            <Slider
              option1={{ text: Lib.METRIC.text, value: Lib.METRIC.value }}
              option2={{ text: Lib.IMPERIAL.text, value: Lib.IMPERIAL.value }}
              changed={(selectedOption) => setSelectedUnits(selectedOption.value)}></Slider>
          </div>
          <div className="box">
            <h3>Height:</h3>
            <input type="text" value={height} onChange={e => setHeight(e.target.value)}></input>
            <span className="unit-display">{lengthUnit}</span>
          </div>
        </div>
      </div>
      <div className="separator"></div>

      <h1 className="wrapped-around">{Content.Caption3}</h1>
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
      <div className="separator"></div>

      <Results bfOld={bfOld} bfNew={bfNew} weightUnit={weightUnit} weightOld={weightOld} weightNew={weightNew}></Results>
    </div>
  );
}

export default App;
