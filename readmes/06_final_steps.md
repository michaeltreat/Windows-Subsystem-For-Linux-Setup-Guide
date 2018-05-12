# Final Steps

This final section is here to help fill in the gaps that we missed along the way. Somethings had to be left out of the previous sections to make the process quite a bit more smooth, so this section will fill in those missing pieces.

First, lets talk about Directory and File Structure Workflow.


## Directory and File Workflow

Up until this point we have mostly talked about installing programs and software, but we haven't talked much about the actual development workflow.

Fortunatly, it is acutally rather simple. Unlike our practice with trying to exclusively install programs and software on Ubuntu, our files and folders need to live exclusivly on the Windows FS.

Remembering back to the rules about reading and writing, can you think of why we have to keep our working files on the Windows FS? It's because Windows and Windows Apps can only read and write Windows files, and VSCode will be making our changes. If you stored our files on Ubuntu, VSCode would be pretty much useless as it would not be able to save any changes.

The other benefit here is that Ubuntu and all of the software you install on it CAN read and write Windows files, so it has no problems with it being on the Windows FS.

If you remember back to when we setup our .profile on Ubuntu, the very last line said `cd~`. This was so we can always start directly in the Windows FS, at our user's root, or start directly into a Development folder that holds all of your work. This is because that is where you will be doing 99% of your work.

In summary, you should install all programs on the Ubuntu FS, but keep all of you project files on the Windows FS.

## Quality of Life.

There are many tools that will help you as a developer that are not actually needed in order to run the programs you are working on. These can be considered Quality of Life enahncers; Tools and software that help you in your development process. 

Some of the more common ones inclde: 

1. Linters
1. Soure / Version Control
1. Auto / Tab completes
1. Syntax highlighting
1. Command Line Tools
1. Mini Maps
1. Testing Software
1. Screen Shares

None of those are crucial in the actual running of your applications, but they will help your process as you are developing the software.

### Linters and ESlint

One of the most important tools you will need is a linter. This section will help you get that set up. 

But what is a Linter? A linter is a program or tool that will scour your code looking for common errors and alert you to them right away. This helps you imensely since you do not have to wait for your programs to run first before finding the bugs.

Another common term is a linter file. A linter file defines the rules you want the linter to look out for. For example, you can tell the linter program to always alert you if your indentation is off, warn you if you forgot to use semicolons, and ignore errors involving trailing commas, etc.

Linters are also extremely useful when you a learning to code, as it helps you adhear to a stricter, more conventional style. Without one it can be easier to ignore your indentations, which will not only look sloppy, but it will make the development process harder to follow and learn.

Lets get one setup!

#### ESlint

[ESlint](https://eslint.org/) is one of the more common JavaScript linting tools available. It has great documentation, is well supported, and is very customizable.

Let's install ESlint globally to our system.

1. Type `sudo npm install -g eslint`.
- `npm` is Node Package Manager. It is similar to apt, but it is meant for packages that will be used with Node.js, which we installed in the previous step.
- The `-g` means to install this package globally, making it available to everything. You typically only want to install developer tools globally like this.

2. Type `pwd`. You should be at the root level of your Windows User, or in a Development directory if you set one up for your user.
3. Type `touch .eslintrc`. The touch command will create the ESlint file we talked about earlier which will define our rules. 
4. Type` code .eslintrc`. This will tell VSCode to open this file.
5. Copy the code below and paste it into the file:

```
```

