function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Scripts')
      .addItem('Check outliers', 'main')
      .addToUi();
}