
# Part 1: Introduction into the Windows Subsystem for Linux
This section is a high-level overview about Linux as it relates to Windows. It provides context about why this feature is needed and why it's important. 

If you are already comfortable with this and just want to get to the install guide, move to [Page 2: Setting up WSL.](./02_WSL_Ubuntu_setup.md)

|Table of Contents|
|---|
|[Too Long, Didn't Read](#tldr)|
|[What is Linux?](#what-is-linux)|
|[Why use the Subsystem for Linux?](#why-use-the-subsystem-for-linux)|
|[What does WSL do?](#what-does-wsl-do)|
|[Workflow](#workflow)|
|[Summary](#summary)|
|[Page 2: Setting up WSL](#getting-started)|

## TLDR;

POSIX is a classification of a type of operating system. Mac and Linux are considered to be POSIX, but Windows is not. Windows as we know it doesn't run in POSIX, and this makes it difficult for some developers, especially webdevs, to develop on Windows as they need access to a POSIX environment.

The Windows Subsystem for Linux overcomes this limitation by allowing developers to access a fully integrated, native Linux environment that is directly mounted to their Windows OS. This means developers no longer have to Dual boot or use console wrappers like CYGWIN or Git Bash. They have a Linux Subsystem that is fully capable of running Linux Shell commands and POSIX Software on their Windows files.

There are some limitations, but those are easily overcome with a good work-flow and an understanding of how to interact between the two file systems. 

This next section will go in-depth between the differences between Windows, Mac, Linux, and explain more about POSIX, UNIX, and non- ~IX Operating Systems. This is here to broaden your understanding, but if you are already comfortable with this topic, then skip to [Why the Subsystem for Linux then?](#why-use-the-subsystem-for-linux)
 
## What is Linux?

When it comes to computers, most people tend to think in terms of Windows and Macs, or Microsoft and Apple. But what about Linux? Where does Linux fit into this picture? What even is Linux?

Linux is a *family* of operating systems that is open-sourced, and is modeled on UNIX. So what is UNIX then? 

UNIX is more of design structure and philosophy than it is an actual thing like we might think of when we say Mac, PC, or Linux. It's " [a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s at the Bell Labs research center..."](https://en.wikipedia.org/wiki/Unix)(- Wikipedia). Essentially, we use the term UNIX to describe a specific type of operating system, much like we do when we call something a Mac or a PC. The only difference here is that this is less of a specific operating system, and more of a description of one. IE: Macs are UNIX-like, and PCs are non-UNIX-like.

Linux and Macs are actually both considered 'POSIX', as both are derived from POSIX standards. Okay, so what is POSIX then?

POSIX (Portable Operating System Interface) is also very similar to what we think of when we talk about UNIX, except that it defines more of a set of standards that operating systems must comply with to be considered "fully POSIX Compatible". POSIX is "[a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems"](https://en.wikipedia.org/wiki/POSIX)(- Wikipedia). Essentially, for something to be POSIX, it must ensure that it can run all POSIX compliant applications seamlessly.

Alright, that's a lot of -IX's. What does all this mean?

When we say Linux, we are referring to a type of operating system, and usually those operating systems are all based off of POSIX or UNIX-like standards. Macs are a technically a type of Linux. PC's however, are generally NOT considered to be POSIX or UNIX-like, as they don't follow the same set of standards that Linux or Macs do. This is why you can't just load your application from Windows right into a Mac or vice versa; they just don't fit together.

This doesn't mean anything about which one is better or worse. It's like the difference between JavaScript vs PHP vs Python vs C++; It's not a measure of quality, but of structure and ability. There are benefits to one or the other depending on your usage, but that's the reason why all of them are so popular; they all have their uses!

Most consumers don't use Linux because Linux tends to be something developers love to use. It's slimmed down, and typically has minimal UI, exposing only a command line (think MS-DOS, or 1980's looking computers, or pre-windows/macintosh days). As such, a typical person finds using Windows or Macs easier because they have many consumer features like fleshed out Graphical User Interface, or GUIs (the visual part). 

For developers though, they are a bit more experienced with the inner-workings of computers and with Command Line Interfaces (CLIs), and find that they prefer the Operating Systems with fewer consumer features more appealing. This is also why most of the servers on the web use some form of Linux.

## Why use the Subsystem for Linux?

Web Development on Windows can be somewhat difficult at times because it doesn't have the ability to run POSIX software. This is because Windows is considered to be non POSIX-compliant. This causes a bit of a problem for Web-devs, and with no native solution they turn to Mac. 

*Opinion: This, in part, is why you might have felt like there was an explosion of Mac usage during the Web 2.0 phase around 2007 - 2008 and why it seemed like all the hottest web startups had Macs everywhere: Macs, in general, were just less complicated to use when it came to developing for the Web.*
 
There have been many different workarounds for to this problem for webdevs using Windows: Dual-booting or VMing a Linux distro, terminal wrappers like CYGWIN or Git Bash, software versions made specifically for Windows, hacky workarounds, etc. Each of these workarounds has their pros and cons, but in the end it really just ended up taking time to try and figure out how to proceed when all you really want to do is just get back to work. 

If you're curious on how this scenario came to be, [here](https://www.quora.com/If-macOS-and-Linux-are-based-on-Unix-then-what-is-Windows-based-on-and-why-was-it-implemented-like-this-by-Bill-Gates) is a great article explaining the history of how Windows came to be in its current state.

## What does WSL do?
 
Microsoft released a feature available to all PCs running on Windows 10 called Windows Subsystem for Linux, otherwise known as WSL. WSL gives you the ability to install a Linux distribution like Ubuntu and Fedora and to connect it directly to the Windows File System. 

You can install the [Ubuntu app](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6) for free in the Microsoft Store so that you can use the Ubuntu terminal and run command line utilities including bash, ssh, apt, etc. There are other Linux distros supported as well like Debian, SUSE, Arch, and Kali.

__*After some surprisingly super-easy setup, this gives you a truly native POSIX / Unix-like environment directly integrated into your Windows PC, essentially negating a vast majority of the issues mentioned above.*__

_**However**_, there are a few caveats:
 
1. The Subsystem does not have access to a GUI, so it cannot run any programs that need one, IE: Browser, Code editor, Notepad, etc. It is strictly a command line. This isn't a huge downside to developers, as we are comfortable enough with working around CLIs in general.
    - Disclaimer: There are some guides which show you how to set up a GUI. We have found this to not be dependable, so we exclude it at this time, and will update this guide with a major update when that ability seems to be much more stable.

1. **You cannot write to Linux files through Windows or Windows apps**. The Linux Subsystem can edit both Windows files and it's own files just fine though. ( This might make it seem like this is pointless, but it's not. It's all in the workflow. )
 
## Workflow 
 
You'd think caveat #2 would be a **huge** problem, right?

It's actually not. It's all in the _workflow_!
 
Essentially, we use the Subsystem for two things: 
 
1. To install and run software that only ran in POSIX environments. 
1. To give us a Linux shell that allows us to run POSIX utilities, services, and commands. 

The vast majority of issues with Web Development on Windows stem from not being able to run software in POSIX environments, and the inability to use many of the utilities and commands that come with a POSIX-Compliant Shell. Since the Linux Subsystem is directly mounted to your Windows File System (W-FS), it has access to all of your Windows files. That means the Subsystem can use those files, and can successfully run them through software in it's POSIX environment. 

This gives you the best of both worlds in regards to the Windows Shell and Linux Shell. There are still some features that aren't available, but with this now being around for the last 20 months, much of what you need is there, and more are being developed.
 
The typical workflow looks like this: 
1. Open whichever Linux distro you are using, which is just like opening a terminal window.
1. Work normally, doing everything on the Windows FS.  
1. When you need new software that is only available for Linux, navigate to the Linux Subsystem's FS and install that software through the command line in the very same terminal window. 
1. Then, while also still in the same terminal window, navigate back to the Windows FS and use the software as desired. 
- Since the software is connected through the PATH, it runs just fine. 
- Since the Linux Subsystem also has access to your Windows files, it can use them with its software just fine as well. 

## Summary

In Summary, WSL fixes many of the issues Windows users run into during web development by giving them access to a POSIX environment in which to run their software and to execute Linux shell commands. Unlike other options, WSL is not a wrapper or an emulator, it is a native Linux distro running on the Windows FS. This overcomes the issues that other wrappers have, and cuts down on the setup needed to get emulators or VMs setup, and connected.

The work flow is also extremely simple as you are working 95%+ of the time in a single terminal window on the Windows side. After a couple weeks and a couple iterations of installing and running software, you'll find it to be a seamless and almost un-noticeably different workflow.

## Getting Started

[Page 2: Setting up WSL](./02_WSL_Ubuntu_setup.md)
