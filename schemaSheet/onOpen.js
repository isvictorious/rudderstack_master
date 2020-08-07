function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Scripts')
      .addItem('Check outliers', 'main')
      .addItem('Create aggregate sheet', 'createAggregateSheet')
      .addToUi();
}