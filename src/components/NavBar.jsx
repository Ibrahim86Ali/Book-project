import Container from 'react-bootstrap/Container';


import { Link } from 'react-router-dom';



export const NavBar=()=>{
   
return(

<Container>
<Link to="/Booklist" type="button" className=" bg-dark btn btn-outline-warning btn-sm ">Books List</Link>
<Link to="/FavList" type="button" className=" bg-dark btn btn-outline-warning btn-sm ">My Reading list</Link>
<Link to="/" type="button" className=" bg-dark btn btn-outline-warning btn-sm ">Previous </Link>
<Link to="/" type="button" className=" bg-dark btn btn-outline-warning btn-sm ">Next</Link>


</Container>
    )



}
