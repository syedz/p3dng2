import angular          from 'angular';
import createComponent  from './create.component';
import GoatCreateForm   from '../../containers/goatCreatorForm/goatCreatorForm';

const createModule = angular.module('create', [
    GoatCreateForm.name
])

.config(($stateProvider) => {
    "ngInject";

    // Define our Goat profile creation page routing
    $stateProvider
        // Create route for our goat listings creator
        .state('app.create', {
            url: '/create',
            template: '<create></create>'
        });
})

.component('create', createComponent);

export default createModule;
