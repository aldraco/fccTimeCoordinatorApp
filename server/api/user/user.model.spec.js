'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var today = Date.now();


var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password',
  availability: {
    unique: [
      {
        date: today - 1 * 24 * 60 * 60 * 1000   // one day ago, should disappear
      },
      {
        date: today + 1 * 24 * 60 * 60 * 1000   // one day from now, should remain
      }
    ]
  }
});

describe('User Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate user', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an email', function(done) {
    user.email = '';
    user.save(function(err) {
      should.exist(err);
      user.email = 'test@test.com';
      done();
    });
  });

  it("should authenticate user if password is valid", function() {
    return user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    return user.authenticate('blah').should.not.be.true;
  });
});

describe('Save Hooks', function() {
  before(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should have no users to start', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should successfully save the user with cleaned availability', function(done) {
    user.save(function(err, user) {
      var today = Date.now();
      should.not.exist(err);
      should.exist(user);
      user.availability.unique.should.have.length(1);
      user.availability.unique[0].date.should.be.above(today);
      done();
    });
  });

});
