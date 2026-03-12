// Dependencies
import axios from "axios";
import { useCallback } from "react";
import { useImmer } from "use-immer";

// Services
import { restAPI } from "@/services/api";

// Types
import type {
    AddressState,
    AddressActions,
    AddressStore,
    AddressAddressData,
} from "./home.types";

// Helpers
import { addressBuilder } from "./home.helpers";

const defaultState = {
    address: {
        data: undefined,
        isLoading: false,
    },
};

export const useAddressStore = (): AddressStore => {
    const [state, setState] = useImmer<AddressState>(defaultState);

    const clearState: AddressActions["clearState"] = useCallback(() => {
        setState(defaultState);
    }, [setState]);

    const checkAddress: AddressActions["checkAddress"] = useCallback(
        async (cep) => {
            try {
                setState((draft: AddressState) => {
                    draft.address.isLoading = true;
                });

                const response = await restAPI.get<AddressAddressData>(
                    `/${cep}/json`,
                );

                const formattedResponse = addressBuilder(response);

                setTimeout(() => {
                    setState((draft: AddressState) => {
                        draft.address.data = formattedResponse;
                        draft.address.isLoading = false;
                    });
                }, 2000);

                return true;
            } catch (error) {
                if (axios.isCancel(error)) {
                    return false;
                }

                setState((draft: AddressState) => {
                    draft.address.isLoading = false;
                });

                return false;
            }
        },
        [setState],
    );

    return {
        state,
        actions: {
            clearState,
            checkAddress,
        },
    };
};
