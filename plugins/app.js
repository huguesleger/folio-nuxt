import {loader} from "./components/loader";
import Splitting from "splitting";
import {Cursor} from "./cursor";

window.App = {};


export const App = window.App;
App.init = function() {
    const cursor = new Cursor;
    cursor; 
    Splitting();
    loader();
}







/*--------------------------------------------
    load function
---------------------------------------------*/    
window.addEventListener('load', function() {
    App.init();
});