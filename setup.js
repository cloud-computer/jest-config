process.env.NODE_ENV = 'test';

require('longjohn');
require('jest-expect-message');

jest.setTimeout(15000);
