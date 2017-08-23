function loginController($scope) {
	$scope.login = function () {
		if ($scope.username == 'admin' && $scope.password == 'admin') {
			alert('登陆成功');
		}else{
			alert('用户名或密码错误，请重新登录');
		}
	}
	}
/**
	* login Module
	*
	* Description
	*/
	var login = angular.module('login', []);
	login.controller('userinfo', loginController)