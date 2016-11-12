// import { describe, it } from 'mocha';
import { expect } from 'chai';
import { default as logger } from '../../build/app/logger/general-logger';

describe('General Logger', () => {
  it('Should export an info logger', () => {
    expect(logger.info).to.exist;
  });
});
