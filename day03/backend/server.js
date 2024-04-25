//so we can write the js in two ways , one is common js and second one is es6 js , 

// in common js we import files using the keyword require , which is old fashioned way , it imports the files synchronously , but we are here using the es6 way , and here we are using the keyword import from , now this is a asynchronous operation , which leads to an error .

// to avoid the above error , we have to go to package.json file and add the key -value apair , "type":"module" , in it , this will ask js to consider this as a module 




import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("server is working");
});

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A Joke',
            conten : 'This is a Joke '

        },
        {
            id:2,
            title:'Aother joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'Another joke 2 ',
            content:'This is Another joke 2'
        }
    ]

    res.send(jokes);
})



// we use res.json(object/array/json) , when we want to send data in json format and we want to emphasise that , wheenever we send data it goes with a header and the type of header is the type of data we send , when we use json it sets the header to json , when we use send , it automatically detects the type of data and and then based on it sends the data .





const port = process.env.PORT || 3000;
//in production 100% of times , the port number is taken from the .env file , for security reasons 

app.listen(port,()=>{
    console.log(`server is listning at , http://localhost:${port}`);
});



