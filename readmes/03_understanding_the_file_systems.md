# Understanding the File Systems

Before we dive into how to use the Ubuntu App and WSL, lets talk about one of the most important things, which is **knowing your File Systems**

There are 2 files systems here:

1. The Windows FS
2. The Ubuntu FS.

It is very important to know which file system you are in.

- Open the Ubuntu app and type `pwd`. Assumuing you haven't changed anything yet, you'll notice that it says something like `/home/<your username>`.

This `/home/` means that you are in the Ubuntu FS. 

- Now type `cd ../../` to bring you to the level above `/home/`, then type `ls`. This is the top-most level of the Ubuntu FS.

- Now type `cd mnt/` and then type `ls`. You should see at least 1 directory, but possibly more. These directories are the names of your Windows Drives. Typically your hard drive is under letter `c`, but this is where Ubuntu connects with your Windows FS. 

### Windows Files

- Type `cd <hard_drive_letter>`, then `ls`. This will now show you the top level of your hard drive. You may likely see some errors like `Cannot Read Symbolic Link` and ` Permission denied`. You can ignore these errors. Symbolic links are just shortcuts to files which Ubuntu cannot interpret, and keeping permissions as they are is highly recommended. You will likely never have a situation where you need to handle permissions between Windows and Ubuntu, as you will never need to edit or install any Windows system files with Ubuntu or vice versa.

You are actually in the Windows File System now as well! If you were to create a file here, you would be adding it to the Windows File System, and it would be a Windows file. This is important because one of the rules here is that while **Ubuntu can _read and write_ both** Ubuntu and Windows files, **Windows can only _read and write_ Windows files**, and **_read_ Ubuntu Files**, but it **_cannot_ write Ubuntu files**. Knowing which files belong to which FS is important because of this. 

- Now type `cd ~` then `pwd` to bring you back to your root. Can you guess where it takes you? Back to your Ubuntu User's root. This is nice, but also kind of tedious since most of our work is going to be done on the Windows FS side, and typing cd `../../mnt/c/Users/<user>` at the beginning of everything would get old fast. No worries though, the next section will show you a neat trick to make navigating between the two FS's much easier!

### Ubuntu Files

- Now that you are in your Ubuntu User's root, type `ls -a` to show all hidden files. Notice that you have a `.profile` file. This is where your terminal's profile settings are stored. This is also an Ubuntu file because it is on the Ubuntu FS. You can't edit this file through Windows, or a Windows program or app, as it wouldn't work. You might see the changes show up in the file, but it will not be read correctly anymore.

In the off chance that you do need to edit a Ubuntu file then you should use the built in code editor called nano, or use the CLI to install a different one. Just remember that you cannot use a GUI here, so you must edit Ubuntu files through the command line.

### Updating your Terminal

Click [Next](04_updating_terminal.md) to update your Terminal's look and feel! 
