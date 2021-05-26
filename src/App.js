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
  const [heightUnit, setHeightUnit] = useState(Constants.CENTIMETER);

  // const [weightUnitOld, setWeightUnitOld] = useState(Constants.KILOGRAM);
  // const [weightUnitNew, setWeightUnitNew] = useState(Constants.KILOGRAM);
  // const [waistUnitOld, setWaistUnitOld] = useState(Constants.CENTIMETER);
  // const [waistUnitNew, setWaistUnitNew] = useState(Constants.CENTIMETER);
  // const [neckUnit, setNeckUnit] = useState(Constants.CENTIMETER);
  // const [hipUnit, setHipUnit] = useState(Constants.CENTIMETER);


  // const [dateOld, setDateOld] = useState("");
  // const [weightOld, setWeightOld] = useState("");
  // const [oldStats.waist, setoldStats.waist] = useState("");
  // const [oldStats.neck, setoldStats.neck] = useState("");
  // const [hipOld, setHipOld] = useState("");

  // const [dateNew, setDateNew] = useState(Date());
  // const [weightNew, setWeightNew] = useState("");
  // const [waistNew, setWaistNew] = useState("");
  // const [neckNew, setNeckNew] = useState("");
  // const [hipNew, setHipNew] = useState("");

  const [oldStats, setOldStats] = useState({});
  const [newStats, setNewStats] = useState({});

  const setBodyFatPercent = (type, value) => {
    if (type === "old") {
      let clone = JSON.parse(JSON.stringify(oldStats));
      clone.bodyFatPercentage = value;
      setOldStats(clone);
    }
    else {
      let clone = JSON.parse(JSON.stringify(newStats));
      clone.bodyFatPercentage = value;
      setNewStats(clone);
    }
  }

  const calculate = () => {
    let bodyFatOld = Lib.bodyFatPercentage(gender, height, heightUnit, oldStats);
    setBodyFatPercent("old", bodyFatOld);

    let bodyFatNew = Lib.bodyFatPercentage(gender, height, heightUnit, newStats);
    setBodyFatPercent("new", bodyFatNew);
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
        <div className="row">
          <StatsForm formId="oldStats" statChanged={(stats) => setOldStats(stats)}></StatsForm>
          <StatsForm formId="newStats" statChanged={(stats) => setNewStats(stats)}></StatsForm>
        </div>
        <div style={{ marginTop: 30 }}>
          <button onClick={() => calculate()}>Calculate</button>
        </div>

        <h1 className="wrapped-around">
          <i className="fa fa-bar-chart"></i>
          {Content.Results}
        </h1>
        <Results oldStats={oldStats} newStats={newStats}></Results>
      </div>
    </div>
  );
}

export default App;
