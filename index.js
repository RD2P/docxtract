#!/usr/bin/env node

const fs = require('fs')
const mammoth = require("mammoth");
const path = require('path')
const prompt = require('prompt-sync')();


const inputFolder = prompt('Enter input folder path: ');
console.log(`Input folder: ${inputFolder}\n`);
const files = fs.readdirSync(inputFolder)

const outputFolder = prompt('Enter output folder path: ');
console.log(`Output folder: ${outputFolder}\n`);


// LOOP THROUGH FILES AND EXTRACT RAW TEXT
const extractText = () => {

  for (file of files) {
    const fileArr = file.split('.')
    const filename = fileArr[0]
    const extension = fileArr.pop()

    if (extension == 'docx') {
      async function convert() {
        try {
          var data = await mammoth.extractRawText({ path: path.join(inputFolder, file) })
          const text = data.value
          fs.writeFileSync(path.join(outputFolder, `${filename}.txt`), text)
        } catch (err) {
          console.log(err)
        }
      }
      convert()
    }
  }
}

// extractText()


//LOOP THROUGH FILES AND CONVERT
const convertToHtml = () => {

  for (file of files) {
    const fileArr = file.split('.')
    const filename = fileArr[0]
    const ext = fileArr.pop()

    if (extension == 'docx') {
      async function convert() {
        try {
          var data = await mammoth.convertToHtml({ path: path.join(inputFolder, file) })
          const html = data.value
          fs.writeFileSync(path.join(outputFolder, `${filename}.html`), html)
        } catch (err) {
          console.log(err)
        }
      }
      convert()
    }
  }
}






