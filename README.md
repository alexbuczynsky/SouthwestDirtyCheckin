## Original Overview
DO:

`apt-get update && apt-get install -y xvfb x11-xkb-utils xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps clang libdbus-1-dev libgtk2.0-dev libnotify-dev libgnome-keyring-dev libgconf2-dev libasound2-dev libcap-dev libcups2-dev libxtst-dev libxss1 libnss3-dev gcc-multilib g++-multilib`

AND

`DEBUG=nightmare xvfb-run --server-args="-screen 0 1024x768x24" node index.js`

## Auto-Run Feature
Example `node auto-run.js -c NIQRIX -f Alex -l Johnson -d 2018-09-24T09:35:00`

Options:
```
Check in to Southwest Flight.
Usage: C:\Program Files\nodejs\node.exe C:\Users\Alexander Buczynsky\Documents\GitHub\Personal Projects\SouthwestDirtyCheckin\auto-run.js

Options:
  --show                      Show Electron window
  -c, --confirmation                                [required]
  -f, --firstName                                   [required]
  -l, --lastName                                    [required]
  -d, --date of flight (UTC)                        [required]
```