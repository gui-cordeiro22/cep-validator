// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./card.styles";

// Types
import { CardProps } from "./card.types";

export const Card: FunctionComponent<CardProps> = ({
    titleSectionElement,
    formSectionCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>
                {titleSectionElement}

                {formSectionCompositions}
            </ContentWrapper>
        </Container>
    );
};
