/*
* Build a function that parses a string of email data.
* Input:
*
* Returns:
* number of email messages found in the string
* date range of the email messages
*
* Rules:
* email messages string
* - contains multiple email messages separated by delimeter '##||##'
* - each email message has 5 parts the delimeter separates the parts
*
* 5 parts
* sender subject date recipient body
* */

const MESSAGE_DELIMITER = '##||##';
const PART_DELIMITER = '#/#';

const dateFrom = (email) => {
  const datePart = email.split(PART_DELIMITER).at(2);
  return Date.parse(datePart.slice(7));
};

const format = (date) => {
  const options = {
    month: 'short', day: 'numeric', year: 'numeric', weekday: 'short',
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date)).replace(/,/g, '');
};

function mailCount() {
  const messages = emailData.split(MESSAGE_DELIMITER);
  const dates = messages.map(dateFrom).sort();
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));
  console.log(`Count of Email: ${messages.length}`);
  console.log(`Date Range: ${format(minDate)} - ${format(maxDate)}`);
}

mailCount();

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
