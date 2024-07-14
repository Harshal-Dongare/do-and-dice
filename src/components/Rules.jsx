import styled from "styled-components";
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <dir className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                    after click on dice if selected number is equal to dice
                    number you will get same point as dice
                </p>
                <p>If you guess wrong then 2 points will be deducted</p>
            </dir>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
    max-width: 400px;
    padding: 20px;
    background-color: #171616;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    h2 {
        font-size: 24px;
    }

    .text {
        margin-top: 24px;
    }
`;
