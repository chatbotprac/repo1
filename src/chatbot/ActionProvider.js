class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  addToState = (key, value) => {
    this.setState((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };
  greet = (message1) => {
    console.log(message1 + "hiii");
    this.addToState("gist", message1);
    this.addToState("clear", true);
    const message11 = this.createChatBotMessage(
      "This are the Sub-Option Under " + message1,
      {
        widget: "options"
      }
    );
    this.addMessageToState1(message11);
  };
  handleDepartment = (message) => () => {
    console.log("called11");
    const message11 = this.createChatBotMessage(
      "Here are the Section in " + message + " Department",
      {
        widget: "options1"
      }
    );
    this.addMessageToState1(message11);
  };
  handleJavascriptQuiz = (value, text) => () => {
    var a = "";
    var message = "";
    if (text === "like") {
      text = "Like";
      window.num = 0;
      message = this.createChatBotMessage("Thank You For Feedback", {
        widget: "options1"
      });
    } else {
      window.num = value;
      a = this.createClientMessage(text);
      this.addMessageToState(a);
      message = this.createChatBotMessage(
        "This are the Sub-Option Under " + text,
        {
          widget: "options1"
        }
      );
    }
    console.log("handler");
    console.log(value);
    this.addMessageToState(message);
  };
  handleJavascriptQuiz1 = (feedback) => () => {
    //const a = this.createClientMessage("");
    window.num = 0;
    var to = "ra_tejas.shirode@phreesia.com";
    var subject = "Take a look at this cool code snippet from CodeDigest.Com!!";
    console.log(feedback);
    window.location.href =
      "mailto:" + to + "?body=" + feedback + "&subject=" + subject;
    const message = this.createChatBotMessage("Mail send", {
      widget: "options1"
    });
    // this.addMessageToState(a);
    this.addMessageToState(message);
  };
  handleJavascriptQuiz2 = () => () => {
    window.num = 0;
    const message = this.createChatBotMessage(
      "You can give your feedback here",
      {
        widget: "options3"
      }
    );
    //this.addMessageToState(a);
    this.addMessageToState(message);
  };
  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
  addMessageToState1 = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [prevState.messages, message]
    }));
  };
  addValueToState = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      a1: value
    }));
  };
  clientMessage = (clientMessage) => {
    const message = this.createClientMessage(clientMessage + "a");
    this.addMessageToState(message);
  };
}
export default ActionProvider;
