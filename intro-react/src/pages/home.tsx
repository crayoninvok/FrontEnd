// import Button from "../components/button"
import zaki from '../assets/zaki.png'


function Homepage(){
    return(
    <div className="flex">
        <div className="flex1"><img src={zaki} alt="" className='zakifoto'/>
        </div> 
        <div className="flex2">
            <div className='container1'>
                <h1 className='Hello'>HOLA GUYS ! ! !</h1>
                <p className='pengantar'>I'am Dzaky Athariq Ferreira a student of FullStack Web Development Program at Purwadhika.</p>
                <button className='readmore'>Read More About ME ?</button>
            </div>
        </div>
   </div>
    )
}

export default Homepage
// const str:string = "Print Hello World🧩"
{/* <h1 style={{color:"orange"}}>{str}</h1> */}