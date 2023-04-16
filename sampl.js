import express from "express";   
import fs from "fs";
import open from "open";
import { Configuration, OpenAIApi } from "openai";
// import {submitValues} from "./script.js";

const configuration = new Configuration({
    organization: "org-8kaL90APgyzdjbMYcLBw9wpc",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);
const app = express();
const port = 3000;

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Hello ChatGPT, Please help me generate a ${2} day itinerary ${"delhi"}` }],
}).then(res => {
    console.log(res.data.choices[0].message.content)
    const output = ({ completion: res.data.choices[0].message.content })
    fs.writeFile('output.json', JSON.stringify(output), (err) => {
        if (err) throw err;
        console.log('Output saved to output.json');
    });

    if (res.data.choices[0].finish_reason == "stop") {
        console.log("open");
        open("http://localhost/DTIProject/display.html");
    }
})


// import express from 'express';
// import fs from 'fs';
// import open from 'open';
// import { Configuration, OpenAIApi } from 'openai';
// import { submitValues } from './script';

// const configuration = new Configuration({
//     organization: 'org-8kaL90APgyzdjbMYcLBw9wpc',
//     apiKey: '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',
// });

// const openai = new OpenAIApi(configuration);
// const app = express();
// const port = 3000;

// function submitValues() {
//     var days = document.getElementById('days').value;
//     var place = document.getElementById('place').value;
//     var purpose = document.getElementById('purpose').value;
//     var selectedPlaces = [];
//     var checkboxes = document.getElementsByTagName('input');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             selectedPlaces.push(checkboxes[i].value);
//         }
//     }
//     var data = {
//         days: days,
//         place: place,
//         purpose: purpose,
//         selectedPlaces: selectedPlaces,
//     };
//     console.log('here');
//     // runScript();
//     console.log(data);
//     // var jsonData = JSON.stringify(data);
//     // fs.writeFile('values.json', jsonData, function (err) {
//     //     if (err) {
//     //         console.log(err);
//     //     } else {
//     //         console.log('Data saved to file');
//     //     }
//     // });

//     openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: [
//             { role: 'user', content: `Hello ChatGPT, Please help me generate a ${data.days} day itinerary ${data.place}` },
//         ],
//     }).then((res) => {
//         console.log(res.data.choices[0].message.content);
//         const output = { completion: res.data.choices[0].message.content };
//         fs.writeFile('output.json', JSON.stringify(output), (err) => {
//             if (err) throw err;
//             console.log('Output saved to output.json');
//         });

//         if (res.data.choices[0].finish_reason == 'stop') {
//             console.log('open');
//             open('http://localhost/DTIProject/display.html');
//         }
//     });
// }

// export { submitValues };
