import { render } from '@testing-library/react';
import App from './App';
import Test from './components/Test';
import { color } from './components/Test';

  it('should render a button', () => {
    render(<Test />)
  
    const element = document.querySelector('button');
    expect(element).toBeInTheDocument();
  });


  it('initial state on h1 should be blue', () => {
    render(<Test />)
  
    const element = document.querySelector('h1').style.color;
    expect(element).toBe({ color });
  });


