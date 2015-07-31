'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var User = require('./user.model');
var today = Date.now();

// to test this, have to fake authentication as well

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'test',
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

describe('User Profile and Security', function() {
  beforeEach(function(done) {
    User.remove().exec();
    done();
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  describe('Unauthorized requests to secured endpoints', function() {
    it('should return 401 when not logged in', function(done) {
      // TODO write non-auth tests
      done();
    });
  });

  describe('Authorized access to secured endpoints', function(done) {
    // login


    it('should return valid JSON', function() {

    });
  });
});