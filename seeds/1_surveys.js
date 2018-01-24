
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'First Survey'},
        {id: 2, name: 'Second Survey'},
        {id: 3, name: 'Survey about the ocean'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('surveys_id_seq', (SELECT MAX(id) FROM surveys));"
      );
    });
};
