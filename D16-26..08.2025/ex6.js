/*
What is ISO Format?
•	ISO stands for International Organization for Standardization.
•	In JavaScript (and many programming languages), when we say ISO format, we usually mean ISO 8601 date and time format.
•	It is a standardized way to represent dates and times across systems so that there’s no confusion.
ISO 8601 Format (Common Form)
YYYY-MM-DDTHH:mm:ss.sssZ
•	YYYY → Year (4 digits)
•	MM → Month (2 digits)
•	DD → Day (2 digits)
•	T → Separator (indicates that time starts)
•	HH → Hours (24-hour format)
•	mm → Minutes
•	ss → Seconds
•	sss → Milliseconds (optional)
•	Z → Timezone ("Z" means UTC, Coordinated Universal Time)


*/
let now = new Date();
console.log(now.toISOString());

