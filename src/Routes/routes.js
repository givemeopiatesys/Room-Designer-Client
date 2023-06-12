import {ABOUTUS_PAGE, CATALOGUE_PAGE, FAQ_PAGE, MAIN_PAGE, NEWS_PAGE, ROOMS_PAGE} from "../Utils/consts";
import MainPage from "../Pages/MainPage";
import CataloguePage from "../Pages/CataloguePage";
import SingleItem from "../Components/SingleItem";
import AboutUsPage from "../Pages/AboutUsPage";
import FaqPage from "../Pages/FaqPage";
import NewsPage from "../Pages/NewsPage";
import SingleNews from "../Components/SingleNews";
import RoomsPage from "../Pages/RoomsPage";
export const publicRoutes = [
    {
        path: MAIN_PAGE,
        element: <MainPage/>,
    },
    {
        path: CATALOGUE_PAGE,
        element: <CataloguePage/>,
    },
    {
        path: ABOUTUS_PAGE,
        element: <AboutUsPage/>,
    },
    {
        path: FAQ_PAGE,
        element: <FaqPage/>,
    },
    {
        path: `${CATALOGUE_PAGE}/:id`,
        element: <SingleItem/>,
    },
    {
        path: NEWS_PAGE,
        element: <NewsPage/>,
    },
    {
        path: `${NEWS_PAGE}/:id`,
        element: <SingleNews/>,
    },
    {
        path: ROOMS_PAGE,
        element: <RoomsPage/>,
    },

]
