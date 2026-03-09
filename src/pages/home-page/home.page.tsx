// Dependencies
import { FunctionComponent } from "react";

// Page
import { HomePage } from "@/components/pages/home-page";

// Service
//import { restAPI } from "@/services/api";

export const Home: FunctionComponent = () => {
    //const [addressInfo, setAddressInfo] = useState();

    // const handleCepValidate = async () => {
    //     const response = await restAPI.get("/25720062/json");

    //     setAddressInfo(response?.data);

    //     console.log(addressInfo);
    // };

    return <HomePage />;
};
