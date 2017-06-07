import angular                  from 'angular';
import progressbarComponent    from './progressbar.component.js';
import ProgressStepsModule from '../../stateless-components/progressSteps/progressSteps';

let progressbarModule = angular.module('progressbar', [
    ProgressStepsModule.name
])

.component('progressbar', progressbarComponent);

export default progressbarModule;
