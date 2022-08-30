import { useState } from 'react';
import { DateRange } from 'react-date-range';

// 套件使用 css
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './App.css'

function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>
      <div>若input背景色是綠色代表是從App.js import App.css css生效</div>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />

      <div className='tailwindTest'>從tailwind設的custom class, 藍色即生效</div>
    </>

  )
}

export default App