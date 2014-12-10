angular.module('myApp.dir.myDirective', [])
.directive('myDirective', [function(){
    var dir = {};
    dir.restricet = 'E';
    dir.template = "my first directive bla bla";
    return dir;
}])
