class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message) {
    const lowercase = message.toLowerCase();
    // if (lowercase.includes("hello")) {
    //   this.actionProvider.greet(message);
    // }
    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    } else {
      this.actionProvider.greet(message);
      console.log("called");
    }
  }
}
export default MessageParser;
