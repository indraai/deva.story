"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:62270673733858000549 LICENSE.md

const {expect} = require('chai')
const StoryDeva = require('./index.js');

describe(StoryDeva.me.name, () => {
  beforeEach(() => {
    return StoryDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(StoryDeva).to.be.an('object');
    expect(StoryDeva).to.have.property('agent');
    expect(StoryDeva).to.have.property('vars');
    expect(StoryDeva).to.have.property('listeners');
    expect(StoryDeva).to.have.property('methods');
    expect(StoryDeva).to.have.property('modules');
  });
})
