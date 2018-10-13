app.controller('homeCtrl', function ($scope, $location, $http, $timeout) {
    // console.log(url, localStorage)
    // Checks if user is stored in localStorage

    if (localStorage.user) {
        $scope.user = JSON.parse(localStorage.getItem('user'))
        $location.url('/user-page')
    }

    $scope.login = (data) => {
        // console.log(data)
        $http.post(`${url}/user/login`, data)
            .then(res => {
                console.log(res.data)
                $scope.successMsg = 'You have been loged in successfully. You wil be redirected in your userpage shortly'
                localStorage.setItem('id', JSON.stringify(res.data.id))
                localStorage.setItem('token', JSON.stringify(res.data.token))
                $timeout(() => {
                    if (document.getElementsByClassName('modal-backdrop fade show')[0]) manuallyRemoveBootstrapBackdrop();
                    $scope.successMsg = '';
                    $location.url('/user-page')
                }, 3000);
            })
            .catch(err => {
                console.warn(err)
            })
    }

    // Register User
    $scope.registerUser = (data) => {
        console.log(data)

        $http.post(`${url}/user/register`, data)
            .then(res => {
                console.log(res)
                $http.post(`${url}/user/login`, data)
                    .then(res => {
                        console.log(res.data)

                    })
                    .catch(err => {
                        console.warn(err)
                    })
                // localStorage.setItem('user', JSON.stringify(res.data))
                // $scope.user = JSON.parse(localStorage.getItem('user'))
                // $scope.successMsg = 'You have been registered successfully. You wil be redirected in your userpage shortly'
                // $timeout(() => {
                //     if (document.getElementsByClassName('modal-backdrop fade show')[0]) manuallyRemoveBootstrapBackdrop();
                //     $scope.successMsg = '';
                //     $location.url('/user-page')
                // }, 3000);
            })
            .catch(err => {
                console.warn(err)
            })
    }

    manuallyRemoveBootstrapBackdrop = () => {
        const backdrop = document.getElementsByClassName('modal-backdrop fade show')[0];
        backdrop.classList.remove('show');
        document.body.removeChild(backdrop);
    }

})