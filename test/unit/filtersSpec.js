'use strict';

pen.define('filterSpec', [
  'common-ui/angular',
  'angular-mocks',
  'angular-scenario',
  'phonecat/filters'], 
  function() {

	/* jasmine specs for filters go here */

	describe('filter', function() {

	  beforeEach(module('phonecatFilters'));


	  describe('checkmark', function() {

	    it('should convert boolean values to unicode checkmark or cross',
	        inject(function(checkmarkFilter) {
	      expect(checkmarkFilter(true)).toBe('\u2713');
	      expect(checkmarkFilter(false)).toBe('\u2718');
	    }));
	  });
	});

});
