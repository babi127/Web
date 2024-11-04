const facebookProfile={
    name:'biruk',
    friends: ['Alisha','Separa','Hanna','Addis','Musse','Eyoel'],
    messages: ['Hello guys! Lets hang out tonight! ',' Bye !', 'Morning '],

    postMessage: function (message){
        return (this.messages).push(message);
    },
    deletMessage: function(index){
        return (this.messages).pop(index);

    },
    addFriend: function(name){
        this.friends.push(name);
        let friendsCount=this.friends.length;
        return friendsCount;
    },
    removeFriend: function(index,numberOf){
        this.friends.splice(index,numberOf); // Using [splice(start, NUmberOfElementsToDelete , items)] method to remove specific element of the array !
        let friendsCount=this.friends.length;
        return friendsCount;
    }
};

console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
facebookProfile.postMessage('Marry christ mass!');
console.log(facebookProfile.messages);
facebookProfile.deletMessage(3);
console.log(facebookProfile.messages);
console.log(facebookProfile.removeFriend(2,1)); // removes hanna from the friends list ! and returns the length of the friends Array
console.log(facebookProfile.friends);
console.log(facebookProfile.addFriend('Tinsu')); // adds a friend to the friends Array and returns the length of the array after the operation !

