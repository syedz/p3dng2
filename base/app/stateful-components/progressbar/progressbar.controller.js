class GoatsListingController {
  constructor(PropertiesService) {
    "ngInject";

    // This will keep the service instance across our class
    this.PropertiesService = PropertiesService;

    // this will hold our progressSteps, it will be passed to the other components.
    this.propertiesList = [];
  }

  // This method will be called each time the component will be initialised,
  // In our case, it will be called for every page route change.
  $onInit(){
    this.propertiesList = this.PropertiesService.getProperties();

    // Get the steps text
    this.stepslabels = this.PropertiesService.getSteps();

  }
}

export default GoatsListingController;
