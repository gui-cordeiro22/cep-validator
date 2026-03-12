// Dependencies
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

// Page
import { HomePage } from "@/components/pages/home-page";

// Components
import { Header } from "@/components/sections/header";
import { Typography } from "@/components/utilities/typography";
import { Icon } from "@/components/elements/icon";
import { Card } from "@/components/compositions/card";
import { Input } from "@/components/elements/input";
import { Button } from "@/components/elements/button";

// Types
import { AddressCheckParam } from "./home.types";

// Stores
import { useAddressStore } from "./home.stores";

export const Home: FunctionComponent = () => {
    const { register, handleSubmit, reset } = useForm();

    const { state, actions } = useAddressStore();

    const { address } = state;

    const { checkAddress } = actions;

    const handleAddressCheck = async (data: AddressCheckParam) => {
        await checkAddress(data.cep);

        reset();
    };

    // DEBUG
    // useEffect(() => {
    //     console.log(address.data);

    //     console.log(address.isLoading);
    // }, [address.data]);

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
                        <form onSubmit={handleSubmit(handleAddressCheck)}>
                            <Input
                                {...register("cep")}
                                type="text"
                                placeholder="Informe o CEP"
                            />

                            <Button
                                isActive
                                variant="dark-cta"
                                labelElement={
                                    address.isLoading
                                        ? "Checando endereço"
                                        : "Checar endereço"
                                }
                                type="submit"
                            />
                        </form>
                    }
                />
            }
        />
    );
};
