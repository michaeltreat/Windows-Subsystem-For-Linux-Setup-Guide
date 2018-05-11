# Updating your Terminal and Using WSL

This section will talk about how to update your Terminal's look, and will also talk more


Typically we will always be working in the Windows File system, but for this task we need edit a file that lives on the Ubuntu File system. This means that we need to use nano to update the file, since Windows cannot update the Ubuntu file.

At the end, this will add some coloring to your command line, and you command line will be formatted like this:

`PathToCurrentDirectory[GitStatus]$`
IE: `~/codefellows/201/about_me[monday-lab]$`

1. Open the Ubuntu app and type `ls -a`. You should see a .profile file there. If not, then type `sudo touch .profile`.
2. Type `sudo nano .profile`. This will open the file in the commandline editor nano.
3. Copy this code then paste it into the nano editor. You can paste with right-click:

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

export PS1="\[\e[m\]\[\e[36m\]\W\[\e[m\]\[\e[33m\]\`parse_git_branch\`\\$ "

alias cd~='cd ~/../../mnt/c/Users/

```

4. After pasting that, you will need to add your Windows username right after the `/Users/`. IE: `/Users/MichaelLeonTreat/`

`cd ~` Will bring you to the Ubunutu root, but now typeing `cd~` with no spaces will take you back to the Windows root. This will help you navigate through the two files systems much quicker.

5. After that you're done in this editor, so press `ctrl + x` at the same time to quit. It will ask if you want to save changes. Hit `y` and the editor will save your changes. It will then ask what to name the file. Just hit enter to keep the same name. 

6. Close the window and open up a Windows PowerShell and type `wsl`. You should see that you command line has changed! If you have any issues with this then please see a TA or instructor, or send me a message @michael.leon.treat@gmail.com and we'll help you out!

Note that you can build your own a custom commandline prompt from [ezprompt.net](ezprompt.net) and use they code they provide instead of the code I have here!
