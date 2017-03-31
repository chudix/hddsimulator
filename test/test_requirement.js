'use strict';

import test from 'tape';
import {Requirement, PageFault} from '../src/libhdd';


test('Requirement equals other Requirement with same value', assert => {

  let requirement = new Requirement(100);
  let equalRequirement = new Requirement(100);

  assert.true(requirement.equals(equalRequirement));

  let pageFault = new PageFault(100)
  let equalPageFault = new PageFault(100)

  assert.true(pageFault.equals(equalPageFault));

  assert.end();
});

test('Requirement doesnt equal a PageFault with same value', assert => {

  let pf  = new PageFault(100)
  let req = new Requirement(100);

  assert.false(pf.equals(req));

  assert.end();
});

test('Requirement doesnt equal other Requirement with different value', assert => {

  let pf  = new PageFault(100)
  let req = new Requirement(100);

  assert.false(req.equals(new Requirement(200)));
  assert.false(pf.equals(new PageFault(200)));

  assert.end();
});

test('Requirement#toString', assert => {
    let pf  = new PageFault(100);
    let req = new Requirement(100);

    assert.equals(pf.toString(), '*100');
    assert.equals(req.toString(), '100');

    assert.end();
});

test('Requirement#toJson', assert => {
    let pf  = new PageFault(100);
    let req = new Requirement(100);

    assert.equals(pf.toJson(), '*100');
    assert.equals(req.toJson(), '100');

    assert.end();
});
