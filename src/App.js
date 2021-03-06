import { useState } from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import Content from './assets/content/Content';
import Lib from './helpers/Lib';
import Constants from './helpers/Constants';
import Results from './components/Results/Results';
import StatsForm from './components/StatsForm/StatsForm';


function App() {

  const [gender, setGender] = useState(Constants.MALE.value);
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState(Constants.CENTIMETER);

  const [oldStats, setOldStats] = useState({});
  const [newStats, setNewStats] = useState({});
  const [resultsAvailable, setResultsAvailable] = useState(false);

  const setBodyFatPercent = (type, value) => {
    if (type === Constants.OLD) {
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
    setBodyFatPercent(Constants.OLD, bodyFatOld);

    let bodyFatNew = Lib.bodyFatPercentage(gender, height, heightUnit, newStats);
    setBodyFatPercent(Constants.NEW, bodyFatNew);

    setResultsAvailable(true);
  }

  const reset = () => {
    setOldStats({});
    setNewStats({});
    setResultsAvailable(false);
  }

  return (
    <div className="App">
      <div className="banner"></div>
      <div className="main-body">
        <h1 className="page-caption">{Content.Caption1}</h1>
        <div className="description">
          {Content.Description}
        </div>
        <div className="note" dangerouslySetInnerHTML={{ __html: Content.Source }}></div>

        <h1 className="wrapped-around">
          <i className="fa fa-question-circle"></i>
          {Content.Caption2}
        </h1>
        <div>
          <div className="know-you-box">
            <div className="box">
              <h3>Gender:</h3>
              <Slider
                width={120}
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
          <button onClick={() => calculate()}><i className="las la-calculator"></i> Calculate</button>
          <button className="reset-btn" onClick={() => reset()}><i className="las la-redo-alt"></i> Reset</button>
        </div>

        <h1 className="wrapped-around">
          <i className="fa fa-bar-chart"></i>
          {Content.Results}
        </h1>
        {
          resultsAvailable ?
            <Results oldStats={oldStats} newStats={newStats}></Results>
            :
            <div>Press the "Calculate" button above to get your results.</div>
        }
      </div>
    </div>
  );
}

export default App;
