
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  const KIAN_ID = 112;
  const BILL_ID = 232;
  const MIKE_ID = 3321;
  const CHRIS_ID = 4232;

return knex
  .insert([
    {id: KIAN_ID, name: 'Kian' , email: 'kian@mail.com', photo: 'http://www.placecage.com/300/200', password: 'kian'},
    {id: BILL_ID, name: 'Bill' , email: 'bill@mail.com', photo: 'https://www.fillmurray.com/140/100', password: 'bill'},
    {id: MIKE_ID, name: 'Michael', email: 'mike@mail.com', photo: 'https://www.fillmurray.com/140/100', password: 'michael'},
    {id: CHRIS_ID, name: 'Chris' , email: 'chris@mail.com', photo: 'https://www.fillmurray.com/140/100', password: 'chris'}
  ])
  .into('users')
  .then(res=>{
      console.log("RES", res)
      return knex
      .insert([
        { game_id: 100, awayScore: 5, homeScore: 7},
        { game_id: 200, awayScore: 5, homeScore: 1},
        { game_id: 300, awayScore: 5, homeScore: 3},
        { game_id: 400, awayScore: 5, homeScore: 9},
      ])
      .into('games')
      .returning(['game_id'])
      .then( games =>{

        console.log("RES", JSON.stringify(res));
        return knex
        .insert([
          { predictHomeWins: true, user_id: KIAN_ID, games_id: games[0].game_id},
          { predictHomeWins: true, user_id: KIAN_ID, games_id: games[1].game_id},
          { predictHomeWins: true, user_id: BILL_ID, games_id: games[2].game_id},
          { predictHomeWins: true, user_id: MIKE_ID, games_id: games[3].game_id},
        ])
        .into('predictions')
        .catch(err => {
          console.log(err);
          knex.destroy();
        });

      })
      .catch(err => {
        console.log(err);
        knex.destroy();
      });
  })

  .catch(err => {
    console.log(err);
    knex.destroy();
  })

};