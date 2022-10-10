const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([
    {
        name: "title",
        type: "input",
        Message: "What is the title of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "Give a brief description of your project?"
    },
    {
        name: "motivation",
        type: "input",
        message: "What was the motivation for this project?"
    },
    {
        name: "problem",
        type: "input",
        message: "What problems does this solve?"
    },
    {
        name: "learn",
        type: "input",
        message: "What did you learn from this project?"
    },
    {
        name: "unique",
        type: "input",
        message: "What makes your project stand out from others?"
    },
])
.then((data) =>{
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Generating Markdown')
    );6
});

function generateMarkdown(data){
    return `
    #${data.title}
    ## Description
    ${data.description}
    ## Motivation
    ${data.motivation}
    ## What I wanted to solve
    ${data.problem}
    ## What I learned
    ${data.learn}
    ## What makes my project stand out
    ${data.unique}`
}