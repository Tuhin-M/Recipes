import {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const APP_ID = '2b1f8294';
  const APP_KEY = 'feeb8c8ed4f947b277f092ee20027697';
  const exampleURL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(()=>{
    console.log('Updated search contents');
  },[search]);
  const submitFunc = (event) => {
    event.preventDefault();
    event.stopPropagation();
    getRecipes();
  }
  const getRecipes = async () => {
    const response = await fetch(exampleURL);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <h1>Food Ingredients</h1>
      <h2>Search recipes to know the ingredients</h2>
      <form className='searchForm' onSubmit={submitFunc}>
        <input type='text' className = 'searchBar' onChange={(event)=>{setSearch(event.target.value)}}/>
        <button className='searchButton' type='submit' onClick={getRecipes}>Search</button>
      </form>
      <div className='recipes'>
      {
        recipes.map((item, id)=>{
          return <Recipe key={id} label={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image} ingredients={item.recipe.ingredientLines}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
