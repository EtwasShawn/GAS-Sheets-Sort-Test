/*Script to to sort a spreadsheet by timestamp values
Author: Shawn Hodgson
Last Update: 2/24/2018
http://shawnjhodgson.com/2014/08/forms-sort-responses-by-timestamp/
*/

//For Descending:
function sortSpreadSheetD(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    //Change Form Responses 1 to your sheetname
    var sheet = ss.getSheetByName("Form Responses 1");
    var range = sheet.getRange(2,1, sheet.getLastRow(), sheet.getLastColumn());
    range.sort({column: 1, ascending: false});
}

//For Ascending:
function sortSpreadSheetA(){
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    //Change Form Responses 1 to your sheetname
   var sheet = ss.getSheetByName("Form Responses 1");
   var range = sheet.getRange(2,1, sheet.getLastRow(), sheet.getLastColumn());
   range.sort({column: 1, ascending: true}); 
} 