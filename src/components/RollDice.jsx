import styled from "styled-components";

import {
    dice_1,
    dice_2,
    dice_3,
    dice_4,
    dice_5,
    dice_6,
} from "../assets/images/dice";
import { useState } from "react";

const RollDice = ({ currentDice, throwDice }) => {
    const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

    return (
        <DiceContainer>
            <div className="rollDice" onClick={throwDice}>
                <img src={diceImages[currentDice - 1]} alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p {
        font-size: 24px;
    }

    .rollDice {
        cursor: pointer;
    }
`;
