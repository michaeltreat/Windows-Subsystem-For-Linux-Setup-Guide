# 🔥 Page 2: Setting up WSL

This section will guide you through all the required steps of the checklist. This includes:

1. Enable the WSL Feature through Windows.
1. Download Ubuntu from the Windows Store.
1. Setup Ubuntu Username and Password.

By the end of this section you will have completed the absolute minimum steps required to have a native Linux distribution on your Windows 10 PC. It's highly encouraged that you also complete the 'Recommended' portion of the guide as well as it will show you how to properly edit and update Ubuntu (Linux) files vs Windows files, how to setup shortcut aliases for quicker navigation and pathings, and talks about work-flow in general. They are much more concise than the over-view doc.

If you would like a more in-depth look at this section, please checkout Part 2 of the [WSL Guide Walkthrough Playlist](https://www.youtube.com/watch?v=ixqKqHfCDWM&list=PLOOqtDuWOt4auhgOzv8NdCDhBYgblR6Fd) on YouTube.

Click this video to be taken straight to the video Part 2:Setting up WSL.
<a href="http://www.youtube.com/watch?feature=player_embedded&v=GYuv37yPmGM" target="_blank"><img src="http://img.youtube.com/vi/GYuv37yPmGM/0.jpg" alt="Windows Subsystem for Linux Part Two: Setting up WSL"/></a>

## Install Instructions:

### Windows 10 Pre-Req:

Before you begin check to make sure that you have the [most recent version of Windows 10](https://support.microsoft.com/en-us/help/4028685/windows-10-get-the-update).

### 1. Enable WSL Feature in Windows.

1. Right click on the start menu and click on Settings.
1. In the Search box, type `Turn Windows Features On Or Off` and click on the item that populates in the list.
1. A window will pop up with a list of folders with checkboxes next to them. Scroll down and check the box for `Windows Subsystem for Linux`.

This will install the needed files. Follow any directions that pop up and restart when asked.

This guide might not open after restart, so be sure to make note of the url or star this repo.

### 2. Install the Ubuntu app from the Windows Store.

1. Click here to go to Microsoft store and install the [Ubuntu App](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6?activetab=pivot%3aoverviewtab)
1. Follow the on-screen prompts to install the app. 
1. When the app is ready, the button that said 'Install' will change to say 'Launch'. Click Launch. This will start the Ubuntu installation. This installation only happens the first time the app is launched. It's the actual Ubuntu (or Linux) OS installing and mounting to your Windows FS. 

__IMPORTANT:__ *Anytime you uninstall the app and reinstall it you will lose any data that lives on the Linux Filesystem. This inlcudes databases, configs, .profile's, and anything else you might have stored on the NON-Windows Filesystem. Make sure to back this data up!*

### 3. Finish Installing the Ubuntu App.

1. It will ask you to enter a username. This will be the root / admin user for the Ubuntu FS. 
1. It will then ask you to enter and confirm a password. Also note that it will protect your password by not displaying it to the screen when you type, but it is registering your key strokes.

    Note: *Security is important at all levels, so even though you have to use this password often, don't be tempted to make it too simple  (__as I suggessted in an earlier version__). Essentially all of your Window's files can be viewed and modified by this user, so keep that password safe and strong.*

    *Also be careful __not to mess with any permissions__! If you think you need to do that to complete this setup, then stop and reach out to us. You should NOT have to worry about any premissions with this, and if you do get stuck there then we need to know so we can help troubleshoot you through this, or so we know we need to update this guide*.

1. Finally, the prompt will change and you will be on a command line. Type `pwd` to see where you currently are in the FS, you should be at `/home/<your username>`. This is the root level of your Ubuntu user.

### Minimum section complete

Awesome job, at this point you have 100% installed the Windows Subsystem for Linux. 

Make sure you keep in mind that,
"The Windows FS, is not allowed to write, to the Linux FS, but the Linux FS can write either."
And
"Code lives on Windows, Software lives on Linux."

At this point, you can go out and tell people you've used this feature, because you have it. You can get right to work and explore all the things you can do with WSL, or you can continue with this guide to help give you a more structured approach to the workflow, as well as some examples, and more detailed context. 

Also make sure to checkout and subscribe to the channel on YouTube at: https://www.youtube.com/channel/UCh0yhZV7OrQ-vojQBqSF0RA


## Additional Setup Information

There are a couple additional recommended steps you should take in the next 5 - 10 minutes to finish setting up your machine.

### 4. Updating Default Software.

You will need to run a quick couple commands in order to run updates software updater. The Ubuntu OS is shipped with a ton of built-in software like Git and other APT libraries, but those libraries may have had more recent updates come out since the OS was shipped. Updating this now is quick and will help you stay current and protected.

1. Type `sudo apt-get update`.
   - [What does sudo apt-get update do?](https://askubuntu.com/questions/222348/what-does-sudo-apt-get-update-do)
1. Once that is complete, type `sudo apt-get upgrade`. Press `y` when prompted. 
   - [What does sudo apt-get upgrade do?](https://askubuntu.com/questions/94102/what-is-the-difference-between-apt-get-update-and-upgrade)
1. Once that is done, type `sudo apt autoremove`. This will remove any packages that are no longer needed.
   - [What does sudo apt-get autoremove do?](https://ubuntuforums.org/showthread.php?t=996053)

## Understanding the File-Systems

The next section will talk about the differences between your Windows File-System (W-FS), the Linux/Ubuntu File-System (U-FS), and how the two systems are connected. It also talks about do's, don'ts, and whys, and gives you some follow-along steps you can follow to help you explore.

And then the rest of the guide will follow that pattern across multiple different topics, in order to help you learn, customize, and get started with using more features with WSL. Eventually, as this grow, we hope to include exploring multi-distro installations, database connections, the different types of Shells and their features and limitations, dual-installation requirements, and potentially even a strong GUI setup.

Regardless, if you notice anything wrong with what you would expect, or something that doesn't work here but does in a stand-alone Linux distro, please create an issue so we can look into it. We can also use this guide as a way to gather functional feedback about how the WSL app works with our actual workflows, and allow it to be a good source of truth for workarounds. 

And Finally, please feel free to contribute back to this guide in any way. Create a workflow discussion, add bugs, request to take on some PMing, fact/source-check, link to docs, setup a Wiki, grab screenshots from the vidoes, translate, proof-read, request to annote, re-write, or Anything really, even if it's minor like a quick typo fix or a star if you think it's accurate. Thanks! 🔥

[Part 3: Understanding the File-Systems](./03_understanding_the_file_systems.md)
