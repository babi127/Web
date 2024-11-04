// Using for loops to loop over the objects in an array

const Blogs=[
    {
        title:'The Jungle',
        author:'Megan Fox',
        publishDate:'Jun 22, 2013',
        content:`Wild Life's`
    },
    {
        title:'Economic Crisis',
        author:'Belay Alelgn',
        publishDate:'May 30,2022',
        content:'Current economic crisis in the world'
    },
{
        title:'HollyWood Business',
        author:'Natnael Smeneh',
        publishDate:'May 1,2024',
        content:'The Hollywood film Industry.'
    },
{
        title:'Poletics',
        author:'Birhanu Demlew',
        publishDate:'May 30,2018',
        content:'Current poletical crisis in the world'
    }
];

// Below the for loop iterates over the above list of objects!

for(i=0; i<Blogs.length; i++){
    const titleOfTheBlog=Blogs[i].title;
    const authorOfTheBlog=Blogs[i].author;
    const publishOfTheBlog=Blogs[i].publishDate;
    const theContentOfBlog=Blogs[i].content;


    console.log(titleOfTheBlog);
    console.log(authorOfTheBlog);
    console.log(publishOfTheBlog);
    console.log(theContentOfBlog);
    
};