/*8. Date Validation (DD/MM/YYYY)
Regex: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

Explanation:

(0[1-9]|[12][0-9]|3[01]) - Day: 01-31
----------------------------------------
0[1-9] - Days 01-09
Explanation:
--------------
0 - Literal zero
[1-9] - Any digit from 1 to 9
Matches: 01, 02, 03, 04, 05, 06, 07, 08, 09

[12][0-9] - Days 10-29
Explanation:
-------------
[12] - Either 1 or 2
[0-9] - Any digit from 0 to 9
Matches: 10, 11, 12, ..., 19, 20, 21, ..., 29

3[01] - Days 30-31
Explanation:
------------
3 - Literal three
[01] - Either 0 or 1
Matches: 30, 31

\/ - Literal slash

(0[1-9]|1[0-2]) - Month: 01-12
---------------------------------
0[1-9] - Months 01-09
Explanation:
-----------
0 - Literal zero
[1-9] - Any digit from 1 to 9
Matches: 01, 02, 03, 04, 05, 06, 07, 08, 09

1[0-2] - Months 10-12
---------------------
Explanation:
------------
1 - Literal one
[0-2] - Any digit from 0 to 2
Matches: 10, 11, 12

\/ - Literal slash

\d{4} - Year: 4 digits

*/
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log(dateRegex.test("25/12/2023"));   // true
console.log(dateRegex.test("32/12/2023"));   // false (invalid day)
console.log(dateRegex.test("25/13/2023"));   // false (invalid month)