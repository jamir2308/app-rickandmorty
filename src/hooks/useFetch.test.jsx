import { renderHook } from '@testing-library/react-hooks';
import useFetch from './useFetch';

describe('useFetch', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('returns successful data', async () => {
        const mockData = {
            results: [{ id: 1, name: 'Rick' }, { id: 2, name: 'Morty' }],
        };

        fetch.mockResponseOnce(JSON.stringify(mockData));
        const { result, waitForNextUpdate } = renderHook(() => useFetch());
        expect(result.current.isLoading).toBeTruthy();
        expect(result.current.data).toEqual([]);
        expect(result.current.error).toBeNull();
        await waitForNextUpdate();
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.data).toEqual(mockData.results);
        expect(result.current.error).toBeNull();
    });

    test('handles error', async () => {
        const errorMessage = 'API error';
        fetch.mockRejectOnce(new Error(errorMessage));

        const { result, waitForNextUpdate } = renderHook(() => useFetch());
        expect(result.current.isLoading).toBeTruthy();
        expect(result.current.data).toEqual([]);
        expect(result.current.error).toBeNull();
        await waitForNextUpdate();
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.data).toEqual([]);
        expect(result.current.error).toEqual(errorMessage);
    });
});
