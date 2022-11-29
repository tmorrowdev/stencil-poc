import { render } from '@testing-library/react';

import ReactTest from './ReactTest';

describe('ReactTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTest />);
    expect(baseElement).toBeTruthy();
  });
});
