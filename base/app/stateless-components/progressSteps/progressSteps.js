import angular                from 'angular';
import ProgressStepsComponent from './progressSteps.component';

let progressStepsModule = angular.module('progresssteps', [
    ])

    .component('progressSteps', ProgressStepsComponent);

export default progressStepsModule;
