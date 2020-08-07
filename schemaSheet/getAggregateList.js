function createAggregateSheet(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const aggregatedObject = getAggregateList(ss);
  addAggregatedValuesToSheet(ss, aggregatedObject)
}

function getAggregateList(ss){
  
  const sheet = ss.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const aggregatedObject = {};

  for (let rowNumber = 7; rowNumber < data.length; rowNumber++) {
    for (let columnNumber = 0; columnNumber < data[rowNumber].length; columnNumber += 2) {
      const attribute = data[rowNumber][columnNumber];
      const value = data[rowNumber][columnNumber + 1];
      if (aggregatedObject.hasOwnProperty(attribute)) {
        if (aggregatedObject[attribute].hasOwnProperty(value)) {
          aggregatedObject[attribute][value]++;
        } else {
          aggregatedObject[attribute][value] = 1;
        }
      } else {
        aggregatedObject[attribute] = {
          [value]: 1,
        }
      }
    }
  } 
  return aggregatedObject;
}

function addAggregatedValuesToSheet(ss, aggregatedObject){
  const aggregateSheet = ss.insertSheet(ss.getActiveSheet().getName() + '-aggregated');
  const newRows = [];

  for (let attributeName in aggregatedObject){
    const attribute = aggregatedObject[attributeName];
    for (let value in attribute){
      const count = aggregatedObject[attributeName][value];
      newRows.push([attributeName,value,count]);
    }
  }
  if (newRows[0]){
    const pasteRange = aggregateSheet.getRange(1,1,newRows.length, newRows[0].length);
    pasteRange.setValues(newRows);
  }
  
}