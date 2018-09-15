app.controller('roomCtrl', function ($scope, $interval, $http, $routeParams) {

    $scope.roomCode = $routeParams.roomCode
    console.log($routeParams)
    getRoomData()
    function getRoomData() {
        $http.get(`${url}/api/rooms/findOne?filter=%7B%22where%22%3A%20%7B%22roomCode%22%20%3A%20%22${$scope.roomCode}%22%7D%7D`)
            .then(res => {
                console.log(res.data)
                $scope.roomData = res.data
            })
            .catch(err => {
                console.warn(err.data)
            })
    }

    $interval(function () {
        getRoomData()
    }, 10000);

})