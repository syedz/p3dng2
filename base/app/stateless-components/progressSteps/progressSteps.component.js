import template from './progressSteps.html';
import controller from './progressSteps.controller.js';

let progressStepsComponent = {
  restrict: 'E',
  bindings: {
    textlabels: '<'
  },
  template,
  controller,
  controllerAs: 'stepsctrl'
};

export default progressStepsComponent;
