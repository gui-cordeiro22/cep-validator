// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "@/styles/gutter";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    ${pageGutter}

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        img {
            width: 32px;
        }
    }
`;
