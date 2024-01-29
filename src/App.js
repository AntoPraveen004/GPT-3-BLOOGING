import {Navigation} from './component'
import {Cta} from './component'
import {Blog} from './container'
import "@fontsource/manrope"; 
 import {Brand} from './component'
 import {Article} from './component'
 import {Header } from './container'
 import { WhatGPT3 } from './container'
import {Features} from './container'
import { Posibility } from './container';
import {Footer} from './container'
 import './App.css'
 import './index'
function App() {
  return (
    <div className="App">
      <div className="gradient">
       <Navigation/>
       <Header/>
      </div>
    <Brand/>
    <WhatGPT3 />
    <Features/>
    <Posibility/>
    <Cta/>
    <Blog/>
    <Article/>
    <div className='footer'>
      <Footer/>
    </div>
    </div>
  );
}
export default App;
