var app = angular.module("app", []);

app.controller("calculator", operation);

var todoTab = [];

//Function des opération de la calculatrice
function operation($scope) {
  //initialisation de display
  $scope.display = "";

  // restore une ope depuis todoTab
  $scope.restoreOperation = function (ope) {
    $scope.display = ope;
  };

  $scope.math = function (val) {
    $scope.display += val;
  };

  // Vide display
  $scope.c = function (val) {
    $scope.display = val;
  };

  $scope.e = function () {
    var todo = $scope.display + " = " + eval($scope.display);
    if ($scope.display != null) {
      addtodo(todo, $scope.display);
      $scope.display = eval($scope.display);
    }
  };

  function addtodo(_todo, _opera) {
    todoTab.push({ text: _todo, opera: _opera });
    console.log(todoTab);
    $scope.histTodo = todoTab;
  }

  //Vide la liste histoTodo
  $scope.archive = function () {
    var oldTodos = todoTab;
    todoTab = [];
    angular.forEach(oldTodos, () => {
      todoTab.push();
      $scope.histTodo = todoTab;
    });
  };
}
