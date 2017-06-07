import angular                  from 'angular';
import homeComponent            from './home.component';
import UserFormModule from '../../stateless-components/userForm/userForm';
import SampleVideoModule from '../../stateful-components/sampleVideo/sampleVideo';
import PropertiesService from '../../services/PropertiesService';
import BackButtonModule from '../../stateless-components/genericButton/genericButton';

let homeModule = angular.module('home', [
    SampleVideoModule.name,
    UserFormModule.name,
    BackButtonModule.name
])

.config(($stateProvider) => {
    "ngInject";

    // Define our home page routing
    $stateProvider
        // Dashboard page to contain our goats list page
        .state('app.home', {
            url: '/home',
            template: '<home></home>'
        });
})

.component('home', homeComponent)
.factory('PropertiesService', PropertiesService);

export default homeModule;
