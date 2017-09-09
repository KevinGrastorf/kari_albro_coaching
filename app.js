angular.module("kariApp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./public/home.html",
        })
        .state("test", {
            url: "/test",
            templateUrl: "./public/test.html"
        })
        .state("wellness", {
            url: "/wellness",
            templateUrl: "./public/wellness.html"
        })
        .state("blog", {
            url: "/blog",
            templateUrl: "./public/blog.html"
        })
        .state("coach", {
            url: "/coach",
            templateUrl: "./public/coach.html"
        })
        .state("life", {
            url: "/life",
            templateUrl: "./public/life.html"
        })
        .state("work", {
            url: "/work",
            templateUrl: "./public/work.html"
        })
        .state("start", {
            url: "/start",
            templateUrl: "./public/start.html"
        });

    $urlRouterProvider.otherwise("/home");

});
