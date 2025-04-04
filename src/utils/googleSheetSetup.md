
# Setting up Google Sheets Integration

Follow these steps to connect your waitlist form to Google Sheets:

1. **Create a Google Sheet**:
   - Create a new Google Sheet
   - Add column headers in the first row: `Email`, `Timestamp`, `Source`

2. **Set up Google Apps Script**:
   - Open your Google Sheet
   - Click on `Extensions` > `Apps Script`
   - Delete any code in the editor and paste the following code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.email,
    data.timestamp,
    data.source
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'method': 'get' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy as a Web App**:
   - Click on `Deploy` > `New deployment`
   - Select `Web app` as the deployment type
   - Set `Who has access` to "Anyone"
   - Click `Deploy`
   - Copy the Web App URL provided after deployment

4. **Update Your Code**:
   - Replace `YOUR_GOOGLE_SHEET_SCRIPT_ID` in the CTA.tsx file with your actual deployment URL
   - Example: If your URL is `https://script.google.com/macros/s/AKfycbz1234567890abcdef/exec`, you would replace it with `AKfycbz1234567890abcdef`

5. **Testing**:
   - Fill out the form on your website
   - Check your Google Sheet to confirm the data is being recorded

**Note**: The Google Apps Script has CORS limitations, which is why we use the 'no-cors' mode in the fetch request. This means we won't get detailed error responses, but the integration will work.
