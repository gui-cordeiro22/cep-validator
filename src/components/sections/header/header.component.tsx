// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({
    iconElement,
    brandTitleElement,
}) => {
    return (
        <Container>
            <ContentWrapper>
                {iconElement}

                {brandTitleElement}
            </ContentWrapper>
        </Container>
    );
};
