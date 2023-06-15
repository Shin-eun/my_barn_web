import Home from "../views/home/Home";
import OneSpace from "../views/onespace/OneSpace";
import CardInfo from "../views/cardInfo/CardInfo";
import Search from "../views/search/Search";
import Calendar from "../views/calendar/Calendar";

export const routerData = [
    {
        path : "/",
        element : <Home />
    },
    {
        path: "/onespace/:id",
        element: <OneSpace/>
    },
    {
        path: "/cardinfo/:id",
        element: <CardInfo/>
    },
    {
        path : "/search",
        element : <Search/>
    },
    {
        path : "/canlendar",
        element : <Calendar/>
    }
]