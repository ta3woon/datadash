
/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';

//  See notes at the end of this code

//  
//  Shortcuts to DOM Elements.
//  

//
//  Splash Page
//  

var domSplashPage = document.getElementById('page-splash');
var domSignInButtonsContainer = document.getElementById('sign-in-buttons-container');
var domSignInEmailContainer = document.getElementById('sign-in-email-container');

// Splash Page -- buttons to sign in:  Email and Google
var domSignInEmailButton = document.getElementById('sign-in-email-button');
var domSignInGoogleButton = document.getElementById('sign-in-google-button');

// Email sign in form
var domSignInEmailButtonCancel = document.getElementById('email-sign-in-cancel-button');
var domEmailTextField = document.getElementById('email-sign-in-email-textfield');
var domPasswordTextField = document.getElementById('email-sign-in-password-textfield');
var domEmailSignInSubmitButton = document.getElementById('email-sign-in-submit-button');
var domEmailSignInSendPasswordResetButton = document.getElementById('email-send-password-reset-button');


//  
// Main App page
// 

// menu bar
var domRecentMenuButton = document.getElementById('menu-recent');
var domMyGroupsMenuButton = document.getElementById('menu-my-groups');
var domMyTopGroupsMenuButton = document.getElementById('menu-my-top-groups');
var domShowHelpMenuButton = document.getElementById('menu-show-help');
var domShowUnregisteredDevicesMenuButton = document.getElementById('menu-show-unregistered');

var domAddGroupContainer = document.getElementById('add-group-container');
var domNewGroupButton = document.getElementById('new-group-button');
var domNewGroupDismissButton = document.getElementById('new-group-dismiss-button');

// v-- de-dupe these
var domAddGroupButton = document.getElementById('add-group-button');
var domNewGroupTitleTextField = document.getElementById('new-group-title');
var domNewGroupGroupTextField = document.getElementById('new-group-group');
var domNewGroupMessageTextField = document.getElementById('new-group-message');
var domNewGroupTagsTextField = document.getElementById('new-group-tags');

var domNewGroupForm = document.getElementById('new-group-form');
var domTitleInput = document.getElementById('new-group-title');
var domGroupInput = document.getElementById('new-group-group');
var domMessageInput = document.getElementById('new-group-message');
var domTagsInput = document.getElementById('new-group-tags');
// ^-- de-dupe these

// main app page body section
var domUserGroupsSection = document.getElementById('user-groups-list');
//var domRecentGroupsSection = document.getElementById('recent-groups-list');
//var domTopUserGroupsSection = document.getElementById('top-user-groups-list');
var domHelpSection = document.getElementById('help-section');
var domUserProfileSection = document.getElementById('user-profile-section');
var domUnregisteredDevicesSection = document.getElementById('unregistered-devices-section');


var domUserPic = document.getElementById('userpic');
var domUsername = document.getElementById('username');
var domSignOutButton = document.getElementById('sign-out-button');

var domUserProfileAvatar = null;
var domUserProfileName = null;
var domUserProfileEmail = null;
var domUserProfilePhotoURL = null;

// Firebase 
var listeningFirebaseRefs = [];


// Misc
var cardShadeStatus = {};
var cardDeviceShadeStatus = {};
var breadcrumbs = [];
var deviceInfo = {};
var userDeviceData = {};

var expandsForGroup = [];
var shrinksForGroup = [];
var groupDashboards = {}; // should only be 1 dashboard per group (now) ... but this code can support many dashboards per "group" ...
var groupDevices = {};
var groupDVNs = {};  // DVNs indexed by group, so all same group dashboards get the same DVNS.  could index on uniqueGroupTag (deviceNames)
var groupFlagged = {};

var defaultDashboardTag = 'all';

var webAppMode = 'tips';

var json_value = function(obj, path) {
  for (var i=0, path=path.split('.'), len=path.length; i<len; i++) {
    if (obj) {
      obj = obj[path[i]];
    };
  }
  return obj;
};

function CCSStylesheetRuleStyle(stylesheet, selectorText, style, value) {

    /* returns the value of the element style of the rule in the stylesheet
     *  If no value is given, reads the value
     *  If value is given, the value is changed and returned
     *  If '' (empty string) is given, erases the value.
     *  The browser will apply the default one
     *
     * string stylesheet: part of the .css name to be recognized, e.g. 'default'
     * string selectorText: css selector, e.g. '#myId', '.myClass', 'thead td'
     * string style: camelCase element style, e.g. 'fontSize'
     * string value optionnal : the new value
     */

    var CCSstyle = undefined, rules;
    for (var m in document.styleSheets) {
	var styleSheet = document.styleSheets[m];
	var href = styleSheet.href;
	if (href) {
	    //	    console.log('2 css m=['+m+'] = ['+ href +'] = [' + styleSheet + ']');
	    if (href.indexOf(stylesheet) != -1) {
		//		console.log('3 css m=['+m+'] = ['+ href+']');
		rules = styleSheet[document.all ? 'rules' : 'cssRules'];
		//		console.log('3a rules=['+rules+']');
		for (var n in rules) {
		    //		    console.log('4 css n=['+n+'] ['+rules[n].selectorText+'] =? ['+style+'] = rulesn['+JSONStringify(rules[n].style)+']');
		    if (rules[n].selectorText == selectorText) {
			//			console.log('4 css n=['+n+'] ['+rules[n].selectorText+'] matches ['+selectorText+'] so using this element');
			CCSstyle = rules[n].style;
			//			console.log('5c css=['+CCSstyle+']');
			break;
		    }
		}
		break;
	    }
	}
    }
    if (CCSstyle) {
	if (value == undefined) {
	    var value = CCSstyle[style];
	    //	    console.log('6a getting css sheet=['+stylesheet+'] item['+selectorText+'] element ['+style+'] is value=['+value+']');
	    return value;
	} else { 
	    //	    console.log('6b SETTING css sheet=['+stylesheet+'] item['+selectorText+'] element ['+style+'] to value=['+value+']');
	    return CCSstyle[style] = value;
	}
    } else {
	console.log('6c CSS NOT FOUND for: css sheet=['+stylesheet+'] item['+selectorText+'] element ['+style+'] to value=['+value+']');
    }
}

/*
Call :
CCSStylesheetRuleStyle('default', "#mydiv", "height");
CCSStylesheetRuleStyle('default', "#mydiv", "color", "#EEE");
*/

function uniqueWordDictFromString(str) {
    str = str.replace(/\s+/g,' ').trim();
    var words = str.split(' ');
    var wordDict = {};
    [].forEach.call(words, function(word) {
	    wordDict[word] = true;
	});
    return wordDict;
}

var emailAndPasswordCheckTimer = setInterval(function() {
	emailAndPasswordButtons();
    }, 1000);


function writeNewGroup(group, uid, username, imageURL, title,  message, tags) {
    if (username == undefined) {
	// do not want a group not owned by anyone
	return;
    }

    tags = tags + ' ' + defaultDashboardTag;
    tags = uniqueWordDictFromString(tags);
    console.log('1 tags=['+tags+']');

    var groupData = {
	author: username,
	uid: uid,
	message: message,
	title: title,
	group: group,
	authorPic: imageURL,
        tags:  tags
    };

    //    console.log('tags=['+JSONStringify(tags)+'] groupData=['+JSONStringify(groupData)+']');

  // Get a key for a new Group.
  var newGroupKey = firebase.database().ref().child('/dashboards/').push().key;

  // Write the new group's data simultaneously in the groups list and the user's group list.
  var updates = {};
  updates['/dashboards/' + newGroupKey] = groupData;
  //  updates['user-groups/' + uid + '/' + newGroupKey] = groupData; // no longer using groups-by-user ...

  return firebase.database().ref("/").update(updates); // updates as used previously when multiple places required simultaneous updating 

}


/**
 * Creates a group element.
 */
