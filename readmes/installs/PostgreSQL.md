# Install PostgreSQL using WSL

This doc explains how to install PostgreSQL 10 for Windows WSL

We are installing this through the Ubuntu command line since we want this software to run in the Linux environment. You can check out the PostgreSQL Linux install docs [here](https://www.postgresql.org/download/linux/ubuntu/).

## Install
1. Open a terminal (the Ubuntu app) and then go to the root of the Ubuntu Subsystem by typing `cd ~ `.
2. Type `sudo nano ../../etc/apt/sources.list`. This will open a file on Ubuntu using the Nano editor.
3. At the bottom of this file, paste in this line `deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main`
  - Change the last part of the line above from `xenial-` to whichever version of Ubuntu you are running. For example, `bionic-` for Ubuntu 18.04.X.
4. When that's done, press `Ctrl + X` together to close the file, and press `y` when prompted to save your changes, and `enter` to finally close.
5. Next, copy these 2 lines and paste them into your terminal:
```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
```
This will add postgresql-10 to your repositories so you can install the latest version of PostgreSQL. Press `enter` when the last line pops up.

6. After the update is complete, enter in this line `sudo apt-get install postgresql-10` and press `y` when prompted. If the process aborts automatically, you may have to restart your terminal.

## Postgres User Setup

postgresql-10 runs under the user `postgres`. We need to give this user a password so that postgres can allow this user to connect to the database.

1. To set the password for postgres, type `sudo passwd postgres`.
2. You will get a prompt to enter in your password. It will not show when you are typing, but it is still registering your key-strokes.
3. Close and reopen the terminal.

## Using psql

After your first install, and each time you restart your machine you will have to also restart the postgres service, or else you will get a `Is the server running?` error. 

1. To start the service, type `sudo service postgresql start`.
2. To conntect to postgres, type `sudo -u postgres psql`. 

You should get a prompt asking for your password. If this doesn't work, then you can try the second option listed below.

1. Switch users to postgres by typing `su - postgres`.
2. Type `psql`.

When this is successful you will see the command line change to look like this `postgres=#`

## Tips

Since typing out `sudo service postgres start` and `sudo -u postgrest psql` all the time can be tedious, I would recommend you set up a couple aliases for this. 

1. Open a terminal and type `cd ~`, then type `sudo nano .profile`. This will open your `.profile` which controls what your terminal does and looks like.
2. Add these two lines next to any other aliases that you have:
  - `alias pgstart='sudo service postgresql start'`
  - `alias runpg='sudo -u postgres psql'`
This will allow you to type `pgstart` to start running the psql service, and `runpg` to quickly log into the psql prompt. This is an example of a Quality of Life enhancement, something that makes your life easier and faster as a developer. 

You can change `pgstart` and `runpg` to what ever you want, but just be careful you don't overwrite something that postgres might use. 
