# Updating your Terminal

This section will talk about how to update the Terminal's look and feel, as well as how to edit files in Ubuntu through it's command line editor nano.

Typically you will always be working in the Windows FS, but for this task we need to edit a file that lives on the Ubuntu FS. This means that we need to use nano to update the file, since Windows cannot update the Ubuntu file without causing errors.

At the end, this will add some color to your command line, and your command line will be formatted like this:

`WorkingDirectory[GitBranch GitStatus]$`

IE: about_me[monday-lab x!+]$

### Updating the .profile file

In order to change how your terminal looks, we need to add some code to a file that lives in your Ubuntu user's root directory.

1. Open the Ubuntu app and type `ls -a`. You should see a .profile file there. If not, then type `sudo touch .profile`.
2. Type `sudo nano .profile`. This will open the file in the command line editor Nano.
3. Delete anything that's in the file, then copy and paste this code into the editor. You can paste with right-click:

```
# get current branch in git repo
function parse_git_branch() {
	BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
	if [ ! "${BRANCH}" == "" ]
	then
		STAT=`parse_git_dirty`
		echo "[${BRANCH}${STAT}]"
	else
		echo ""
	fi
}

# get current status of git repo
function parse_git_dirty {
	status=`git status 2>&1 | tee`
	dirty=`echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?"`
	untracked=`echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?"`
	ahead=`echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?"`
	newfile=`echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?"`
	renamed=`echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?"`
	deleted=`echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?"`
	bits=''
	if [ "${renamed}" == "0" ]; then
		bits=">${bits}"
	fi
	if [ "${ahead}" == "0" ]; then
		bits="*${bits}"
	fi
	if [ "${newfile}" == "0" ]; then
		bits="+${bits}"
	fi
	if [ "${untracked}" == "0" ]; then
		bits="?${bits}"
	fi
	if [ "${deleted}" == "0" ]; then
		bits="x${bits}"
	fi
	if [ "${dirty}" == "0" ]; then
		bits="!${bits}"
	fi
	if [ ! "${bits}" == "" ]; then
		echo " ${bits}"
	else
		echo ""
	fi
}

# PS1 is what actually defines what you command line prompt looks like.
export PS1="\[\e[m\]\[\e[36m\]\W\[\e[m\]\[\e[33m\]\`parse_git_branch\`\\$ "


# Everything above this point is used to change how your terminal looks. If you ever want to update your terminals look, change things above here.


# Nothing below here will change how your terminal looks, rather, it will change some things about how it works.


# This allows you to switch between the Ubuntu root and your Windows Root.

# wr evaluates to the absolute path to your Windows user's root.
export wr='~/../../mnt/c/Users/<Windows Username>/'

# This gives us a quick way of moving directly to the Windows root
alias cdwr='cd $wr'

# This brings you to your Windows Working directory immediatly when you open a new terminal.
cdwr

```

4. After pasting that in, you will need to add your Windows username right after `/Users/`. IE: `/Users/MichaelLeonTreat/`. Make sure to get the final `'` in there!

5. After that you're done in this editor, so press `ctrl + x` at the same time to quit. It will ask if you want to save changes. Hit `y` and the editor will save your changes. It will then ask what to name the file. Just hit enter to keep the same name. 

And you're done! 

### Extra Info

1. In the file you pasted there was a section at the bottom that exports `wr` and sets up the `cdwr` alias. What this does is adds a unique variable and a command to your terminal.

- **$wr :**

If you want to use a relative path, but don't want to go all the way up to the Ubuntu FS and then work down to the Windows FS, you can use the `$wr` variable as a shortcut to the Windows root instead. IE: 

`cd $wr/about_me/scripts`. Instead of:

`cd ~/../../mnt/c/Users/MTreat/Development/about_me/scripts`

This also works with tab completion as well, which is awesome.

- **cdwr :**

Now when you type `cdwr` it will bring you to the root of your Windows User! This makes navigating between the two file systems super easy. 

- To navigate to the Ubuntu root, you will type the normal `cd ~`.
- To navigate to the Windows Root, you will type `cdwr` with NO space!

2. If you decide to add a directory to your Windows User's root to hold all of your work, IE: `/Users/MichaelLeonTreat/Development`, you can come back to this file and update the `export wr` line so that it moves directly into that directory. Just add the name of the directory to the end of the path after your username.

3. In case you ever need it, the Ubuntu FS lives on your Windows FS on the path that looks very similar to this:

`C:\Users\<user>\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs`

4. If you want to create your own custom command line prompt you can check out [bashrcgenerator.com](bashrcgenerator.com) or [ezprompt.net](ezprompt.net) and use the code that provides instead of the code here. 


### Installing Software

Before we can dive in and start coding, we should add in some software that will help us streamline the entire process. This next section will explain how to install 3 very common pieces of software, and will also cover the different situations you may encounter while using the two File Systems.

[Click Here](05_VSCode_Node_GIt_install.md) to move to the next section!
