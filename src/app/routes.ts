import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import DressCode from "./pages/DressCode";
import Gifts from "./pages/Gifts";
import Transport from "./pages/Transport";
import KidsAndPets from "./pages/KidsAndPets";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

<<<<<<< HEAD
export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "dress-code", Component: DressCode },
        { path: "gifts", Component: Gifts },
        { path: "transport", Component: Transport },
        { path: "kids-pets", Component: KidsAndPets },
        { path: "faq", Component: FAQ },
        { path: "*", Component: NotFound },
      ],
    },
  ],
  {
    basename: "/Weddinginvitation/", // 👈 🔥 ESTO ARREGLA TODO
  }
);
=======
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "dress-code", Component: DressCode },
      { path: "gifts", Component: Gifts },
      { path: "transport", Component: Transport },
      { path: "kids-pets", Component: KidsAndPets },
      { path: "faq", Component: FAQ },
      { path: "*", Component: NotFound },
    ],
  },
]);
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
