// Dependencies
import { ReactNode } from "react";

export type HomePageData = {
    testMessage?: string;
};

export type HomePageElements = {
    headerSectionCompositions: ReactNode;
};

export type HomePageProps = HomePageElements & HomePageData;
