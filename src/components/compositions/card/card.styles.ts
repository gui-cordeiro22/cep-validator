// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "@/styles/gutter";
import { theme } from "@/styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    background-color: ${theme.palette.colors["white"]};
    border-radius: ${theme.system.radii["md"]};
    gap: ${theme.system.space["sm"]};

    ${pageGutter}
`;
