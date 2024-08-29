
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';


function App() {
let [categories,setCategories] = useState([]);
  
let getCategoriesFromServer = async ()=>{
  let JSONData= await fetch("https://api.escuelajs.co/api/v1/categories",{method:"GET"});

let JSOData= await JSONData.json();
setCategories(JSOData);
console.log(JSOData);
}


let [products,setProducts] = useState([]);
  
let getProductsFromServer = async ()=>{
  let JSONData= await fetch("https://api.escuelajs.co/api/v1/products",{method:"GET"});

let JSOData= await JSONData.json();
setProducts(JSOData);
console.log(JSOData);
}



let[users,setUsers] = useState([]);
let getRequest1 = async ()=>{
  let jsonData= await fetch("https://api.escuelajs.co/api/v1/users",{method:"GET"});
  let jsoData= await jsonData.json();

  console.log(jsoData);
  setUsers(jsoData);
}


useEffect(()=>{
  getCategoriesFromServer();
  getProductsFromServer();
  getRequest1();
},[])

return (
    <div className="App">
<button type='button'
onClick={()=>{
console.log(getCategoriesFromServer());
}}>Get Categories</button>



<button type='button'
onClick={()=>{
console.log(getProductsFromServer());
}}>Get Products</button>

<br>
</br>



<button type='button'
onClick={()=>{
console.log(getRequest1());
}}>Get Users</button>

<br>
</br>

{categories.map((ele,i)=>{
return (
<div className="div">
 <img src={ele.image} className='img'></img>
<p>{ele.name}</p>
<p>{ele.creationAt}</p>
<p>{ele.id}</p>
</div>
)
})}

<br></br>

{products.map((ele,i)=>{
return (
<div className='div'>
<img  src={ele.images} alt={` ${ele.images + 1}`} className='img' title={ele.descriptioin}/>
<p>{ele.description}</p>
<p>{ele.id}</p>
<p>Price:${ele.price}</p>
</div>
)
})}


{users.map((ele,i)=>{
return(
  <div className="div">
  <p>{ele.avatar}</p>
  <p>{ele.email}</p>
  <p>{ele.id}</p>
  <p>{ele.name}</p>
  <p>{ele.role}</p>
</div>)
})}

    </div>
  );
}

export default App;
