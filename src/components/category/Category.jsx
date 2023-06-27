
import { Container, Row } from "react-bootstrap";
import fantasy from "../../data/fantasy.json";
import history from "../../data/history.json";
import horror from "../../data/horror.json";
import romance from "../../data/romance.json";
import scifi from "../../data/scifi.json";
import SingleBook from "../NavBar/SingleBook";




export default function Category({ livre, search }) {
    function handleSearch(array) {
        let filteredBooks = array.filter((libro) =>
            libro.title.toLowerCase().includes(search.toLowerCase()));
        return filteredBooks

    }
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row>

                {livre === "fantasy" && handleSearch(fantasy).map((libro) => (
                    <SingleBook livre={libro} key={libro.id} />
                ))}

                {livre === "history" && handleSearch(history).map((libro) => (
                    <SingleBook livre={libro} key={libro.id} />
                ))}

                {livre === "horror" && handleSearch(horror).map((libro) => (
                    <SingleBook livre={libro} key={libro.id} />
                ))}

                {livre === "romance" && handleSearch(romance).map((libro) => (
                    <SingleBook livre={libro} key={libro.id} />
                ))}
                {livre === "scifi" && handleSearch(scifi).map((libro) => (

                    <SingleBook livre={libro} key={libro.id} />
                ))}

                {!livre && handleSearch(fantasy).map((libro) => (
                    <SingleBook livre={libro} key={libro.id} />
                ))}


            </Row>
        </Container >

    );
}




