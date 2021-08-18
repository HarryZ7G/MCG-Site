# MCG Website Repository

In this README I will quickly go through how the project is structured, and how to structure your files when you add new Components or 
new media files (such as png or svg).

## General

Every component or page has a .js file, that is the file containing the HTML elements paired with a .css file, both have the same name. 
(this is not mandatory, but is the general convention when it comes to organizing .css files)
.css files contain the styling instructions on the HTML elements, without CSS, your website would look like plain text with out-of-place
images. "className = 'abc'" in the .js correspond to ".abc" in the .css file. Choose your className carefully, as even though .css files 
seem to be separate, they are actually not. i.e. a className "abc" in Home.css can be accessed by Event.js, so try your best to avoid 
the same classNames. I name my classes this way to avoid clashes, "'page'-'name'". So for example, that a "slider" component that is 
created in "Home" page that does not get reused anywhere else, would be named "home-slider".

## Pages

Located in the "pages" folder (big surprise), each page has its own folder with corresponding .js and .css files. You want to offload as 
much code as possible to the individual components, while maximizing reusability. You can look at the "Home" page for an example of this.

## Components and Media

Located in their namesake folders (duh), each Component has its own folder with corresponding .js and .css files, same as the Pages. Try 
to break down components for maximum reusability, an example of this can be seen at the Services component, each service block has been 
made into individual elements, so the same block of code does not have to be repeated three times. The information that needs to be 
displayed are passed into the child-component using "props".

One thing to keep in mind about Components and Media files is that you need to import them to the .js file where you need them. See the 
"Home" page for an example of this.