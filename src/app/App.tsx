import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "./store";

import AppRouter from "@/pages";
import { Header } from "@/widgets/header";

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <Header />
                <AppRouter />
            </ChakraProvider>
        </Provider>
    );
};

export default App;
