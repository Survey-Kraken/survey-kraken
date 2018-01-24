
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          question_id: 3,
          prompt: 'Very cool',
          letter: 'A'
        },
        {
          id: 2,
          question_id: 3,
          prompt: 'Somewhat cool',
          letter: 'B'
        },
        {
          id: 3,
          question_id: 3,
          prompt: 'Somewhat uncool',
          letter: 'C'
        },
        {
          id: 4,
          question_id: 3,
          prompt: 'Very uncool',
          letter: 'D'
        },
        {
          id: 5,
          question_id: 6,
          prompt: 'Pristine',
          letter: 'A'
        },
        {
          id: 6,
          question_id: 6,
          prompt: 'Good',
          letter: 'B',
        }
        {
          id: 7,
          question_id: 6,
          prompt: 'Not Good',
          letter: 'C'
        },
        {
          id: 8,
          question_id: 6,
          prompt: 'Filty in the worst way',
          letter: 'D'
        }

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('choices_id_seq', (SELECT MAX(id) FROM choices));"
      );
    });
};
