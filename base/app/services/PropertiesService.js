function PropertiesService() {
    "ngInject";
    var campaignType = 'invite';
    // private variable to store our goats entries
    const properties = [
        {
            name: "Sample video",
            titel: "View Sample Video",
            age: 23,
            about: "A demo image just as a placeholder",
            photo: "app/images/sample-image.jpg"
        }
    ];

    return {

        // Will retrieve our properties list for displaying
        getProperties() {
            return properties;
        },



        getSteps(){
            var stepsArray = [];
            if(campaignType === 'invite'){
                stepsArray = ['EVENT DETAILS', 'EVENT ADDRESS', 'MESSAGES', 'UPLOAD PHOTO', 'ADD GUESTS', 'CONFIRM', 'CHECKOUT'];
            } else {
                stepsArray = ['PHOTO & SENDER', 'ADD GUESTS', 'WRITE MESSAGES', 'CONFIRM', 'CHECKOUT'];
            }
            return stepsArray;
        }
    }
}

export default PropertiesService;