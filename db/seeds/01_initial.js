/* eslint-disable max-len */

const faker = require('faker');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
const bakeries = require('../bakeries');
const icons = require('../icons');

const createUser = () => ({
  name: faker.random.word() + faker.random.number({
    'min': 1,
    'max': 10000,
  }),
  night_mode: faker.random.boolean(),
});

const createRules = () => {
  const rules = {};
  for (let i = 0; i < faker.random.number({'min': 3, 'max': 10}); i++) {
    rules[faker.lorem.sentence()] = faker.lorem.sentences(faker.random.number({'min': 1, 'max': 3}));
  }
  return rules;
};

const createBakery = (index, maxUserId) => ({
  name: bakeries[index],
  icon: icons[index % icons.length],
  color: faker.internet.color(),
  description: faker.lorem.sentences(faker.random.number({'min': 1, 'max': 3})),
  rules: createRules(),
  baker_id: faker.random.number({'min': 1, 'max': maxUserId}),
});

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const createCustomers = (batchSize) => {
  const customers = [];
  for (let i = 1; i <= batchSize; i++) {
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
        user_id: i,
        bakery_id: bakeries[j],
      };
      customers.push(temp);
    }
  }
  return customers;
};

const createPosts = (batchSize, maxUserId) => {
  const posts = [];
  for (let i = 1; i <= batchSize; i++) {
    const isImage = faker.random.boolean();
    const content = isImage ? 'src/assets/bread/bread (' + faker.random.number({'min': 500, 'max': 999}) + ').jpg': faker.lorem.paragraphs(faker.random.number({'min': 1, 'max': 2}));
    const temp = {
      is_image: isImage,
      title: faker.lorem.sentence(),
      content,
      user_id: faker.random.number({'min': 1, 'max': maxUserId}),
      bakery_id: faker.random.number({'min': 1, 'max': bakeries.length}),
    };
    posts.push(temp);
  }
  return posts;
};

// Shuffle
const createPostVotes = () => {
  const votes = [];
  for (let i = 1; i <= 1000; i++) {
    let user = faker.random.number({'min': 1, 'max': 1000});
    while (user <= 1000) {
      const up = faker.random.number({'min': 1, 'max': 2});
      const temp = {
        value: up === 1 ? 1 : -1,
        post_id: i,
        user_id: user,
      };
      votes.push(temp);
      user = faker.random.number({'min': user, 'max': 1100});
    }
  }
  return votes;
};

const createReplies = (postId, messageId, replyChance, receiverId) => {
  const replies = [];
  let randomChance = faker.random.number({'min': 1, 'max': 100});
  while (randomChance < replyChance) {
    const senderId = faker.random.number({'min': 1, 'max': 1000});
    const temp = {
      message_id: messageId,
      content: faker.lorem.sentences(faker.random.number({'min': 1, 'max': 4})),
      sender_id: senderId,
      receiver_id: receiverId,
      post_id: postId,
    };
    replies.push(temp);
    replies.push(...createReplies(postId, replies.length, replyChance - 5, senderId));
    randomChance = faker.random.number({'min': 1, 'max': 100});
  }
  return replies;
};

const createMessages = (totalMessages) => {
  const messages = [];
  const messageChance = 80;
  for (let i = 1; i <= 10; i++) {
    let randomChance = faker.random.number({'min': 1, 'max': 100});
    while (randomChance < messageChance) {
      const senderId = faker.random.number({'min': 1, 'max': 1000});
      const temp = {
        message_id: null,
        content: faker.lorem.sentences(faker.random.number({'min': 1, 'max': 4})),
        sender_id: senderId,
        receiver_id: null,
        post_id: i,
      };
      messages.push(temp);
      messages.push(...createReplies(i, messages.length, 70, senderId));
      randomChance = faker.random.number({'min': 1, 'max': 100});
    }
  }
  return messages;
};

const log = (name, start, end) => {
  const min = (start - end) * -1.666e-5;
  const sec = Math.floor((min - Math.floor(min)) * 60);
  console.log(`Total Time to seed ${name}: ${Math.floor(min)} minutes ${sec} seconds`);
}

exports.seed = async function(knex, Promise) {
  const start = Date.now();
  let tempUsers = [];
  const batchCount = 1;
  const batchSize = 1000;
  const total = batchCount * batchSize;
  // Users
  for (let i = 0; i < batchCount; i++) {
    tempUsers = [];
    for (let j = 0; j < batchSize; j++) {
      tempUsers.push(createUser());
    }
    await knex('users').insert(tempUsers);
  }
  log('USERS', start, Date.now());

  // Bakeries
  const tempBakeries = [];
  for (let i = 0; i < bakeries.length; i++) {
    tempBakeries.push(createBakery(i, total));
  }
  await knex('bakeries').insert(tempBakeries);
  log('BAKERIES', start, Date.now());
  new ObjectsToCsv(tempBakeries).toDisk('./db/seeds/bakes.csv');

  // Customers
  let tempCustomers = [];
  for (let i = 0; i < batchCount; i++) {
    tempCustomers = createCustomers(batchSize);
    shuffle(tempCustomers);
    await knex('customers').insert(tempCustomers);
  }
  log('CUSTOMERS', start, Date.now());

  // Posts
  let tempPosts = [];
  for (let i = 0; i < batchCount; i++) {
    tempPosts = createPosts(batchSize, total);
  }
  new ObjectsToCsv(tempPosts).toDisk('./db/seeds/posts.csv');
  await knex('posts').insert(tempPosts);
  log('POSTS', start, Date.now());
};
