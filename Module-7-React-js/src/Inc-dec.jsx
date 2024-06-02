import { useState } from "react"

function Inc(){
     const [state,setstate] = useState(1)
     return(
         <>
           <h1 className="color">React Web</h1>
           <div className="color">{state}</div>
           <div>
            <button className="Inc" onClick={
                   ()=>setstate(state - 1)
            }>Decreament</button>
            <button className="Inc" onClick={()=>setstate(state + 1)}>Increament</button>
           </div>
         </>
     )
}

export default Inc;