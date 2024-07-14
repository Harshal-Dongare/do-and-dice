import styled from "styled-components";
const NumberSelector = ({
    selectedNumber,
    setSelectedNumber,
    error,
    setError,
}) => {
    const boxArray = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (number) => {
        setSelectedNumber(number);
        setError("");
    };

    return (
        <NumberSelectorContainer>
            {error && <p className="error">{error}</p>}
            <div className="flex">
                {boxArray.map((number, i) => {
                    return (
                        <Box
                            $isSelected={number === selectedNumber}
                            key={i}
                            onClick={() => numberSelectorHandler(number)}
                        >
                            {number}
                        </Box>
                    );
                })}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    .flex {
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
        text-align: right;
    }

    .error {
        color: red;
        font-size: 16px;
        margin: 20px;
    }
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.$isSelected ? "black" : "white")};
    color: ${(props) => (props.$isSelected ? "white" : "black")};
`;