function createGroupElement(sectionTag, groupId, group, title, message, tags, author, authorId, authorPic) {

  // var uid = firebase.auth().currentUser.uid;
  var uid = currentUser.uid;

  var groupUniqueTag = '-' + sectionTag + groupId;

  //  console.log('Creating group for SectionTag=' + sectionTag + ' Group ID [' + groupId + '] ==> ['+groupUniqueTag+'] has:  title=['+title+'] message=['+message+']');

  var html =
'<div id="group'+groupUniqueTag+'" class="overflow draggable content-item group' +groupUniqueTag + ' mdl-cell mdl-cell--12-col mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col xtheme-c5 ddd" draggable="true" ondragstart="dragstart(event)" ondragenter="dragenter(event)" ondragleave="dragleave(event)" ondragover="allowDrop(event)"  ondrop="drop(event)" ondragover="allowDrop(event)">' + // wraps group card

      //  '<div class="mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col xtheme-c5">' +

    '<div class="mdl-card__title xtheme-c4">' +
      '<h4 class="mdl-card__title-text"></h4>' +
    '</div>' +

    '<span class="controls-1" >' +
      '<span class="controls-2">' +
        '<div class="tooltip flagged-yes material-icons">report_problem' +
          '<span class="tooltiptext-left">Your alert toggle status is:  ON<br>Please use "messages" section to provide feedback.</span>' +
        '</div>' +
        '<div xhidden class="tooltip flagged-no material-icons">report_problem' +
          '<span class="tooltiptext-left">Shows total active alerts for this dashboard.<br>Toggle your alert for this dashboard.  Your alert toggle status is:  OFF</span>' +
        '</div>' +
        '<div xhidden class="tooltip flag-count">0' +
          '<span class="tooltiptext-left">o open/close.<br>2</span>' +
        '</div>' +
        '<div class="tooltip config material-icons admin">build' +
          '<span class="tooltiptext-left">Manage dashboard panel and devices.<br>Please use caution.</span>' +
        '</div>' +
        '<div class="tooltip messages material-icons">chat' +
          '<span class="tooltiptext-left">Use messages to communicate with others who view this dashboard.<br>Messages are only in dashboard and may be cleared at any time.</span>' +
        '</div>' +
        '<div class="tooltip assessment material-icons">assessment' +
        '<span class="tooltiptext-left">Dashboard with real-time updates.<br>This is the primary view.</span>' +
        '</div>' +
        '<div class="tooltip shrink material-icons">fullscreen_exit' +
        '<span class="tooltiptext-left">Click to close panel.<br>Red means needs attention.  Green means ok.</span>' +
        '</div>' +
      '</span>' +
      '<div class="tooltip"><div class="expand material-icons expand'+groupUniqueTag+'">fullscreen' +
        '<span class="tooltiptext-left">Click bar to toggle. Click on button to open.  Drag/Drop to reorder.<br>Red means needs attention.  Green means ok.</span>' +
      '</div></div>' +
    '</span>' +

    '<div class="overflow content-item-wrapper mdl-card mdl-cell mdl-cell--12-col xtheme-c5">' +

     '<div class="chart-section xtheme-c5">' +
        '<div class="tooltip overflow" style="display:inline-block;xbackground-color:#FF0000;">Group:  ' + group + 
          '<span class="tooltiptext-right">Value used to group devices (ie: arbitrary, but probably "door ID").</span>' +
        '</div>' +
'<br>' +
        '<div class="tooltip" style="display:inline-block;xbackground-color:#CC00CC;">' +
'<span class="tooltiptext-right">Select items from dropdown to filter.</span>' +
          '<div id="TeamName' + groupUniqueTag + '"></div>' +
        '</div>' +
       '<br>&nbsp;<br>' +
       '<div class="tooltip overflow" style="width:100%;">' +
         '<span class="tooltiptext-top">See HELP section for additional information.<br>Table updates in real-time.<br>Select column header to sort by that column.<br>Select device row to toggle additional device information.<br></span>' +
         '<div id="table_div' + groupUniqueTag + '" class="table_div mdl-card mdl-shadow--8dp mdl-cell--12-col xtheme-c3"></div>' +
       '</div>' +
        '<div id="dashboard_div' + groupUniqueTag + '"></div>' +
        '<div id="device_div' + groupUniqueTag + '" class="device_div mdl-card mdl-shadow--0dp mdl-cell--12-col xtheme-c5"></div>' +
      '</div>' +

      '<div class="messages-section mdl-cell--12-col">' + 
        '<div class="header">' +
          '<div>' +
            '<div class="avatar"></div>' +
            '<div class="username"></div>' +
          '</div>' +
        '</div>' +
        '<div class="group-message1"></div>' +
        '<div class="comments-container"></div>' +
        '<form class="add-comment" action="#">' +
          '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
            '<input class="mdl-textfield__input new-comment" type="text">' +
            '<label class="mdl-textfield__label">Comment</label>' +
          '</div>' +
        '</form>' +
      '</div>' + /* messages section */

      '<div class="config-section">' + 
        '<div class="config-container">' +
          '<h4>Dashboard Information</h4>' +
          '<b>Title:</b><br>' +
          '<div class="group-title"></div>' +
          '<br><b>Message:</b><br>' +
          '<div class="group-message2"></div>' +
          '<br><b>Group:</b>  ' + group + '<br>' +
          '<br><b>Tags:</b>  ' + tags + '<br>' +
          '<br>' +
          '<h5>Dashboard Operations</h5>' +
          '<form class="new-group-information-form" action="#">' +

            '<h6>Information</h6>' +

            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<input class="mdl-textfield__input new-group-title" type="text">' +
              '<label class="mdl-textfield__label">New Title for Dashboard</label>' +
            '</div>' +
            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<textarea class="mdl-textfield__input new-group-message" type="text"></textarea>' +
              '<label class="mdl-textfield__label">New Message for Dashboard</label>' +
            '</div>' +
            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<input class="mdl-textfield__input new-group-tags" type="text">' +
              '<label class="mdl-textfield__label">New Tags for Dashboard</label>' +
            '</div>' +

            '<h6>Alert (<b>all devices</b> in this dashboard)</h6>' +

            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<input class="mdl-textfield__input new-group-alert-title" type="text">' +
              '<label class="mdl-textfield__label">Title for new Alert (for all devices assigned to this dashboard)</label>' +
            '</div>' +
            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<input class="mdl-textfield__input new-group-alert-message" type="text">' +
              '<label class="mdl-textfield__label">Message for new Alert (for all devices assigned to this dashboard)</label>' +
            '</div>' +
            '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
              '<input class="mdl-textfield__input new-group-alert-button-text" type="text">' +
              '<label class="mdl-textfield__label">Button text for new alert (for all devices assigned to this dashboard)</label>' +
            '</div>' +
              '<div><span class="di-5">Alert Style:</span><span class="radio-group value xtheme-c5">' +
                '<input type="radio" class="radio-new-group-alert-style" name="radio-new-group-alert-style" value="acknowledge" > Acknowledge' +
                '<input type="radio" class="radio-new-group-alert-style" name="radio-new-group-alert-style" value="always"> Always' +
                '<input type="radio" class="radio-new-group-alert-style" name="radio-new-group-alert-style" value="clear"> Clear alert (ie: remove)</span>' +
              '</div>' +

            '<div>' +

'<br>' +

            '<h6>Operations</h6>' +

              '<div class="superadmin group-icon-command">' +
                 '<div class="group-info-command-icon delete-group material-icons">delete_forever</div>' +
                 '<div class="group-info-command-text" style="color:red;">Permanently delete this dashboard (and all messages, <b>no confirmation</b>!).</div>' +
              '</div>' +
              '<div class="group-icon-command">' +
                '<div class="group-info-command-icon delete-devices material-icons">delete</div>' +
                '<div class="group-info-command-text">Clear current device(s) for this dashboard (they come back if/when used).</div>' +
              '</div>' +
              '<div class="group-icon-command">' +
                 '<div class="group-info-command-icon delete-messages material-icons">delete_forever</div>' +
                 '<div class="group-info-command-text">Delete messages (for this dashboard only).</div>' +
              '</div>' +
              '<div class="group-icon-command">' +
                '<div class="group-info-command-icon reset-uses material-icons">clear</div>' +
                '<div class="group-info-command-text">Reset "uses" count to 0 (only for this dashboard).</div>' +
              '</div>' +
              '<div class="group-icon-command">' +
                '<div class="group-info-command-icon reset-adni material-icons">clear</div>' +
                '<div class="group-info-command-text">Reset "ADNI" count to 0 (only for this dashboard).</div>' +
              '</div>' +
              '<div class="group-icon-command">' +
                '<div class="group-info-command-icon reset-flagCount material-icons">clear</div>' +
                '<div class="group-info-command-text">Reset flag count to 0 (only for this dashboard).</div>' +
              '</div>' +
            '</div>' +

            '<button id="update-group-info-submit-button type="submit" class="update-group-info-submit-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
              'Update Dashboard Information'+
            '</button>' +
            '<button id="update-group-info-dismiss-button" class="update-group-info-dismiss-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
             'Dismiss' +
           '</button>' +
          '</form>' +
        '</div>' + /* config container */
      '</div>' + /* config section */

      //    '</div>' + /* content-item-wrapper */

      //  '</div>' +
'</div>';

  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var groupElement = div.firstChild;
  if (componentHandler) {
      componentHandler.upgradeElements(groupElement.getElementsByClassName('mdl-textfield'));
  }

  var groupWrapper = groupElement.getElementsByClassName('content-item-wrapper')[0];

  var expand = groupElement.getElementsByClassName('expand')[0];
  var shrink = groupElement.getElementsByClassName('shrink')[0];

  var controls2Span = groupElement.getElementsByClassName('controls-2')[0];
  var flaggedYes = groupElement.getElementsByClassName('flagged-yes')[0];
  var flaggedNo = groupElement.getElementsByClassName('flagged-no')[0];
  var flagCount = groupElement.getElementsByClassName('flag-count')[0];
  var config = groupElement.getElementsByClassName('config')[0];
  var messages = groupElement.getElementsByClassName('messages')[0];
  var pie = groupElement.getElementsByClassName('pie_chart')[0];
  var chart = groupElement.getElementsByClassName('assessment')[0];
  var deleteGroup = groupElement.getElementsByClassName('delete-group')[0];
  var deleteMessages = groupElement.getElementsByClassName('delete-messages')[0];
  var deleteDevices = groupElement.getElementsByClassName('delete-devices')[0];
  var resetUses = groupElement.getElementsByClassName('reset-uses')[0];
  var resetADNI = groupElement.getElementsByClassName('reset-adni')[0];
  var resetFlagCount = groupElement.getElementsByClassName('reset-flagCount')[0];

  var chartSection = groupElement.getElementsByClassName('chart-section')[0];
  var configSection = groupElement.getElementsByClassName('config-section')[0];
  var messagesSection = groupElement.getElementsByClassName('messages-section')[0];
  var addCommentForm = groupElement.getElementsByClassName('add-comment')[0];
  var commentInput = groupElement.getElementsByClassName('new-comment')[0];

  var titleBar = groupElement.getElementsByClassName('mdl-card__title')[0];

  // Set values.
  groupElement.getElementsByClassName('group-message2')[0].innerText = message;
  groupElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
  groupElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
  groupElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
      (authorPic || './silhouette.jpg') + '")';

  groupElement.getElementsByClassName('group-title')[0].innerText = title;
  groupElement.getElementsByClassName('group-message1')[0].innerText = message;

  // Listen for comments.
  var commentsRef = firebase.database().ref('/group-comments/' + groupId);
  commentsRef.on('child_added', function(data) {
    addCommentElement(groupElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_changed', function(data) {
    setCommentValues(groupElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_removed', function(data) {
    deleteComment(groupElement, data.key);
  });

  var flagsRef = firebase.database().ref('/dashboards/' + groupId + '/flags');
  flagsRef.on('value', function(snapshot) {
	  var flags = snapshot.val() || {};
	  var flagCountVal = Object.keys(flags).length;
	  flagCount.innerText = flagCountVal;
	  if (flagCountVal > 0) {
	      var sgf = groupFlagged[group] || {};
              sgf[groupId] = flagCountVal;
	      groupFlagged[group] = sgf;
	  } else {
	      if (groupFlagged[group]) {
		  delete groupFlagged[group][groupId];
		  if (Object.keys(groupFlagged[group]).length < 1) {
		      delete groupFlagged[group];
		  }
	      }
	  }
	  updateExpandsForGroup(group);
  });

  // Listen for the flagged status.
  var flaggedStatusRef = firebase.database().ref('/dashboards/' + groupId + '/flags/' + uid);
  flaggedStatusRef.on('value', function(snapshot) {
	  if (snapshot.val()) {
	      groupElement.getElementsByClassName('flagged-yes')[0].style.display = 'inline-block';
	      groupElement.getElementsByClassName('flagged-no')[0].style.display = 'none';
	  } else {
	      groupElement.getElementsByClassName('flagged-yes')[0].style.display = 'none';
	      groupElement.getElementsByClassName('flagged-no')[0].style.display = 'inline-block';
	  }
      });
  
  // Keep track of all Firebase reference on which we are listening.
  listeningFirebaseRefs.push(commentsRef);
  listeningFirebaseRefs.push(flagsRef);
  listeningFirebaseRefs.push(flaggedStatusRef);

  // Create new comment.
  addCommentForm.onsubmit = function(e) {
    e.preventDefault();
    createNewComment(groupId, currentUser.username, uid, commentInput.value);
    commentInput.value = '';
    commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
  };

  var domUpdateGroupInformationFormDismissButton = groupElement.getElementsByClassName('update-group-info-dismiss-button')[0];
  var onUpdateGroupInfoDismissButton = function() {
      messagesSection.style.display = 'none';
      chartSection.style.display = 'inline-block';
      configSection.style.display = 'none';
  }

  var onModifyGroupInfoSubmit = function(e) {

      var newGroupTitleInput = groupElement.getElementsByClassName('new-group-title')[0];
      var newGroupMessageInput = groupElement.getElementsByClassName('new-group-message')[0];
      var newGroupTagsInput = groupElement.getElementsByClassName('new-group-tags')[0];

      var groupRef = firebase.database().ref('/dashboards/' + groupId);

      var newGroupTitle = newGroupTitleInput.value;
      if (newGroupTitle) {
	  var updates = {};
	  updates['/dashboards/' + groupId + '/title'] = newGroupTitle;
	  //	  updates['user-groups/' + uid + '/' + groupId + '/title'] = newGroupTitle;
	  firebase.database().ref('/').update(updates);
	  newGroupTitleInput.value = '';
      }
      var newGroupMessage = newGroupMessageInput.value;
      if (newGroupMessage) {
	  var updates = {};
	  updates['/dashboards/' + groupId + '/message'] = newGroupMessage;
	  //	  updates['user-groups/' + uid + '/' + groupId + '/message'] = newGroupMessage;
	  firebase.database().ref('/').update(updates);
	  newGroupMessageInput.value = '';
      }

      var newGroupTags = newGroupTagsInput.value;
      if (newGroupTags) {
	  var tags = newGroupTags + ' ' + defaultDashboardTag;
	  tags = uniqueWordDictFromString(tags);
	  var updates = {};
	  updates['/dashboards/' + groupId + '/tags'] = tags;
	  //	  updates['user-groups/' + uid + '/' + groupId + '/message'] = newGroupMessage;
	  firebase.database().ref('/').update(updates);
	  newGroupTagsInput.value = '';
      }

      var newGroupAlertStyleRadioValue = getRadioCheckedValue(groupElement.getElementsByClassName('radio-new-group-alert-style'));

      if (newGroupAlertStyleRadioValue) {

	  var domNewGroupAlertTitleTextInput = groupElement.getElementsByClassName('new-group-alert-title')[0];
	  var domNewGroupAlertMessageTextInput = groupElement.getElementsByClassName('new-group-alert-message')[0];
	  var domNewGroupAlertButtonTextInput = groupElement.getElementsByClassName('new-group-alert-button-text')[0];
	  
	  var title = domNewGroupAlertTitleTextInput.value;
	  var message = domNewGroupAlertMessageTextInput.value;
	  var button = domNewGroupAlertButtonTextInput.value;

	  var alertData = {
	      title: title,
	      message: message,
	      button: button,
	      timeCreated: firebase.database.ServerValue.TIMESTAMP,
	      timeFirstDisplayed: 0.0,
	      timeFirstAcknowledged: 0.0,
	      timeLastDisplayed: 0.0,
	      timeLastAcknowledged: 0.0,
	      style: newGroupAlertStyleRadioValue,
	  };

	  console.log('yes, new group alert! ['+newGroupAlertStyleRadioValue+'] alertData['+JSONStringify(alertData)+']');
	  
	  firebase.database().ref('/group/' + group + '/devices/').once('value').then(function(snapshot) {
		  console.log('modifying group alert for devices['+JSONStringify(snapshot.val())+']');
		  for (var deviceName in snapshot.val()) {
		      var ref = firebase.database().ref('/devices/'+deviceName+'/alert');
		      if ( newGroupAlertStyleRadioValue == 'clear') {
			  console.log('delete alert for device=['+deviceName+']');
			  ref.remove();
		      } else if ( (newGroupAlertStyleRadioValue == 'acknowledge' && title && message && button) ||
				  (newGroupAlertStyleRadioValue == 'always' && title && message) ) {
			  console.log('add alert for device=['+deviceName+']');
			  ref.set(alertData);
		      };
		  }
	      });
	  
	  domNewGroupAlertTitleTextInput.value = '';
	  domNewGroupAlertMessageTextInput.value = '';
	  domNewGroupAlertButtonTextInput.value = '';

	  clearRadiosChecked(groupElement.getElementsByClassName('radio-new-group-alert-style'));

      }

      onUpdateGroupInfoDismissButton();

  }

  var domUpdateGroupInfoForm = groupElement.getElementsByClassName('new-group-information-form')[0];
  domUpdateGroupInfoForm.onsubmit = function(e) {
    e.preventDefault();
    onModifyGroupInfoSubmit();
  }

  var domUpdateGroupInformationFormSubmitButton = groupElement.getElementsByClassName('update-group-info-submit-button')[0];
  domUpdateGroupInformationFormSubmitButton.onclick = onModifyGroupInfoSubmit();

  domUpdateGroupInformationFormDismissButton.onclick = onUpdateGroupInfoDismissButton;
  
  var onFlagClicked = function() {
      var globalGroupFlagsRef = firebase.database().ref('/dashboards/' + groupId + "/flags");
      globalGroupFlagsRef.once('value').then(function(snapshot) { // race conditions? 
	      var flags = snapshot.val();
	      if (flags && flags[uid]) {
		  console.log('removing flag for uid['+uid+']');
		  globalGroupFlagsRef.child(uid).remove();
	      } else {
		  console.log('adding flag for uid['+uid+']');
                  globalGroupFlagsRef.child(uid).set(firebase.database.ServerValue.TIMESTAMP);
	      }
	  });
  };
  
  flaggedNo.onclick = onFlagClicked;
  flaggedYes.onclick = onFlagClicked;
  
  // Bind group controls actions (ie: expand/shrink)
  var onExpandClicked = function() {
      cardShadeStatus[groupUniqueTag] = '1';
      expand.style.display = 'none';
      shrink.style.display = 'inline-block';
      groupWrapper.style.display = 'inline-block';
      controls2Span.style.display = 'inline-block';
  }
  
  var onShrinkClicked = function() {
      cardShadeStatus[groupUniqueTag] = '0';
      expand.style.display = 'inline-block';
      shrink.style.display = 'none';
      groupWrapper.style.display = 'none';
      controls2Span.style.display = 'none';
  }
  
  var onChartClicked = function() {
      messagesSection.style.display = 'none';
      chartSection.style.display = 'inline-block';
      configSection.style.display = 'none';
  }
  
  var onMessagesClicked = function() {
      messagesSection.style.display = 'inline-block';
      chartSection.style.display = 'none';
      configSection.style.display = 'none';
  }
  
  var onConfigClicked = function() {
      messagesSection.style.display = 'none';
      chartSection.style.display = 'none';
      configSection.style.display = 'inline-block';
  }
  
  var onDeleteMessagesClicked = function() {
      console.log('delete messages');
      commentsRef.remove();
  }
  
  var onClearDevicesClicked = function() {
      console.log('delete devices');
      firebase.database().ref('/group/' + group + '/devices/').remove();
      firebase.database().ref('/group/' + group + '/connections').remove();
  }
  
  var onResetUsesClicked = function() {
      console.log('reset uses');
      firebase.database().ref('/group/' + group + '/devices/').once('value').then(function(snapshot) {
	      console.log('delete uses group devices ['+JSONStringify(snapshot.val())+']');
	      for (var deviceName in snapshot.val()) {
		  console.log('device=['+deviceName+']');
		  firebase.database().ref('/devices/'+deviceName+'/uses').remove();
	      }
	  });
  }
  
  var onResetADNIClicked = function() {
      console.log("reset ADNI");
      firebase.database().ref('/group/' + group + '/devices/').once('value').then(function(snapshot) {
	      console.log('delete uses group devices ['+JSONStringify(snapshot.val())+']');
	      for (var deviceName in snapshot.val()) {
		  console.log('device=['+deviceName+']');
		  firebase.database().ref('/devices/'+deviceName+'/adni').remove();
	      }
	  });
  }

  var onResetFlagCountClicked = function() {
      console.log("reset FlagCount");
      var updates = {};
      updates['flags'] = null;
      updates['flagCount'] = 0;
      return firebase.database().ref('/dashboards/' + groupId).update(updates);
  }
  
  var onDeleteGroupClicked = function() {
      console.log("delete group");
      firebase.database().ref('/dashboards/' + groupId).remove();
      //      firebase.database().ref('/user-groups/' + authorId + '/' + groupId).remove();
      ////      globalGroupRef.remove(); //  = firebase.database().ref('/dashboards/' + groupId);
      ////      userGroupRef.remove(); //  = firebase.database().ref('/user-groups/' + authorId + '/' + groupId);
  }
  
  titleBar.onclick = function() {
      var shadeStatus = cardShadeStatus[groupUniqueTag]
      if (shadeStatus == '0') {
	  expand.click()
      } else {
	  shrink.click()
      }
      //	console.log(JSONStringify(cardShadeStatus));
  }
  
  expand.onclick = onExpandClicked;
  shrink.onclick = onShrinkClicked;
  
  chart.onclick = onChartClicked;
  messages.onclick = onMessagesClicked;
  
  if (sectionTag == 'user') { // make 'user' a constant
      config.onclick = onConfigClicked;
      config.style.display = 'inline-block';
  } else {
      config.style.display = 'none';
  }
  
  deleteGroup.onclick = onDeleteGroupClicked;
  deleteMessages.onclick = onDeleteMessagesClicked;
  deleteDevices.onclick = onClearDevicesClicked;
  resetUses.onclick = onResetUsesClicked;
  resetADNI.onclick = onResetADNIClicked;
  resetFlagCount.onclick = onResetFlagCountClicked;
  
  var expands = expandsForGroup[group] || [];
  expands.push(expand);
  expandsForGroup[group] = expands;

  var shrinks = shrinksForGroup[group] || [];
  shrinks.push(shrink);
  shrinksForGroup[group] = shrinks;
  
  shrink.click();
  chart.click();
  
  return groupElement;
  
}


function updateExpandsForGroup(group) {
    var status = groupStatus(group);
    //	expand.style.color = '#11CCFF'; // blueish-ish
    var color = '#11FF11';  // green
    var opacity = '0.8';
    if (!status) {
	color = '#FF1111';  // red
	opacity = '0.8';
    }
    var expands = expandsForGroup[group];
    if (expands) {
	expands.forEach(function (expand, i) {
		expand.style.color = color;
		expand.style.opacity = opacity;
	    });
    }
    var shrinks = shrinksForGroup[group];
    if (shrinks) {
	shrinks.forEach(function (shrink, i) {
		shrink.style.color = color;
		shrink.style.opacity = opacity;
	    });
    }
}

function groupStatus(group) {
    var status = true;
    var devices = groupDevices[group] || []; // empty?
    //    console.log('groupStatus group=['+group+']  devices=['+devices+']  dd=['+JSONStringify(groupDevices)+']');
    var connected; 
    if (groupFlagged[group]) {
	status = false;
    } else {
	devices.forEach(function (deviceName, i) {
		//	    console.log('%d: %s', i, deviceName);
		connected = json_value(deviceInfo, deviceName+'.connected');
		//	    console.log('deviceName=['+deviceName+']  con=['+connected+']');
		if (connected != 'true') {
		    status = false;
		}
	    });
    }
    return status;
}

/**
 * Writes a new comment for the given group.
 */
function createNewComment(groupId, username, uid, text) {
    firebase.database().ref('/group-comments/' + groupId).push({
	    text: text,
		author: username,
		uid: uid
		});
}

/**
 * Creates a comment element and adds it to the given groupElement.
 */
function addCommentElement(groupElement, id, text, author) {
    var comment = document.createElement('div');
    comment.classList.add('comment-' + id);
    comment.innerHTML = '<span class="username"></span> says, "<span class="comment"></span>"';
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
    
    var commentsContainer = groupElement.getElementsByClassName('comments-container')[0];
    commentsContainer.appendChild(comment);
}

/**
 * Sets the comment's values in the given groupElement.
 */
function setCommentValues(groupElement, id, text, author) {
    var comment = groupElement.getElementsByClassName('comment-' + id)[0];
    comment.getElementsByClassName('comment')[0].innerText = text;
    comment.getElementsByClassName('fp-username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given groupElement.
 */
function deleteComment(groupElement, id) {
    var comment = groupElement.getElementsByClassName('comment-' + id)[0];
    comment.parentElement.removeChild(comment);
}

function groupAdded(key, data, sectionElement, sectionTag) {
    
    var author = data.author || 'Anonymous';
    var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
    var groupId = key;
    var group = data.group;
    var tags = Object.keys(data.tags).join(' ');
    
    //      console.log('child added group data[' + JSONStringify(data) + ']  group=' + data.val().group)
    
    var groupElement = createGroupElement(sectionTag, groupId, group, data.title, data.message, tags, author, data.uid, data.authorPic);
    containerElement.insertBefore(groupElement, containerElement.firstChild);

    var words = currentUser.dashboardDisplayOrder.split(' ');
    for (var i = words.length-1; i >= 0; i--) {
	var word = words[i];
	var targetElement = sectionElement.getElementsByClassName(word)[0];
	if (targetElement) {
	    containerElement.insertBefore(targetElement, containerElement.firstChild);
	}
    };

    //      console.log("Section="+sectionTag+"    GroupId added:"+groupId);
    //      console.log("drawing dashboard for section="+sectionTag+"  GroupId "+groupId);
    createDashboard(groupId, sectionTag, group);

}

function groupChanged(key, data, sectionElement, sectionTag) {
    var groupUniqueTag = '-' + sectionTag + key;
    var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
    var groupElement = containerElement.getElementsByClassName('group' + groupUniqueTag)[0];
    groupElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.title;
    groupElement.getElementsByClassName('username')[0].innerText = data.author;
    groupElement.getElementsByClassName('group-message1')[0].innerText = data.message;
    groupElement.getElementsByClassName('group-message2')[0].innerText = data.message;
    var flags = data.flags || {};
    var flagCountVal = Object.keys(flags).length;
    groupElement.getElementsByClassName('flag-count')[0].innerText = flagCountVal;
    groupElement.getElementsByClassName('group-title')[0].innerText = data.title;
}

function groupRemoved(key, data, sectionElement, sectionTag) {
    var groupUniqueTag = '-' + sectionTag + key;
    var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
    var group = containerElement.getElementsByClassName('group' + groupUniqueTag)[0];
    group.parentElement.removeChild(group);
}

//  FETCH GROUPS FUNCTION
function fetchGroup(groupsRef, sectionElement, sectionTag) {
    
    groupsRef.on('child_added', function(data) {
	    //	    console.log('xxx 1 fetchgroups-groupref-on-child_added=['+JSONStringify(data)+']');
	    groupAdded(data.key, data.val(), sectionElement, sectionTag);
	});
    
    groupsRef.on('child_changed', function(data) {	
	    console.log('xxx 2 fetchgroups-groupref-on-child_changed=['+JSONStringify(data)+']');
	    groupChanged(data.key, data.val(), sectionElement, sectionTag);
	});
    
    groupsRef.on('child_removed', function(data) {
	    console.log('xxx 3 fetchgroups-groupref-on-child_removed=['+JSONStringify(data)+']');
	    groupRemoved(data.key, data.val(), sectionElement, sectionTag);
	});

};

/**
 * Starts listening for new groups and populates groups lists.
 */
function startDatabaseQueries() {

    //  var myUserId = firebase.auth().currentUser.uid;
    var myUserId = currentUser.uid;
     

    //    var recentGroupsRef = firebase.database().ref('/groups/').limitToLast(10); // last created?
    //    var recentGroupsRef = firebase.database().ref('/groups/'); // only if have my tags?  TODO:  FIX:
    //    var userGroupsRef = firebase.database().ref('/user-groups/' + myUserId);  // original location
    //    var userGroupsRef = firebase.database().ref('/dashboards/');

    //    var userGroupsRef = firebase.database().ref('/dashboards/').orderByChild('/tags').equalTo('nyc');

    var groupRef = null; // firebase.database().ref('/dashboards/').orderByChild('/tags/nyc').equalTo(true);

	//    var userGroupsRef = firebase.database().ref('/dashboards/').orderByChild('/tags/nyc').equalTo(true);

    // Fetching and displaying all groups of each sections.
    // fetchGroups(userGroupsRef, domUserGroupsSection, 'user');
    // fetchGroups(recentGroupsRef, domRecentGroupsSection, 'recent');
    // fetchGroups(topUserGroupsRef, domTopUserGroupsSection, 'top'); // don't need top?


    // Listen for device-data changes
    var deviceInfoChanges = firebase.database().ref('/devices/'); // get it all ya, big data returned.  Mayber later split up to individual devices?
    deviceInfoChanges.on('child_changed', function(snapshot) {
	    console.log('device['+snapshot.key+'] changed, updating all tables for this device ...');
	    updateDeviceData(snapshot);
	});

    // Keep track of all Firebase refs we are listening to.
	//    listeningFirebaseRefs.push(userGroupsRef);
    //    listeningFirebaseRefs.push(recentGroupsRef);
    //  listeningFirebaseRefs.push(topUserGroupsRef); // don't need top?

    /*
    userGroupsRef.on("value", function(snapshot) {  // shallow flag?  this is only to get the initial count?
	    if ( snapshot.numChildren() > 0 ) {
		gotoLastBreadcrumb(); // 	      domMyGroupsMenuButton.onclick();  // launch with GROUPS
	    } else {
		domShowHelpMenuButton.onclick();  // launch with HELP
	    };
	})
    */

    //    gotoLastBreadcrumb(); // 	      domMyGroupsMenuButton.onclick();  // launch with GROUPS

    gotoLastBreadcrumb(); // 	      domMyGroupsMenuButton.onclick();  // launch with GROUPS

}

function updateDashboardsForGroup(group) {
    var devix;
    var devices;
    var dashboard;
    var dashboardsForGroup = groupDashboards[group];
    for (var dbdix in dashboardsForGroup) { // there should only be 1 dashboard for a group now... but this code supports many dashboards per group.
        dashboard = dashboardsForGroup[dbdix];
	devices = groupDevices[group] || []; // empty?
	//	console.log('group=['+group+']  dashboard=['+dashboard+']  devices=['+devices+']');
	updateTableForGroup(dashboard, group, devices);
    }
}

function updateDeviceData(snapshot) {
    
    var deviceName = snapshot.key;
    var newDeviceData = snapshot.val();
    var group = newDeviceData.group; 
    //    console.log('updateDeviceData:  deviceName=['+deviceName+'] for group=['+group+']  JSONStringify new device data =[' + JSONStringify(newDeviceData) + ']');
    //  update the device info for the device that was just updated
    deviceInfo[deviceName] = newDeviceData;

    //  update any groups (ie: tables) that have that device
    updateDashboardsForGroup(group); // now there should only be 1 'dashboard' for each group (although this code supports 1 device to many dashboards/groups)

}

/**
 * Writes the user's data to the database.
 */
function writeUserData(uid, username, email, photoURL) {
    //  console.log('write user data id=[' + userId + ']  name=['+name+']   email=['+email+']   imageURL=['+imageUrl+']');
    var userDataRef =  firebase.database().ref('/users/' + uid);
    // do a single update here vs separate child updates?
    userDataRef.child('username').set(username);
    userDataRef.child('email').set(email);
    userDataRef.child('profile_picture').set(photoURL);
}

/**
 * Insert unregistered devices HTML
 */
function insertUnregisteredDevicesHTML(sectionElement) {

  var html =
'<div class="content-item mdl-cell mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">' +

  '<div class="mdl-card mdl-shadow--8dp mdl-cell--12-col xtheme-c5">' +

    '<div class="mdl-card__title xtheme-c4">' +
      '<h4 class="mdl-card__title-text">Unregistered Devices</h4>' +
    '</div>' +

    '<div class="mdl-card__supporting-text xtheme-c5">' +
      '<div>' +
        '<p>All unregistered devices:</p>' +
        '<div class="group-message"></div>' +
        '<br>' +
        '<p>Please send inquiries to <a href="mailto:dtiganalytics@gmail.com"><b>DTIGAnalytics@estee.com</b></a></p>' +
      '</div>' +
      '<button id="unregistered-devices-clear-button" class="unregistered-devices-clear-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
      'Clear all unregistered devices' +
      '</button>' +
      '<button id="unregistered-devices-dismiss-button" class="unregistered-devices-dismiss-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
        'Dismiss' +
      '</button>'+
    '</div>' +
  '</div>' + 
'</div>';


  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var unregisteredDevicesElement = div.firstChild;
  if (componentHandler) {
    componentHandler.upgradeElements(unregisteredDevicesElement.getElementsByClassName('mdl-card'));
  }

 var domUnregisteredDevicesClearButton = unregisteredDevicesElement.getElementsByClassName('unregistered-devices-clear-button')[0];
 var domUnregisteredDevicesDismissButton = unregisteredDevicesElement.getElementsByClassName('unregistered-devices-dismiss-button')[0];

  // Bind buttons.
  domUnregisteredDevicesDismissButton.onclick = function() {
    dropLastBreadcrumb();
    gotoLastBreadcrumb();
  };

  domUnregisteredDevicesClearButton.disabled = false;
  domUnregisteredDevicesClearButton.addEventListener('click', function() {
	  domUnregisteredDevicesClearButton.disabled = true;
	  console.log('clear unregistered devices');
          firebase.database().ref('/unregistered-devices').remove();
  });

  var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
  containerElement.insertBefore(unregisteredDevicesElement, containerElement.firstChild);

  var unregisteredDevicesRef = firebase.database().ref('/unregistered-devices');

  unregisteredDevicesRef.on('value', function(snapshot) {
	  //	  var text = JSONStringify(snapshot.val());
	  var text = "";
	  for (var k in snapshot.val()) {
	      //	      text += '<div class="unregistered-device">' + k + '</div>';
	      text += k + '\n'; // keep it simple
	  }
          if (text.length < 1) {
	      text = '(No unregistered devices logged at this time)';
	  }
	  containerElement.getElementsByClassName('group-message')[0].innerText = text;
      });

}

/**
 * Insert user profile
 */
function insertUserProfileHTML(sectionElement) {

  var html =

'<div class="user-profile-container content-item mdl-cell mdl-cell--12-col mdl-card mdl-cell--12-col mdl-shadow--8dp xtheme-c5">' +

      //    '<div class="mdl-card mdl-cell--12-col mdl-shadow--8dp xtheme-c5">' +

    '<div class="mdl-card__title xtheme-c4">' +
      '<h4 class="mdl-card__title-text"></h4>' +
      '<div id="user-profile-avatar" class="user-profile-avatar avatar"></div>' +
      '<div id="user-profile-name" class="user-profile-name user-profile-header-data"></div>' +
      '<div id="user-profile-email" class="user-profile-email user-profile-header-data"></div>' +
      '<div id="user-profile-photourl" class="user-profile-photourl user-profile-header-data"></div>' +
    '</div>' +

    '<div class="mdl-card__supporting-text theme-c5">' +

      '<div class="xtheme-c5">' +
        '<p>Profile information:</p>' +
        '<ul>' +
          '<li>Display name:  <span class="up-dn1 user-profile-data"></span></li>' +
          '<li>Email address:  <span class="up-ea1 user-profile-data"></span></li>' +
          '<li>Profile pic URL:  <span class="up-ppu1 user-profile-data"></span></li>' +
          '<li>View groups:  <span class="up-vt1 user-profile-data"></span></li>' +
        '</ul>' +
      '</div>' +

        '<form class="profile-xcommand-form" action="#">' +
          '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
            '<input id="profile-xcommand" class="mdl-textfield__input profile-xcommand" type="text" xplaceholder="">' +
            '<label class="mdl-textfield__label" for="profile-xcommand">Xcommand</label>' +
            '<button hidden type="submit">submit</button>' +
          '</div>' +
        '</form>' +
  
      '<div class="theme-section xtheme-c5">' +

        '<h4>Color Theme</h4>' +

        '<div class="theme-example-container">' +
          '<div class="xtheme-c1 theme-example-item">COLOR 1</div>' +
          '<div class="xtheme-c2 theme-example-item">COLOR 2</div>' +
          '<div class="xtheme-c3 theme-example-item">COLOR 3</div>' +
          '<div class="xtheme-c4 theme-example-item">COLOR 4</div>' +
          '<div class="xtheme-c5 theme-example-item">COLOR 5</div>' +
          '<div class="xtheme-c6 theme-example-item">COLOR 6</div>' +
        '</div>' +

        '<div id="sample-themes-section">' +

        '<h6>Sample Themes</h6>' +

        '<div class="sample-theme-line">DTIG<span class="sample-theme">black/white,black/#fff,#000/#333,#fff/#000,#fff/#000,black/white</span></div>' +
        '<div class="sample-theme-line">Mehmet<span class="sample-theme">black/white,black/#fff,#000/#333,#fff/#000,#fff/#000,black/white</span></div>' +
        '<div class="sample-theme-line">Ophelia<span class="sample-theme">black/white,black/#fff,#000/#333,#fff/#000,#fff/#000,black/white</span></div>' +
        '<div class="sample-theme-line">GSD<span class="sample-theme">black/white,black/#fff,#000/#333,#fff/#000,#fff/#000,black/white</span></div>' +
        '<div class="sample-theme-line">Blue<span class="sample-theme">#074b83/white, #0c87eb/white, #4daaf6/black, #0c87eb/white, #a6d4fa/black, #f2f9fe/black</span></div>' +
        '<div class="sample-theme-line">White<span class="sample-theme">white/black, white/black, white/black, white/black, white/black, white/black</span></div>' +
        '<div class="sample-theme-line">Black<span class="sample-theme">#000/#fff,#333/#ccc,#666/#000,#999/#000,#666/#fff,#fff/#000</span></div>' +
        '<div class="sample-theme-line">Gray<span class="sample-theme">#555/white,#777/white,#999/black,#aaa/white,#ccc/black,#fff/black</span></div>' +
        '<div class="sample-theme-line">warm<span class="sample-theme">#DB9065/#A4031F, #F2A359/#A4031F, #240B36/#240B36, #F2A359/#A4031F, #F2DC5D/#240B36, #A4031F/#240B36</span></div>' +
        '<div class="sample-theme-line">Raspberry<span class="sample-theme">#73503C/#F2D8A7, #A68572/#F2D8A7, #591E23/#000, #C2A877/#F2D8A7, #F2D8A7/#73503C, #D94E67/#F2D8A7</span></div>' +
        '<div class="sample-theme-line">Dark Sunset<span class="sample-theme">#160A47/#fff, #60047A/#fff, #9C0F5F/#000,  #60047A/#fff, #F2671F/#000, #C91B26/#000</span></div>' +
        '<div class="sample-theme-line">Plum<span class="sample-theme">#632A50, #745296, #8B9EB7/black, #745296, #91F5AD/black, #C2E812/white</span></div>' +
        '<div class="sample-theme-line">Campfire<span class="sample-theme">#8C4646/#000, #D96459/#000, #F2AE72/#000,  #D96459/#000, #F2E394/#000, #588C73/#fff</span></div>' +
        '<div class="sample-theme-line">Papua<span class="sample-theme">#F0A830/#000, #F07818/#000, #5E412F/#000, #F07818/#000, #FCEBB6/#000, #78C0A8/#fff</span></div>' +
        '<div class="sample-theme-line">Our Little Projects<span class="sample-theme">#354458/#fff, #3A9AD9/#000, #29ABA4/#000, #3A9AD9/#000, #E9E0D6/#000, #EB7260/#fff</span></div>' +
        '<div class="sample-theme-line">Vintage Romantic<span class="sample-theme">#260126, #59323C/#fff, #8C6954/#000, #59323C/#fff, #BFAF80/#000, #F2EEB3/#000</span></div>' +
        '<div class="sample-theme-line">Color Traffic<span class="sample-theme">#0F5959/#000, #17A697/#000, #638CA6/#000, #17A697/#000, #8FD4D9/#000, #D93240/#fff</span></div>' +
        '<div class="sample-theme-line">Barca<span class="sample-theme">#333333/#fff, #424242/#fff, #00CCD6/#000, #424242/#fff, #EFEFEF/#000, #FFD900/#000</span></div>' +
        '<div class="sample-theme-line">Magme<span class="sample-theme">#6C8672/#fff, #C4D4AF/#fff, #68A8AD/#000, #C4D4AF/#fffm #737495/#000, #F17D80/#000</span></div>' +
        '<div class="sample-theme-line">RSCollab<span class="sample-theme">#293E6A/#fff, #3B5998/#fff, #74AAF7/#000, #3B5998/#fff, #77BA9B/#000, #B6A754/#000</span></div>' +
        '<div class="sample-theme-line">Osaki<span class="sample-theme">#333300/#FF9700, #999900/#660066, #CC6600/#000, #999900/#660066, #FF9700/#660066, #660066/#FF9700</span></div>' +
        '<div hidden class="sample-theme-line">Alex<span class="sample-theme">#466675/#94FFFC, #6A8D9D/#94FFFC, #94FFFC/#466675, #6A8D9D/#94FFFC, #CCCCCC/#466675, #FAC8BF/#466675</span></div>' +
        '<div class="sample-theme-line">Scott<span class="sample-theme">#67727A/#F5F5F5, #6991AC/#F5F5F5, #C3D7DF/#67727A, #6991AC/#F5F5F5, #F5F5F5/#67727A, #D75C37/#67727A</span></div>' +
        '<div class="sample-theme-line">Made<span class="sample-theme">#021542/#AAAAAA, #0241E2/#AAAAAA, #000000/#021542, #0241E2/#AAAAAA, #AAAAAA/#021542, #FF534B/#fff</span></div>' +
        '<div class="sample-theme-line">el<span class="sample-theme">#2B2301/#E2D893, #A79E65/#E2D893, #5F9DA1/#2B2301, #A79E65/#E2D893, #E2D893/#2B2301, #73AFB6/#2B2301</span></div>' +
        '<div class="sample-theme-line">enso<span class="sample-theme">#3F0082/#F7F960, #FF66CC/#F7F960, #000000/#3F0082, #FF66CC/#F7F960, #DFE0DB/#3F0082, #F7F960/#3F0082</span></div>' +
        '<div class="sample-theme-line">blah<span class="sample-theme">#E2F2D5/#66a, #F9FBBA/#699, #D4EDF4/#339, #F9FBBA/#699, #EBEBEB/#339, #F6C2C2/#f66</span></div>' +
        '<div class="sample-theme-line">Autumn 1<span class="sample-theme">#6D7696, #59484F, #455C4F, #CC5543, #EDB579, #DBE6AF</span></div>' +
        '<div class="sample-theme-line">Autumn 2<span class="sample-theme">#D1CEC5, #997C67, #755330, #B0703C, #DBA72E, #E3CCA1</span></div>' +
        '<div class="sample-theme-line">Autumn Spice<span class="sample-theme">#EBE3D9, #E0CDAF, #C2BC74, #6E615A, #807E82, #B8B8B8</span></div>' +
        '<div class="sample-theme-line">Tomato<span class="sample-theme">#4A572C/#D6CFC9, #C2C290/#E34819, #D6CFC9/#000, #E34819/#4A572C,  #E87F60/#4A572C, #803018/#D6CFC9</span></div>' +
        '<div class="sample-theme-line">Canyon<span class="sample-theme">#6E352C, #CF5230, #F59A44, #E3C598, #8A6E64, #6E612F</span></div>' +
        '<div class="sample-theme-line">Color Basket<span class="sample-theme">#E6E2DF, #B2E3E8, #CCB8D1, #966C5D, #452B29, #8F8172</span></div>' +
        '<div class="sample-theme-line">Color Fresh<span class="sample-theme">#D9D9D9, #F5B3B4, #D15656, #94353C, #47322D, #996B42</span></div>' +
        '<div class="sample-theme-line">Mineral Tones<span class="sample-theme">#694364, #B58BAB, #E3D1E2, #E8E4E1, #C4C4C0, #CCA772</span></div>' +
        '<div class="sample-theme-line">Chili<span class="sample-theme">#5C0811/#D94330, #D94330/#283811,  #66492F/#000, #B8997F/#66492F, #A68887/#283811, #283811/#fff</span></div>' +
        '<div class="sample-theme-line">Spiced<span class="sample-theme">#472C25/#D4C2B2, #91371B/#EB712F, #EB712F/#000, #FADDAF/#472C25, #F7EFD4/#472C25, #D4C2B2/#472C25</span></div>' +

        '<br><p><br>' +

        '<p>The color theme consists of 6 colors.  Each color has a corresponding text color.  The color theme string is composed of 6 #Color/#Text-Color color specifications separated by a comma.  When parsing new input, any missing values cause the previous value for that color to be used.  Many web themes have 4 or 5 colors -- in the themes below, color 2 is often repeated for color 4 -- but they CAN be different.  Mouse over the theme names and click on a theme name to put the theme color string into the command box where it can be edited.  Press return to save the theme to your profile.</p>'+

        '<br><p>Go here for palettes:  <a href="https://coolors.co/app" target="_">https://coolors.co/</a></p>' +
        '<br><p>Pinterest? <a href="https://www.pinterest.com/search/pins/?q=Color%20balance%20pallets&rs=guide" target="_">https://www.pinterest.com/search/pins/?q=Color%20balance%20pallets&rs=guide</a></p>' +

      '</div>'+

    '</div>' +

    '<p>Please send inquiries to <a href="mailto:DTIGAnalytics@gmail.com"><b>DTIGAnalytics@gmail.com</b></a></p>' +

    '<button id="user-profile-dismiss-button" class="user-profile-dismiss-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
      'Dismiss' +
    '</button>' +
    '<button id="user-sign-out-button" class="user-sign-out-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
      'Sign Out' +
    '</button>' +

    '<div>'+
      '<div id="xcommand-output" class="xcommand-output xtheme-c5">' +
      '</div>' +
    '</div>'+


      //  '</div>'+

'</div>';


  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var userProfileElement = div.firstChild;
  if (componentHandler) {
      componentHandler.upgradeElements(userProfileElement.getElementsByClassName('mdl-textfield'));
      //      componentHandler.upgradeElements(userProfileElement.getElementsByClassName('mdl-card'));
  }  

  var domUserProfileDismissButton = userProfileElement.getElementsByClassName('user-profile-dismiss-button')[0];
  var domUserSignOutButton = userProfileElement.getElementsByClassName('user-sign-out-button')[0];

  var domThemeRadioButtons = userProfileElement.getElementsByClassName('radio-theme');
  for (var i = 0, l = domThemeRadioButtons.length; i < l; i++) {
      domThemeRadioButtons[i].onclick = themeRadioClicked;
  }

  var domProfileXcommand = userProfileElement.getElementsByClassName('profile-xcommand-form')[0];
  var domProfileXcommandInput = userProfileElement.getElementsByClassName('profile-xcommand')[0];
  var domProfileXcommandOutput = userProfileElement.getElementsByClassName('xcommand-output')[0];
  domProfileXcommandOutput.style.display = 'none';


  //  domProfileXcommandOutput.removeAttribute('hidden');

  domProfileXcommand.onsubmit = function(e) {

      var xcommand = domProfileXcommandInput.value || '';
      xcommand = xcommand.trim();
      var words = xcommand.split(' ');

      if (xcommand.includes('dismiss')) {
	  domProfileXcommandInput.value = null;
	  gotoLastBreadcrumb();
      } else if (xcommand.includes('help') || words[0] == '?') {
	  domProfileXcommandInput.value = null;
	  showSection(domHelpSection, domShowHelpMenuButton);
      } else if (xcommand.includes('settheme')) {
	  domProfileXcommandInput.value = null;
	  xcommand = xcommand.replace('settheme','');
          parseAndSaveTheme(xcommand);
      } else if (xcommand.includes('testtheme')) {
	  xcommand = xcommand.replace('testtheme','');
	  parseCTS(xcommand);
      } else if (words[0] == 'dashboards') {
	  domProfileXcommandInput.value = null;
	  var tag = words[1] || 'all';
          doXCommandDashboards(tag, domProfileXcommandOutput);
      } else if (words[0] == 'users') {
	  domProfileXcommandInput.value = null;
	  var tag = words[1] || '';
          doXCommandUsers(tag, domProfileXcommandOutput);
      } else if (words[0] == 'user') {
	  domProfileXcommandInput.value = null;
          doXCommandUser(words, domProfileXcommandOutput);
      } else if (words[0] == 'cls' || words[0] == 'clear' ) {
	  domProfileXcommandInput.value = null;
          domProfileXcommandOutput.innerHTML = '';
      } else if (words[0] == 'unregistered' ) {
	  domProfileXcommandInput.value = null;
          domProfileXcommandOutput.innerHTML = '';
	  showSection(domUnregisteredDevicesSection, domShowUnregisteredDevicesMenuButton);
      } else if (words[0] == 'adddash' && words.length == 1) {
	  //	  domAddGroupButton.disabled = true;
	  domTitleInput.value = '';
	  domGroupInput.value = '';
	  domMessageInput.value = '';
	  domTagsInput.value = '';
	  showSection(domAddGroupContainer);
	  domProfileXcommandInput.value = null;
      } else {
	  domProfileXcommandInput.value = null;
	  var myDashboardModeRef = firebase.database().ref('/users/'+currentUser.uid+'/dashboardMode');
	  if (xcommand.length > 0) {
	      myDashboardModeRef.set(xcommand);
	  } else {
	      myDashboardModeRef.remove();
	  }
	  configureAppForMode(xcommand);
          domProfileXcommandOutput.innerHTML = '';
      }

  }

  function parseAndSaveTheme(themeString) {
      var myDashboardThemeStringRef = firebase.database().ref('/users/'+currentUser.uid+'/dashboardThemeString');
      console.log('parse and save theme=['+themeString+']');
      parseCTS(themeString);
      if (themeString.length > 0) {
	  myDashboardThemeStringRef.set(themeString);
      } else {
	  myDashboardThemeStringRef.remove();
      }
  }

  // Bind buttons.
  domUserProfileDismissButton.onclick = function() {
    dropLastBreadcrumb();
    gotoLastBreadcrumb(); // 	      domMyGroupsMenuButton.onclick();  // launch with GROUPS
  };

  domUserSignOutButton.addEventListener('click', function() {
    doSignOut();
  });

  var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
  containerElement.insertBefore(userProfileElement, containerElement.firstChild);

  //domUserProfileName sectionElement.getElementsByClassName('content-item-container')[0];
  domUserProfileAvatar = document.getElementById('user-profile-avatar');
  domUserProfileName = document.getElementById('user-profile-name');
  domUserProfileEmail = document.getElementById('user-profile-email');
  domUserProfilePhotoURL = document.getElementById('user-profile-photourl');

  //  '<div class="sample-theme-line">Color Fresh<span class="sample-theme">#D9D9D9, #F5B3B4, #D15656, #94353C, #47322D, #996B42</span></div>' +
  var domSampleThemesElements = userProfileElement.getElementsByClassName('sample-theme-line');
  [].forEach.call(domSampleThemesElements, function(e) {
	  var sampleThemeString = e.getElementsByClassName('sample-theme')[0];
	  //	  var cts = e.innerText;
	  var cts = sampleThemeString.innerText;
	  e.onclick = function() {
	      parseCTS(cts);
	      domProfileXcommandInput.focus();
	      domProfileXcommandInput.value = 'settheme ' + cts;
	  }
	  e.onmouseover = function() {
	      //	      parseCTS(cts);
	      //	      domProfileXcommandInput.focus();
	      //	      domProfileXcommandInput.value = cts;
	  }
	  e.onmouseleave = function() {
	      //              sampleThemeString.style.color='grey';
	  }
  })

}

/**
 * Parse color theme string
 */
function parseCTS(cts) {
    //  console.log('parsing cts=['+cts+']');
    for (var i1=0, c1=cts.split(','), l1=c1.length; i1<l1; i1++) {
	var s1 = c1[i1];
        if (s1.length > 0) {
	    //  console.log('spitting c1 i1=['+i1+'] = ['+c1[i1]+']');
	    for (var i2=0, c2=s1.split('/'), l2=c2.length; i2<l2; i2++) {
		var s2=c2[i2];
		if (s2.length > 0) {
		    //.xtheme-c1 {color:#000 !important; background-color:#b1b8e3 !important}
		    var csss = '.xtheme-c'+(i1+1);
                    var item = (i2==0) ? 'background-color' : 'color';
		    var prev = CCSStylesheetRuleStyle('main', csss, item);
		    //  console.log('c2 i1=['+i1+']  i2=['+i2+'] = ['+c2[i2]+'], prev=['+prev+']');
		    CCSStylesheetRuleStyle('main', csss, item, c2[i2]);
		}
	    }

	}
    }
}

function doXCommandUser(words, domElement) {
    console.log('doXCommandUser!  words['+JSONStringify(words)+'] domElement=['+domElement+']');
    var user = words[1];
    if (words.length > 1 && words[2] == 'views') {
	console.log('doXCommandUser!  yes words['+JSONStringify(words)+'] domElement=['+domElement+']');
	var tags = '';
	if (words.length > 2) {
	    for (var i=3; i<words.length; i++) {
		tags = tags + ' ' + words[i];
	    }
	    tags = tags.trim();
	}
	console.log('tags=['+tags+']');
	var userRef = firebase.database().ref('/users/'+user);
	//	if (userRef) {
	    userRef.child('/viewGroupTags').set(tags);
	    //	} else {
	    //	    console.log('asdfasdfasfasdfasdfsadfasdfsa asdf asd fs adf asdf asdf asdf');
	    //	}
    } else {
	console.log('doXCommandUser!  wc[='+words.length+']  words[2]=['+words[2]+']  nononono words['+JSONStringify(words)+'] domElement=['+domElement+']');
    }

}

function doXCommandUsers(tag, domElement) {
    domElement.style.display =  'inline-block';
    //    domElement.innerText = 'Loading all users ...';
    firebase.database().ref('/users/').once('value').then(function(snapshot) {
	    domElement.innerText = '';
	    var user = {};
	    var allUsers = {};
	    var o = '';
	    for (var userId in snapshot.val()) {
		user = snapshot.val()[userId];
		o = user['viewGroupTags'] || '';
		if (o.includes(tag)) {
		    allUsers[userId] = user;
		}
	    }
	    //	    if (allUsers.length > 0) {  //  don't show header unless matches found?
		createUsersListTable(domElement,'xusersx', allUsers);
		//	    }
	}, function(error) {
	    // The callback failed.
	    //	    domElement.innerText = 'Loading all users [' + error + '] ...';
      	    console.error(error);
	});

}

function createUsersListTable(domElement, uniqueId, allUsers) {

    console.log('createGroupListTable');
    
    //    console.log('allDashboards=['+JSONStringify(allDashboards)+']');
    //    console.log('allDevices=['+JSONStringify(allDevices)+']');
    //    console.log('allGroupDevices=['+JSONStringify(allGroupDevices)+']');

    //	    domProfileXcommandOutput.innerHTML = '<pre>\n' + JSONStringify(allDashboards) + '\n</pre>';
    
    var div = document.createElement('div');
    var html = '<div id="uxln' + uniqueId + '"></div>' +
	'<div id="users-list-table-'+uniqueId+'" class="users-list-table-'+uniqueId+'">';
    
    div.innerHTML = html;
    domElement.appendChild(div);

    var usersListTableElement = div.getElementsByClassName('users-list-table-'+uniqueId)[0];
    
    var dashboard = new google.visualization.Dashboard(usersListTableElement);
    
    var options = {
      title: 'xxUtilization',
      is3D: 'true',
      width: 1000,
      height: 600
    };

    var categoryPicker = new google.visualization.ControlWrapper({
      controlType: 'CategoryFilter',
      containerId: 'uxln' + uniqueId,
      options: {
		filterColumnLabel: 'tags',
        ui: {
          caption: 'Tags',
          sortValues: true,
          allowNone: true,
          allowMultiple: true,
          allowTyping: true
        }

      }
    });

    var cssClassNames = {
	'headerRow': 'italic-darkblue-font bold-font',
	'tableRow': '',
	'oddTableRow': 'beige-background',
	'selectedTableRow': 'orange-background grey-background',
	'hoverTableRow': '',
	'headerCell': 'gold-border',
	'tableCell': '',
	'rowNumberCell': 'underline-blue-font'
    };

    //  The Table visualization doesn't use any row properties.  You have to set the style property for each cell in the row.
    var tableOptions = {
	allowHtml: 'true', // case sensitive
	alternatingRowStyle: 'false',
	width: '100%',
	'cssClassNames': cssClassNames,
	sortColumn: 0,
	sortAscending: true,
	sort: 'enable'
    };

    var table = new google.visualization.ChartWrapper({
      'chartType': 'Table',
      'containerId': 'users-list-table-'+uniqueId,
      'options': tableOptions,
      'view': {
	  'columns': [0, 1, 2, 3, 4]
      }
    });

    //    table.setOptions(options); // gets set, but table cells ignore options

    //    data.setProperties(1,1,{'allowHTML':'true','style':'font-style:bold; font-size:22px; color:"green"; background-color:"blue";'});
    //    data.setCell(5, 3, 0, "bb", {'className': 'bold-green-font large-font right-text'});
    //    data.setCell(6, 3, undefined, undefined, {'style': 'background-color: red;'});

    //  google tables/charts only does a "row" select -- no way to get column info

    var rowToUserId = {};
    
    google.visualization.events.addListener(table, 'select', function() {
	     
       var chart = table.getChart();
       var gs = chart.getSelection()[0]; // only first?
       if (gs != null) {
	   var row = gs.row;
	   var userId = rowToUserId[row];
	   console.log('groups list table -- selected row=['+row+'] = userId='+userId+']');
	   var domProfileXcommandInput = domUserProfileSection.getElementsByClassName('profile-xcommand')[0];
	   domProfileXcommandInput.value = 'user '+userId+' views ';
	   domProfileXcommandInput.focus();
       }
	 });

    dashboard.bind([categoryPicker], [table]);

    var row = 0;
    var data = new google.visualization.DataTable();

    data.addColumn('number',  '#');            //  0
    data.addColumn('string',  'Username');     //  1
    data.addColumn('string',  'Email');        //  2
    data.addColumn('string',  'Last Online');  //  3
    data.addColumn('string',  'tags');         //  4

    for (var userId in allUsers) {

       	rowToUserId[row] = userId;

	data.addRows(1);

	var o = null;
	var oo = null;
	
	//  0 = Order (= row?)
	o = row;
	var oo = row;
	//	oo = (o == '') ? 999 : o;  // value used, but not shown ... make no order = last priority
	data.setCell(row, 0, oo, o, {});
	
	//  1 = username
	o = json_value(allUsers, userId+'.username') || 'unknown';
	data.setCell(row, 1, o, undefined, {});
	
	//  2 = email
	o = json_value(allUsers, userId+'.email') || 'unknown';
	data.setCell(row, 2, o, undefined, {});
	
	//  3 = lastonline
	o = json_value(allUsers, userId+'.lastOnline') || 'never';
	if (o != 'never') {
	    var dh = diff_hours( (new Date()).getTime(), o);
	    var dhh = Math.round( (dh/60)* 100) / 100;
	    o = formatDate(o/1000) + '   (' + dh + ' minutes  or '+ dhh+' hours ago)';
	}
	data.setCell(row, 3, o, undefined, {});
	if (o == 'never') {
	    data.setCell(row, 3, undefined, undefined, {'style': 'color: #FF0000;'});
	} else {
	    data.setCell(row, 3, undefined, undefined, {'style': 'color: #00DD00;'});
	}

	//  4 = tags
	o = json_value(allUsers, userId+'.viewGroupTags') || '';
	data.setCell(row, 4, o, undefined, {});

	row = row +1;

    }

    drawDashboard(dashboard, data);

}

function doXCommandDashboards(tag, domElement) {

    domElement.style.display =  'inline-block';
    domElement.innerText = 'Loading all devices ...';
    firebase.database().ref('/devices/').once('value').then(function(snapshot) {
	    var allDevices = snapshot.val();
	    domElement.innerText = 'Loading device lists for all groups ... ';
	    firebase.database().ref('/group/').once('value').then(function(snapshot) {
		    var allGroupDevices = snapshot.val();
		    domElement.innerText = 'Loading all groups ...';
		    //		    firebase.database().ref('/dashboards/').once('value').then(function(snapshot) {
		    var groupRef = firebase.database().ref('/dashboards/').orderByChild('/tags/'+tag).equalTo(true);
		    groupRef.once('value').then(function(snapshot) {
			    domElement.innerText = '';
			    var allDashboards = snapshot.val();
			    createGroupListTable(domElement,'xgroupsx', allDashboards, allGroupDevices, allDevices);
			});
		});
	});

}

function createGroupListTable(domElement, uniqueId, allDashboards, allGroupDevices, allDevices) {
    
    //    console.log('allDashboards=['+JSONStringify(allDashboards)+']');
    //    console.log('allDevices=['+JSONStringify(allDevices)+']');
    //    console.log('allGroupDevices=['+JSONStringify(allGroupDevices)+']');

    //	    domProfileXcommandOutput.innerHTML = '<pre>\n' + JSONStringify(allDashboards) + '\n</pre>';
    
    var div = document.createElement('div');
    var html = '<div id="grln' + uniqueId + '"></div>' +
	'<div id="group-list-table-'+uniqueId+'" class="group-list-table-'+uniqueId+'">';
    
    div.innerHTML = html;
    domElement.appendChild(div);

    //    var groupListTableElement = div.firstChild;
    var groupListTableElement = div.getElementsByClassName('group-list-table-'+uniqueId)[0];
    
    var dashboard = new google.visualization.Dashboard(groupListTableElement);
    
    var options = {
      title: 'xxUtilization',
      is3D: 'true',
      width: 1000,
      height: 600
    };

    var categoryPicker = new google.visualization.ControlWrapper({
      controlType: 'CategoryFilter',
      containerId: 'grln' + uniqueId,
      options: {
		filterColumnLabel: 'Group',
        ui: {
          caption: 'Group',
          sortValues: true,
          allowNone: true,
          allowMultiple: true,
          allowTyping: true
        }

      }
    });

    var cssClassNames = {
	'headerRow': 'italic-darkblue-font bold-font',
	'tableRow': '',
	'oddTableRow': 'beige-background',
	'selectedTableRow': 'orange-background grey-background',
	'hoverTableRow': '',
	'headerCell': 'gold-border',
	'tableCell': '',
	'rowNumberCell': 'underline-blue-font'
    };

    //  The Table visualization doesn't use any row properties.  You have to set the style property for each cell in the row.
    var tableOptions = {
	allowHtml: 'true', // case sensitive
	alternatingRowStyle: 'false',
	width: '100%',
	'cssClassNames': cssClassNames,
	sortColumn: 0,
	sortAscending: true,
	sort: 'enable'
    };

    var table = new google.visualization.ChartWrapper({
      'chartType': 'Table',
      'containerId': 'group-list-table-'+uniqueId,
      'options': tableOptions,
      'view': {
	  'columns': [0, 1, 2, 3, 4, 5, 6, 7]
      }
    });

    //    table.setOptions(options); // gets set, but table cells ignore options

    //    data.setProperties(1,1,{'allowHTML':'true','style':'font-style:bold; font-size:22px; color:"green"; background-color:"blue";'});
    //    data.setCell(5, 3, 0, "bb", {'className': 'bold-green-font large-font right-text'});
    //    data.setCell(6, 3, undefined, undefined, {'style': 'background-color: red;'});

    //  google tables/charts only does a "row" select -- no way to get column info

    var rowToGroupId = {};
    
    google.visualization.events.addListener(table, 'select', function() {
	     
       var chart = table.getChart();
       var gs = chart.getSelection()[0]; // only first?
       if (gs != null) {
	   var row = gs.row;
	   var groupId = rowToGroupId[row];
	   //	   console.log('groups list table -- selected row=['+row+'] = groupId='+groupId+']');

	   var groupUniqueTag = '-' + 'user' + groupId;
	   var groupElement = domUserGroupsSection.getElementsByClassName('group' + groupUniqueTag)[0];
	   //	   console.log('group=['+group+'] grid=['+groupId+']  groupElement['+groupElement+']');
	   if (!groupElement) {
	       //	       console.log('dashboard DOES NOT EXIST! -- fetching!');
	       var groupRef = firebase.database().ref('/dashboards/').orderByKey().equalTo(groupId);
	       fetchGroup(groupRef, domUserGroupsSection, 'user');
	       listeningFirebaseRefs.push(groupRef);
	   } else {
	       //	       console.log('dashboard already exists, moving to top ...!');
	       var containerElement = domUserGroupsSection.getElementsByClassName('content-item-container')[0];
	       containerElement.insertBefore(groupElement, containerElement.firstChild);
	   }
	   //	   showSection(domUserGroupsSection, domMyGroupsMenuButton);
       }
	 });

    dashboard.bind([categoryPicker], [table]);

    var row = 0;
    var data = new google.visualization.DataTable();

    // title, group, flagCount, deviceCount
    data.addColumn('number',  '#');         //  0
    data.addColumn('string',  'Title');     //  1
    data.addColumn('string',  'Group');     //  2
    data.addColumn('number',  'flags');     //  3
    data.addColumn('number',  'devices');   //  4
    data.addColumn('number',  'totADNI');   //  5
    data.addColumn('number',  'totUses');   //  6
    data.addColumn('string',  'Tags');      //  7

    //    console.log('allDashboards=['+JSONStringify(allDashboards)+']');

    var totals = {};
    //  generate the totals ...

    for (var group in allGroupDevices) {

	var groupTotals = json_value(totals, group) || {};
	var devices = json_value(allGroupDevices, group+'.devices') || {};

	var totdevices = 0;
	//	console.log('doing group=['+group+']');

	for (var device in devices) {

	    totdevices++;

	    var val = 0;
	    var totval = val;
	    var key = '';

	    val = json_value(allDevices, device+'.adni') || 0;
	    key = 'totadni';
	    totval  = json_value(groupTotals, key) || 0;
            groupTotals[key] = totval + val;

	    val = json_value(allDevices, device+'.uses') || 0;
	    key = 'totuses';
	    totval = json_value(groupTotals, key) || 0;
            groupTotals[key] = totval + val;


	}

	groupTotals['totdevices'] = totdevices;
	totals[group] = groupTotals;

    }

    for (var dashboardId in allDashboards) {

        rowToGroupId[row] = dashboardId;

	var group = json_value(allDashboards, dashboardId+'.group') || '';

	//	console.log('looping row='+row+' dashboardId=['+dashboardId+'] --> group=['+group+']');

	data.addRows(1);

	var o = null;
	var oo = null;
	
	//  0 = Order (= row?)
	o = row;
	var oo = row;
	//	oo = (o == '') ? 999 : o;  // value used, but not shown ... make no order = last priority
	data.setCell(row, 0, oo, o, {});
	
	//  1 = Title
	o = json_value(allDashboards, dashboardId+'.title') || 'unknown';
	data.setCell(row, 1, o, undefined, {});
	
	//  2 = Group
	o = json_value(allDashboards, dashboardId+'.group') || 'unknown';
	data.setCell(row, 2, o, undefined, {});
	
	//  3 = flags
	o = json_value(allDashboards, dashboardId+'.flags') || {};
        o = Object.keys(o).length;
	data.setCell(row, 3, o, undefined, {});
	if (0+o > 0) {
	    data.setCell(row, 3, undefined, undefined, {'style': 'color: #FF0000;'});
	} else {
	    data.setCell(row, 3, undefined, undefined, {'style': 'color: #00DD00;'});
	}

	//  4 = Group Device Count
	o = json_value(totals, group+'.totdevices') || '0';
	data.setCell(row, 4, o, undefined, {});

	//  5 = Group ADNI total
	o = json_value(totals, group+'.totadni') || '0';
	data.setCell(row, 5, o, undefined, {});

	//  6 = Group uses  total
	o = json_value(totals, group+'.totuses') || '0';
	data.setCell(row, 6, o, undefined, {});

	//  7 = Group tags
	o = json_value(allDashboards, dashboardId+'.tags')  || {};
        o = Object.keys(o).join(' ');
	data.setCell(row, 7, o, undefined, {});

	row = row +1;

    }

    //    console.log('list data=['+JSONStringify(data)+']');

    drawDashboard(dashboard, data);

}

/**
 * Insert help.
 */
function insertHelpHTML(sectionElement) {

  var html =
'<div class="content-item mdl-cell mdl-grid mdl-grid--no-spacing mdl-cell--12-col">' +

  '<div class="mdl-card mdl-shadow--8dp  mdl-cell--12-col xtheme-c5">' +

    '<div class="mdl-card__title xtheme-c4">' +
      '<h2 class="mdl-card__title-text">Help</h2>' +
    '</div>' +

    '<div class="mdl-card__supporting-text xtheme-c5">' +

      '<div>' +
        '<h4>Overview</h4>' +
          '<p>The <b>DTIG Data Dashboard Device Dashboard</b> provides real-time informaton and control of devices running the DTIG Data Dashboard application.</p>' +
          '<p>Please see the <a target="_" href="/mmrdm.pdf">DTIG Data Dashboard Real-Time Dashboard Manual</a> for detailed usage information.  For further assistance, please email <a href="mailto:DTIGAnalytics@gmail.com"><b>DTIGAnalytics@gmail.com</b></a> or call <b>1 (xxx) aaa-bbbb</b> and select <b>option X</b>.</p>' +
          '<p>' +
        '<h5>Dashboards</h5>' +
          '<p>Information is displayed grouped by dashboard with real-time project status information and application control.</p>' +
          '<ul>'+
          '<div><div class="material-icons">report_problem</div><b>Flag</b> dashboard (shows "red" alert status, use message area to discuss).</div>' +
          '<div><div class="material-icons">chat</div><b>Message</b> area associated to this dashboard panel (ie: to discuss flag or other issues).</div>' +
          '<div><div class="material-icons">assessment</div><b>Display real-time information about devices associated with this dashboard.</b></div>' +
          '<div><div class="material-icons">fullscreen_exit</div>"<b>Close</b>" panel back to panel shade.  Drag/Drop shades/panels to re-order.</div>' +
          '<div><div class="material-icons">fullscreen</div>"<b>Open</b>" shade to show dashboard panel.  Drag/Drop shades/panels to re-order.</div>' +
          '<div class="admin"><div class="material-icons">build</div><b>Configure</b> dashboard and device information/settings (only available to admin).</div>' +
'</ul>' +
        '<h5>Help</h5>' +
          '<p>This section and please see the <a target="_" href="/mmrdm.pdf">DTIG Data Dashboard Real-Time Dashboard Manual</a> for detailed usage information.</p>' +
        '<h5>Avatar</h5>' +
          '<p>User profile information, log out and dashboard commands (Xcommands).' +
          '<p>Xcommands:' +
          '<ul>' +
            '<li>[BLANK] or empty input clears all command settings (ie: disable tooltips)</li>' +
            '<li>tips -- Enable tooltips.</li>' +
            '<li>help -- Show help panel.</li>' +
            '<div class="admin">' +
              '<li>adddash -- Show "add dashboard" panel.</li>' +
              '<li>dashboards [tag] -- Show list of dashboards matching optional "tag" provided.</li>' +
              '<li>users [tag] -- Show list of users matching optional "tag" provided.</li>' +
              '<li>unregistered -- Show list of unregistered devices.</li>' +
            '</div>' +
          '</ul>' +
      '</div>' +

      '<button id="help-dismiss-button" class="help-dismiss-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
         'Dismiss' +
      '</button>' +

    '</div>'+

  '</div>'+

'</div>';

  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var helpElement = div.firstChild;
  if (componentHandler) {
    componentHandler.upgradeElements(helpElement.getElementsByClassName('mdl-card'));
  }

 var domHelpDismissButton = helpElement.getElementsByClassName('help-dismiss-button')[0];

  domHelpDismissButton.onclick = function() {
      dropLastBreadcrumb();
      gotoLastBreadcrumb();
  };

  var containerElement = sectionElement.getElementsByClassName('content-item-container')[0];
  containerElement.insertBefore(helpElement, containerElement.firstChild);

}

/**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic xcommand refresh but not a User status change.
 */

var currentUser;
var currentConnectionRef;
var lastOnlineRef;
var userDeviceDataRef;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {

    // We ignore xcommand refresh events.
    if (user && currentUser && currentUser.uid === user.uid) {
	return;
    }

    // Remove all previously displayed groups.
    //    domTopUserGroupsSection.getElementsByClassName('content-item-container')[0].innerHTML = '';
    //    domRecentGroupsSection.getElementsByClassName('content-item-container')[0].innerHTML = '';
    domUserGroupsSection.getElementsByClassName('content-item-container')[0].innerHTML = '';

    clearInterval(emailAndPasswordCheckTimer);

    // Stop all currently listening Firebase listeners.
    listeningFirebaseRefs.forEach(function(ref) {
	    ref.off();
	});
    listeningFirebaseRefs = [];

    if (!user) {

	// reset / clear some vars
	currentUser = null;
	currentConnectionRef = null;
	lastOnlineRef = null;

	// Display the splash page with sign in
	domSplashPage.style.display = '';
	domSignInButtonsContainer.style.display = '';
	domSignInEmailContainer.style.display = 'none';
	domEmailTextField.value = '';
	domPasswordTextField.value = '';
	emailAndPasswordButtons();
	configureAppForMode(webAppMode);
	return;

    }

    currentUser = {
	uid: user.uid,
	email: user.email,
	username: user.username,
        photoURL: user.photoURL,
    }

    if (!currentUser.username) {
	currentUser.username = currentUser.email;
    }

    if (!currentUser.viewGroupTags) {
	currentUser.viewGroupTags = '';
    }

    // hide the SPA launch page
    domSplashPage.style.display = 'none';

    var uid = currentUser.uid;
    var email = currentUser.email;
    var username = currentUser.username;
    var photoURL = currentUser.photoURL;


    if (!username) {
        currentUser.username = user.email || 'anonymous'; //  There should really always be an email available
	username = currentUser.username;
    }

    if (!photoURL) {
	currentUser.photoURL =  '/images/profile_placeholder.png';
        photoURL = currentUser.photoURL;
    }

    writeUserData(uid, username, email, photoURL);

    // Set the user's profile pic and name.
    domUserPic.style.backgroundImage = 'url(' + currentUser.photoURL + ')';
    domUsername.textContent = username;

    domUserProfileAvatar.style.backgroundImage = 'url(' + currentUser.photoURL + ')';
    domUserProfileName.textContent = username;
    domUserProfileEmail.textContent = email;

    var domElement = null;
    domElement = domUserProfileSection.getElementsByClassName('up-dn1')[0];
    domElement.innerText = username;

    domElement = domUserProfileSection.getElementsByClassName('up-ea1')[0];
    domElement.textContent = email;

    domElement = domUserProfileSection.getElementsByClassName('up-ppu1')[0];
    domElement.textContent = photoURL;

    //  Manually handle signed-in status
    var connectedRef = firebase.database().ref('.info/connected');
    var myConnectionsRef = firebase.database().ref('/users/' + uid + '/connections');
    lastOnlineRef = firebase.database().ref('/users/'+ uid + '/lastOnline');
    currentConnectionRef = myConnectionsRef.push(firebase.database.ServerValue.TIMESTAMP);
    currentConnectionRef.onDisconnect().remove();

    firebase.database().ref('/users/' + uid + '/lastSignInSessionId').set(currentConnectionRef.key);

    var userRef = firebase.database().ref('/users/'+uid);

    userRef.once('value').then(function(snapshot) {
	    var cts = snapshot.val().dashboardThemeString;
	    if (cts) {
		//		console.log('CTS=['+cts+']');
		parseCTS(cts);
	    } else {
		//		console.log('CTS=['+cts+'] empty? so setting default theme');
		//		parseCTS('#074b83/white, #0c87eb/white, #4daaf6/black, #0c87eb/white, #a6d4fa/black, #f2f9fe/black'); // default theme "blue"
		parseCTS('#000/#fff,#333/#ccc,#666/#000,#999/#000,#666/#fff,#fff/#000'); // default theme "black"
	    }
	    
	    configureAppForMode(snapshot.val().dashboardMode);  //  default mode = '' ?
	    
	    currentUser.dashboardDisplayOrder = snapshot.val().dashboardDisplayOrder || '';

	    var viewGroupTags = snapshot.val().viewGroupTags || ''; //  default value?
	    viewGroupTags = viewGroupTags.trim();
	    currentUser.viewGroupTags = viewGroupTags;

	    var domElement = domUserProfileSection.getElementsByClassName('up-vt1')[0];
	    domElement.textContent = currentUser.viewGroupTags;
	    
	    var tags = viewGroupTags.split(' ');
	    [].forEach.call(tags, function(e) {
		    var groupRef = firebase.database().ref('/dashboards/').orderByChild('/tags/'+e).equalTo(true);
		    fetchGroup(groupRef, domUserGroupsSection, 'user');
		    listeningFirebaseRefs.push(groupRef);
		});
	    
	    console.log('current currentUser['+JSONStringify(currentUser)+']');
	    getInitialDeviceInfo();
	    
	});

    userDeviceDataRef = firebase.database().ref('/users/' + uid + '/device-data');

    userDeviceDataRef.once('value').then(function(snapshot) {
	    userDeviceData = snapshot.val() || {};
	    //      console.log(' -- RECEIVED initial USER device info ['+JSONStringify(userDeviceData)+']');
	    //  update each group for devices? TODO:  decide
	});
    
    userDeviceDataRef.on('child_changed', function(snapshot) {
      var deviceName = snapshot.key;
      var group = json_value(deviceInfo, deviceName + '.group');
      userDeviceData[deviceName] = snapshot.val();
      console.log('--- 1 user info for device device[' + deviceName + '] changed, updating all tables for this device in group=[' + group + '] value is[' + JSONStringify(snapshot.val()) + '] deviceInfo['+JSONStringify(deviceInfo)+']');
      if (group) {
	  updateDashboardsForGroup(group);
      } else {
	  console.log('--- 1 no group?');
      }
    });

    userDeviceDataRef.on('child_added', function(snapshot) {
      var deviceName = snapshot.key;
      var group = json_value(deviceInfo, deviceName + '.group');
      console.log('--- 2 user info for device device[' + deviceName + '] changed, updating all tables for this device in group=[' + group + '] value is[' + JSONStringify(snapshot.val()) + '] deviceInfo['+JSONStringify(deviceInfo)+']');
      userDeviceData[deviceName] = snapshot.val();
      if (group) {
	  updateDashboardsForGroup(group);
      } else {
	  console.log('--- 2 no group?');
      }
    });

    //    var msDelay = Math.round(Math.random()*0);
    //    setTimeout(function() { getDeviceInfoOnce(); }, msDelay); // this loads up initial device stats for all devices (which triggers 
  
}

function doSignOut() {

    var domProfileXcommandOutput = domUserProfileSection.getElementsByClassName('xcommand-output')[0];

    var node = domProfileXcommandOutput;
    while (node.hasChildNodes()) {
	node.removeChild(node.lastChild);
    }

    //  Manually handle signed-out status
    //  do this before signing out
    currentConnectionRef.remove();
    lastOnlineRef.set(firebase.database.ServerValue.TIMESTAMP);
    // then sign out
    firebase.auth().signOut();
}


/**
 * Displays the given section element and changes styling of the given button.
 */
function showSection(sectionElement, buttonElement) {

  domUserGroupsSection.style.display = 'none';
    //  domRecentGroupsSection.style.display = 'none';
  //  domTopUserGroupsSection.style.display = 'none';
  domAddGroupContainer.style.display = 'none';
  domHelpSection.style.display = 'none';
  domUnregisteredDevicesSection.style.display = 'none';
  domUserProfileSection.style.display = 'none';

  domRecentMenuButton.classList.remove('is-active');
  domMyGroupsMenuButton.classList.remove('is-active');
  domShowHelpMenuButton.classList.remove('is-active');
  domMyTopGroupsMenuButton.classList.remove('is-active');
  domShowUnregisteredDevicesMenuButton.classList.remove('is-active');

  if (sectionElement) {
    sectionElement.style.display = 'block';
  }
  if (buttonElement) {
    buttonElement.classList.add('is-active');
  }

  breadcrumbs.push(sectionElement, buttonElement)

}

function configureAppForMode(newAppMode) {

    if (newAppMode == null) {
	newAppMode = 'tips';
    }
    //    console.log('configureAppForMode ['+newAppMode+']');
    webAppMode = newAppMode;

    var domThemeSection = document.getElementsByClassName('theme-section')[0];
    if (webAppMode.includes('theme')) {
	console.log('mode theme....');
	domThemeSection.style.display = 'inline-block';
    } else {
	domThemeSection.style.display = 'none';
    }

    if (webAppMode.includes('tips')) {
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-top", "display", "inline");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-bottom", "display", "inline");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-right", "display", "inline");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-left", "display", "inline");
    } else {
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-top", "display", "none");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-bottom", "display", "none");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-right", "display", "none");
	CCSStylesheetRuleStyle('main', ".tooltip .tooltiptext-left", "display", "none");
    }

    if (webAppMode.includes('admin')) {
	setStyleDisplayForCSSClassName(".admin", 'inline');
    } else {
	setStyleDisplayForCSSClassName(".admin", 'none');
    }

    if (webAppMode.includes('superadmin')) {
	setStyleDisplayForCSSClassName(".admin", 'inline');
	setStyleDisplayForCSSClassName(".superadmin", 'inline');
    } else {
	setStyleDisplayForCSSClassName(".superadmin", 'none');
    }

}

function setStyleDisplayForCSSClassName(CSSClassName, displayValue) {
    var x = document.querySelectorAll(CSSClassName);
    for (var i = 0; i < x.length; i++) {
	x[i].style.display = displayValue;
    }
}

function dropLastBreadcrumb() {
    var buttonElement = breadcrumbs.pop();
    var sectionElement = breadcrumbs.pop();
}

function gotoLastBreadcrumb() {
    var buttonElement = breadcrumbs.pop();
    var sectionElement = breadcrumbs.pop();
    if (sectionElement && buttonElement) {
	showSection(sectionElement, buttonElement);
    } else { // if (breadcrumbs.count < 2) {
	if (currentUser.viewGroupTags.length > 0) {
	    showSection(domUserGroupsSection, domMyGroupsMenuButton);
	} else {
	    showSection(domHelpSection, domShowHelpMenuButton);
	}
    }
}

function sendPasswordReset() {
    var email = domEmailTextField.value
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function() {
	    // Password Reset Email Sent!
	    alert('Password Reset Email Sent!');
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode == 'auth/invalid-email') {
		    alert(errorMessage);
		} else if (errorCode == 'auth/user-not-found') {
		    alert(errorMessage);
		}
		console.log(error);
	    });
    // [END sendpasswordemail];
}

