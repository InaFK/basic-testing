import { generateLinkedList } from './index';

describe('generateLinkedList', () => {

  // test('should generate linked list from values 1', () => {
  //   const values = [1, 2, 3, 4, 5];
  //   const expectedOutput = {
  //     value: 1,
  //     next: {
  //       value: 2,
  //       next: {
  //         value: 3,
  //         next: {
  //           value: 4,
  //           next: {
  //             value: 5,
  //             next: null,
  //           },
  //         },
  //       },
  //     },
  //   };

  //   const result = generateLinkedList(values);
  //   expect(result).toStrictEqual(expectedOutput);
  // });

  test('should generate linked list from values 2', () => {
    const values = ['a', 'b', 'c'];
    const result = generateLinkedList(values);

    expect(result).toMatchSnapshot();
  });

  test('should return a node with null value for an empty array', () => {
    const values: number[] = [];
    const expectedOutput = {
      value: null,
      next: null,
    };

    const result = generateLinkedList(values);
    expect(result).toStrictEqual(expectedOutput);
  });

  // test('should generate linked list with single element', () => {
  //   const values = [42];
  //   const expectedOutput = {
  //     value: 42,
  //     next: null,
  //   };

  //   const result = generateLinkedList(values);
  //   expect(result).toStrictEqual(expectedOutput);
  // });
});
