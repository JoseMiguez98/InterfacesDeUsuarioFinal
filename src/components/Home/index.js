import React from 'react';
import './index.css';
import CardsContainer from '../CardsContainer';
import { Container, Row, Carousel } from 'react-bootstrap';
import BANNER1 from '../../assests/banner/b1.jpg';
import BANNER2 from '../../assests/banner/b2.jpg';
import BANNER3 from '../../assests/banner/b3.jpg';
import ACR from '../../assests/games/acr.jpg';
import PES from '../../assests/games/pes2019.jpg';
import FORTNITE from '../../assests/games/fortnite.jpg';
import FOURINAROW from '../../assests/games/4inarow.jpg';
import FUCK from '../../assests/games/ftp.png';
import LOL from '../../assests/games/lol.jpg';
import GTASA from '../../assests/games/gtasa.jpg';
import COD from '../../assests/games/codbo.jpg';
import RES from '../../assests/games/re4.jpg';
import DOOM from '../../assests/games/doom.jpg';
import DOTA from '../../assests/games/dota2.jpg';

const games = {
   acr: {
        title: "Assasins Creed",
        cover: ACR,
        caption: "Assasins Creed cuenta la historia de Desmond Miles..."
    },
    pes: {
        title: "Pes 2019",
        cover: PES,
        caption: "Pro Evolution Soccer 2019 es la nueva entrega de la serie Pro Evolution Soccer de la aclamada Konami..."
    },
    fortnite: {
        title: "Fortnite",
        cover: FORTNITE,
        caption: "Fortnite es un videojuego multijugador de la modalidad Battle Royale desarrollado por Epic Games..."
    },
    four: {
        title: "4 in a Row",
        cover: FOURINAROW,
        caption: "El famoso juego de mesa ahora en formato..."
    },
    fuck: {
        title: "Fuck the Police !",
        cover: FUCK,
        caption: "Huye de la policia en este frenetico y divertido juego de acción para toda la familia !"
    },
    lol: {
        title: "League of legends",
        cover: LOL,
        caption: "League of legends es un famoso M.O.B.A desarrollado por Riot Games..."
    },
    gta: {
        title: "GTA: SA",
        cover: GTASA,
        caption: "GTA : SA es el famoso SandBox de Rockstar..."
    },
    cod: {
        title: "COD: Black Ops",
        cover: COD,
        caption: "COD : Black Ops es un videojuego de guerra bélica..."
    },
    res: {
        title: "Resident evil 4",
        cover: RES,
        caption: "La cuarta entrega de la famosa saga de..."
    },
    doom: {
        title: "Doom",
        cover: DOOM,
        caption: "DOOM es un First Person Shooter en el cual debemos..."
    },
    dota: {
        title: "Dota 2",
        cover: DOTA,
        caption: "Dota 2 es un famoso multijugador..."
    },
};

const lastest = [ games.acr, games.pes, games.fortnite, games.four, games.fuck, games.lol, games.dota, games.doom ];
const mostsearched = [ games.gta, games.fortnite, games.cod, games.res ];
const top = [ games.doom, games.dota, games.res, games.pes ];
const ranked = [ games.fortnite, games.acr, games.fuck, games.cod ];

const Home = () => (
    <Container>
        <Row>
            <CardsContainer caption="Ultimos 20 publicados" elems={lastest}/>
        </Row>
        <Row>
            <CardsContainer caption="Los mas buscados" className="little" elems={mostsearched}/>
        </Row>
        <Row>
            <CardsContainer caption="Top gratis" className="little" elems={top}/>
        </Row>
        <Row>
            <CardsContainer caption="Mejor valorados" className="little" elems={ranked}/>
        </Row>
        <Carousel>
            <Carousel.Item>
                <img src={BANNER1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={BANNER2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={BANNER3}/>
            </Carousel.Item>
        </Carousel>
        <Carousel className="carousel2">
            <Carousel.Item>
                <img src={BANNER1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={BANNER2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={BANNER3}/>
            </Carousel.Item>
        </Carousel>
    </Container>
);

export default Home;