/**
 * Created by Administrator on 2017/5/14 0014.
 */
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("/list", {
            url: '/list',
            templateUrl: './views/list.html'
        });

        $urlRouterProvider.otherwise("/list");
    }
]);