function signInUsingEmail() {

    var email = domEmailTextField.value
    var password = domPasswordTextField.value
    if (email.length < 5) {
	alert('Please enter an email address.');
	return;
    }
    if (password.length < 1) {
	alert('Please enter a password.');
	return;
    }
    
    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	    // Handle Errors here.
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    if (errorCode === 'auth/wrong-password') {
		alert('Wrong password.');
	    } else {
		alert(errorMessage);
	    }

	    console.log(error);
            domEmailSignInSubmitButton.disabled = false;
        });
    // [END authwithemail]
}

function newGroupInputSubmitCheck() {
    domAddGroupButton.disabled = true;
    if (domNewGroupTitleTextField.value.length > 0
	&& domNewGroupGroupTextField.value.length > 0
	&& domNewGroupMessageTextField.value.length > 0
	&& domNewGroupTagsTextField.value.length > 0
	) {
	domAddGroupButton.disabled = false;
    }
}

function emailAndPasswordButtons() {
    console.log('email and password');
    domEmailSignInSubmitButton.disabled = true;
    domEmailSignInSendPasswordResetButton.disabled = true;
    if (domEmailTextField.value.length > 4 && domEmailTextField.value.includes("@") && domEmailTextField.value.includes(".")) {
        domEmailSignInSendPasswordResetButton.disabled = false;
	if (domPasswordTextField.value.length > 0) {
	    domEmailSignInSubmitButton.disabled = false;
	}
    }
}

