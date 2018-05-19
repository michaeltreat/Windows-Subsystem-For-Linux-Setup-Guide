# Install MongoDB with WSL for Windows

This doc will guide you through installing MongoDB using WSL through the Command Line. 

Most of the steps are listed [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/), but this guide will trim them down and make it a bit more straight forward for our needs.

## Install MongoDB - Community Edition

1. Open a terminal (the Ubuntu app) and type `cd ~` to go to the root of the Ubuntu File System.
2. Copy and paste this into the terminal `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5`. This will _import the MongoDB public GPG Key_ so we can use the official MongoDB supported pkg in apt.
3. Next, paste this one line into the terminal `echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list`. This will add the deb to your sources list. Note that you must be on Ubuntu Xenial. When Zesty gets LTS we will update this doc.
4. Reload your local pkg database by typing `sudo apt-get update`.
5. Run the install command by pasting this into the terminal `sudo apt-get install -y mongodb-org`. This will install the most stable version of mongod, 3.6 at time of writing. If you want to install a different version please refer to the link above.

## Add the data/db directories
- **NOTE** this step is not included in the link above.

1. Make sure you are still on the root of the Ubuntu FS by typing `cd ~`. If you type pwd it should output `/home/<user>/`
2. Type `sudo mkdir -p data/db`
  - This will make a data directory with a db sub directory.
  - The `-p` flag means make the parent directory if it doesn't exist.
  
## Run mongod server and mongo shell

1. Open a new terminal and type `sudo mongod --dbpath ~/data/db`.
  - You should see a bunch of stuff pop up, but the last line should be something like `waiting for connections on port 27017`.
  - This will run your mongod service for you, allowing users to connect to it.
  - The command `--dbpath` will change the path where mongo saves your databases and records. You can choose your own location if you want, but in the section above we just added it to the root of your Ubuntu user.
  
2. Open a new WSL window and type `mongo`.
  - You should see a connection notification on the first terminal window pop up.
  - In the new window you should see some messages pop up and finally your command line should be changed to a `>` symbol which means that you are in the mongo shell.
  
3. Follow this [link](https://github.com/michaeltreat/Mongo_quickstart) to my Mongo Shell Cheat Sheet how to use your new mongo shell.
4. To exit the shell, press `ctrl + c`. You should get a neat message, then you'll be returned to your command line!


## Troubleshooting

Here is a link to the [Install Docs](https://docs.mongodb.com/manual/installation/) for MongoDB. Also feel free to message or email me directly.
