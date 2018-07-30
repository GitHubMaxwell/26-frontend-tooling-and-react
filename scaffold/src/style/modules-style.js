import styled from 'styled-components';


const Title = styled.h1`
    text-align: center;
    color:green;
    font-size: 30px;
`;

const Deck = styled.div`
    position:relative;
    margin:0 auto;

    @media screen and (min-width:768px) {
        overflow:hidden;
    }
`;

const Card = styled.div`
    margin:0;
    padding:0;
    width:100%;
    background-color:#1E1E1E;

    border: 2px solid black;

    @media screen and (min-width:768px) {
        float:left
        width:49%;
    }
`;

const Pre = styled.pre`
    color:aqua;
`;

export {
  Title,
  Card,
  Deck,
  Pre,
};

/* 
// by default the browser will stack everything
.deck {
    position:relative;
}
@media screen and (min-width:768px) {

    // when you float stuff it pulls it out of document flow and therefore loses its height (i.e. collapses). so overflow hidden forces the browser to calculate the contents' height in order to determine whether it needs scroll bars or not giving you your height back

    .deck {
        overflow:hidden;
    }

    .deck.col-2 .card,
    .deck.col-3 .card,
    .deck.col-4 .card {
        float:left;
    }

    // 2 column card
    .deck.col-2 .card {
        width:50%;
    }

    // 3 column card
    .deck.col-3 .card {
        width:calc(100% / 3;
    }

    // 4 column card
    .deck.col-3 .card {
        width:25%;
    }

    //Media left or right
    .card.media-left,
    .card.media-right {
        overflow:hidden
    }

    // card figure
    .card figure {
        display:inline-block;
    }
}
*/