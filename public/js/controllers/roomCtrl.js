app.controller('roomCtrl', function ($scope, $interval, $http, $routeParams, $timeout) {
    $scope.view = 'map'
    $scope.userType = JSON.parse(localStorage.getItem('userType'))
    console.log($scope.userType)
    $scope.roomCode = $routeParams.roomCode
    console.log($routeParams)
    getRoomData()
    function getRoomData() {
        $http.get(`${url}/room/${$scope.roomCode}`)
            .then(res => {
                console.log(res.data)
                $scope.room = res.data
                $scope.room.users = ["User 1", "User 2", "User 3"]
            })
            .catch(err => {
                console.warn(err.data)
            })
    }
    // $timeout(function () {
    //     var firstHeight = document.getElementById('mapImg').offsetHeight
    //     var firstWidth = document.getElementById('mapImg').offsetWidth

    //     console.log(firstHeight, firstWidth)


    //     $scope.zoomIn = () => {
    //         console.log('zoomIn')
    //         height *= 2;
    //         width *= 2
    //     }
    // }, 100);

    // var firstHeight = $('#image').height();



    // height *= 2;
    // width *= 2;

    // scalechange = (actualHeight / firstHeight) - 1;
    // offsetX = -(coordX * scalechange);
    // offsetY = -(coordY * scalechange);

    // $("#image").css('top', offsetY + 'px');
    // $("#image").css('left', offsetX + 'px');

    // $interval(function () {
    //     getRoomData()
    // }, 10000);

})