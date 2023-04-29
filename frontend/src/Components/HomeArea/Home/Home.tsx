import "./Home.css";
import gift from "../../../Assets/Images/gifts-isolated.jpg"
function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Gift Shop Home Page</h2>
            <p>Best Gifts For Any Age</p>
            <hr/>
            <img src={gift}/>
            

        </div>
    );
}

export default Home;
