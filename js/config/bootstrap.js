/*global require */
(function () {
	'use strict';

	var App = angular.module('BowerComponents', []);

	App.config([
		'$locationProvider',
		function ($locationProvider) {
			$locationProvider.html5Mode(true);
		}
	]);

	require('../directives/shortcut')(App);
	require('../filters/format_date')(App);
	require('../controllers/index_controller')(App);
})();
