import styled from "styled-components";
import Dices from "../assets/images/dices.png";
import { Button } from "../styled/Button";

const StartGame = ({ toggleGamePlay }) => {
    return (
        <Container>
            <img src={Dices} alt="" />
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggleGamePlay}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1180px;
    height: 100vh;
    margin: 0 auto;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;
