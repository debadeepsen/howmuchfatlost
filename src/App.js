import { useState } from 'react';
import './App.css';
import Slider from './components/Slider';
import Content from './assets/content/Content';
import Lib from './helpers/Lib';
import Constants from './helpers/Constants';
import Results from './sub_views/Results';
import StatsForm from './components/StatsForm';


function App() {

  const [gender, setGender] = useState(Constants.MALE.value);
  const [height, setHeight] = useState("");

  const [weightUnit, setWeightUnit] = useState(Constants.KILOGRAM);
  const [waistUnit, setWaistUnit] = useState(Constants.CENTIMETER);
  const [neckUnit, setNeckUnit] = useState(Constants.CENTIMETER);
  const [heightUnit, setHeightUnit] = useState(Constants.CENTIMETER);
  const [hipUnit, setHipUnit] = useState(Constants.CENTIMETER);


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

    setBfOld(Lib.bodyFatPercentage(gender, waistOld, waistUnit, neckOld, neckUnit, height, heightUnit, hipOld, hipUnit));
    setBfNew(Lib.bodyFatPercentage(gender, waistNew, waistUnit, neckNew, neckUnit, height, heightUnit, hipNew, hipUnit));
  }

  return (
    <div className="App">
      <div className="banner"></div>
      <div className="main-body">
        <h1 className="page-caption">{Content.Caption1}</h1>
        <div className="description">
          {Content.Description}
        </div>

        <h1 className="wrapped-around">
          <i className="fa fa-question-circle"></i>
          {Content.Caption2}
        </h1>
        <div>
          <div className="know-you-box">
            <div className="box">
              <h3>Gender:</h3>
              <Slider
                width={125}
                option1={{ text: "Male", value: "M", iconClass: "fa fa-male" }}
                option2={{ text: "Female", value: "F", iconClass: "fa fa-female" }}
                changed={(selectedOption) => setGender(selectedOption.value)}></Slider>
            </div>
            <div className="box">
              <h3>Height:</h3>
              <input type="text" value={height} onChange={e => setHeight(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setHeightUnit(selectedOption.value)}></Slider>
            </div>
          </div>
        </div>

        <h1 className="wrapped-around">
          <i className="fa fa-th-list"></i>
          {Content.Caption3}
        </h1>
        <hr></hr>
        <div className="row">
          <StatsForm></StatsForm>
          <StatsForm></StatsForm>
        </div>
        <hr></hr>
        <div className="row">
          <div className="box past-box">
            <div>
              <h3>Date:</h3>
              <input type="date" value={dateOld} onChange={e => setDateOld(e.target.value)}></input>
            </div>
            <div>
              <h3>Weight:</h3>
              <input type="text" value={weightOld} onChange={e => setWeightOld(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.KILOGRAM, value: Constants.KILOGRAM }}
                option2={{ text: Constants.POUND, value: Constants.POUND }}
                changed={(selectedOption) => setWeightUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Waist:</h3>
              <input type="text" value={waistOld} onChange={e => setWaistOld(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setWaistUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Neck:</h3>
              <input type="text" value={neckOld} onChange={e => setNeckOld(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setNeckUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Hip:</h3>
              <input type="text" value={hipOld} onChange={e => setHipOld(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setHipUnit(selectedOption.value)}></Slider>
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
              <Slider
                width={65}
                option1={{ text: Constants.KILOGRAM, value: Constants.KILOGRAM }}
                option2={{ text: Constants.POUND, value: Constants.POUND }}
                changed={(selectedOption) => setWeightUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Waist:</h3>
              <input type="text" value={waistNew} onChange={e => setWaistNew(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setWaistUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Neck:</h3>
              <input type="text" value={neckNew} onChange={e => setNeckNew(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setNeckUnit(selectedOption.value)}></Slider>
            </div>
            <div>
              <h3>Hip:</h3>
              <input type="text" value={hipNew} onChange={e => setHipNew(e.target.value)}></input>
              <Slider
                width={65}
                option1={{ text: Constants.CENTIMETER, value: Constants.CENTIMETER }}
                option2={{ text: Constants.INCH, value: Constants.INCH }}
                changed={(selectedOption) => setHipUnit(selectedOption.value)}></Slider>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>
          <button onClick={() => calculate()}>Calculate</button>
        </div>

        <h1 className="wrapped-around">
          <i className="fa fa-bar-chart"></i>
          {Content.Results}
        </h1>
        <Results bfOld={bfOld} bfNew={bfNew} weightUnit={weightUnit} weightOld={weightOld} weightNew={weightNew}></Results>
      </div>
    </div>
  );
}

export default App;
