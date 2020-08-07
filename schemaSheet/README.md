# schemaSheet

This sheet serves as a template to display the schema for the rudderstack datamodels. Since this sheet contains no formatting a new copy can be created very easily by cloning this repo, deleting the `.clasp.json` file, and using the command `clasp create` in the terminal. Choose `spreadsheet` when prompted and then `clasp push` to populate the new document with the scripts.

When creating a new copy of this sheet, remember to update the `globals` file in the Rudderstack sheet to include the id of your copy under the `sheet_ids > template > id` attribute.

There are two scripts in this sheet, both of which only act upon whichever sheet is currently active. 

Check outliers - highlights the values in the sheet which appear less frequently, with the least frequent appearing in dark red and more frequent schema attributes being shaded in progressively lighter reds.

Create aggregate sheet - adds a new sheet with a simple count of the number of appearances of each attribute in the active sheet.

/**
    Coded by Dave Cook
    www.davecookcodes.com
*/