import axios from 'axios';
import { throttledGetDataFromApi } from './index';
// import { throttledGetDataFromApi, THROTTLE_TIME } from './index';
// import { throttle } from 'lodash';

jest.mock('axios');
jest.mock('lodash', () => {
  const originalLodash = jest.requireActual('lodash');
  return {
    ...originalLodash,
    throttle: jest.fn((fn) => fn),
  };
});

describe('throttledGetDataFromApi', () => {
  const axiosClientMock = {
    get: jest.fn(),
  };

  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue(axiosClientMock);
    jest.clearAllMocks(); // Clear mocks before each test
  });

  // test('should create instance with provided base url', async () => {
  //   await throttledGetDataFromApi('/posts');

  //   expect(axios.create).toHaveBeenCalledWith({
  //     baseURL: 'https://jsonplaceholder.typicode.com',
  //   });
  // });

  test('should perform request to correct provided url', async () => {
    axiosClientMock.get.mockResolvedValueOnce({ data: {} });

    await throttledGetDataFromApi('/posts');

    expect(axiosClientMock.get).toHaveBeenCalledWith('/posts');
  });

  test('should return response data', async () => {
    const mockData = { id: 1, title: 'Test post' };

    axiosClientMock.get.mockResolvedValueOnce({ data: mockData });

    const result = await throttledGetDataFromApi('/posts');

    expect(result).toEqual(mockData);
  });

  // test('should throttle the API request with the correct throttle time', async () => {
  //   await throttledGetDataFromApi('/posts');

  //   expect(throttle).toHaveBeenCalledWith(expect.any(Function), THROTTLE_TIME);
  // });
});
