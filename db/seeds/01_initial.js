
const faker = require('faker');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
const bakeries = require('./bakeries');
const icons = require('./icons');

const createUser = () => ({
  user_name: faker.random.word() + faker.random.number({
    'min': 1,
    'max': 1000,
  }),
  night_mode: faker.random.boolean(),
});

const createRules = () => {
  const rules = {};
  for (let i = 0; i < faker.random.number({'min': 3, 'max': 10}); i++) {
    rules[faker.lorem.sentence()] = faker.lorem.sentences(faker.random.number({'min': 1, 'max': 3}));
  }
  return rules;
}

// 915 initial bakeries
const createBakery = (index) => ({
  name: bakeries[index],
  icon: icons[index % 786],
  color: faker.internet.color(),
  description: faker.lorem.sentences(faker.random.number({'min': 1, 'max': 3})),
  rules: createRules(),
  baker_id: faker.random.number({'min': 1, 'max': 1000}),
});

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const createCustomers = (offset) => {
  const customers = [];
  for (let i = 1; i <= 1000; i++) {
    const limit = faker.random.number({'min': 5, 'max': 15});
    const favs = faker.random.number({'min': 0, 'max': 5});
    const bakeries = [];
    while (bakeries.length < limit) {
      const rand = faker.random.number({'min': 1, 'max': 915});
      if (!bakeries.includes(rand)) bakeries.push(rand);
    }
    for (let j = 0; j < limit; j++) {
      const temp = {
        favorite: favs > j,
        user_id: i + (offset * 1000),
        bakery_id: bakeries[j],
      };
      customers.push(temp);
    }
  }
  return customers;
};

const createPosts = () => {
  const posts = [];
  for (let i = 1; i <= 1000; i++) {
    const isImage = faker.random.boolean();
    const content = isImage ? 'src/assets/bread/bread (' + faker.random.number({'min': 500, 'max': 999}) + ').jpg': faker.lorem.paragraphs(faker.random.number({'min': 1, 'max': 2}));
    const temp = {
      is_image: isImage,
      title: faker.lorem.sentence(),
      content,
      user_id: faker.random.number({'min': 1, 'max': 1000}),
      bakery_id: faker.random.number({'min': 1, 'max': 915}),
    };
    posts.push(temp);
  }
  return posts;
};

const createPostVotes = () => {
  const votes = [];
  for (let i = 1; i <= 2; i++) {
    let user = faker.random.number({'min': 1, 'max': 1000});
    while (user < 1000) {
      const up = faker.random.number({'min': 1, 'max': 2});
      const temp = {
        value: up === 1 ? 1 : -1,
        post_id: i,
        user_id: user,
      };
      votes.push(temp);
      user = faker.random.number({'min': user, 'max': 1050});
    }
  }
  return votes;
};

// for (let i = 0; i < 10; i++) {
//   console.log(createUser());
// }
// const deleteCsv = (name) => {
//   fs.unlink(`./db/seeds/${name}.csv`, (err) => {
//     if (err) console.log('ERROR: ', err);
//   });
// };
// const tempUsers = [];
// for (let i = 0; i < 100000; i++) {
//   tempUsers.push(createUser());
// }
// fs.createWriteStream('./db/seeds/users.csv');
// new ObjectsToCsv(tempUsers).toDisk('./db/seeds/users.csv')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
