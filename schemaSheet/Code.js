function main() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  const obj = createRepeatedRangeObject(sheet);
  setBackgroundColors(sheet, obj);
}

function setBackgroundColors(sheet, obj){
  let currentMin = 1;
  const { addresses, maxColumns } = obj;
  const colorIncrement = 500 / maxColumns;

  for (let key in addresses){
    const paramAddresses = addresses[key];
    const redness = paramAddresses.length * colorIncrement > 255 ? 255 : paramAddresses.length * colorIncrement;
    if (redness < 255){
      const rangeList = sheet.getRangeList(paramAddresses);
      rangeList.setBackgroundRGB(255, redness, redness);
    }
  }
}

function createRepeatedRangeObject(sheet) {
  const values = sheet.getDataRange().getValues();
  const obj = {
    maxColumns: values[0].length,
    addresses:{}
  };

  for (let row = 6; row < values.length; row++) {
    for (let col = 0; col < values[0].length; col += 2) {
      const value = values[row][col];
      if (obj.addresses[value]) {
        obj.addresses[value].push(getColLetter(col) + (row + 1) );
      } else {
        obj.addresses[value] = [getColLetter(col) + (row + 1)];
      }
    }
  }
  Logger.log(obj);
  return obj;
}

// I wish I'd written this
// https://stackoverflow.com/questions/21229180/convert-column-index-into-corresponding-column-letter
const getColLetter = (X = (n) =>
  (a = Math.floor(n / 26)) >= 0
    ? X(a - 1) + String.fromCharCode(65 + (n % 26))
    : "");
