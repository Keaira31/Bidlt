'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var InjectTapEventPlugin = require('react-tap-event-plugin');
var App = require('./components/app.js');
var BuilderTemplate = require('./components/builder/builder-template.js');
var BuilderOverview = require('./components/builder/builder-overview.js');
var BuilderCurrentJobs = require('./components/builder/current-jobs.js');
var AvailableJobs = require('./components/builder/available-jobs.js');
var JobTender = require('./components/builder/job-tender.js');
var BackOffice = require('./components/builder/backoffice.js');
var SearchHire = require('./components/builder/search-hire.js');
var SearchHireHire = require('./components/builder/search-hire-hire.js');
var BuilderWall = require('./components/builder/builder-wall.js');
var Safeguarding = require('./components/builder/safeguarding.js');


var SBSPOverview = require('./components/sbsp/sbsp-overview.js');
var SBSPTemplate = require('./components/sbsp/sbsp-template.js');
var SBSPSearchHire = require('./components/sbsp/search-hire.js');
var SBSPSearchHireLabour = require('./components/sbsp/search-hire-labour.js');
var SBSPRequestWork = require('./components/sbsp/sbsp-request-work.js');


var Compliance = require('./components/sbsp/compliance.js');

var CustomerTemplate = require('./components/customer/customer-template.js');
var CurrentWork = require('./components/customer/current-work.js');
var CustomerTasks = require('./components/customer/customer-tasks.js');
var CustomerRequestWork = require('./components/customer/customer-request-work.js');
var Inspiration = require('./components/customer/inspiration.js');
var Advice = require('./components/customer/advice.js');
var JobSecurity = require('./components/customer/job-security.js');




var rootElement = document.getElementById('react_content_container');

InjectTapEventPlugin();

require('../css/index.js');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />

    <Route path='/BuilderTemplate' component={BuilderTemplate}>
      <IndexRoute component={BuilderOverview}/>
      <Route path='CurrentJobs' component={BuilderCurrentJobs}/>
      <Route path='AvailableJobs' component={AvailableJobs}/>
      <Route path='AvailableJobs/:id' component={JobTender}/>
      <Route path='BackOffice' component={BackOffice}/>
      <Route path='SearchHire' component={SearchHire}/>
      <Route path='SearchHire/Hire' component={SearchHireHire}/>
      <Route path='Wall' component={BuilderWall}/>
      <Route path='Safeguarding' component={Safeguarding}/>
    </Route>

    <Route path='/SBSPTemplate' component={SBSPTemplate} >
      <IndexRoute component={SBSPOverview}/>
      <Route path='BackOffice' component={BackOffice}/>
      <Route path='SearchHire' component={SBSPSearchHire}/>
      <Route path='SearchHire/Labour' component={SBSPSearchHireLabour}/>
      <Route path='CurrentJobs' component={BuilderCurrentJobs}/>
      <Route path='RequestWork' component={SBSPRequestWork}/>

      <Route path='Wall' component={BuilderWall}/>
      <Route path='Compliance' component={Compliance}/>
    </Route>

    <Route path='/CustomerTemplate' component={CustomerTemplate}>
      <IndexRoute component={CurrentWork}/>
      <Route path='CustomerTasks' component={CustomerTasks}/>
      <Route path='RequestWork' component={CustomerRequestWork}/>
      <Route path='Inspiration' component={Inspiration}/>
      <Route path='Advice' component={Advice}/>
      <Route path='JobSecurity' component={JobSecurity}/>
    </Route>

  </Router>,
  rootElement
)
