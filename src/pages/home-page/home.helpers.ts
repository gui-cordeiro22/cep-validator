// Types
import { AxiosResponse } from "axios";
import { AddressAddressData } from "./home.types";

export const addressBuilder = (
    addressResponse: AxiosResponse,
): AddressAddressData => {
    const { logradouro, bairro, uf, complemento, localidade } =
        addressResponse.data;
    return {
        street: logradouro,
        addOn: complemento,
        neighborhood: bairro,
        city: localidade,
        uf,
    };
};
