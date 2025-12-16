import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";

export const Message=async (req,res)=>{
    try{
        const text=req.body.text;
        if(!text?.trim()){
            return res.status(400).json({error:"Text cannot be empty"});
        }
        const user=await User.create({
            sender:"user",
            text
        })

         const botResponses = {
  "what is coding interview": "A coding interview tests problem–solving and programming skills.",
  "what is behavioral interview": "Behavioral interviews assess how you handled past situations.",
  "how to introduce yourself": "Start with your name, background, skills, and goals.",
  "what is resume": "A resume is a summary of your education, experience, and skills.",
  "what is cover letter": "A cover letter is a personalized letter sent with a resume.",
  "what is aptitude test": "An aptitude test measures logical reasoning and problem–solving ability.",
  "what is technical round": "A technical round tests your subject knowledge and coding skills.",
  "what is hr round": "HR round checks personality, communication, and cultural fit.",
  "how to crack interview": "Prepare well, practice questions, and stay confident.",
  "what is group discussion": "Group discussion tests communication, knowledge, and teamwork.",
  
  "who is the prime minister of india": "Narendra Modi is the Prime Minister of India.",
  "what is javascript": "JavaScript is a programming language used for web development.",
  "what is node js": "Node.js allows JavaScript to run on the server.",
  "what is html": "HTML is used to structure web pages.",
  "what is css": "CSS is used to style web pages.",
  "what is react": "React is a JavaScript library used to build user interfaces.",
  
  "hi": "Hello! How can I help you today?",
  "hello": "Hi there! What can I do for you?",
  "your name": "I am your chatbot assistant created by Ashish!",
  "who are you": "I’m a simple rule-based chatbot that answers your questions."
};
const normalizedText=text.toLowerCase().trim();
const botResponse=botResponses[normalizedText] || "Sorry, I don't understand that question.";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
    }
    catch(error){
        console.log("Error in Message Controller:",error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}