import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import * as FetchModule from "../../../hooks/useFetch";

jest.mock('react-intl', () => ({
  FormattedMessage: ({ id }) => id,
}));

jest.mock('../../atoms/card/Card', () => ({
  Card: jest.fn(() => null),
}));

jest.mock('../../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CharacterList', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state', () => {
    FetchModule.default.mockReturnValue({ data: [], isLoading: true, error: null });
    render(<CharacterList />);

    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  test('renders error state', () => {
    FetchModule.default.mockReturnValue({ data: [], isLoading: false, error: 'Error' });
    render(<CharacterList />);

    expect(screen.getByText('Error: Error')).toBeInTheDocument();
  });
});
