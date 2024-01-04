import { ABOUTUS, AUTH, BASKET, CONTACTS, COOPERATION, CREATE_SHOE, PERSONAL, REGISTER, SHOE, SHOP } from "./Components/Constants";
import AboutUs from "./pages/AboutUs/AboutUs";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop/Shop";
import Shoe from "./pages/Shoe"
import Login from "./pages/Login/Login";
import Personal from "./pages/Personal";
import CreateShoe from "./pages/CreateShoe/CreateShoe";
import Contacts from "./pages/Contacts/Contacts";
import Cooperation from "./pages/Cooperation/Cooperation";

export const AuthPage = [
    {
        path: SHOP,
        element: <Shop />
    },
    {
        path: '/shop/:id',
        element: <Shoe />
    },
    {
        path: ABOUTUS,
        element: <AboutUs />
    },
    {
        path: BASKET,
        element: <Basket />
    },
    {
        path: AUTH,
        element: <Auth />
    },
    {
        path: REGISTER,
        element: <Auth />
    },
    {
        path: PERSONAL,
        element: <Personal />
    },
    {
        path: CREATE_SHOE,
        element: <CreateShoe />
    },
    {
        path: CONTACTS,
        element: <Contacts />
    },
    {
        path: COOPERATION,
        element: <Cooperation />
    }
]

export const publicPage = [
    {
        path: AUTH,
        element: <Auth />
    },
    {
        path: REGISTER,
        element: < Login/>
    },
    {
        path: SHOP,
        element: <Shop />    
    },
    {
        path: '/shop/:id',
        element: <Shoe />
    },
    {
        path: ABOUTUS,
        element: <AboutUs />
    },
    {
        path: CONTACTS,
        element: <Contacts />
    },
    {
        path: COOPERATION,
        element: <Cooperation />
    }
]