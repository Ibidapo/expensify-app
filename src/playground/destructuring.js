const book = {
  title: '7 Habits of Highly Effective People',
  author: 'Stephen Covey',
  publisher: {
    // name: 'Simon & Schuster Ltd'
  }
};
const { publisher: { name: publisherName = 'Self-Published' } } = book;

console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, ,midPrice] = item;

console.log(`A medium ${itemName} costs ${midPrice}`);