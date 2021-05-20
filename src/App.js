import { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import Lib from './Lib';

/* <select value={gender} onChange={e => setGender(e.target.value)}>
<option value="M">Male</option>
<option value="F">Female</option>
</select>



<select value={units} onChange={e => }>
<option value={Lib.METRIC}>{Lib.METRIC}</option>
<option value={Lib.IMPERIAL}>{Lib.IMPERIAL}</option>
</select> */


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

  const setSelectedUnits = (value) => {
    setUnits(value);
    setWeightUnit(value === Lib.METRIC ? "kg" : "lb");
    setLengthUnit(value === Lib.METRIC ? "cm" : "in")
  }

  return (
    <div className="App">
      <h1>How much fat have you lost so far?</h1>
      <div style={{ textAlign: 'justify' }}>So you've been on a fat loss journey for a while now,
      and been making progress and also noting down your stats and measurements
      (hopefully, because otherwise this tool won't work!)
      When you lose weight, a part of it is lost from fat and some of it from muscle.
      That proportion varies from person to person, and depends on many factors,
      like protein intake and how much caloric deficit you're running.
      Not going into all that, this tool will measure
      how much body fat you had when you started, and how much you have now.
      That way, you can get an idea of how much of your hard-earned muscle is
      being retained, and how much is actually being lost from fat.
      </div>
      <h1>First, let's get to know you better</h1>
      <div>
        <div className="know-you-box">
          <div>
            <h3>Gender:</h3>
            <Slider
              option1={{ text: "Male", value: "M" }}
              option2={{ text: "Female", value: "F" }}
              changed={(selectedOption) => setGender(selectedOption.value)}></Slider>
          </div>
          <div>
            <h3>Units:</h3>
            <Slider
              option1={{ text: Lib.METRIC, value: Lib.METRIC }}
              option2={{ text: Lib.IMPERIAL, value: Lib.IMPERIAL }}
              changed={(selectedOption) => setSelectedUnits(selectedOption.value)}></Slider>
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
      <div className="separator"></div>
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
