/**
 * Created by Administrator on 2017/5/14 0014.
 */
app.controller("TodoController", function($scope, $http) {
    $http.get("http://localhost:8080/data/list.json").then(function (object) {
        $scope.lists = object.data.lists;
        console.log(object);
    });

    $scope.addTodo = function () {
        $scope.todo.status = 0;
        $scope.todo.id = $scope.lists.length + 1;
        $scope.todo.addTime = new Date();
        $scope.lists.unshift($scope.todo);

    }

    $scope.updateTodo = function (item) {
        console.log(item);
    }

    $scope.onChange = function ($index) {
        $scope.lists.splice($index, 1);
    };
});
