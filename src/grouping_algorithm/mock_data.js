const db = {
  sections: [
    {
      id: 0,
      name: '1st Period Prealgebra',
      disallowed_pairings: [
        [0, 2],
        [1, 10],
      ],
      students: [
        {
          id: 0,
          name: 'Tyler',
          history: [0, 1],
          active: true,
        },
        {
          id: 1,
          name: 'Hannah',
          history: [0, 0],
          active: true,
        },
        {
          id: 2,
          name: 'Avery',
          history: [1, 1],
          active: true,
        },
        {
          id: 3,
          name: 'Jessica',
          history: [1, 0],
          active: true,
        },
        {
          id: 4,
          name: 'Maisie',
          history: [2, 2],
          active: true,
        },
        {
          id: 5,
          name: 'Barbara',
          history: [2, 2],
          active: true,
        },
        {
          id: 6,
          name: 'Cody',
          history: [2, 3],
          active: true,
        },
        {
          id: 7,
          name: 'Uni',
          history: [3, 3],
          active: true,
        },
      ],
      // History of groupings
      iterations: [
        {
          id: 0,
          active: true,
          date_created: 1602888920,
          group_size: 3,
          handle_unevenness: 'many small', // "many large", "one large", "one small",
          groups: [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
          ],
        },
        {
          id: 1,
          active: true,
          date_created: 1602631659,
          group_size: 2,
          handle_unevenness: 'many small', // "many large", "one large", "one small",
          groups: [
            [1, 3],
            [0, 2],
            [4, 5],
            [6, 7, 7, 7, 7, 7],
          ],
        },
      ],
    },
  ],
};

export default db;
