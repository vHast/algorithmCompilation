// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

//When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs - this.tabs.concat(otherWindow.tabs);
  return this;
};

//When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

//When you close a tab

Window.prototype.tabClose = function(index) {

  // Only change code below this line

  this.tabs.splice(index, 1);

  //This will remove the interested tab, index will indicate which tab we want to remove and 1 indicates that we only want to remove one

  // Only change code above this line

  return this;
};

// Let's create three browser windows

const workWindow = new Window(['Gmail', 'Inbox', 'Work mail', 'Docs']) // Your mailbox, drive and other work sites

const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) // Social sites

const videoWindow = new Window(['Netflix', 'Youtube', 'Vimeo', 'Vine']); // Enterteinment sites

// Now lets perform the tab opening, closing and other operations

const finalTabs = socialWindow
  .tabOpen() // Opens a new tab
  .join(videoWindow.tabClose(2)) // Close third tab [index 0] in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);