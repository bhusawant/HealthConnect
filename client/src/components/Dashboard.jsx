import Dash from "../Assets/DImg.jpg"
import "../styles/Dashboard.css"

export default (Dashboard) => {
    return <>
        {/* <h1>Dashboard</h1> */}
        <div>
            <img className="dash" src={Dash} alt="Doctor" width={1000} height={600} />
        </div>
    </>
}