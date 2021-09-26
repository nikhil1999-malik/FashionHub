import image from "../Images/img-home.jpg"
import "../components/home.css"
import fashion from "../Images/fashion-home.jpg"


function Home(){
    return(
        <div>
        <div className="container-fluid img-wrapper">
            <img className="img-responsive" src={image} alt="home-img"/>
             <div class="img-overlay">
             <button className="btn btn-md">Buy Now</button>
             </div>
            
        </div>
        <div className="row d-flex container">
            <div className="col-lg-6 lines order-2">
              <h3>"One is never over-dressed or under-dressed with a Little Black Dress."</h3>
              <h1> -Karl Lagerfeld </h1> 
            </div>
            <div className="col-lg-6 container-img p-2 order-lg-1">
              <img src={fashion} alt="fashion-img" width="300px" height="300px" />
            </div>
        </div>

        <div className="container">
           <div className="row">
             <div className="col-lg-6">
               
             </div>
             <div className="col-lg-6">

             </div>
           </div>
        </div>


        </div>

    )
}

export default Home;