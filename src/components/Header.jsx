import { useEffect, useState } from "react"
import "./Header.css"

const Header = ({setData, data, getData, filtered, setFiltered, activeGenre, setActiveGenre}) => {


 useEffect(() => {
    if(activeGenre==="all"){
        setFiltered(data)
        return;
    }
    const filter = data.filter((item) =>item.category==activeGenre);
    setFiltered(filter)

 }, [activeGenre])
 

 return (
    <div>
        <h2 className="text-danger text-center mt-4">Product List</h2>
        <div className="d-flex justify-content-center gap-3">
    
            <button  className="buton" onClick={()=>setActiveGenre("all")}>ALL</button>
            <button  className="buton" onClick={()=>setActiveGenre("electronics")}>ELECTRONICS</button>
            <button  className="buton" onClick={()=>setActiveGenre("jewelery")}>JEWELERY</button>
            <button  className="buton" onClick={()=>setActiveGenre("men's clothing")}>MEN'S CLOTHING</button>
            <button  className="buton" onClick={()=>setActiveGenre("women's clothing")}>WOMEN'S CLOTHING</button>
        </div>
    </div>
  )
}

export default Header