const db = {
  sections: [
    {
      id: 0,
      name: '1st period prealgebra',
      disallowed_pairings: [
        [0, 2],
        [1, 10],
      ],
      students: [
        {
          id: 0,
          name: 'Tyler',
          history: [0, null, 1, 2, 3],
        },
        {
          id: 1,
          name: 'Hannah',
          history: [0, 1, 2, 2, null],
        },
        {
          id: 2,
          name: 'Avery',
          history: [0, 1, 2, 2, null],
        },
      ],
      // History of groupings
      groupings: [
        {
          id: 0,
          status: 'active', // "deleted"
          date_created: 1602888920,
          group_size: 3,
          handle_unevenness: 'many small', // "many large", "one large", "one small",
          groups: [
            [1, 2, 3],
            [4, 5, 6],
          ],
        },
        {
          id: 1,
          date_created: 1602631659,
          group_size: 2,
          handle_unevenness: 'many small', // "many large", "one large", "one small",
          groups: [
            [1, 2, 3],
            [4, 5, 6],
          ],
        },
      ],
    },
  ],
};

export default db;
