import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import useFetch from "../useFetch";
import { useContext } from "react";
import { bookListContext } from "../App";

export const BookList = () => {
  const { bookList, setBookList } = useContext(bookListContext);

  const bookListHandler = (id, img, title,link) => {
    const bookIndex = bookList.findIndex((book) => book.id === id);
    if (bookIndex === -1) setBookList([...bookList, { id, img, title,link }]);
    console.log(bookList);
  };

  const { setReady, data } = useFetch();

  return (
    <>
      {setReady &&
        data.map((item) => (
          <div key={item.id} className=" d-inline-flex p-2 bg-dark ">
            <Row>
              <Card
                className="  bg-dark border border-warning rounded "
                style={{ paddingLeft: "3em", height: "26em", width: "14em" }}
              >
                <Card.Img
                  className=" align-self-baseline"
                  style={{ paddingTop: 20, height: "14em", width: "9em" }}
                  src={item.formats["image/jpeg"]}
                />
                <Card.Body>
                  {
                    <a
                      href={item.formats["text/html"]}
                      style={{ padding: "0.50vw", textAlign: "center" }}
                      target="/favlist"
                      rel="noreferrer"
                      className=" bg-dark btn btn-outline-warning btn-sm "
                    >
                      {" "}
                      Preview
                    </a> }
                   

                  <button
                    onClick={() => {
                      console.log(item.id);
                      bookListHandler(
                        item.id,
                        item.formats["image/jpeg"],
                        item.title,
                        item.formats["text/html"]
                      );
                    }}
                    type="button"
                    className=" bg-dark btn btn-outline-warning btn-sm "
                  >
                    {" "}
                    + to Read list
                  </button>
                  <h6 className="text-white bg-dark font-weight-light" >{item.title}</h6>
                </Card.Body>
              </Card>
            </Row>
          </div>
        ))}
      ;
    </>
  );
};

export default BookList;
