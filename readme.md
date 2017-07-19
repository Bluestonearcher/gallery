Animators gallery
animator's gallery, a streamlined way for an animator to load and showcase snippets of their work, that lets users set preferred FPS and loop/single view, and viewers can slow/speed to better admire animator's skill. (User login?), (image uploading, front end back end?), setting viewing preferences (loop, not loop, preferred FPS, allowed other FPS), thumbnails, scrolling sidebar, viewer ability to shift FPS and replay the non-looping images, (commenting?)


User interface
Personal goal - to make the upload of new images to the gallery to be as uncomplicated as possible, and for the viewer to be able to effortlessly/intuitively browse what the animator is demonstrating. 

From viewer's perspective, after clicking though a home screen, a scrolling sidebar will allow the viewer to select which animation they'd like to see. 
A) viewer clicks on one of the images on the scroll bar to the left, the full sized animation loads in the main body. It should load at "on the twos" speed, 12 fps (20.8335 milliseconds), to begin with. Below the image, the viewer can select speed up and slow down (incremental) buttons to change the speed they would like to view the animation at. 
B) Nearly the same as above, with the addition of thumbnail images under the animation in the main body, showing process images that the viewer can select and see the "how this was made" 

Regardless, links at the top of the page to access animator's blog, store, still image gallery, comics, etc.

Dev notes
Upload goal - to be able to simply drop a new folder into a location, and within have all of the images needed for the new loop. Name of the folder names the selection of the gallery? Numbered files to dictate location in loop?

Plan to implement:
Check 1. Set up github location
Check 2. Basic html files
    2a. Formatting header/footer
    2b. Get secondary pages (gallery, store, blog, etc redirects) functioning
Check 3. Basic index.js files
Check 4. Install handlebars, express, etc
Check 5. Reference/connect the engines
6. Loop an animation
    6a Get a {{{body}}} file to work with an animation
    6b Direct the {{{body}}} to look into a folder for the image information
7. Add incrementing buttons to make fps speed change
    7a. Thumbnails of process images with incrementing buttons
8. Add scrolling sidebar
9. Add single-frame thumbnails to sidebar
10. Link thumbnails to animations

** Make adding images an easy thing! Dangit! Somehow! ha.




I need to be able to get all the files in a folder....

-jquery has an option, ajax has an option...

-is there a way to do a {{{handlebars}}} retrieval

-use pixart style "create so many of X class" to pull files from a specific folder (how to pull how many items are in the folder, how to direct it to the folder)

-put all of X files in Y folder into an array... (feels like one step too many)

-at least test the html version from class 9 to make sure the animation part works - crap, this is actually two steps.