### Synopsis: 

Pathing from Windows FS to Linux FS is not hierarchical, breaking NPM's functionality when it tries to use globally installed packages on the Windows FS. As such, it is recommend to add a package.json to a top-level directory at or directly up the tree from where all coding work is held. This will allow you to install packages at this level to act as the Windows global package install location. This also requires navigating to that top-level directory when you wish to install something globally on the Windows FS, as the `-g` flag would install it on the Linux side. 

### Explanation:

When using WSL, Node's NPM pathing can break down as NPM looks UP a given file structure tree for a directory called node_modules, and then looks into that directory for the specific package. If the package is not there, it continues to look up the tree until it has reached the top of the FS tree, at which point it stops.

With the WSL feature, the two overall FS trees ( Linux and Windows)  are connected, but are NOT hierarchical. One is not above the other, they are mounted together in a different area. As such, when you install a package with the `-g` flag, it will be put into the Linux FS, and as the Windows side looks for it, it will never reach that location.

In addition, when you install something with the `-g` flag, it will be the Linux version of it because the default location for `-g` is on the Linux side, so even if Windows could look that way, it likely wouldn't be able to use it. This means that programs that either need access to a package, need a package to be a Windows version, or both, typically cannot use anything under the `-g` default location.

A solution for this is to create an NPM package.json at the top-level of the Windows directory that contains all of your dev work and projects ( or anything directly up the tree from it ). This npm package should be treated as and will act as the Windows's unofficial "global" location. **Note:** _This will not change the `-g` flag's default location, and you shouldn't change it either. You will have to manually move to this location when you want to install something here._

This allows any of your projects ( which are directly below it) to look up their file structure tree and eventually find a "globally" installed package just like normal. In addition, NPM will install the package's appropriate OS version.


### Workflow: 

The workflow change really only requires a one time extra step of adding the package.json to the Windows FS, and then knowing where and how to install different packages:

I usually install shell utilities such as `nodemon`, `live-server`, and other software I want run in a Linux environment by using the `-g` flag. These are things that won't be needed on the Windows side. Anything else will go on the Windows side. 

IE: `sudo npm install -g live-server` // Can be executed from anywhere.

Anything that I want to be "global" on the Windows side, like `eslint`, and a default `.eslintrc`, or other VSCode extensions`,  I install at the top-level Windows FS directory that holds all of my dev work. That way the package is added to the node_modules at that level and not at the project level. 

IE: `cdwr` then `npm install eslint` // the `npm install <package>`  must be executed at the top-level location in order for it be added to that level's node_modules, and for it to act as a "global" package for all other projects below it.

Then, as I work on a given project, I install any of it's package dependencies at the project level like a normal flow would.

IE:

1. `npm install <package>` // Executed at the project level to add to that project's dependencies.

### Summary:

#### One time setup:

1. Install Node on Linux distro.
1. Navigate to the top-level of your directory containing all of your code work. IE : `/Users/<user>/coding/` 
1. Once there, type `npm init -y` to create a basic package.json. 

#### Workflow:
1. When you want to install a package that is not needed on Windows, use the `-g` flag.
1. Otherwise, install it at the top-level of your coding directory...
1. Unless it's project specific, which should be installed wherever that project's package.json is location at.

**Note:**
I wouldn't worry about adding an alias for this specifically either. Your top-level directory should already be under `cdwr` or near it ( if you followed the WSL pre-work) so you can navigate to it easily, and you will likely be installing most global packages once, and early on, dropping rapidly in frequency as time goes on. In other words, you likely only need to install something globally a couple times, so it's not worth bloating your .profile with an alias command that you likely will not need to use that often.
