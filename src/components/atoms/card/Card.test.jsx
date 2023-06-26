import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  const mockData = {
    title: 'Test title',
    imgUrl: 'https://testimage.com',
    description: 'Test description',
  };

  beforeEach(() => {
    render(<Card {...mockData} />);
  });

  test('renders the image', () => {
    const imageElement = screen.getByTestId('card-image');
    expect(imageElement.getAttribute('data-imgurl')).toBe(mockData.imgUrl);
  });

  test('renders the title', () => {
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
  });

  test('renders the description', () => {
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  test('renders the footer text', () => {
    expect(screen.getByText('Rick and Morty')).toBeInTheDocument();
  });
});
