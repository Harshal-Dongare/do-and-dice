import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateDiceNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const throwDice = () => {
        // if number is not selected
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        setError("");
        const diceNumber = generateDiceNumber(1, 7);
        setCurrentDice((prev) => diceNumber);

        if (diceNumber === selectedNumber) {
            setScore((prev) => prev + diceNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(null);
    };

    const resetGame = () => {
        setScore(0);
    };

    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore score={score} />
                <NumberSelector
                    setError={setError}
                    error={error}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RollDice currentDice={currentDice} throwDice={throwDice} />
            <div className="btns">
                <OutlineButton onClick={resetGame}>Reset</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>
                    {showRules ? "Hide" : "Show"} Rules
                </Button>
            </div>

            {showRules && <Rules />}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding: 70px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    .btns {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`;
