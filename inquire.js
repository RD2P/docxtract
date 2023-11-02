const inquirer = require('inquirer')


const prompt = inquirer.createPromptModule()

prompt({
  type: 'list',
  name: 'Method',
  message: 'What do you want to do with docx files?',
  choices: [
    'Convert to text',
    'Convert to html'
  ]
}).then(answers => {
  console.log(answers)
})