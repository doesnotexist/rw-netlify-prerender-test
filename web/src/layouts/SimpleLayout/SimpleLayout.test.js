import { render } from '@redwoodjs/testing/web'

import SimpleLayout from './SimpleLayout'

describe('SimpleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleLayout />)
    }).not.toThrow()
  })
})
