import {useState, useEffect } from 'react'

export default function ClimateChange() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`https://api.worldbank.org/v2/en/country/all/indicator/EN.CLC.HEAT.XD?format=json&per_page=20000&source=75`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)

          setIsLoaded(true);
          setItems(result);
          console.log(items[1])

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {


    return (
      <div style ={{color:"black",
      paddingTop : "100px"
      }}>  
        <h1 >lorem
          dkkff
          lffkl
        </h1>
            {/* <ul>
        {items[1].map((item) => {
        return  <li key={item.id}>
            {(item.date)} {item.country.value}
          </li>
          
        })}
      </ul> */}
      </div>

    );
  }
}