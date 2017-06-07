import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videosampComponent from './sampleVideo.component.js';
import PropertiesService from '../../services/PropertiesService';

let videosampModule = angular.module('videosamp', [
  uiRouter
])

.component('videosamp', videosampComponent)
.factory('PropertiesService', PropertiesService);

export default videosampModule;
