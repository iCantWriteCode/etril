const app = angular.module('etrilco', ['ngRoute']);
function zoomController(zoomtype, updatesize) {
    if (zoomtype == 1 && updatesize > 550) {
        return updatesize;
    } else if (zoomtype === 1 && updatesize < 550) {
        return updatesize * 1.09;
    } else if (zoomtype === 0 && updatesize > 20) {
        return updatesize / 1.09;
    } else {
        return updatesize;
    }
}
// const url = 'http://178.128.245.146:3002';
// const url = 'http://192.168.1.2:3002';
const url = 'http://etrilapi.1024dev.tk';


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
    .directive('myDraggable', ['$document', '$timeout', function ($document, $timeout) {
        return function (scope, element) {
            var startX = 0,
                startY = 0,
                x = 0,
                y = 0;
            scope.updateX = 0;
            scope.updatesize = 100;
            /* mouse wheel */
            var doScroll = function (e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                $timeout(function () {
                    if (delta == 1) {
                        scope.updatesize = zoomController(1, scope.updatesize);
                    } else {
                        scope.updatesize = zoomController(0, scope.updatesize);

                    }
                }, 30);
                e.preventDefault();
            };

            if (window.addEventListener) {
                window.addEventListener("mousewheel", doScroll, false);
                window.addEventListener("DOMMouseScroll", doScroll, false);
            } else {
                window.attachEvent("onmousewheel", doScroll);
            }
            /* mouse wheel */
            scope.zoomInImage = function () {
                scope.updatesize = zoomController(1, scope.updatesize);
            };
            scope.zoomOutImage = function () {
                scope.updatesize = zoomController(0, scope.updatesize);
            };

            element.on('mousedown', function (event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;

                scope.updateX = x;
                scope.updateY = y;

                scope.$apply();

                element.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };
    }]);
