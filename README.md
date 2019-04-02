# _Doctor API_

#### _Asynchrony and APIs, 03.22.19_

#### By _**Leo Mangutov**_

## Description

_This is a webpage that takes in a users symptom and searches the Better Doctor API for results in Portland, OR. The website can also take in a doctors last name to see if any doctors come up by that last name in Portland._

## Specification
* _This program will take in a users symptom and find doctors in Portland that can treat that symptom._
* _Program will let users enter also a doctors last name to search for in the Portland area._
* _The inputs will list the doctors match the search criteria._
* _Takes user input for cold symptom._
    * _Example Input: cold._
    * _Example Output: Name: Melanie Plaut
                             Street: 3550 N Interstate Ave
                             Portland, OR 97227
                             Phone Number: 5033316142_
* _Takes user input for smith last name input._
    * _Example Input: smith._
    * _Example Output: Name: Eli Klovee-Smith
                             Street: 10123 SE Market St
                             Portland, OR 97216
                             Phone Number: 5032512500

## Setup/Installation Requirements

* _Clone this repository_
* _Run the command: `$ npm install` in terminal_
* _Apply for an API key at <a href="https://developer.betterdoctor.com/">Better Doctor</a>_
* _Create a .env file_
* _Put API key in the .env file under the name "exports.apiKey"_
* _Run the command: `$ npm run start` to open application in browser_


## Known Bugs

_No known bugs_

## Support and contact details

_If you have any questions contact me at <a href="mailto:leo.mangutov@gmail.com">Leo Mangutov</a>_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Atom_
* _JavaScript_
* _jQuery_
* _NPM_
* _Webpack_
* _jasmine_
* _Karma_

### License

* Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 **_Leo Mangutov_**
