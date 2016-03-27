(function() {
    'use strict';

    angular
        .module('madrassaApp')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Teacher', 'User', 'ClassRoom'];

    function TeacherDetailController($scope, $rootScope, $stateParams, entity, Teacher, User, ClassRoom) {
        var vm = this;
        vm.teacher = entity;
        vm.load = function (id) {
            Teacher.get({id: id}, function(result) {
                vm.teacher = result;
            });
        };
        var unsubscribe = $rootScope.$on('madrassaApp:teacherUpdate', function(event, result) {
            vm.teacher = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
