import React, { useState } from "react";
import parse from "html-react-parser";
import "./Options.css";
var d = `[{"id":1,"text":"Release Deployment Jenkins Job Troubleshooting","pid":0,"isAns":"no"},{"id":2,"text":"Service failed to deploy to the zone because a previous zone failed.","pid":1,"isAns":"no"},{"id":3,"text":"If Test fails you will not be able to deploy to EAP/Shared.\\r\\n If EAP deployment fails you will not be able to deploy to any other production zone.\\r\\nDetermine why the service failed to deploy and fix it in the previous zone.\\r\\n If this is blocking the entire release deployment you may need to temporarily remove the service from scope to deploy the rest of the services.","pid":2,"isAns":"no"},{"id":4,"text":"The deployment failed, no servers available.","pid":1,"isAns":"no"},{"id":5,"text":"Check in Octopus to see if the servers are disabled. \\r\\nIf the servers aren't listed you can add them to Octopus here (You may want to provision new servers since other post provisioning steps may have also failed.).","pid":4,"isAns":"no"},{"id":6,"text":"The deployment failed, possible permission issue.","pid":1,"isAns":"no"},{"id":7,"text":"In Jenkins, we need to update the OCTOPUS_API_KEY credential every 3 months. You can generate a new API Key in Octopus under your profile in the top right corner. \\r\\nIf you see DB services failing then the service account (Peggy) may not have DB access. \\r\\nCheck your production DB access request and make sure it was completed, otherwise wake up a DBA (dba-oncall@phreesia.pagerduty.com)","pid":6,"isAns":"no"},{"id":8,"text":"Octopus Service Deployment Troubleshooting","pid":0,"isAns":"no"},{"id":9,"text":"General Troubleshooting","pid":8,"isAns":"no"},{"id":10,"text":"Reboot the servers, re-run chef-client, re-run the healthcheck steps","pid":9,"isAns":"no"},{"id":11,"text":".Net Framework related errors","pid":8,"isAns":"no"},{"id":12,"text":"Run chef-client on the servers or rebuild the servers. (Try a reboot too?) Have the chef policy changes been merged, built, and deployed? Check the policy repo for when the policy was last merged and make sure the policy deployment job was ran after that date.\\r\\nRe-run Regular and Shared, Payment Gateway, OEM, and Generic.\\r\\nhttps://bamboookta.go.sohacloud.net/deploy/viewDeploymentProjectEnvironments.action?id=629178369","pid":11,"isAns":"no"},{"id":13,"text":"RabbitMQ health check failed due to missing virtual host","pid":8,"isAns":"no"},{"id":14,"text":"Reach out to the team that owns the services and inform them.","pid":13,"isAns":"no"},{"id":15,"text":"Mongo DB health check failed","pid":8,"isAns":"no"},{"id":16,"text":"Reach out to team and see if they can access the cluster. \\r\\nMost likely you need a DBA to fix the database. Miscellaneous tasks: Restart REA machines, restart scheduler.\\r\\n Scared? In trouble and need help? You're not alone! Incident Escalation Path. \\r\\nEmail escalation@phreesia.pagerduty.com to wake up the DC team. cavalry. Do not hesitate to ask for assistance.","pid":15,"isAns":"no"},{"id":17,"text":"F5/Service Endpoint Troubleshooting","pid":0,"isAns":"no"},{"id":18,"text":"Unable to reach services","pid":17,"isAns":"no"},{"id":19,"text":"Make sure you deployed the services and that they were in scope. \\r\\nMake sure the nodes are enabled in the F5 load balancer. \\r\\nCheck if iRules exist and are affecting traffic or are iRules missing? In F5 check iRules> Data Group List > Either app_dg or www_dg depending on if the policy is front or backend.","pid":18,"isAns":"no"},{"id":20,"text":"EAP unable to reach services","pid":17,"isAns":"no"},{"id":21,"text":"Check in both EAP F5 and Z1 F5 under Local Traffic>Pools to see if there are EAP pools in both or one of F5s. To build servers in Z1 F5 they need to be built using \\"EAPinZ1\\".the VM_Provisioning job has a list of tiers hard coded to use the EAPinZ1.\\r\\n\\\\$eapTiersToBeInZ1Network = @(\\"ATL\\", \\"DASVC\\", \\"FCG\\", \\"RDS\\", \\"IES\\", \\"PP\\", \\"ZSW\\", \\"AMA\\", \\"IAU\\", \\"PRS\\", \\"INCS\\", \\"IAS\\")\\r\\nWhen provisioning these tiers you may need to manually add them to the EAP pool in Z1 F5 using this job: https://jenkinssojnk1765.go.akamai-access.com/job/F5_RESTRICTED/job/F5_Add_New_Node/\\r\\nSet the server name, F5 url to https://z1so-f5.phreesia.corp,  and set the pool name to the eap pool name.\\r\\nAlternatively if the tier is listed but needs servers in the EAP F5 then you must remove it from this list in the jenkinsfiles repo.","pid":20,"isAns":"no"},{"id":22,"text":"ReleaseScope Troubleshooting","pid":0,"isAns":"no"},{"id":23,"text":"Add or remove from the release scope repo during the deployment","pid":22,"isAns":"no"},{"id":24,"text":"Navigate to the release_scope.json file of the release you need to edit. (\\"https://stashokta.go.sohacloud.net/projects/DEVO/repos/releasescope/browse/release_scope.json\\"). There should be an edit button in the top right to make changes. When you are done go to \\"commit\\" and make sure you check the box to create a PR for your change. Opening a PR will ensure the validation job runs against your changes. You can get around the user approval requirement by temporarily disabling the Merge Approvals in the Settings> Merge Checks > Merge Approvals. Reenable this after you maerge your changes. After you merge your changes run this job to update the in scope file before you start another deployment. (\\" https://jenkinssojnk1765.go.akamai-access.com/job/RELEASE_TOOLS/job/ReleaseScopeInScopeUpdater/\\").","pid":23,"isAns":"no"},{"id":25,"text":"Validation builds are not running against PRs","pid":22,"isAns":"no"},{"id":26,"text":"Release Scope Admin Guide see FAQ section.","pid":25,"isAns":"no"}] `;
var data = d.replaceAll("\\n", "<br />- ");
var parsedData = JSON.parse(data);
var a1 = (value) => {
  return {
    options: parsedData.filter((obj) => obj.pid === value)
  };
};
var a2 = (value) => () => {
  console.log(value);
  var res = { result: parsedData.filter((obj) => obj.id === value) };
  console.log(res);
  window.num = res.result[0].pid;
  return res.result[0].pid;
};
const number = (value) => {
  if (value !== window.num) return false;
};
const Options1 = (props) => {
  let [id, setID] = useState(window.num);
  let [val, setVal] = useState(true);
  let [l1, setl1] = React.useState([]);
  console.log(id);
  var a11 = a1(id);
  console.log(a11 + "hiii");
  var all = true;
  var all1 = false;
  console.log(a11);
  if (a11.options[0].isAns === "yes") {
    all1 = true;
  }
  if (a11.options[0].isAns !== "no") {
    if (a11.options[0].pId !== window.num) {
      all = false;
    }
  }
  const detectURLs = (message) => {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    var a = message.match(urlRegex);
    var links = [];
    for (const key in a) {
      if (a.hasOwnProperty(key)) {
        links.push(a[key]);
      }
    }
    const listItems = links.map((l1) => {
      return <a href={l1}>{l1}</a>;
    });
    return <div>{listItems}</div>;
  };
  const link = (message) => {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    var a = message.match(urlRegex);
    for (const key in a) {
      var str = a[key];
      var str1 = '<a src="_blank" href="' + str + '">' + "click here" + "</a>";
      message = message.replace(str, str1);
    }
    console.log(message);
    return JSON.parse(JSON.stringify(message));
  };
  const buttonsMarkup = a11.options.map((option) => (
    <div>
      <button
        key={option.id}
        onClick={props.actionProvider.handleJavascriptQuiz(
          option.id,
          option.text
        )}
        className="option-button"
      >
        {parse(link(option.text))}
        {/* {detectURLs(option.text)} */}
      </button>
    </div>
  ));
  const buttonsMarkup1 = a11.options.map((option) => (
    <button key={option.id} className="option-button">
      {parse(link(option.text))}
      {/* {detectURLs(option.text)} */}
    </button>
  ));
  return (
    <div>
      {!all1 && <div className="options-container">{buttonsMarkup}</div>}
      {all1 && (
        <div>
          <div>
            <div className="options-container">{buttonsMarkup1}</div>
          </div>
        </div>
      )}
      <div className="button1">
        {id > 0 && all && (
          <div>
            <button
              className="back"
              onClick={props.actionProvider.handleJavascriptQuiz(
                a2(window.num),
                "back"
              )}
            >
              Back
            </button>
          </div>
        )}
        <div>
          {id > 0 && all && (
            <button
              className="home"
              onClick={props.actionProvider.handleJavascriptQuiz(
                0,
                "Main Menu"
              )}
            >
              Main Menu
            </button>
          )}
        </div>
      </div>
      <div className="button2">
        <div>
          {all1 && all && (
            <button
              className="like"
              onClick={props.actionProvider.handleJavascriptQuiz(0, "like")}
            >
              Like
            </button>
          )}
        </div>
        <div>
          {all1 && all && (
            <button
              className="Dislike"
              onClick={props.actionProvider.handleJavascriptQuiz2()}
            >
              Dislike
            </button>
          )}
        </div>
        <div>
          {all1 && all && (
            <button
              className="Suggestion"
              onClick={props.actionProvider.handleJavascriptQuiz(0, "like")}
            >
              Suggestion
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Options1;
