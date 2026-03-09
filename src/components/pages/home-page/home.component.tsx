// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({
    headerSectionCompositions,
    testMessage,
}) => {
    return (
        <Fragment>
            {headerSectionCompositions}

            {testMessage}
        </Fragment>
    );
};
