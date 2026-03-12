export type AddressAddressData = {
    street?: string;
    addOn?: string;
    neighborhood?: string;
    city?: string;
    uf?: string;
};

export type AddressData<T> = {
    data?: T;
    isLoading: boolean;
};

export type AddressState = {
    address: AddressData<AddressAddressData>;
};

export type AddressActions = {
    clearState: () => void;
    checkAddress: (data?: string) => Promise<boolean>;
};

export type AddressStore = {
    state: AddressState;
    actions: AddressActions;
};

export type AddressCheckParam = {
    cep?: string;
};
