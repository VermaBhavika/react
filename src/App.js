 // import logo from './logo.svg';
import './App.css';
import { MapFunction } from './component/mapFunction';
import { SlickSlider } from './component/SlickSlider';
import { CustomSlider } from './component/customSlider';
function App() {
  return (
    <div className="App">
      {/* <MapFunction/> */}
      <CustomSlider />

      <SlickSlider/>
    </div>
  );
}

export default App;
