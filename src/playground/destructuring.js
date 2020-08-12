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