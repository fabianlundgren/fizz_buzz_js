describe('Partial sample', function() {
  beforeEach(function() {

    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('sample_partial.html');
    $.holdReady(false);
  });

  afterEach(function() {

  });

  // describe("displays text", function() {
  //
  //   it("when button is clicked", function() {
  //     $('#text').val('Some random text...');
  //     $('#click_me').trigger('click');
  //     expect($('#display_message').text()).toBe('');
  //   });
  // });
});
