/*2. Search and Extract

*/
const text = "Contact us at: support@example.com or sales@company.org";

// Find all email addresses
const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/g;
const emails = text.match(emailPattern);
console.log(emails); // ['support@example.com', 'sales@company.org']

// Extract dates
const dateText = "Event dates: 2023-12-25, 2024-01-01";
const datePattern = /\d{4}-\d{2}-\d{2}/g;
const dates = dateText.match(datePattern);
console.log(dates); // ['2023-12-25', '2024-01-01']