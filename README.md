# COMP4511 Project
## Requirements

* `node==14.17.3`

## Installation & Setup

### Cloning the Repository
Add SSH key to GitHub under `Settings > SSH and GPG keys`.

```bash
# Clone the repository
$ git clone https://github.com/ct-pham/COMP4511.git

# cd into repository
$ cd comp4511
```
### Manual Setup

Install `node==14.17.3`.

Navigate to the `comp4511/` directory and install the required node packages via

```bash
$ npm install
```

At this point we are ready to start the app. Open a terminal window and run the following command:

```bash
$ npx expo start
```

This will start the metro bundler. There are two ways to view the app:

## View

### View with Emulator (recommended)

Start your emulator of choice in android studio for android devices or on mac for ios devices. 

### The recommended devices are:

* `Google Pixel 6`
* `iphone 13/14`
* `iphone 13/14 pro`

### View with Expo Go App

Scan the QR code in the terminal with your device's camera to view the app. You will need the Expo Go app from the app store. 

Depending on your device's model, sizing and spacing may become an issue while navigating through the app.

## Functionality

Most features are hard coded and interacting with them will not affect other parts of the app.

* Users are able to input login and register details however the data will not be stored anywhere
* No aspect of the app is based on location
* All programs and locations have placeholder names and images
* All dropdown menus will not change the content displayed on the page
* Earnings amount will not change after logging items
* Edit feature is non-functional 
* Searching for items will only search through a small list of hard coded items
* All items in the search list (e.g. glass bottle, beer glass, glue) will navigate to the same page for glass bottle disposal options
* compare programs will direct user to a list of hard coded programs and a map image.
* all program details have been hard coded and each program will have the same content
* Log item buttons for all programs will navigate to the same page for program X
* Changing the quantity in the log items page does not change the displayed earnings amount
* Toggling the opt in option for different programs does not affect their display in the search results
* All programs in the "Cash Back Programs" page will navigate to the same page for program X
* "Frequently asked questions", "contact us", and "settings" features are non-functional 

Any other aspects of the app should be fully functional in their display.
