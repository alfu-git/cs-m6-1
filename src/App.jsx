import { Suspense } from 'react';
import './App.css'
import DishContainer from './component/DishContainer/DishContainer';
import Navbar from './component/Navbar'

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

const loadDish = async() => {
  const res = await fetch(url);
  return res.json();
}

const getLoadDish = loadDish();

function App() {

  return (
    <>

      <Navbar></Navbar>
      <Suspense fallback={<p className='fallback'>Meals Loading...</p>}>
        <DishContainer getLoadDish={getLoadDish}></DishContainer>
      </Suspense>
    </>
  )
}

export default App
