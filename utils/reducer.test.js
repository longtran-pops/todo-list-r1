import reducer from '~/utils/reducer';
import * as types from '~/utils/storeapi';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      appInit: false,
      tasks: [],
    });
  });

  it('should handle SET_TASKS', () => {
    expect(
      reducer(
        {
          appInit: false,
          tasks: [],
        },
        {
          type: types.SET_TASKS,
          payload: [
            {
              id: 123,
              title: '123',
              status: 'todo',
            },
          ],
        },
      ),
    ).toEqual({
      appInit: false,
      tasks: [
        {
          id: 123,
          title: '123',
          status: 'todo',
        },
      ],
    });
  });

  it('should handle START_TASK', () => {
    expect(
      reducer(
        {
          appInit: false,
          tasks: [
            {
              id: 123,
              title: '123',
              status: 'todo',
            },
          ],
        },
        {
          type: types.START_TASK,
          payload: {
            id: 123,
          },
        },
      ),
    ).toEqual({
      appInit: false,
      tasks: [
        {
          id: 123,
          title: '123',
          status: 'in-progress',
        },
      ],
    });
  });

  it('should handle DONE_TASK', () => {
    expect(
      reducer(
        {
          appInit: false,
          tasks: [
            {
              id: 123,
              title: '123',
              status: 'todo',
            },
          ],
        },
        {
          type: types.DONE_TASK,
          payload: {
            id: 123,
          },
        },
      ),
    ).toEqual({
      appInit: false,
      tasks: [
        {
          id: 123,
          title: '123',
          status: 'done',
        },
      ],
    });
  });

  it('should handle RESET', () => {
    expect(
      reducer(
        {
          appInit: false,
          tasks: [
            {
              id: 123,
              title: '123',
              status: 'todo',
            },
          ],
        },
        {
          type: types.RESET,
        },
      ),
    ).toEqual({
      appInit: false,
      tasks: [],
    });
  });
});
