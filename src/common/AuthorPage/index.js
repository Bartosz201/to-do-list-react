import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import { TextWraper } from "../TextWraper";



const AuthorPage = () =>(
<Container>
    <Header title={"O autorze"}/>
    <Section
    title={"Bartosz Barć"}
    body={<TextWraper>
        Jestem Bartek mam 21 lat. Urodziłem się na Śląsku i mieszkam tam do dziś. Obecnie pracuje w zawodzie jako
        elektryk konkretnie zajmuje się serwisowaniem i montażem maszyn przemysłowych. W wolnym czasie oglądam
        filmy i seriale, gram w gry czasami przeczytam jakąś książkę i oczywiście spędzam czas z przyjaciółmi,
        kiedyś też rysowałem i ćwiczyłem na siłowni, ale ostatnio mam bardzo mało czasu. Wcześnie próbowałe
        moich sił w programowaniu w języku C++, ale niestety po około roku odpuściłem i zatrzymałem się na
        poziomie amatorskim. W tym momencie moim celem jest nauczyć się programować, a w przyszłości zdobyć
        pracę jako frontend developer.
    </TextWraper>
    }
    />
</Container>)

export default AuthorPage;