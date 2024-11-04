// We use loops to iterate on certain set of resource! This resources can be a list of similar type of data's.
// Bunch of similar data's often stored in a database Eg, Blog post, or if we think of apps , we can think of it as bunch of users
//Without using arrays , we can't get away with manually render each blog post out of thousand by editing our code every time we want to display a certain blog!
// using loops solves this problem.

//Arrays of blog post, Array of Objects
const blogPost=[
    {
        title:'Times news',
        author:'Abel Kenny',
        PublishDate:'Jan 21,2002',
        content:'Some blogs here'
    },
    {
        title:'Tech daily',
        author:'Joy kelly',
        PublishDate:'Aug 14, 2004',
        content:'Some content goes'
    }
    ,
    {
        title:'The Business',
        author:'Mel Betty',
        PublishDate:'Jun 1,2007',
        content:'Some content abt business goes here'
    }
];
// using forEach Loop
blogPost.forEach(posts=>{
    console.log(`${posts.title} is a blog that is written by ${posts.author} on the date ${posts.PublishDate} and it's contents include blogs about ${posts.content}`);
});
// Using this ` notation is called "String interpolation", allows us to use strings with variables (${variableName.property}) in a comfortable way without concatenating by using 'backticks' instead of 'single' or "double quotes". 

//we can also use only for loops, look forLoops.js