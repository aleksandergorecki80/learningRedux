console.log('dest');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Pinguin'
    }
};  

const { name: PublisherName = 'Self Published' } = book.publisher;

console.log(PublisherName); // Self-Publish


const item = ['Coffe (hot)', '$2.00', '$2.50', '2.75'];
const [ name, , medium ] = item;
console.log(`A medium ${name} cost ${medium}`)