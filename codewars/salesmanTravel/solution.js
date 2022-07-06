/*
* Input: string r and string zipcode
* Output: string
*
* Rules:
street numbers in same order as streets where they belong
* output format:
zipcode:street and town,street and town,.../house number,house number,...

zipcode followed by : followed by list of street and town followed by list of
house numbers
street/town and house numbers separated by commas
street/town listing ends with (separated with / )
*
if zipcode not found in client list return "zipcode:/

split r by , separator
filter list of addresses for zipcode
pull out list of house/street
pull out list of house numbers
[ '123', 'Main', 'Street', 'St.', 'Louisville', 'OH', '43071' ]
state/zip are last two indexes
don't need 3rd from last (city)
1st index is house number

* */

/**
 * @param {string} r
 * @param {string} zipcode
 * @return {string}
 */function travel(r, zipcode) {
  const addresses = r.split(',').filter((s) => s.slice(-5) === zipcode.slice(-5));
  if (!addresses.length) return `${zipcode}:/`;
  console.log(addresses);
  return '';
}

r = '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432';

travel(r, 'OH 43071'); // "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, 'NY 56432'); //  "NY 56432:High Street Pollocksville/786"

travel(r, 'NY 5643'); // -- > 'NY 5643:/'
