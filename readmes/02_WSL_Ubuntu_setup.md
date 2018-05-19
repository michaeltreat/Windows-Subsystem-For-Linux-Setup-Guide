# Setting up WSL and the Ubuntu app

Before you begin check to make sure that you have the [most recent version of Windows 10](https://support.microsoft.com/en-us/help/4028685/windows-10-get-the-update).

This section will help you to enable the WSL feature in Windows, and then to install and setup the Ubuntu App from the Microsoft store. 

## Install Instructions:

### Please read through these steps before getting started


#### 1. Enable WSL Feature in Windows.

1. Right click on the start menu and click on Settings.
2. In the Search box, type `Turn Windows Features On Or Off` and click on the item that populates in the list.
3. A window will pop up with a list of folders with checkboxes next to them. Scroll down and check the box for `Windows Subsystem for Linux`.

This will install the needed files. Follow any directions that pop up and restart when asked. This page might not open after restart, so be sure to make note of the url or bookmark it.

#### 2. Install the Ubuntu app from the Windows Store.

1. Click here to go to Microsoft store and install the [Ubuntu App](https://www.microsoft.com/en-us/store/p/ubuntu/9nblggh4msv6?activetab=pivot%3aoverviewtab)
1. Follow the on-screen prompts to install the app. 
1. When the app is ready, it will say Launch. Click Launch. This will start the Ubuntu installation. This installation only happens the first time the app is launched, as it's the actual Ubuntu OS installing and mounting to your Windows FS. Anytime you uninstall the app and reinstall it you will have to do this process again. Make sure to back up important data if you ever uninstall this app, as it is not preserved. 

#### 3. Finish Installing the Ubuntu App.

1. It will ask you to enter a username. This will be the root / admin user for the Ubuntu FS. 
1. It will then ask you to enter and confirm a password. It's recommended it's not too long as you may have to type it a lot. Also note that it will protect your password by not displaying it to the screen when you type, but it is registering your key strokes.
1. Finally, the prompt will change and you will be on a command line. Type `pwd` to see where you currently are in the FS, you should be at `/home/<your username>`. This is the root level of your Ubuntu user.

#### 4. Updating Default Software.

**NOTE**: This can take some time, about 10-30 minutes. It is recommended you do it now if you have the time, but you can also wait until the end of this doc to do this as well. Don't worry, there will be a reminder at the end.

Ubuntu is shipped with some default software that has likely had more recent updates come out. Ubuntu uses apt, Advanced Packaging Tool, to maintain all of it's packages. Think of it like Windows Update, the App Store, and a Public library all in one. We need to use apt to update all it's packages and then tell it to upgrade them (updates the current versions).

1. Type `sudo apt-get update`.
1. Once that is complete, type `sudo apt-get upgrade`. Press `y` when prompted. 
1. Once that is done, type `sudo apt autoremove`. This will remove any packages that are no longer needed.

### Learning your File Systems

At this point you are now totally setup with WSL and the Ubuntu app. The rest of this guide will spend time talking about best practices, workflow, and other important info!

**IMPORTANT**

It is highly recommended you read through the next section, _at least_, as it talks about the very important differences between the Windows FS and the Ubuntu FS.

[Click Here](./03_understanding_the_file_systems.md) to learn more about the two File Systems.
