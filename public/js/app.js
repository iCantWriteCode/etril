const app = angular.module('etrilco', ['ngRoute']);

// const url = 'http://178.128.245.146:3002';
const url = 'http://192.168.1.2:3002';
// const url = 'http://etrilapi.1024dev.tk';


app
    .config(function ($routeProvider, $locationProvider) {
        // $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: './views/home.html',
                controller: 'homeCtrl'
            })
            .when('/room/:roomCode', {
                templateUrl: './views/room-page.html',
                controller: 'roomCtrl'
            })
            .when('/enter-room', {
                templateUrl: './views/enter-room.html',
                controller: 'roomCtrl'
            })
            .when('/race-selection', {
                templateUrl: './views/race-selection.html',
                controller: 'raceSelectionCtrl'
            })
            .when('/class-selection', {
                templateUrl: './views/class-selection.html',
                controller: 'classSelectionCtrl'
            })
            .when('/subclass-selection', {
                templateUrl: './views/subclass-selection.html',
                controller: 'subclassSelectionCtrl'
            })
            .when('/username-selection', {
                templateUrl: './views/username-selection.html',
                controller: 'usernameSelectionCtrl'
            })
            .when('/user-page', {
                templateUrl: './views/user-page.html',
                controller: 'userPageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    })

    .run(function ($rootScope, $location) {

        // register listener to watch route changes
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (localStorage.token == null) {
                // no logged user, we should be going to #login
                if (next.templateUrl === "./views/home.html") {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.path("/");
                }
            }
        });
    })
    .directive('errSrc', function () {
        return {
            link: function (scope, element, attrs) {

                var watcher = scope.$watch(function () {
                    return attrs['ngSrc'];
                }, function (value) {
                    if (!value) {
                        element.attr('src', attrs.errSrc);
                    }
                });

                element.bind('error', function () {
                    element.attr('src', attrs.errSrc);
                });

                //unsubscribe on success
                element.bind('load', watcher);

            }
        }
    })
