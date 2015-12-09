'use strict';

describe('Controller: BlogeditCtrl', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var BlogeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogeditCtrl = $controller('BlogeditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogeditCtrl.awesomeThings.length).toBe(3);
  });
});