function rfa(a) {
  return a[Math.floor(Math.random() * a.length)];
}


  // Callback that creates and populates a data table,
  // instantiates a dashboard, a range slider and a pie chart,
  // passes in the data and draws it.
function createDashboard(groupId, sectionTag, group) {

    var groupUniqueTag = '-' + sectionTag + groupId;

    var dashboardId = document.getElementById('dashboard_div' + groupUniqueTag);
    //var dashboard = new google.visualization.Dashboard(dashboardId);
    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div' + groupUniqueTag));

    var allDashboardsForGroup = groupDashboards[group] || [];
    allDashboardsForGroup.push(dashboard);
    groupDashboards[group] = allDashboardsForGroup;

    var options = {
      title: 'xxUtilization',
      is3D: 'true',
      width: 1000,
      height: 600
    };

    var categoryPicker = new google.visualization.ControlWrapper({
      controlType: 'CategoryFilter',
      containerId: 'TeamName' + groupUniqueTag,
      options: {
        filterColumnLabel: 'Online', // filter by Team name
        ui: {
          caption: 'true / false',
          sortValues: true,
          allowNone: true,
          allowMultiple: true,
          allowTyping: true
        }

      }
    });

    var cssClassNames = {
	'headerRow': 'italic-darkblue-font bold-font',
	'tableRow': '',
	'oddTableRow': 'beige-background',
	'selectedTableRow': 'orange-background grey-background',
	'hoverTableRow': '',
	'headerCell': 'gold-border',
	'tableCell': '',
	'rowNumberCell': 'underline-blue-font'
    };

    //  The Table visualization doesn't use any row properties.  You have to set the style property for each cell in the row.
    var tableOptions = {
	allowHtml: 'true', // case sensitive
	alternatingRowStyle: 'false',
	width: '100%',
	'cssClassNames': cssClassNames,
	sortColumn: 0,
	sortAscending: true,
	sort: 'enable'
    };

    var table = new google.visualization.ChartWrapper({
      'chartType': 'Table',
      'containerId': 'table_div' + groupUniqueTag,
      'options': tableOptions,
      'view': {
	  'columns': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    });

    //    table.setOptions(options); // gets set, but table cells ignore options

    //    data.setProperties(1,1,{'allowHTML':'true','style':'font-style:bold; font-size:22px; color:"green"; background-color:"blue";'});
    //    data.setCell(5, 3, 0, "bb", {'className': 'bold-green-font large-font right-text'});
    //    data.setCell(6, 3, undefined, undefined, {'style': 'background-color: red;'});

    //  google tables/charts only does a "row" select -- no way to get column info
     google.visualization.events.addListener(table, 'select', function() {

       var chart = table.getChart();
       var gs = chart.getSelection()[0]; // only first?
       var deviceCardStatus = cardDeviceShadeStatus[groupUniqueTag];
       var deviceName = deviceCardStatus;
       if (gs != null) {
         var row = gs.row;
	 //	 console.log('selected row=['+row+']');
	 var dvn = groupDVNs[group];
         var deviceName = dvn[row];
       }

       var containerElement = document.getElementById('device_div'+groupUniqueTag);
       if (deviceName && (deviceCardStatus == null || deviceCardStatus != deviceName) ) {
         containerElement.style.display='inline-block';
         updateAndShowDeviceDiv(groupUniqueTag, deviceName, chart);
       } else {
         containerElement.style.display='none';
         cardDeviceShadeStatus[groupUniqueTag] = null;
       }

     });

    dashboard.bind([categoryPicker], [table]);

    var thisGroupRef = firebase.database().ref('/group/' + group + '/devices/');
    console.log('listening for=[/group/'+group+'/devices/]');

    thisGroupRef.on('value', function(data) {	
      var dv = data.val();
      console.log('received "value" update for devices for group: ['+group+'] data: [' + JSONStringify(dv) + ']')
      //  console.log('separator ________________________________');
      //  check and de-dupe devices? how to clean out dupes?
      var devices = [];
      for (var k in dv) {
	  //	  devices.push(dv[k]);  //  values for /connections
	  devices.push(k); //  keys for /devices/
      }
      updateTableForGroup(dashboard, group, devices);
    });


} // DRAW DASHBOARD -- dfdf

function drawDashboard(dashboard, data) {
  dashboard.draw(data);
}

function updateTableForGroup(dashboard, group, devices) {

  var c = devices.length
      //  console.log('update table for group=['+group+'] with '+c+' Devices=['+devices+']');

  groupDevices[group] = devices;
  //  console.log('1 group devices=['+JSONStringify(groupDevices)+']');

  var row = 0;
  var data = new google.visualization.DataTable();

  data.addColumn('number',  '#');             //  0
  data.addColumn('string',  'Device');        //  1
  data.addColumn('string',  'Status');        //  2
  data.addColumn('number',  'Uses');          //  3
  data.addColumn('boolean', 'Online');        //  4
  data.addColumn('number',  'ADNI');          //  5
  data.addColumn('string',  'Last Activity'); //  6
  data.addColumn('string',  'Last Online');   //  7
  data.addColumn('string',  'App Version');     //  8
  data.addColumn('string',  'Content Version');     //  9
  data.addColumn('string',  'Friendly Name'); //  10

  var deviceName = null;
  for (var deviceId in devices) {
    deviceName = devices[deviceId];       
    //    console.log('updating table device device=['+deviceName+']');
    addTableLineForDeviceID(data, deviceName, group, row);
    row = row +1;
  }

  /*  data.sort({column: 3, desc: true});

    options: {
      sortColumn: 0,
	  sortAscending: false,
	  sort: 'enable'
	  }
  / sort by column 0, descending
	data.sort({column: 0, desc: true});
  or use a sorted DataView:

  var view = new google.visualization.DataView(data);
  view.setRows(data.getSortedRows({column: 0, desc: true}));
  table.draw(view, options);
*/
  drawDashboard(dashboard, data);
  updateExpandsForGroup(group);

}


function addTableLineForDeviceID(data, deviceName, group, row) { // side effects to "data" not thread safe, etc.  OMG.

    //    console.log('adding table line for deviceName='+deviceName+' = device-data=['+JSONStringify(json_value(deviceInfo, deviceName))+'] out of adi=['+JSONStringify(deviceInfo)+']');

      data.addRows(1);

      var o = null;
      var oo = null;
      var dvn = groupDVNs[group] || {};
      dvn[row] = deviceName;
      groupDVNs[group] = dvn;

      //  0 = Order
      o = json_value(userDeviceData, deviceName+'.displayOrder') || '';
      var oo = 0;
      oo = (o == '') ? 999999 : o;  // value used, but not shown ... make no order = last priority
      data.setCell(row, 0, oo, o, {});

      //  1 = Device (Name)
      data.setCell(row, 1, deviceName, undefined, {});

      //  2 = App Status
      o = json_value(deviceInfo, deviceName+'.appStatus') || 'unknown';
      data.setCell(row, 2, o, undefined, {});

      //  3 = Uses
      o = json_value(deviceInfo, deviceName+'.uses') || '0';
      data.setCell(row, 3, o, undefined, {});

      //  4 = Online
      o = (json_value(deviceInfo, deviceName+'.connected') == 'true') || false;
      data.setCell(row, 4, o, undefined, {});
      if (o) {
        data.setCell(row, 4, undefined, undefined, {'style': 'color: #00DD00;'});
      } else {
        data.setCell(row, 4, undefined, undefined, {'style': 'color: #FF0000;'});
      }

      //  5 = ADNI
      o = json_value(deviceInfo, deviceName+'.adni') || '0';
      data.setCell(row, 5, o, undefined, {});

      //  6 = Last Activity
      o = json_value(deviceInfo, deviceName+'.lastActivity') || 0;
      if (o > 0) {
          oo = formatDate(o);
          var dh = diff_hours( (new Date()).getTime(), (o*1000));
	  //          oo = '<nobr>'+oo+' '+dh+' mins</nobr>';
          oo = '<nobr>'+oo+'</nobr>';
      } else {
        o = 0;
        oo = ""
      }
      data.setCell(row, 6, o.toString(), oo, {});

      //  7 = Last Online
      o = json_value(deviceInfo, deviceName+'.lastSignOn') || -1;
      if (o > 0) {
          oo = formatDate(o);
          var dh = diff_hours( (new Date()).getTime(), (o*1000));
	  //	  oo = '<nobr>'+oo+' '+dh+' mins</nobr>';
          oo = '<nobr>'+oo+'</nobr>';
      } else {
        o = 0;
        oo = ""
      }
      data.setCell(row, 7, o.toString(), oo, {});

      //  8 = App Version
      o = json_value(deviceInfo, deviceName+'.appVersion') || 'unknown';
      data.setCell(row, 8, o, undefined, {});

      //  9 = Content Version
      o = json_value(deviceInfo, deviceName+'.contentVersion') || 'unknown';
      data.setCell(row, 9, o, undefined, {});

      //  10 = Friendly Name
      var friendlyName = json_value(deviceInfo, deviceName+'.friendlyName') || '';
      o = '<nobr>' + friendlyName + '</nobr>';
      data.setCell(row, 10, o, undefined, {});

}


/**
 * Insert and show device div
 */
function updateAndShowDeviceDiv(groupUniqueTag, deviceName, chart) {

  // static data (top)
  //  (left side)
  //  device name
  var group = json_value(deviceInfo, deviceName+'.group');
  //  (right side)
  var osVersion = json_value(deviceInfo, deviceName+'.osVersion');
  var appFlavor = json_value(deviceInfo, deviceName+'.appFlavor');
  var becomeActiveCount = json_value(deviceInfo, deviceName+'.becomeActiveCount');
  var lastActivity = json_value(deviceInfo, deviceName+'.lastActivity') ||  '';
  var lastSignOn = json_value(deviceInfo, deviceName+'.lastSignOn') ||  '';

  // configurable data (bottom)
  var friendlyName = json_value(deviceInfo, deviceName+'.friendlyName') || '';
  var notes = json_value(deviceInfo, deviceName+'.notes') || '';
  var displayOrder = json_value(userDeviceData, deviceName+'.displayOrder') || '';
  var attractBackgroundOpacity = json_value(deviceInfo, deviceName+'.attractBackgroundOpacity') || '';
  var warmstartNoNetworkCheckPeriod = json_value(deviceInfo, deviceName+'.warmstartNoNetworkCheckPeriod') || '';

  var useRegionOfInterestControls = json_value(deviceInfo, deviceName+'.useRegionOfInterestControls');
  var regionOfInterestCGRectString = json_value(deviceInfo, deviceName+'.regionOfInterestCGRectString');
  var attractDetectFaces = json_value(deviceInfo, deviceName+'.attractDetectFaces');
  var faceDetectMinWidth = json_value(deviceInfo, deviceName+'.faceDetectMinWidth')  || '';
  var attractCameraZoom = json_value(deviceInfo, deviceName+'.attractCameraZoom') ||  '';

  var alertTitle = json_value(deviceInfo, deviceName+'.alert.title') ||  '';
  var alertMessage = json_value(deviceInfo, deviceName+'.alert.message') ||  '';
  var alertButton = json_value(deviceInfo, deviceName+'.alert.button') ||  '';
  var alertTimeCreated = json_value(deviceInfo, deviceName+'.alert.timeCreated')/1000.0 || '';
  var alertTimeFirstDisplayed = json_value(deviceInfo, deviceName+'.alert.timeFirstDisplayed') ||  '';
  var alertTimeFirstAcknowledged = json_value(deviceInfo, deviceName+'.alert.timeFirstAcknowledged') ||  '';
  var alertTimeLastDisplayed = json_value(deviceInfo, deviceName+'.alert.timeLastDisplayed') ||  '';
  var alertTimeLastAcknowledged = json_value(deviceInfo, deviceName+'.alert.timeLastAcknowledged') ||  '';

  var dh = diff_hours( (new Date()).getTime(), (lastActivity*1000));
  var dhh = Math.round( (dh/60)* 100) / 100;
  lastActivity = dh + ' minutes ('+ dhh+' hours)';
  dh = diff_hours( (new Date()).getTime(), (lastSignOn*1000));
  lastSignOn = dh + ' minutes ('+ dhh+' hours)';

  var attractDetectFacesChecked = '';
  if (attractDetectFaces == undefined) {
      attractDetectFaces = '';
  } else {
      if (attractDetectFaces) {
	  attractDetectFaces = 'YES';
          attractDetectFacesChecked = 'checked';
      } else {
	  attractDetectFaces = 'NO';
      }
  }

  var useRegionOfInterestControlsChecked = '';
  if (useRegionOfInterestControls == undefined) {
      useRegionOfInterestControls = '';
  } else {
      if (useRegionOfInterestControls) {
	  useRegionOfInterestControls = 'YES';
          useRegionOfInterestControlsChecked = 'checked';
      } else {
	  useRegionOfInterestControls = 'NO';
      }
  }

  var html =
      /*
    '<div class="device device' +groupUniqueTag + '" mdl-cell mdl-cell--12-col">' +

      '<div class="mdl-card__supporting-text mdl-cell mdl-cell--12-col xtheme-c5">' +
      */

        '<div class="device-information">' +

          '<div class="current-device-information xtheme-c5">' +
            '<h4>Current Device Information</h4>' +
            '<div class="left-side">' +

              '<div class="static-info">' +
                '<h5>Static Device Information</h5>' +
                '<div><span class="di-1">Name:</span><span class="device-name devvalue1">' + deviceName + '</span></div>' +
                '<div><span class="di-1">Group:</span><span class="group devvalue1">' + group + '</span></div>' +
                '<div><span class="di-1">Flavor:</span><span class="flavor devvalue1">' + appFlavor + '</span></div>' +
              '</div>' +

              '<div class="dynami-info">' +
                '<h5>Computed / Dynamic</h5>' +
                '<div><span class="di-2">OS Version:</span><span class="os-version devvalue2">' + osVersion + '</span></div>' +
                '<div><span class="di-2">Longer title OS Version:</span><span class="os-version devvalue2">' + osVersion + '</span></div>' +
                '<div><span class="di-2">Last Activity:</span><span class="os-version devvalue2">' + lastActivity + '</span></div>' +
                '<div><span class="di-2">Last Sign On:</span><span class="os-version devvalue2">' + lastSignOn + '</span></div>' +
              '</div>' +

              '<div class="configurable-info">' +
                '<h5>Configurable Device Information</h5>' +
                '<div class="device-title">Dashboard:</div>' +
                '<div><span class="di-3">Friendly name:</span><span class="friendly-name devvalue3">' + friendlyName + '</span></div>' +
                '<div><span class="di-3">Notes:</span><span class="notes devvalue3">' + notes + '</span></div>' +
                '<div><span class="di-3">Display order:</span><span class="display-order devvalue3">' + displayOrder + '</span></div>' +
                '<br>' +
                '<div class="device-title">Device:</div>' +
                '<div>NOTE:  ANY values shown in this section (below) will override the global default(s) settings</div>' +
                '<div><span class="di-4">Attract background opacity:</span><span class="attract-background-opacity devvalue4">' + attractBackgroundOpacity + '</span></div>' +
                '<div><span class="di-4">No Network Check (seconds):</span><span class="attract-background-opacity devvalue4">' + warmstartNoNetworkCheckPeriod + '</span></div>' +
                '<div><span class="di-4">Attract camera zoom:</span><span class="attract-camera-zoom devvalue4">' + attractCameraZoom + '</span></div>' +
                '<div><span class="di-4">Attract face detection:</span><span class="attract-use-controls devvalue4">' + attractDetectFaces + '</span></div>' +
                '<div><span class="di-4">Attract face detection width:</span><span class="face-detect-width devvalue4">' + faceDetectMinWidth + '</span></div>' +
                '<div><span class="di-4">Attract use controls:</span><span class="attract-use-controls devvalue4">' + useRegionOfInterestControls + '</span></div>' +
                '<div><span class="di-4">Attract face region:</span><span class="region-of-interest devvalue4">' + regionOfInterestCGRectString + '</span></div>' +
                '<div><span class="di-4">Alert Title:</span><span class="region-of-interest devvalue4">' + alertTitle + '</span></div>' +
                '<div><span class="di-4">Alert Message:</span><span class="region-of-interest devvalue4">' + alertMessage + '</span></div>' +
                '<div><span class="di-4">Alert Button Text:</span><span class="region-of-interest devvalue4">' + alertButton + '</span></div>' +
                '<div><span class="di-4">Time Created:</span><span class="region-of-interest devvalue4">' + formatDate(alertTimeCreated) + '</span></div>' +
                '<div><span class="di-4">First Displayed:</span><span class="region-of-interest devvalue4">' + formatDate(alertTimeFirstDisplayed) + '</span></div>' +
                '<div><span class="di-4">First Acknowledged:</span><span class="region-of-interest devvalue4">' + formatDate(alertTimeFirstAcknowledged) + '</span></div>' +
                '<div><span class="di-4">Last Displayed:</span><span class="region-of-interest devvalue4">' + formatDate(alertTimeLastDisplayed) + '</span></div>' +
                '<div><span class="di-4">Last Acknowledged:</span><span class="region-of-interest devvalue4">' + formatDate(alertTimeLastAcknowledged) + '</span></div>' +
              '</div>'+
            '</div>' +
            '<div class="right-side">' +
            '</div>' +
          '</div>' +

          '<div class="modify-device-information">' +

            '<h5>Modify Device Information</h5>' +
            '<h6><b>Dashboard:</b></h6>' +

            '<button id="device-info-reset-uses-button type="submit" class="admin device-info-reset-uses-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
              'Clear "Uses"'+
            '</button>' +
            '<button id="device-info-reset-adni-button type="submit" class="admin device-info-reset-adni-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
              'Clear "ADNI"'+
            '</button>' +

            '<form class="update-device-info-form" action="#">' +
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-display-order" type="text" id="new-display-order">' +
                '<label class="mdl-textfield__label" for="new-display-order">New Display Order for Device</label>' +
              '</div>' +
      '<div class="admin">' + 
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-friendly-name" type="text" id="new-friendly-name">' +
                '<label class="mdl-textfield__label" for="new-friendly-name">New Friendly Name</label>' +
              '</div>' +

              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-flavor" type="text" id="new-flavor">' +
                '<label class="mdl-textfield__label" for="new-flavor">New Flavor</label>' +
              '</div>' +

              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<textarea class="mdl-textfield__input new-device-notes" rows="3" id="new-device-notes"></textarea>' +
                '<label class="mdl-textfield__label" for="new-device-notes">New Notes for Device</label>' +
              '</div>' +
'</div>' +
      '<div class="admin">' + 
              '<h6><b>Device:</b></h6>' +
              '<div><span class="di-5">Attract face detection:</span><span class="face-detect value xtheme-c5">' +
                '<input type="radio" class="radio-use-face-detection" name="radio-use-face-detection" value="yes" > Yes' +
                '<input type="radio" class="radio-use-face-detection" name="radio-use-face-detection" value="no"> No' +
                '<input type="radio" class="radio-use-face-detection" name="radio-use-face-detection" value="default"> Use Default</span>' +
              '</div>' +
              '<div><span class="di-5">Use attract controls:</span><span class="use-attract-controls value xtheme-c5">' +
  '<input type="radio" class="radio-use-attract-controls radio-item" name="radio-use-attract-controls" value="yes" > Yes' +
  '<input type="radio" class="radio-use-attract-controls" name="radio-use-attract-controls" value="no"> No' +
  '<input type="radio" class="radio-use-attract-controls" name="radio-use-attract-controls" value="default"> Use Default' + '</span></div>' +
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-face-detection-min-width" type="text" id="new-face-detection-min-width">' +
                '<label class="mdl-textfield__label" for="new-face-detection-min-width">New Face Detection Minimum Width</label>' +
'<input type="checkbox" class="use-face-width-default" name="use-face-width-default" value="default"> Use default face detection width value.' +
              '</div>' +
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-attract-opacity" type="text" id="new-attract-opacity">' +
                '<label class="mdl-textfield__label" for="new-attract-opacity">New Attract Screen Opacity</label>' +
'<input type="checkbox" class="use-attract-opacity-default" name="use-attract-opacity-default" value="default"> Use default attract screen opacity value.' +
              '</div>' +

              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-network-check-timeout" type="text" id="new-network-check-timeout">' +
                '<label class="mdl-textfield__label" for="new-network-check-timeout">New Network Check Timeout grace period (seconds)</label>' +
'<input type="checkbox" class="use-network-check-timeout-default" name="use-network-check-timeout-default" value="default"> Use default network check timeout value.' +
              '</div>' +

              '<br><br><p><b>Alert:</b></p>' +

              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-alert-title" type="text" id="new-alert-title">' +
                '<label class="mdl-textfield__label" for="new-alert-title">New Alert Title</label>' +
              '</div>' +
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-alert-message" type="text" id="new-alert-message">' +
                '<label class="mdl-textfield__label" for="new-alert-message">New Alert Message</label>' +
              '</div>' +
              '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">' +
                '<input class="mdl-textfield__input new-alert-button-text" type="text" id="new-alert-button-text">' +
                '<label class="mdl-textfield__label" for="new-alert-button-text">New Alert Button Text</label>' +
              '</div>' +

              '<div><span class="di-5">Alert Style:</span><span class="face-detect value xtheme-c5">' +
                '<input type="radio" class="radio-alert-style" name="radio-alert-style" value="acknowledge" > Acknowledge' +
                '<input type="radio" class="radio-alert-style" name="radio-alert-style" value="always"> Always' +
                '<input type="radio" class="radio-alert-style" name="radio-alert-style" value="clear"> Clear alert (ie: remove)</span>' +
              '</div>' +
      
      '</div>' +
              '<button id="device-info-update-submit type="submit" class="device-info-update-submit mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
                'Update Device Information'+
              '</button>' +

           '</form>' +
      
         '</div>' +

'<br>'+
              '<button id="modify-device-info-button" class="modify-device-info-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
               'Modify Device Info' +
              '</button>' +

              '<button id="device-info-dismiss-button" class="device-info-dismiss-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button xtheme-c6">' +
               'Dismiss' +
             '</button>' +

       '</div>' +
      /*
     '</div>' +
   '</div>' +
*/
'';

  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var deviceElement = div.firstChild;

  if (componentHandler) {
      componentHandler.upgradeElements(deviceElement.getElementsByClassName('mdl-textfield'));
  }

  // Set values.
  //  deviceElement.getElementsByClassName('device-name')[0].innerText = deviceName;

  var newDisplayOrderInput = deviceElement.getElementsByClassName('new-display-order')[0];
  var newFriendlyNameInput = deviceElement.getElementsByClassName('new-friendly-name')[0];
  var newFlavorInput = deviceElement.getElementsByClassName('new-flavor')[0];
  var newDeviceNotesInput = deviceElement.getElementsByClassName('new-device-notes')[0];
  var domUseFaceDetectionRadio = deviceElement.getElementsByClassName('radio-use-face-detection')[0];
  var domUseAttractControlsRadio = deviceElement.getElementsByClassName('radio-use-attract-controls')[0];
  var domNewFaceDetectionMinWidthInput = deviceElement.getElementsByClassName('new-face-detection-min-width')[0];
  var domUseFaceWidthDefaultCheckbox = deviceElement.getElementsByClassName('use-face-width-default')[0];
  var domNewAttractOpacity = deviceElement.getElementsByClassName('new-attract-opacity')[0];
  var domUseAttractOpacityDefaultCheckbox = deviceElement.getElementsByClassName('use-attract-opacity-default')[0];
  var domNewNetworkCheckTimeout = deviceElement.getElementsByClassName('new-network-check-timeout')[0];
  var domUseNetworkCheckTimeoutDefaultCheckbox = deviceElement.getElementsByClassName('use-network-check-timeout-default')[0];

  var domNewAlertTitleTextInput = deviceElement.getElementsByClassName('new-alert-title')[0];
  var domNewAlertMessageTextInput = deviceElement.getElementsByClassName('new-alert-message')[0];
  var domNewAlertButtonTextInput = deviceElement.getElementsByClassName('new-alert-button-text')[0];

  //  var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div' + groupUniqueTag));

  var containerElement = document.getElementById('device_div'+groupUniqueTag);
  while (containerElement.hasChildNodes()) {
      containerElement.removeChild(containerElement.lastChild);
  }
  containerElement.insertBefore(deviceElement, containerElement.firstChild);

  let deviceDataRef = firebase.database().ref('/devices/'+deviceName);

  // Bind buttons.

  var domDeviceInfoDismissButton = deviceElement.getElementsByClassName('device-info-dismiss-button')[0];
  domDeviceInfoDismissButton.onclick = function(e) {
      containerElement.style.display='none';
      cardDeviceShadeStatus[groupUniqueTag] = null;
  };

  var domModifyDeviceInformation = deviceElement.getElementsByClassName('modify-device-information')[0];
  domModifyDeviceInformation.style.display='none';
  var domModifyDeviceInfoButton = deviceElement.getElementsByClassName('modify-device-info-button')[0];
  domModifyDeviceInfoButton.disabled = false;
  domModifyDeviceInfoButton.style.display='inline-block';
  domModifyDeviceInfoButton.onclick = function(e) {
      domModifyDeviceInfoButton.disabled = true;
      domModifyDeviceInfoButton.style.display='none';
      domModifyDeviceInformation.style.display='inline-block';
      configureAppForMode(webAppMode); // ug!
  };
  
  var domDeviceClearUsesButton = deviceElement.getElementsByClassName('device-info-reset-uses-button')[0];
  domDeviceClearUsesButton.disabled = false;
  domDeviceClearUsesButton.onclick = function(e) {
      domDeviceClearUsesButton.disabled = true;
      let deviceDataRef = firebase.database().ref('/devices/'+deviceName);
      deviceDataRef.child('uses').set('0');
  };
  
  var domDeviceClearADNIButton = deviceElement.getElementsByClassName('device-info-reset-adni-button')[0];
  domDeviceClearADNIButton.disabled = false;
  domDeviceClearADNIButton.onclick = function(e) {
      domDeviceClearADNIButton.disabled = true;
      let deviceDataRef = firebase.database().ref('/devices/'+deviceName);
      deviceDataRef.child('adni').set('0');
  };
  
  var domUpdateDeviceInfoFormSubmitButton = deviceElement.getElementsByClassName('device-info-update-submit')[0];
  domUpdateDeviceInfoFormSubmitButton.disabled = false; // fix later to check all inputs.
  
  function newDeviceInfoUpdatedButton() {
      /*
	domUpdateDeviceInfoFormSubmitButton.disabled = true;
	if (newDisplayOrderInput.value.length > 0 || newFriendlyNameInput.value.length > 0 || newDeviceNotesInput.value.length > 0 ) {
        domUpdateDeviceInfoFormSubmitButton.disabled = false;
	}
      */
  }

   newDisplayOrderInput.addEventListener('keyup', function(e) {
     newDeviceInfoUpdatedButton();
   });
   newFriendlyNameInput.addEventListener('keyup', function(e) {
     newDeviceInfoUpdatedButton();
   });
   newFlavorInput.addEventListener('keyup', function(e) {
     newDeviceInfoUpdatedButton();
   });
   newDeviceNotesInput.addEventListener('keyup', function(e) {
     newDeviceInfoUpdatedButton();
   });


  var domUpdateDeviceInfoForm = deviceElement.getElementsByClassName('update-device-info-form')[0];
  domUpdateDeviceInfoForm.onsubmit = function(e) {
    e.preventDefault();

    var newDisplayOrder = newDisplayOrderInput.value;
    //  TODO:  FIX:  the next three lines may cause 3 .value callbaks on the device-info tree -- which would cause recalcs for all groups x3.  yuk.
    if (newDisplayOrder) {
	//     firebase.database().ref('/device-info/' + deviceName +'/displayOrder').set(newDisplayOrder); // one per device on device level
	userDeviceDataRef.child(deviceName +'/displayOrder').set(newDisplayOrder); // per user deviceOrder
    }
    var newFriendlyName = newFriendlyNameInput.value;
    if (newFriendlyName) {
	deviceDataRef.child('/friendlyName').set(newFriendlyName);
    }
    var newFlavor = newFlavorInput.value;
    if (newFlavor) {
	deviceDataRef.child('/appFlavor').set(newFlavor);
    }
    var newDeviceNotes = newDeviceNotesInput.value;
    if (newDeviceNotes) {
	deviceDataRef.child('/notes').set(newDeviceNotes);
    }

    var newMinFaceWidth = domNewFaceDetectionMinWidthInput.value;
    if (newMinFaceWidth) {
	deviceDataRef.child('faceDetectMinWidth').set(newMinFaceWidth);
    }
    if (domUseFaceWidthDefaultCheckbox.checked) {
	deviceDataRef.child('/faceDetectMinWidth').remove();
    }

    var newAttractOpacity = domNewAttractOpacity.value;
    if (newAttractOpacity) {
	deviceDataRef.child('/attractBackgroundOpacity').set(newAttractOpacity);
    }
    if (domUseAttractOpacityDefaultCheckbox.checked) {
	deviceDataRef.child('/attractBackgroundOpacity').remove();
    }

    var newNetorkCheckTimeout = domNewNetworkCheckTimeout.value;
    if (newNetorkCheckTimeout) {
	deviceDataRef.child('/warmstartNoNetworkCheckPeriod').set(newNetorkCheckTimeout);
    }

    if (domUseNetworkCheckTimeoutDefaultCheckbox.checked) {
	deviceDataRef.child('/warmstartNoNetworkCheckPeriod').remove();
    }

    var faceRadioValue = getRadioCheckedValue(deviceElement.getElementsByClassName('radio-use-face-detection'));
    if (faceRadioValue) { // radio selected at all?
	var ref = deviceDataRef.child('/attractDetectFaces');
	if (faceRadioValue == 'default') {
	    ref.remove();
	} else {
  	  if (faceRadioValue == 'yes') {
	    ref.set(true);
	  } else {
	      ref.set(false);
	  }
	}
    }

    var attractControlsRadioValue = getRadioCheckedValue(deviceElement.getElementsByClassName('radio-use-attract-controls'));
    if (attractControlsRadioValue) { // radio selected at all?
	var ref = deviceDataRef.child('/useRegionOfInterestControls');
	if (attractControlsRadioValue == 'default') {
	    ref.remove();
	} else {
  	  if (attractControlsRadioValue == 'yes') {
	      ref.set(true);
	  } else {
	      ref.set(false);
	  }
	}
    }

    var alertStyleRadioValue = getRadioCheckedValue(deviceElement.getElementsByClassName('radio-alert-style'));
    if (alertStyleRadioValue) { // radio selected at all?
        var ref = deviceDataRef.child('/alert')
	if (alertStyleRadioValue == 'clear') {
	    ref.remove();
	} else {
	    var newAlertTitleText = domNewAlertTitleTextInput.value;
	    var newAlertMessageText = domNewAlertMessageTextInput.value;
	    var newAlertButtonText = domNewAlertButtonTextInput.value;
	    if ( (alertStyleRadioValue == 'acknowledge' && newAlertTitleText && newAlertMessageText && newAlertButtonText) || (alertStyleRadioValue == 'always' && newAlertTitleText && newAlertMessageText) ) {
		var alertData = {
		    title: newAlertTitleText,
		    message: newAlertMessageText, 
		    button: newAlertButtonText,
		    timeCreated: firebase.database.ServerValue.TIMESTAMP,
		    timeFirstDisplayed: 0.0,
		    timeFirstAcknowledged: 0.0,
		    timeLastDisplayed: 0.0,
		    timeLastAcknowledged: 0.0,
		};
		if (alertStyleRadioValue == 'acknowledge') {
		    alertData['style'] = 'acknowledge';
		} else {
		    alertData['style'] = 'always';
		}
		ref.set(alertData);
	    }
	}
    }

    //  dismiss div
    containerElement.style.display='none';
    cardDeviceShadeStatus[groupUniqueTag] = null;
    chart.setSelection();  // nulls/clears out the selection (so you can click on same row twice in a row)

  };

  cardDeviceShadeStatus[groupUniqueTag] = deviceName;

}

function clearRadiosChecked(radios) {
    var radioCheckedValue = null;
    for (var i = 0, length = radios.length; i < length; i++) {
	radios[i].checked = false;
    }
}

function getRadioCheckedValue(radios) {
    var radioCheckedValue = null;
    for (var i = 0, length = radios.length; i < length; i++) {
	if (radios[i].checked) {
            radioCheckedValue = radios[i].value;
	    break;
	}
    }
    return radioCheckedValue;
}

function getInitialDeviceInfo() {
    //  console.log('Getting initial device info');
  firebase.database().ref('/devices/').once('value').then(function(snapshot) {
	  //     console.log('--- RECEIVED initial device info starting dashboards: ');
	  deviceInfo = snapshot.val();
          startDatabaseQueries();
      });
}


//  
//  ================================================================
//  

/**
 * Fxn that returns a JSON stringified version of an object.
 * This fxn uses a custom replacer function to handle circular references
 * see http://stackoverflow.com/a/11616993/3043369
 * param {object} object - object to stringify
 * returns {string} JSON stringified version of object
 */
function JSONStringify(object) {
    var cache = [];        
    var str = JSON.stringify(object,
			     // custom replacer fxn - gets around "TypeError: Converting circular structure to JSON" 
			     function(key, value) {
				 if (typeof value === 'object' && value !== null) {
				     if (cache.indexOf(value) !== -1) {
					 // Circular reference found, discard key
					 return;
				     }
				     // Group value in our collection
				     cache.push(value);
				 }
				 return value;
			     }, 4);
    cache = null; // enable garbage collection
    return str;
};

function diff_hours(es2, es1) {
    var diff = (es2 - es1) / 1000;
    diff /= (60);
    return Math.abs(Math.round(diff));
}

function leftZeroPad(i) {
    var ii = i;
    if (ii < 10) {
	ii = '0' + ii;
    }
    return ii;
}

function formatDate(epochSeconds) {
    var dateFormattedString = "";
    if (epochSeconds > 0) {
        var x = new Date(Math.floor(epochSeconds*1000));
	var month = leftZeroPad(x.getMonth()+1);
	var day = leftZeroPad(x.getDate());
        var year = +x.getFullYear();
	var hour = leftZeroPad(x.getHours());
        var minute = leftZeroPad(x.getMinutes());
        var seconds = leftZeroPad(x.getSeconds());
        dateFormattedString = month+'/'+day+'/'+year+' '+hour+':'+minute+':'+seconds;
    }
    return dateFormattedString;
}

function saveDashboardDisplayOrder() {
    console.log('save dashboard display order');
    //    var x = document.querySelectorAll(CSSClassName); // all?
    var x = domUserGroupsSection.querySelectorAll('.draggable');
    //    x = x.reverse();
    var order = '';
    for (var i = 0; i < x.length; i++) {
	order += x[i].id + ' ';
    }
    order = order.trim();
    console.log('count['+x.length+'] order['+order+']');
    var userRef = firebase.database().ref('/users/'+currentUser.uid);
    userRef.child('dashboardDisplayOrder').set(order);
}


//  
//  SIMPLE drag and drop
//  

function allowDrop(ev) {
    ev.preventDefault();
}

function dragstart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragenter(ev) {
    ev.target.classList.add('over');
}

function dragleave(ev) {
    ev.target.classList.remove('over');
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data) {
	var childElement = document.getElementById(data);
	if (childElement) {
	    var node = ev.target;
	    while ( node != null ) {
		if ( node.classList.contains('droppable') ) {
		    node.appendChild(childElement);
		    return false;
		} else if ( node.classList.contains('draggable') ) {
		    node.parentElement.insertBefore(childElement, node);
		    saveDashboardDisplayOrder()
		    return false;
		} else {
		    var node = node.parentElement;
		}
	    }
	    return false;
	}
    }
}

