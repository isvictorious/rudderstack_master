# rudderstack_master

In order to easily work with transferring these files to Google Apps Script, I recommend using Google's clasp tool.
https://github.com/google/clasp
Alternatively, simply make copies of the two sheets linked below. 

This is a set of scripts to draw data about event schema from Rudderstack and present them in an easy-to-understand report.

It is made of two components. A main sheet, which holds API keys, dataplane names and which is able to display the data for events associated with the selected dataplane.

In order to view the schema versions for each dataplane, it is necessary to run a script to create a new spreadsheet. This script can be found in the toolbar of the Rudderstack sheet under 'Scripts'

The links for these sheets are here: 

Rudderstack sheet: https://docs.google.com/spreadsheets/d/1wYZxrArTSJGDBgwa1rBFtna9pRTnsKmPOu-BXrbGWtM/edit#gid=1429822457
SchemaSheet template: https://docs.google.com/spreadsheets/d/1Mgp2pQIGBeiP_yXvkJVNbxJLJxd1ddvjKBMvolurgUk/edit?usp=sharing

Details about how to use each sheet are in the README files in the subfolders of this directory.

/**
    Coded by Dave Cook
    www.davecookcodes.com
*/