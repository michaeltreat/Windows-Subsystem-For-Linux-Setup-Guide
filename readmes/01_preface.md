
# Windows Subsystem for Linux 
 
## Overview  
 
Web Development on Windows can be a bit tricky because unlike OSX or Linux, Windows does not run in a POSIX environment. Much of the software you use as a developer is designed to run in POSIX environments, and many of the web's servers are also running in some POSIX environment. This causes problems because Windows uses different console commands and not all of those commands translate over to POSIX very well. 
 
There have been many different workarounds to this problem: Dual-booting or VMing a Linux distro, terminal wrappers, Windows versions of the software, solutions for Windows specific issues, etc. Each of these workarounds has their pros and cons, but in the end it really just takes time to try and figure out how to proceed when all you really want to do is just get back to work. 
 
Windows has released a feature available to all PCs running on Windows 10 called Windows Subsystem for Linux, otherwise known as WSL. WSL gives you the ability to add a Linux distro like Ubuntu and mount it directly to the Windows File System. You can install the [Ubuntu App](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6) for free in the Microsoft store so that you can use the Ubuntu terminal and run command line utilities including bash, ssh, git, apt, etc. There are other Linux distros supported as well like Debian, SUSE, Arch, and Kali.

After some setup, this gives you a native POSIX / Unix-like environment that you can use directly through Windows, solving the root cause of most of the problems. 

_**However**_, there are a few caveats:
 
1. The Subsystem does not have access to a GUI, so it cannot run any programs that need one, IE: browser, editor. It is strictly a command line. 
1. **You cannot edit the Subsystem's files through Windows or any Windows apps**. The Subsytem can edit both Windows and it's own files just fine though. 
 
## Workflow 
 
You'd think #2 would be a **huge** problem, right?!

It's actually not. It's all in the _workflow_!
 
Essentially, we use the Subsystem for two things: 
 
1. To install and run our programs, and 
1. To give us a shell that allows us to issue Unix-like commands in our Windows FS. 
 
The vast majority of issues with Web Development on Windows stems from not being able to run software in POSIX environments, and the inability to issue POSIX or Unix-like commands. Since the Subsystem is directly mounted to your Windows File system, it has access to your files. That means anything you install in the Subsystem can use those files, and  successfully run them through the software in it's POSIX environment! You can also use the `WSL` command in the Windows Shell to turn it into the Subsystem's command line, enabling you to issue commands directly. 
 
The typical workflow looks like this: 
1. Open whichever Linux distro you are using, which is just like opening a terminal window.
1. Work normally, doing everything in the Windows FS.  
1. When you need new software, navigate to the Subsystem's FS and install the program through the command line. 
1. Navigate back to the Windows FS and use the software as needed. 
- Since the software is connected through the PATH, it runs just fine. 

## Summary

In Summary, WSL fixes many of the issues Windows users run into during web development by giving them access to a POSIX environment in which to run their programs and to execute their commands. Unlike other options, WSL is not a wrapper or an emulator, it is a native Linux distro running on the Windows FS. This overcomes the issues that other wrappers have, and cuts down on the setup needed to get emulators or VMs setup and running.

The work flow is also extremely simple as you are just working in a terminal like usual, except you will be installing your programs on the Subsystem's FS instead of the Windows FS.

## Getting Started

[Setting up WSL and the Ubuntu App](./02_WSL_Ubuntu_setup.md)
