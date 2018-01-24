
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          survey_id: 1,
          prompt: 'This survey is cool',
          type: 't/f',
          order: 1
        },
        {
          id: 2,
          survey_id: 1,
          prompt: 'Surveys can be helpful',
          type: 't/f',
          order: 2
        },
        {
          id: 3,
          survey_id: 2,
          prompt: 'How cool is this survey?',
          type: 'multipleChoice',
          order: 1
        },
        {
          id: 4,
          survey_id: 2,
          prompt: 'Tell us what you think about this survey',
          type: 'text',
          order: 2
        },
        {
          id: 5,
          survey_id: 3,
          prompt: 'The oceans are in good condition',
          type: 't/f',
          order: 1
        }
        {
          id: 6,
          survey_id: 3,
          prompt: 'How would you describe the condition of the oceans?',
          type: 'multipleChoice',
          order: 2
        }
        {
          id: 7,
          survey_id: 3,
          prompt: 'Please write a little bit about what you think about oceans',
          type: 'text',
          order: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));"
      );
    });
};
