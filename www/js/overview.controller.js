(function(){
angular.module('starter').controller('OverviewController', ['$scope', '$ionicModal', '$ionicPlatform', 'BirthdayService', '$rootScope', OverviewController]);

function OverviewController($scope, $ionicModal, $ionicPlatform, birthdayService, $rootScope) {
	var vm = this;

	// Initialize the database.
	$ionicPlatform.ready(function() {
		birthdayService.initDB();
		vm.birthdays = [];
		vm.duration = 0;
		vm.quantity = 0;
		vm.startTime  = 0;
		vm.loading = false;
	});

	var timeStart = function () {
		vm.startTime  = new Date();
		vm.loading = true;
	}

	var timeCalculate = function () {
		vm.duration = new Date() - vm.startTime;
		vm.loading = false;
	}

	// Initialize the modal view.
	$ionicModal.fromTemplateUrl('add-or-edit-birthday.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	vm.getAllBirthdays = function (type) {
		// Get all birthday records from the database.
		timeStart();
		birthdayService.getAllBirthdays(type).then(function(birthdays) {
			timeCalculate();
			vm.quantity = birthdays.length;
			vm.birthdays = birthdays;
			// console.log(vm.birthdays);
		});
	}

	vm.showAddBirthdayModal = function() {
		$scope.birthday = {};
		$scope.action = 'Add';
		$scope.isAdd = true;
		$scope.modal.show();
	};

	vm.showEditBirthdayModal = function(birthday) {
		$scope.birthday = birthday;
		$scope.action = 'Edit';
		$scope.isAdd = false;
		$scope.modal.show();
	};

	$scope.emptyDB = function() {
		timeStart();
		vm.quantity = 'all';
		birthdayService.emptyDB().then(function () {
			timeCalculate();
		});
	}

	$scope.saveBirthday = function() {
			vm.quantity = 1;
			timeStart();
			birthdayService.updateBirthday($scope.birthday).then(function () {
				timeCalculate();
			});
			$scope.modal.hide();
	};

	$scope.saveMultipleBirthdays = function (n) {
		timeStart();
		birthdayService.addRandomBirthdays(n).then(function (){
			timeCalculate();
			vm.quantity = n;
		});
	}

	$scope.deleteBirthday = function() {
		vm.quantity = 1;
		timeStart();
		birthdayService.deleteBirthday($scope.birthday).then(function () {
			timeCalculate();
		});
		$scope.modal.hide();
	};

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	return vm;
}
})();
