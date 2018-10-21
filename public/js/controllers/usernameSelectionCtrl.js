app.controller('usernameSelectionCtrl', function ($scope, $http, $location, $timeout) {
    if (!localStorage.getItem("data")) return $location.url('/user-page')
    let data = JSON.parse(localStorage.getItem('data'))
    // console.log(data)

    $scope.createCharacter = (username) => {
        data.username = username
        // console.log(data)
        $http.patch(`${url}/room/edit-user/${data.roomId}`, data)
            .then(res => {
                // console.log(res)
                $scope.successMsg = 'You have joined the room successfully. You wil be redirected in your roompage shortly'
                localStorage.removeItem("data")
                // localStorage.removeItem("playerClass")
                // localStorage.removeItem("playerRace")
                $timeout(() => {
                    $scope.successMsg = '';
                    $location.url(`/room/${data.roomId}`)
                }, 3000);
            })
            .catch(err => {
                console.warn(err)
            })
    }

});