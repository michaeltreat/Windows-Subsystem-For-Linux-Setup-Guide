# Installing VSCode, Node.js, and Git

At this point, you and your system are totally ready to start developing, so lets get some helpful developer tools and software downloaded and installed.

This section will also talk about why to install something on Windows vs Ubuntu vs Both.

After finishing this doc you will have VSCode, Node.js, and Git installed on your machine.

## VSCode

VSCode is a code editor that comes with many helpful features to streamline your development process. It also comes with an integrated terminal, debugging capabilities, and a very helpful built-in source control UI.

VSCode is where you will doing the vast majority of your work. Since VSCode relies on a GUI, this will be installed on through Windows, not Ubuntu.

1. Vist [VSCode](https://code.visualstudio.com/?wt.mc_id=adw-brand&gclid=Cj0KCQjw5-TXBRCHARIsANLixNw00R2vbdqnzLml-GvzCgbyqmgcAb9kyRQsC5LAPVS6tuBDZ9ws9pgaAsiLEALw_wcB) to download VSCode.
1. Launch the installer and follow the onscreen prompts.
1. When you reach the section for `Additional tasks`, make sure every box is checked.
1. Click install and continue to follow and onscreen prompts.

Once you are done, you can open up a terminal (the Ubuntu App) and type `code` to open VSCode. This may or may not require a restart first. 

Notice how Ubuntu knows about a program that is installed on the Windows FS? This is because WSL is able to connect both PATHs together!

### Notes on VSCode

1. Remember that Windows and Windows programs cannot edit Ubuntu files. If you try, you may get a permission denied error or end up with a broken file. If you need to edit Ubuntu files, use Ubuntu's built in editor nano, or another Ubuntu command line editor.
1. When you open VSCode, you will likely see an error about it not being able to find Git. We will address that later on in this doc. 
1. VSCode comes with an integrated terminal. By default, it will use the Windows PowerShell program. Check out [this doc]() for more information on how to use WSL and Ubuntu inside of Windows PowerShell.


## Node.js - Version 10.x

JavaScript was initially  run client-side in the browser, but the with addition of Node.js, it gained back-end capabilities. Node.js is a runtime environment built off of Chromes V8 JavaScript engine.

You will be using Node.js to add tools, libraries, and frameworks to your projects, and you will also use it as a REPL environment for working on your code.

We will be installing Node.js through the Ubuntu Command Line Interface, using Ubuntu's apt. We are installing it on the Ubuntu FS because it is software that does not need a GUI and we want it to run in a POSIX environment. Having said that, it is likely you will never have a problem running Node if you install it through Windows as well, but it is recommended that you try to stick to this pattern of installing as much of your software onto Ubuntu as possible, and only installing it through Windows when necessary, as this may save you from potential POSIX problems in the future.

1. Open the Ubuntu app and type `cd ~` to bring you into the Ubuntu FS.
1. Type `sudo apt-get update`. This will tell Ubuntu's apt tool to update.
1. After it is done updating, copy these two lines and paste them into the terminal:

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```
The first line will handle getting everything ready. 
The second line will show up once the first line has finished. Press enter when the second line shows up in your terminal.

### Verify Node Installation

1. Close and re-open the app.
2. Type `node -e 'console.log("works")'`
3. If you get a response back that says `works` then you're all good to go!


## Git

Git is a version control system that allows you to track your projects' changes over time, and allows for an extremely collaborative process to exist.

In our case, we have an uncommon situation when it comes to Git. Git is already installed on Ubuntu as it comes built in and ready to use right out of the gate, so that's totally good to go.

VSCode however also uses Git for it's source-control tool to work. But since VSCode is a Windows application, it doesn't know how to use Ubuntu's version of Git. On top of that, if VSCode ever needed to manipulate one of the Ubuntu Git's files, it would break since Windows Applications cannot manipulate Ubuntu Files.

This is why it is recommended that as much of your software is installed on Ubuntu as possible, so that they can talk to each other and update each other's files easily. In this case, we needed VSCode on Windows, and it just so happened that VSCode needs git, so in these situations, it is totally fine to install both pieces of software on the Windows FS.

But now there are two versions of Git installed right? Correct. The nice thing about WSL is that because of the way the PATH is setup, it knows which one to use and when. More on that after we install Git on Windows.

1. Visit [git-scm.com](https://git-scm.com/) to download and install Git.
2. Follow the onscreen instructions. 
- Choose the default values for each prompt
- **EXCEPT** when it asks you to `Choose the default editor used by Git`, click the drop down and choose the VSCode option. 
- This will allow you to handle merge conflicts in your editor instead of in your command line which is another reason to have Git on Windows as well.
3. Continue choosing the default options to finish the installation.

NOTE: Git for Windows also comes with a terminal called Git Bash. This is what a lot of Windows users have used in the past as their solution to the POSIX / Unix-like terminal problem. We will be using the Ubuntu app instead.

### Verifying Git

Now that we have Git installed on both of the file systems, lets check which Git Ubuntu is using. 

1. Open a new terminal (the Ubuntu App) and type `whereis git`. This will show you all the places git is on your computer.
1. Now type `which git`. This will show you which git is executed when you type `git`. Notice that it only shows the one in Ubuntu - that is the git that will be used when you are in your terminals.
1. Now type `code` to open VSCode.
1. Then, inside the editor, press `Ctrl + Shift + U` to open the output section. To the right of the output there is a drop down. Choose the one that says Git.
1. It should say something like this: `Using git 2.17.0.windows.1 from C:\Program Files\Git\cmd\git.exe`
    - This means that it will use this Git to handle it's source control tool.

### Set the Git Config

The final step here is to add your email and name to the Git config. This will allow you to commit and push things to GitHub. Make sure to include the space after `.email` and `.name`, and always remember to close your quotes ' ' and " ".

1. Type `git config --global user.email 'your email here in single quotes'`.
1. Type `git config --global user.name 'Your Name In Single Quotes'`.

Once you are done, type `git config -l` and verify that it has your name and email saved correctly.

### Wrapping up

Now is a good point to quickly review everything we've done so far

1. We installed WSL and the Ubuntu app, and successfully set them up.
1. We learned about the differences between the Ubuntu FS and the Windows FS, and how to work with them together.
1. We updated our terminal's appearance, and we added an alias to help us navigate between our two file systems.
1. We installed VSCode, Node.js, and Git.

At this point you are totally setup to start programming! There are two final sections left to complete. They will cover:

1. Workflow regarding directories and files.
1. Quality of life things like linters, plugins, and CLI tools.

Check out the [Final Steps](06_final_steps.md) to finish up!

