app.controller('homeCtrl', function ($scope, $location, $http, $timeout) {
    // console.log(url, localStorage)
    // Checks if user is stored in localStorage
    console.log(url)
    if (localStorage.token) {
        $scope.token = localStorage.getItem('token')
        $location.url('/user-page')
    }

    $scope.login = (data) => {
        // console.log(data)
        $http.post(`${url}/user/login`, data)
            .then(res => {
                console.log(res.data)
                $scope.successMsg = 'You have been loged in successfully. You wil be redirected in your userpage shortly'
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('username', res.data.username)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userType', res.data.userType)

                $timeout(() => {
                    if (document.getElementsByClassName('modal-backdrop fade show')[0]) manuallyRemoveBootstrapBackdrop();
                    $scope.successMsg = '';
                    $location.url('/user-page')
                }, 3000);
            })
            .catch(err => {
                console.warn(err)
                $scope.failMsg = err.data.message
                $timeout(() => {
                    $scope.failMsg = null;
                }, 3000)
            })
    }

    // Register User
    $scope.registerUser = (data) => {
        console.log(data)
        $http.post(`${url}/user/register`, data)
            .then(res => {
                console.log(res)
                $scope.login(data)
            })
            .catch(err => {
                console.warn(err)
                $scope.failMsg = err.data.message
                $timeout(() => {
                    $scope.failMsg = null;
                }, 3000)
            })
    }

    manuallyRemoveBootstrapBackdrop = () => {
        const backdrop = document.getElementsByClassName('modal-backdrop fade show')[0];
        backdrop.classList.remove('show');
        document.body.removeChild(backdrop);
    }

})