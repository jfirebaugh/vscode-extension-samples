// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-minimal-sample" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', (hello, world) => {
		vscode.window.showInformationMessage(hello);
		vscode.window.showInformationMessage(world);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.executeHelloWorld', () => {
		vscode.commands.executeCommand('extension.helloWorld', 'hello', 'world')
	}));
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
