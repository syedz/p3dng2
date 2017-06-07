import template from './sampleVideo.html';
import controller from './sampleVideo.controller.js';
import './sampleVideo.scss';

let videosampComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default videosampComponent;
