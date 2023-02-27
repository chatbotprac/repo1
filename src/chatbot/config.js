import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Options1 from "../components/Options/Options1";
import Options2 from "../components/Options/Options2";
import Options3 from "../components/Options/Options3";
import Welcome from "../components/Options/welcome";
//import Wel from "../components/Options/Wel";
window.num = 0;
const config = {
  botName: "ChatBot",
  initialMessages: [
    createChatBotMessage("Hello. What do you want to learn", {
      widget: "Welcome"
    })
  ],
  //overwrite the existing style
  customStyles: {
    botMessageBox: {
      backgroundColor: "#D0CACC"
    },
    chatButton: {
      backgroundColor: "black"
    }
  },
  state: {
    gist: "",
    infoBox: "",
    clear: ""
  },
  // customComponents: {
  //   // Replaces the default header
  //   header: (props) => (
  //     <div
  //       style={{
  //         color: "white",
  //         backgroundColor: "black",
  //         padding: "5px",
  //         borderRadius: "3px",
  //         alignment: "left",
  //         height: "20px"
  //       }}
  //     >
  //       <h6>Your are taking with chatbot</h6>
  //     </div>
  //   )
  // },
  widgets: [
    {
      widgetName: "Welcome",
      widgetFunc: (props1) => <Welcome {...props1} />
    },
    {
      widgetName: "options",
      props: {
        troubleshooting: [
          {
            id: 1,
            text: "Q1",
            pId: "0"
          },
          {
            id: 2,
            text: "Q2",
            pId: "0"
          },
          {
            id: 3,
            text: "Q3",
            pId: "0"
          },
          {
            id: 4,
            text: "Q4",
            pId: "0"
          },
          {
            id: 5,
            text: "Q5",
            pId: "0"
          }
        ]
      },
      widgetFunc: (props1) => <Options {...props1} />,
      mapStateToProps: ["gist", "clear"]
    },
    {
      widgetName: "options1",
      widgetFunc: (props1) => <Options1 {...props1} />
    },
    {
      widgetName: "options2",
      props: "",
      widgetFunc: (props) => <Options2 {...props} />
    },
    {
      widgetName: "options3",
      props: "",
      widgetFunc: (props) => <Options3 {...props} />
    }
  ]
};
export default config;
