// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({
    brandTitleElement,
}) => {
    return <Container>{brandTitleElement}</Container>;
};
