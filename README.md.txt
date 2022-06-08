Describe: pigLatin()

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single consonant."
Code: consonantCounter("b");
Expected Output: 1

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: vowelCounter("a");
Expected Output: "a" becomes "away"

Test: "It will add 'ay' to the end of words that begin with a consonant."
code: consonantCounter("b");
Expected Output: "b" becomes "bay"

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It ignores non-alphabetical characters since they can't be consonants."
Code: consonantCounter("*&$92%");
Expected Output: 0

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single consonant regardless of case."
Code: consonantCounter("B");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes multiple consonants in a single word."
Code: consonantCounter("cater");
Expected Output: 3

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes consonant in a multiple-word sentence."
Code: consonantCounter("cats catered the event");
Expected Output: 12

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes consonants in a multiple word sentence regardless of capitalization."
Code: consonantsCounter("CATS CATERED THE EVENT");
Expected Output: 12

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 12





































# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) 2022 Tyler Emmerson(s)_