// Dependencies
import { FunctionComponent, useEffect } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Stores
import { useAddressStore } from "./home.stores";

export const Home: FunctionComponent = () => {
    const { state, actions } = useAddressStore();

    const { address } = state;

    const { checkAddress } = actions;

    useEffect(() => {
        checkAddress("25720062");
    }, []);

    useEffect(() => {
        console.log(address);
    }, [address]);

    return (
        <HomePage
            testMessage={
                address.isLoading
                    ? "Carregando"
                    : `${address.data?.street}, ${address.data?.addOn} - ${address.data?.neighborhood}, ${address.data?.city} - ${address.data?.uf}`
            }
        />
    );
};
