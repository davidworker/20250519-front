import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

await Loader.html("components/header.html", "#header-container");
Header.activeMenu("news");
