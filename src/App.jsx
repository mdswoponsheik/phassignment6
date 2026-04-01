
import { Suspense } from 'react'
import './App.css'
import LowerBody from './components/lowerBody/lowerBody'
import Main from './components/main/main'
import UpperBody from './components/upperBody/upperBody'


const fetchData = async () =>{
  const res = await fetch("/data.json")
  return res.json();
};

function App() {
  const dataPromise = fetchData();


  return (
    < >

      <UpperBody></UpperBody>
      <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>}>
      <Main dataPromise={dataPromise}></Main>
      </Suspense>
      <LowerBody></LowerBody>
      


    </>
  );
  
};

export default App;

