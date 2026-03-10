// Dependencies
import { FunctionComponent, useEffect } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Stores
import { useAddressStore } from "./home.stores";
import { Header } from "@/components/sections/header";
import { Typography } from "@/components/utilities/typography";
import { Icon } from "@/components/elements/icon";

export const Home: FunctionComponent = () => {
    const { state, actions } = useAddressStore();

    const { address } = state;

    const { checkAddress } = actions;

    useEffect(() => {
        checkAddress("25720062");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(address);
    }, [address]);

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
            testMessage={
                address.isLoading
                    ? "Carregando"
                    : `${address.data?.street}, ${address.data?.addOn} - ${address.data?.neighborhood}, ${address.data?.city} - ${address.data?.uf}`
            }
        />
    );
};
