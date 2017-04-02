'use strict';
// TODO: check if we need m as a global: https://webpack.github.io/docs/shimming-modules.html#expose-loader

import {SimulationForm, Home} from './layouts';

document.addEventListener("DOMContentLoaded", function (event) {

    let root = document.querySelector('#app-root')

    let simulation = new libhdd.Simulation();

    m.route(root, "/",
        {
            "/": Home,
            "/load_simulation": SimulationForm
        }
    );
});
