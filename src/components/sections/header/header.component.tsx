// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./header.styles";

// Assets
import pinMap from "@/assets/svg/map-pin-check.svg";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({
    brandTitleElement,
}) => {
    return (
        <Container>
            <div>
                <img src={pinMap} alt="" />

                {brandTitleElement}
            </div>
        </Container>
    );
};
