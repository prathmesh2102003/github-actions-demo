const core = require('@actions/core');

try {
    const username = core.getInput('username');
    console.log(`Hello, ${username}! Welcome to GitHub Actions.`);
} catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
}
