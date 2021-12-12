# myFTP
## An FTP project by Xubeo (Lucas TOURNEAUX)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This project is a node.js project.

- This is a school project
- It's the first time that I custom a README file (and it's pretty cool)

## Features

- Multiple clients can connect to the same server
- You can use some commands (like USER or CWD/PWD)

## Tech

myFTP uses JavaScript, Babel and nodemon.


## Installation

Dillinger requires [Node.js](https://nodejs.org/) v14+ to run.

To install the dependencies, you'll need to use ``npm install`` in the client folder AND the server folder.

```sh
npm install
```
To run the project, you can use serveral commands:
```sh
npm run dev #For a dev environment
npm run start #Best perfomances
```

## Commands
Here are the commands you can type (some are not working):
- `USER <username>`: check if the user exist
- `PASS <password>`: authenticate the user with a password
- `LIST`: list the current directory of the server
- `CWD <directory>`: change the current directory of the server
- `RETR <filename>:` transfer a copy of the file FILE from the server to the client
- `STOR <filename>`: transfer a copy of the file FILE from the client to the server
- `PWD`: display the name of the current directory of the server
- `HELP`: send helpful information to the client
- `QUIT`: close the connection and stop the program

## License

Do you really think a shcool project will not be **open source** ? :)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
