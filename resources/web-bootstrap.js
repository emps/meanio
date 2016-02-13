'use strict';
angular.element(document).ready(function() {
    if (window.location.hash === '#_=_') window.location.hash = '#!';
    angular.bootstrap(document, ['mean']);
});

function processModules(modules) {
    var packageModules = ['ngCookies', 'ngResource', 'ui.router', 'ngSanitize'],
        m, mn;
    for (var index in modules) {
        m = modules[index];
        mn = 'mean.' + m.name;
        angular.module(mn, m.angularDependencies || []);
        packageModules.push(mn);
    }
    angular.module('mean', packageModules);
}
jQuery.ajax('/_getModules', {
    dataType: 'json',
    async: false,
    success: processModules
});