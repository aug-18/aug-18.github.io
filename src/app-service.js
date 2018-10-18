var appModule=angular.module("app");

appModule.service("DATA_SERVICE", [function(){

    const CARD_LIST = [];
    
    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2"
    };
    CARD_LIST.push(cardDay2);

    // CARD DAY 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1"
    };
    CARD_LIST.push(cardDay1);


    this.CARD_LIST = CARD_LIST;

}]);