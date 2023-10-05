export const jgf = {
  record: {
    generator: 'Seki v1.0.0',
    version: 1,
    charset: 'UTF-8',
  },
  game: {
    type: 'go',
    name: 'Demo JGF',
    players: [
      {
        color: 'black',
        name: 'Black',
        rank: '5k',
      },
      {
        color: 'white',
        name: 'White',
        rank: '2d',
      },
    ],
    rules: 'Japanese',
    komi: 0.5,
    result: 'B+R',
  },
  board: {
    width: 9,
    height: 9,
  },
  tree: [
    {
      comments: [
        'Comment at start of game',
      ],
      markup: [
        {
          type: 'triangle',
          coords: [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
          ],
        },
        {
          type: 'square',
          coords: [
            {x: 0, y: 1},
            {x: 1, y: 1},
            {x: 2, y: 1},
          ],
        },
        {
          type: 'circle',
          coords: [
            {x: 0, y: 2},
            {x: 1, y: 2},
            {x: 2, y: 2},
          ],
        },
        {
          type: 'select',
          coords: [
            {x: 0, y: 3},
            {x: 1, y: 3},
            {x: 2, y: 3},
          ],
        },
        {
          type: 'mark',
          coords: [
            {x: 0, y: 4},
            {x: 1, y: 4},
            {x: 2, y: 4},
          ],
        },
        {
          type: 'label',
          coords: [
            {x: 0, y: 5, text: 'A'},
            {x: 1, y: 5, text: 'B'},
            {x: 2, y: 5, text: 'C'},
            {x: 0, y: 6, text: '1'},
            {x: 1, y: 6, text: '2'},
            {x: 2, y: 6, text: '3'},
          ],
        },
        {
          type: 'happy',
          coords: [
            {x: 0, y: 7},
            {x: 1, y: 7},
            {x: 2, y: 7},
          ],
        },
        {
          type: 'sad',
          coords: [
            {x: 0, y: 8},
            {x: 1, y: 8},
            {x: 2, y: 8},
          ],
        },
      ],
      setup: [
        {
          type: 'black',
          coords: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
            {x: 0, y: 4},
            {x: 0, y: 5},
            {x: 0, y: 6},
            {x: 0, y: 7},
            {x: 0, y: 8},
            {x: 5, y: 3},
            {x: 6, y: 4},
          ],
        },
        {
          type: 'white',
          coords: [
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 1, y: 3},
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 1, y: 6},
            {x: 1, y: 7},
            {x: 1, y: 8},
            {x: 5, y: 4},
            {x: 5, y: 5},
          ],
        },
      ],
    },
    {
      setup: [
        {
          type: 'empty',
          coords: [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
            {x: 0, y: 4},
            {x: 0, y: 5},
            {x: 0, y: 6},
            {x: 0, y: 7},
            {x: 0, y: 8},
            {x: 5, y: 3},
            {x: 6, y: 4},
            {x: 1, y: 0},
            {x: 1, y: 1},
            {x: 1, y: 2},
            {x: 1, y: 3},
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 1, y: 6},
            {x: 1, y: 7},
            {x: 1, y: 8},
            {x: 5, y: 4},
            {x: 5, y: 5},
          ],
        },
      ],
    },
    {
      variations: [
        [
          {
            name: 'First variation',
            comments: ['Comment at first variation'],
            move: {color: 'black', x: 6, y: 2},
          },
          {move: {color: 'white', x: 6, y: 6}},
          {move: {color: 'black', x: 5, y: 2}},
          {move: {color: 'white', x: 5, y: 6}},
          {move: {color: 'black', x: 4, y: 2}},
          {move: {color: 'white', x: 4, y: 6}},
          {move: {color: 'black', x: 3, y: 2}},
          {move: {color: 'white', x: 3, y: 6}},
          {move: {color: 'black', x: 2, y: 2}},
          {move: {color: 'white', x: 2, y: 6}},
          {move: {color: 'black', x: 1, y: 2}},
          {move: {color: 'white', x: 1, y: 6}},
          {move: {color: 'black', x: 0, y: 2}},
          {move: {color: 'white', x: 0, y: 6}},
          {move: {color: 'black', x: 0, y: 1}},
          {move: {color: 'white', x: 0, y: 7}},
          {move: {color: 'black', x: 0, y: 0}},
          {move: {color: 'white', x: 0, y: 8}},
          {move: {color: 'black', x: 1, y: 0}},
          {
            comments: ['Some comment'],
            move: {color: 'white', x: 1, y: 8},
          },
          {move: {color: 'black', x: 2, y: 0}},
          {move: {color: 'white', x: 2, y: 8}},
          {move: {color: 'black', x: 3, y: 0}},
          {move: {color: 'white', x: 3, y: 8}},
          {move: {color: 'black', x: 4, y: 0}},
          {move: {color: 'white', x: 4, y: 8}},
          {move: {color: 'black', x: 5, y: 0}},
          {move: {color: 'white', x: 5, y: 8}},
          {
            comments: ['Some other comment'],
            move: {color: 'black', x: 6, y: 0},
          },
          {move: {color: 'white', x: 6, y: 8}},
          {move: {color: 'black', x: 7, y: 0}},
          {move: {color: 'white', x: 7, y: 8}},
          {move: {color: 'black', x: 8, y: 0}},
          {move: {color: 'white', x: 8, y: 8}},
          {move: {color: 'black', x: 8, y: 1}},
        ],
        // [
        //   {move: {B: 'gg'}, comments: ['Comment at second variation'], name: 'Second variation'},
        //   [
        //     [
        //       {move: {W: 'gc'}, name: 'Third variation'},
        //       {mode: 'solve', move: {B: 'eg'}},
        //       [
        //         [
        //           {move: {W: 'ec', solution: true}},
        //           {move: {B: 'fe', solution: true}},
        //         ],
        //         [
        //           {move: {W: 'ge', solution: true}},
        //           {move: {B: 'dh', solution: true}},
        //         ],
        //       ],
        //     ],
        //     [
        //       {setup: {E: ['aa', 'ba', 'ab', 'bb', 'ac', 'bc', 'ad', 'bd', 'ae', 'be', 'af', 'bf', 'ag', 'bg', 'ah', 'bh']}, comments: ['Variation where setup stones have been removed'], name: 'Fourth variation'},
        //       {move: {W: 'cc'}},
        //       {move: {B: 'cg'}},
        //       {move: {W: 'gc'}},
        //       {move: {B: 'ef'}},
        //       {move: {W: 'ed'}},
        //     ],
        //   ],
        // ],
      ],
    },
  ],
}
