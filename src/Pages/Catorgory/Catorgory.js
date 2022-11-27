
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import CatorgoryCart from '../../components/CatorgoryCart';






const Catorgory = () => {
    const [catorgory,setCatorgory] =useState([])

     const [selected, setSelected] = useState(new Date());

 
   



    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>{
            // console.log(data);
            setCatorgory(data);
        })
    },[])


    return (
      <div>
        <h1> data= {catorgory.length}</h1>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {catorgory.map((product) => (
              <CatorgoryCart key={product.id} product={product}></CatorgoryCart>
            ))}
          </div>
        </div>

        <p>today date {format(selected, "PP")}</p>
      </div>
    );
};

export default Catorgory;