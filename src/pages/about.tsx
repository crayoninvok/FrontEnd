import "../components/about.css"
import img1 from '../assets/1.jpg'

function Aboutpage(){
    return(
        <div>
            <h1>About Me</h1>
            <div className="container">
                <div className="FlexA1">
                    <div className="containerRow">
                        <div className="Row1"><img src={img1} alt="1" className="Row1IMG"/></div>
                        <div className="Row2">2</div>
                        <div className="Row3">3</div>
                        <div className="Row4">4</div>
                        <div className="Row5">5</div>
                        <div className="Row6">6</div>
                    </div>
                </div>
                <div className="FlexA2">2</div>
            </div>
        </div>
    )
}

export default Aboutpage