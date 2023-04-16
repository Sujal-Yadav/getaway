import{ config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"

function generate(){
    config()
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.API_KEY
    }))
    openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role:"user", content: "Hello ChatGPT, Please help me generate a 3 day itinerary for delhi. I want to focus more on the religious side this trip"}],
    }).then(res => {
        console.log(res.data.choices[0].message.content)
    })
}
generate();