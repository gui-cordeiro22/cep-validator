// Dependencies
import { FunctionComponent } from "react";

// Types
import { HomePageProps } from "./home.types";

export const HomePage: FunctionComponent<HomePageProps> = ({ testMessage }) => {
    return <div>{testMessage}</div>;
};
