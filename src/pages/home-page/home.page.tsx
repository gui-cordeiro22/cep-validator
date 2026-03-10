// Dependencies
import { FunctionComponent } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Components
import { Header } from "@/components/sections/header";
import { Typography } from "@/components/utilities/typography";
import { Icon } from "@/components/elements/icon";
import { Card } from "@/components/compositions/card";

// Stores
//import { useAddressStore } from "./home.stores";

export const Home: FunctionComponent = () => {
    // const { state, actions } = useAddressStore();

    // const { address } = state;

    // const { checkAddress } = actions;

    return (
        <HomePage
            headerSectionCompositions={
                <Header
                    iconElement={
                        <Icon variant="mapPinCheck" color="#000" size={32} />
                    }
                    brandTitleElement={
                        <Typography
                            text="Validador de CEP"
                            color="black"
                            variant="display"
                        />
                    }
                />
            }
            inputCardSectionCompositions={
                <Card
                    titleSectionElement={
                        <Typography
                            text="Informe o CEP que deseja consultar:"
                            color="gray300"
                            variant="titleMedium"
                        />
                    }
                    formSectionCompositions={
                        <form>
                            <input type="text" placeholder="Informe o CEP" />
                        </form>
                    }
                />
            }
        />
    );
};
