import React, {useState} from 'react'


function Searchbar({products}) {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

//     const filteredProducts = products.filter(product => {
//         return product.includes(searchValue)
// })
    const shouldDisplayButton = searchValue.length > 0;
  return (
    <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
       {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
       <ul>
       {products.map(product => {
            const {id, title, price, description, category, image} = product
        return <li key={id}>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <img src={image} alt="product"/>
            </li>
       })}
       </ul>
    </div>
  )
}

export default Searchbar