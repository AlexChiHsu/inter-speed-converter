/* eslint-disable react/style-prop-object */
import './App.css';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const {value} = e.target;
    setInputValue(value);
  }
  return (
    <div class="container">
      <div class="card-header">Network Speed Converter</div>
      <div class="card-body">
        <div class="unit-control">
          <div class="unit">
            Mbps
          </div>
          <span class="exchange-icon fa-fw fa-stack">
            <i class="far fa-circle fa-stack-2x"></i>
            <i class="fas fa-exchange-alt fa-stack-1x"></i>
          </span>
          <div class="MB/s">
            MB/s
          </div>
        </div>
        <div class="converter">
          <div class="flex-1">
            <div class="converter-title">
              set
            </div>
            <input 
              type="number" 
              onChange={handleInputChange}
              value={inputValue}
              class="input-number" 
              min="0" />
          </div>

          <span class="angle-icon fa-2x">
            <i class="fas fa-angle-right"></i>
          </span>

          <div class="text-right flex-1">
            <div class="converter-title">
              Show
            </div>
            <input type="text" class="input-number text-right" value={inputValue / 8} disabled />
          </div>
        </div>
      </div>
      <div class="card-footer">FAST</div>
    </div>
  );
}

export default App;