function dragOver(ev) {
    ev.preventDefault();
}



//  
//  ================================================================
//  

// Bindings on load.
window.addEventListener('load', function() {

  insertHelpHTML(domHelpSection);
  insertUserProfileHTML(domUserProfileSection);
  insertUnregisteredDevicesHTML(domUnregisteredDevicesSection);

  // Bind Sign in button.
  domSignInGoogleButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });

  // Bind Sign in Email button.
  domSignInEmailButton.addEventListener('click', function() {
    domSignInButtonsContainer.style.display = 'none';
    domSignInEmailContainer.removeAttribute('hidden');
    domSignInEmailContainer.style.display = '';

    console.log('setting interval...');
    clearInterval(emailAndPasswordCheckTimer);
 
    emailAndPasswordCheckTimer = setInterval(function() {
	    emailAndPasswordButtons();
	}, 1000);
    

  });

  // Bind Sign in Email cancel button.
  domSignInEmailButtonCancel.addEventListener('click', function() {
    domSignInButtonsContainer.style.display = '';
    domSignInEmailContainer.style.display = 'none';
    clearInterval(emailAndPasswordCheckTimer);
  });

  domEmailSignInSubmitButton.addEventListener('click', signInUsingEmail);
  domEmailSignInSendPasswordResetButton.addEventListener('click', sendPasswordReset);

  // Bind Sign out button.
  /*
  domSignOutButton.addEventListener('click', function() {
    doSignOut();
  });
  */
  

  domNewGroupTitleTextField.addEventListener('keyup', function(e) {
	  newGroupInputSubmitCheck();
      });

  domNewGroupGroupTextField.addEventListener('keyup', function(e) {
	  newGroupInputSubmitCheck();
      });

  domNewGroupMessageTextField.addEventListener('keyup', function(e) {
	  newGroupInputSubmitCheck();
      })

  domNewGroupTagsTextField.addEventListener('keyup', function(e) {
	  newGroupInputSubmitCheck();
      })

  // Saves message on form submit.
  domNewGroupForm.onsubmit = function(e) {
    e.preventDefault();
    var group = domGroupInput.value;
    var title = domTitleInput.value;
    var message = domMessageInput.value;
    var tags = domTagsInput.value;
    if (group && title && message && tags) {
        var newGroupRef = writeNewGroup(group, currentUser.uid, currentUser.username, currentUser.photoURL, title, message, tags);
	if (newGroupRef) { // else error message?
	    domTitleInput.value = '';
	    domGroupInput.value = '';
	    domMessageInput.value = '';
	    domTagsInput.value = '';
	    gotoLastBreadcrumb();
	} else {
	    console.log('error writing new group');
	}
    }
  };

  // Bind menu buttons.
  domMyGroupsMenuButton.onclick = function() {
    showSection(domUserGroupsSection, domMyGroupsMenuButton);
  };

  /*  domRecentMenuButton.onclick = function() {
      showSection(domRecentGroupsSection, domRecentMenuButton);
  };
  */
  /*  domMyTopGroupsMenuButton.onclick = function() {
    showSection(domTopUserGroupsSection, domMyTopGroupsMenuButton);
  };
  */
  domShowUnregisteredDevicesMenuButton.onclick = function() {
      showSection(domUnregisteredDevicesSection, domShowUnregisteredDevicesMenuButton);
  };
  domShowHelpMenuButton.onclick = function() {
      showSection(domHelpSection, domShowHelpMenuButton);
  };

  domUserPic.onclick = function() {
      showSection(domUserProfileSection, null);
  };

  domNewGroupButton.onclick = function() {
      domAddGroupButton.disabled = true;
      showSection(domAddGroupContainer);
      domTitleInput.value = '';
      domGroupInput.value = '';
      domMessageInput.value = '';
  };

  domNewGroupDismissButton.onclick = function() {
    gotoLastBreadcrumb();
  };

  // Bind Sign in button.
  domSignInGoogleButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
  

      //  domEmailTextField.addEventListener('keyup', function(e) {
	  //	  console.log("key-code="+e.keyCode)
	  //	      emailAndPasswordButtons()
	  /*
	if(e.keyCode === 13) {
	    e.preventDefault();
	    var input = this.value;
	    alert(input);
	}
	  */
      //    });


    domPasswordTextField.addEventListener('keyup', function(e) {
	  //	  console.log("key-code="+e.keyCode)
	      emailAndPasswordButtons()
	      if(e.keyCode === 13) {
		  signInUsingEmail()
	      }
    });

  domSplashPage.style.display = '';
  domSignInButtonsContainer.style.display = '';
  domSignInEmailContainer.style.display = 'none';

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

}, false);


//  Firebase

//  Google Charts
//    https://developers.google.com/chart/interactive/docs/reference
//    https://developers.google.com/chart/interactive/docs/gallery/table
//    https://developers.google.com/chart/interactive/docs/gallery/table#customproperties
//    https://developers.google.com/chart/interactive/docs/examples#custom_table_example
//    https://developers.google.com/apps-script/articles/charts_dashboard

//  MDL color
//    http://blog.jonathanargentiero.com/material-design-lite-color-classes-list/


/*

testtheme #/#,#/#,#/#,#/#,#/#,#/#
settheme #/#,#/#,#/#,#/#,#/#,#/#

dashboards [tag]
users [tag]

user Y5PJ1DEZ40ZFw6kJWdJixcWBrdF3 views foo bar

tag nyc
tag nyc scott ny

create {
  title : "test #4",
  message : "message #4",
  group: "1111",
  tags: "nyc scott"
}

adddashboard [{ title : "test #4", message : "message #4", group: "1111", tags: "nyc scott" }]

search x

mac grey
testtheme #000/#fff,#333/#ccc,#666/#000,#999/#000,#666/#fff,#fff/#000
mac black

*/




