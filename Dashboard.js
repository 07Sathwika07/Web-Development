import "../App.css";
import { Link } from "react-router-dom";

function Dashboard(){

return(

<div className="card">

<h1>Dashboard</h1>

<p>Welcome to BlogHub 🎉</p>

<br/>

<Link to="/create-blog">

<button>Create Blog</button>

</Link>

</div>

)

}

export default Dashboard;