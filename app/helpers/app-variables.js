//helpers/app-variables.js
import Ember from 'ember';

export function appVariables(params) {

    switch (params[0]) {
        case "companyName":
            return 'Todo Calor';
        case "Apples":
            console.log("Apples are $0.32 a pound.");
            break;
    }
}

export default Ember.Helper.helper(appVariables);
