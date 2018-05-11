
# Windows Subsystem for Linux 
 
## Overview  
 
Web Development on Windows can be a bit tricky because unlike OSX or Linux, Windows does not run in a POSIX environment. Much of the software you use as a developer is designed to run in POSIX environments, and many of the web's servers are also running in some POSIX environment as well. This causes problems because Windows does use different console commands and not all of those commands translate over to POSIX very well. 
 
There have been many different workarounds to this problem: Dual-booting or VMing a Linux distro, terminal wrappers, Windows versions of the software, solutions for Windows specific issues, etc. Each of these workarounds has their pros and cons, but in the end it really just takes time to try and figure out how to proceed so you can get back to work. 
 
Windows has released a feature available to all PCs running on Windows 10 called Windows Subsystem for Linux ( WSL for short). WSL gives you the ability to add a Linux distro like Ubuntu and mount it directly to the Windows file system. After some setup, this gives you a native POSIX / Unix-like environment that you can use directly through Windows, solving the root cause of most of the problems. 
 
There are some caveats though: 
 
1. The Subsystem does not have access to a GUI, so it cannot run any programs that need one, IE: browser, editor. It is strictly a command line. 
1. You cannot edit the Subsystem's files through Windows or any Windows apps. The Subsytem can edit both Windows and it's own files just fine though. 
 
## Workflow 
 
Number 2 seems like a huge problem though right?  
It's actually not. It's all in the workflow! 
 
Essentially, we use the Subsystem for two things: 
 
1. To install and run our programs, and 
2. To give us a shell in our Windows FS that allows us to issue Unix-like commands. 
 
The vast majority of issues with Web Development on Windows stems from not being able to run software in POSIX environments, and the inability to issue POSIX or Unix-like commands. Since the Subsystem is directly mounted to you Windows File system, it has access to your files. That means anything you install in the Subsystem can use those files, and run them through the software in it's POSIX environment successfully! You can also use the `WSL` command in the Windows Shell to turn it the Subsystem's command line, enabling you to issue commands directly. 
 
The typical workflow looks like this: 
1. Open Windows PowerShell and type `wsl`. 
- This enters you into the POSIX shell at your current user's root. 
2. Work normally, doing everything in the Windows FS, under `WSL`.  
3. When you need a new software, navigate to the Subsystem's FS and install the program through the command line. 
4. Navigate back to the Windows FS and use the software as needed. 
- Since the software is connected through the PATH, it runs just fine. 
 
 
 
