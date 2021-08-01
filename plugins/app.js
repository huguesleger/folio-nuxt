import {loader} from './components/loader';
import Splitting from "splitting";

window.App = {};


export const App = window.App;
App.init = function() {
    Splitting();
    loader();
}







/*--------------------------------------------
    load function
---------------------------------------------*/    
window.addEventListener('load', function() {
    App.init();
});