import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
 
describe('Searchbar', () => {
  it('renders a input', () => {
    render(<SearchBar />);
 
    const input = screen.getByPlaceholderText('Search');
 
    expect(input).toBeInTheDocument();
  })
})