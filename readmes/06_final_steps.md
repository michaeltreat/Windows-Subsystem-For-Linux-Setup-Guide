# Final Steps

This final section is here to help fill in the gaps that we missed along the way. Some things had to be left out of the previous sections to make the process quite a bit more smooth, so this section will fill in those missing pieces.

First, lets talk about Directory and File Structure Workflow.


## Directory and File Workflow

Up until this point we have mostly talked about installing programs and software, but we haven't talked much about the actual development workflow.

Fortunately, it's rather simple. Unlike our practice with trying to exclusively install programs and software on Ubuntu, our files and folders need to live exclusively on the Windows FS.

Remembering the rules about reading and writing files, can you think of why we have to keep our working files on the Windows FS? It's because Windows and Windows Apps can only read and write Windows files, and VSCode will be making our changes. If you stored your files on Ubuntu, VSCode would be pretty much useless as it would not be able to save any changes.

The other benefit here is that Ubuntu and all of the software you install on it **can** read and write Windows files, so it has no problems with it being on the Windows FS.

If you remember when we setup our .profile on Ubuntu, the very last line said `cdwr`. This is so we can always start directly in the Windows FS, at our user's root, or start directly into a Development folder that holds all of your work. This is because that is where you will be doing 99% of your work.

In summary, you should install all programs on the Ubuntu FS, but keep all of your project files on the Windows FS.

### NPM

NPM stands for Node Package Manager. It is very much like Ubuntu's APT, but it is meant to help developers using JavaScript. 

A common use case for NPM would be to install a package that you need for a project.
   - `sudo npm install cowsay` would tell npm to install the cowsay package. 
   - `const cowsay = require('cowsay')` bring that package into your project by requiring it in at the top of your app.js file (or any file ending in .js)

Another common use case would be to install a package that would help you in your development process.
  - `sudo npm install -g eslint` tells npm to install the package, but instead of it being used just for this project, you are telling NPM to install it globally with the -g flag. The only time you should install packages globally is when they are **not** crucial to a projects functionality. In this case, eslint gives us warnings and lets us know when we make syntactical mistakes, but the program will run just fine without it.

**NOTE** - If a program from the Windows FS needs to use something from npm (like VSCode needs ESlint) then you should install it globally and also on your Windows Root. 

This is becaue npm usually looks up the file system tree up to the root to find installed packages. Globally installed packages are in the Ubuntu FS and the Ubuntu FS is not actually a parent node on that tree. If your project or a Windows program needs a package, you should typically either install that package on the Windows root, or that project's root. If you just need to run the package (like jest or nodemon) you can install it globally and the terminal will know where to find it.

## Quality of Life

There are many tools that will help you as a developer that are not actually needed in order to run the programs you are working on. These can be considered Quality of Life enhancers; tools and software that help you in your development process by making things faster and easier. Basically, these are things that will make your life as a dev easier. 

Some of the more common ones include: 

1. Linters (eslint)
1. Source / Version Control (git and github)
1. Auto / Tab completes (scripts and vscode)
1. Syntax highlighting (vscode)
1. Command Line Tools (scripts)
1. Mini Maps
1. Testing Software
1. Screen Shares

None of those are crucial in the actual running of your applications, but they will help your process as you are developing the software.

### VSCode Extensions

Extensions are small snippets of code that extend the functionality of the VSCode editor in some way. We will see an example of using the ESlint extension in the next section.

1. To add extensions to VSCode, open up VSCode and press `Ctrl + Shift + X`. 
1. The window that pops open may be a bit small, so hover over the edge and pull it to the right to expand it a bit. This will let you see the images and more info about extensions.
1. Some basic recommended extensions : `eslint, open in browser, Debugger for Chrome, html snippets, prettier`

We will be using ESlint in the next section so make sure you grab that one, but you can read info about the other ones in VSCode.

### Linters and ESlint

One of the most important tools you will need is a linter. This section will help you get that set up. 

#### What is a Linter? 
A linter is a program or tool that will scour your code looking for common syntax errors and alert you to them right away. This helps you immensely since you do not have to wait for your programs to run first before finding the bugs.

Another common term is a linter file. A linter file defines the rules you want the linter to look out for. For example, you can tell the linter program to always alert you if your indentation is off, warn you if you forgot to use semicolons, and ignore errors involving trailing commas, etc.

Linters are also extremely useful when you are learning to code, as it helps you adhere to a stricter, more conventional code writing style. Without one it can be easier to ignore your indentations, which will not only look sloppy, but it will make the development process harder to follow and learn. 

Lets get one setup!

#### ESlint

[ESlint](https://eslint.org/) is one of the more common JavaScript linting tools available. It has great documentation, is well supported, and is very customizable.

Let's install ESlint globally to our system.

1. Type `cdwr` to move to the Windows root, then type `sudo npm install eslint`.
- By moving to our root, we are effectively installing this package globally on the Window's FS, allowing VSCode and other programs to use it.
- If we use the `-g` flag here instead, it would be installed in the root of your Ubuntu user, and since VSCode is not be able to look up that way it would not be able to use this package.
2. Type `touch .eslintrc`. The touch command will create the ESlint file we talked about earlier which will define our rules. 
3. Type` code .eslintrc`. This will tell VSCode to open this file.
4. Copy the code below and paste it into the `.eslintrc` file:

```
{
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "space-infix-ops":"error",
    "use-isnan":"warn",
    "valid-typeof":"error",
    "default-case":"warn",
    "camelcase":"error",
    "new-cap":"error",
    "no-console":"warn",
    "no-empty-function":"warn",
    "no-redeclare":"error",
    "no-unused-vars":"error",
    "no-unused-expressions":"error",
    "no-trailing-spaces":"warn",
    "no-undefined":"error",
    "no-undef":"error",		
    "no-mixed-spaces-and-tabs":["warn","smart-tabs"],
    "strict":["error", "global"],
    "eqeqeq":["error","always"],
    "indent": ["error", 2],
    "quotes": ["error",	"single"],
    "semi": ["error",	"always"],
    "comma-dangle": [
      "error", 
      {
        "arrays": "never",
	"objects": "always",
	"imports": "never",
	"exports": "never",
	"functions": "ignore"
      }
    ]
  }
}
```

This is a .eslintrc file, and it defines a bunch of basic rules that will help with development. 

# THE END!  

Congrats, you're all done! Great job making it through this doc! One of the reasons this doc is a bit more lengthy than the rest is because we are using a Hybrid system with WSL. It is not as straight forward as just working in one OS and one FS, but the benefits here are great! 

If you found this guide beneficial then please reach out to me and let me know! Even just a comment on this guide would be greatly appreciated! Thanks and good luck!

**Don't forget to run `sudo apt-get upgrade` when you have time!**
