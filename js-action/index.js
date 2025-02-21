const core = require("@actions/core");

try {
    // Get the input value from the workflow
    const username = core.getInput("username");
    
    // Print a message using the input
    console.log(`Hello, ${username}! This is a custom JavaScript Action.`);
    
    // Set an output variable (optional)
    core.setOutput("greeting", `Hello, ${username}!`);

} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}
