function formatSheet(sheet) {
  if (!sheet) sheet = SpreadsheetApp.getActiveSheet();

  let lastRow = sheet.getLastRow();
  const maxRow = sheet.getMaxRows();
  const rowDelta = maxRow - lastRow;
  Logger.log("maxRow", maxRow);
  Logger.log("rowDelta", rowDelta);
  Logger.log("lastRow", lastRow);
  if (rowDelta + 2 > 1 && lastRow - 1 > 1) {
    sheet.deleteRows(lastRow - 1, rowDelta + 2);
  }

  lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const maxColumn = sheet.getMaxColumns();

  const topRows = sheet.getRange(1, 1, 5, lastColumn);
  topRows.setBackground("#c9daf8");
  const otherRows = sheet.getRange(6, 1, lastRow - 6, lastColumn);
  otherRows.applyRowBanding(SpreadsheetApp.BandingTheme.BLUE, false, false);

  sheet.getDataRange().setFontFamily("Roboto Mono");

  for (let col = 2; col < lastColumn; col += 2) {
    const columnRange = sheet.getRange(1, col, lastRow, 1);
    columnRange.setBorder(
      false,
      false,
      false,
      true,
      false,
      false,
      "#45818e",
      SpreadsheetApp.BorderStyle.SOLID_MEDIUM
    );
  }
}
