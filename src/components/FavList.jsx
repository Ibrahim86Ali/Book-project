import { useContext } from "react";
import { Card } from "react-bootstrap";




import { bookListContext } from "../App";

export const FavList = () => {
  const { bookList} = useContext(bookListContext);

  return (
    <div className=" d-flex p-5 bg-dark ">
      {bookList.map((book) => (
    
          <Card key={book.id}
            className="  bg-dark border border-warning rounded "
            style={{  paddingLeft: "2.8em", height: "18em", width: "14em" }}
          >
            <Card.Img
              className=" align-self-baseline"
              style={{ paddingTop: "2em", height: "12em", width: "8em" }}
              src={book.img}/>
              <div >
             <a href={book.link}style={{ width: "10em",paddingleft:"1vw",textAlign: "center"  }}
             target="/favlist" rel="noreferrer" className=" bg-dark btn btn-outline-warning btn-sm ">
                      {" "}
                      Preview
                    </a></div>
                    <p className="text-white bg-dark font-weight-light" >{book.title}</p>
            <Card.Body></Card.Body>
          </Card>
       
      ))}
    </div>
  );
};
