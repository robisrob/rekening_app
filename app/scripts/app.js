angular.module('shareTheBillApp', ['shareTheBillApp.services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/homePage.html'})
            .when('/addBill', {controller: addBillCtrl, templateUrl: 'views/addBill.html'})
            .when('/billOverview', {controller: billOverviewCtrl, templateUrl: 'views/billOverview.html'})
            .otherwise({redirectTo: '/'});
    }]);
