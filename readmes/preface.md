
# Windows Subsystem for Linux 
 
## Overview  
 
Web Development on Windows can be a bit tricky because unlike OSX or Linux, Windows does not run in a POSIX environment. Much of the software you use as a developer is designed to run in POSIX environments, and many of the web's servers are also running in some POSIX environment as well. This causes problems because Windows uses different console commands and not all of those commands translate over to POSIX very well. 
 
There have been many different workarounds to this problem: Dual-booting or VMing a Linux distro, terminal wrappers, Windows versions of the software, solutions for Windows specific issues, etc. Each of these workarounds has their pros and cons, but in the end it really just takes time to try and figure out how to proceed when all you really want to do is just get back to work. 
 
Windows has released a feature available to all PCs running on Windows 10 called Windows Subsystem for Linux ( WSL for short). WSL gives you the ability to add a Linux distro like Ubuntu and mount it directly to the Windows File System. After some setup, this gives you a native POSIX / Unix-like environment that you can use directly through Windows, solving the root cause of most of the problems. Windows also offers a free [Ubuntu App](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6) from the Microsoft store called which hooks in perfectly with WSL.
 
There are some caveats though: 
 
1. The Subsystem does not have access to a GUI, so it cannot run any programs that need one, IE: browser, editor. It is strictly a command line. 
1. **You cannot edit the Subsystem's files through Windows or any Windows apps**. The Subsytem can edit both Windows and it's own files just fine though. 
 
## Workflow 
 
Number 2 seems like a huge problem though right? 

It's actually not. It's all in the workflow! 
 
Essentially, we use the Subsystem for two things: 
 
1. To install and run our programs, and 
1. To give us a shell that allows us to issue Unix-like commands in our Windows FS. 
 
The vast majority of issues with Web Development on Windows stems from not being able to run software in POSIX environments, and the inability to issue POSIX or Unix-like commands. Since the Subsystem is directly mounted to you Windows File system, it has access to your files. That means anything you install in the Subsystem can use those files, and run them through the software in it's POSIX environment successfully! You can also use the `WSL` command in the Windows Shell to turn it the Subsystem's command line, enabling you to issue commands directly. 
 
The typical workflow looks like this: 
1. Open Windows PowerShell and type `wsl`. 
- This enters you into the POSIX shell at your current user's root level. 
2. Work normally, doing everything in the Windows FS, under `WSL`.  
3. When you need a new software, navigate to the Subsystem's FS and install the program through the command line. 
4. Navigate back to the Windows FS and use the software as needed. 
- Since the software is connected through the PATH, it runs just fine. 

## Summary

In Summary, WSL fixes many of the issues Windows users run into during web development by giving them access to a POSIX environment in which to run their programs an to issues their commands. Unlike other options, WSL is not a wrapper or an emulator, it is truly a Linux distro running on your Windows FS. This overcomes the issues that other wrappers have, and cuts down on the setup needed to get emulators or VMS setup and running.

The work flow is also extremely simple as you are just working in a terminal like usual, except you will be installing your programs on the Subsystem's FS instead of the Windows FS.

## Getting Started

[Setting up WSL and the Ubuntu App](./WSL_Ubuntu_setup.md)
