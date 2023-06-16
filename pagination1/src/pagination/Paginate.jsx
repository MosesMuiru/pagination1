import React, { useEffect, useState } from 'react'
import "./paginate.css"

function Paginate() {

  const [products,setProducts] = useState([])

  const  pageCount = Math.ceil(products.length/20);

  // set the pages
  const [page,setPage] = useState(1);



  // we gonna fext our products

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();

    setProducts(data?.products);

    console.log(data)
    console.log("this is the products",products)
  };

  useEffect(() => {
    fetchProducts()

  },[])
  //runs when the component is rendered - useEffect

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  }
  return (
    

    <div className=''>

      <div className='products'>

        {
          products.slice(page * 10 -10,page * 10).map((prod) =>(
              <span key={prod.id} className='single__product'>
                <p>
              {prod.title}
                </p>
                <img src={prod.thumbnail} alt="" />

              
              </span>
            
          ))
        }
      </div>

      <div className='pagination'>
        <span onClick={() => selectPageHandler(i-1)}>prev</span>
      {
      [...Array(products.length  / 10)].map((_,i) => (
        <span onClick={() => selectPageHandler(i+1)}>{i+1}</span>
      ))
      }
        <span onClick={() => selectPageHandler(i+1)}>next</span>
      </div>
               
    </div>
  )
}
// slice takes start number and end number


export default Paginate