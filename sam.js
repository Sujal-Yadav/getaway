const data = {"completion":"Day 1:\n- Visit Hauz Khas Fort in the morning. Take a tour of the fort and spend some time exploring the surrounding park and lake.\n- In the afternoon, head to Humayun's Tomb, one of Delhi's most iconic landmarks. Spend time admiring the intricate designs and architecture of the tomb.\n\nDay 2:\n- Start the day early and head to Jantar Mantar, an astronomical observatory built in the 18th century. Learn about the fascinating history of the observatory and its use in predicting astronomical events.\n- In the afternoon, visit Firoz Shah Kotla, a medieval fortress built by Sultan Firoz Shah Tughlaq. Explore the ruins of the fort and learn about its significance in Delhi's history."};

// get the content from the data object
const content = data.completion;

// split the content into an array of strings based on the newline character (\n)
const contentArray = content.split('\n');

// create a new array to hold the HTML tags
const htmlArray = [];

// loop through the contentArray and generate HTML tags for each item
for (let i = 0; i < contentArray.length; i++) {
  // get the current item
  const currentItem = contentArray[i];
  
  // check if the current item starts with "Day"
  if (currentItem.startsWith("Day")) {
    // create a new <h2> tag for the day
    htmlArray.push(`<h2>${currentItem}</h2>`);
  } else {
    // create a new <p> tag for the activity
    htmlArray.push(`<p>${currentItem}</p>`);
  }
}

// join the htmlArray into a single string
const htmlString = htmlArray.join('');

// set the HTML content of the content element to the generated HTML string
document.getElementById('content').innerHTML = htmlString;
