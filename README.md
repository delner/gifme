# GIFME
### *A ReactJS + Rails application example*
###### *For Rails 4.2, Ruby 2.3.0, ReactJS 0.14.3*

### Introduction

*GIFME* is an application that mimics everyone's favorite GIF search engine, [Giphy](http://giphy.com/). It uses the Giphy API to search and view for relevant GIFs.

### Requirements

 - Ruby 2.3.0+
 - Rails 4.2+

### Installation

1. Install Ruby 2.3.0 via your favorite package manager (RVM, Homebrew, etc)
2. `gem install bundler`
3. Clone this repository into a folder of your choice
4. `bundle install` to install all dependencies

### Run GIFME

1. `bundle exec rails s -b 0.0.0.0` to start a webserver
2. Access the website via `http://localhost:3000/` or your IP address/DNS name.

### Using GIFME

##### Searching

There is search bar on the top of every page: enter any phrase and press *Enter* or click the search icon to perform a search.

##### Reviewing matches

Searching will bring you to a search index page, where you can see thumbnails of relevant GIFs. Hover over them to see them animate, click them to view.

##### Viewing a GIF

The view page will show the original size GIF constrained to the viewport. It will also show some attributes about the image clicked on.

##### Find a random GIF

On the GIF view page, you can click the random button. It will redirect you to another random GIF from the results of the phrase you originally searched for.

### Testing GIFME

You can run some unit tests with `bundle exec rspec`.

*NOTE: In it's present state, most of the interesting code is in Javascript (React components) which is not covered directly by Rspec. Ideally, given more time, there would be some basic integration tests driven from either Jasmine or Rspec/Capybara to test the core requirements.*

### Changelog

While developing the project, I focused on a rapid prototype scheme, since I was working with new, unfamiliar tech (in this case, ReactJS), and wanted to see it work before I committed to it.

###### First I did the initial setup...

1. Created a set of mockup images of what each view should look like when done, at each browser size.
1. Initialized Rails application and installed dependencies (ReactJS, FontAwesome, etc)
2. Added controllers and routes for each view (`home#index`, `search#index` `search#view`)

###### Then I focused on making the basic behavior work (albeit ugly)

1. Added React components for each view, unstyled (`ImageList`, `ImageThumb`, etc...)
2. Wired up API calls to Giphy from components.
3. Added hover state, random button, and search bar components.
4. Clicked through the barebones site, verified that functionality worked.

###### Now that the core feature set was working, time to make it look nice

1. Established my constants and breakpoint sizes for my responsive scheme (colors, widths, etc)
2. Started by adding my application wide styles (logo, search bar, etc), working my way from mobile to desktop-level styles. Rudimentary testing by changing my browser width to trigger breakpoints.
3. Then added styles for my search results grid.
4. And then added styles for the view page.
5. Once things looked okay in my browser, it was time to do some device testing
  - Started with Chrome/Firefox on my MS Surface Pro
  - Then tested Chrome on Android
  - Then borrowed an Apple laptop and iPhone to test Safari and various orientations.
  
###### It's starting to look pretty good. Time to polish a bit

1. Refactored my API and Routing calls into a couple of classes using the JS Class pattern. It makes them more modular, and abstracts some detail from view components that shouldn't care about these sorts of things.
2. Added a search icon to the search bar (to signal to the user its purpose)
3. Added a loading spinner and CSS animation that appears if the API call is taking a while (doesn't happen often.) You can see it by commenting `.loading { display: none; }` in `layout.scss`.
4. More device testing (mobile Safari didn't like the search icon much)
5. Add some documentation

###### Ship it!

### Let's talk about design...

Making prototypes and demos requires balancing your needs, aspirations, and resources into a practical compromise. This project was no exception: so let's talk a little bit about how I made my compromises.

**This application needs...**

 - To fulfill a set of some pre-defined features. Although I granted myself some creative license, the spirit of the core feature need to work as described.
 - Needs to be fast & lightweight.
 - Needs to be done fast. (1 week requirement.)
 - Needs to work well on all devices.
 
**My aspirations were to...**
 
 - Make a clean, uncluttered design
 - Try some new technology (Angular, Ember, or ReactJS)

**And my resources included...**

 - 6-8 hours over a long weekend (this was written while on the road, in my free time)
 - A laptop running Ubuntu to code with, and an Android phone (and family's Apple devices) to test with
 - My experience building traditional Rails apps & APIs with SASS, HTML5, and "vanilla" JS (I haven't used single-page frameworks or ReactJS before)
 
 ###### Some options at my disposal...
 
 I thought about 3 different ways of building this prototype:
 
 1. **Traditional Rails app**: serving each view directly from a web server, and compiling all HTML, CSS on the backend, then using some jQuery to piece together some JS-specific functionality.
  - I'm very familiar with this tech, and it's pretty quick to build.
  - But given a lot of the data was driven from an external API, there could be some performance drawbacks or weirdly handled architecture choices to accomodate for this.
 2. **Single-page framework**: use Rails to serve single-page framework assets to user, then use their browser to handle all routing & rendering.
  - The application, since it lives off of an external API, could live purely in the browser. It'd be super light-weight and fast: awesome!
  - ...but I've never used Angular/Ember, and I'm under some time constraints. There are some risks pursuing this now.
 3. **View framework**: use Rails + React to deliver my UI components instead of using Rails to render lots of HTML/SASS.
  - This would make the application a bit more flexible/structured in JS. Cleaner API implementation, too.
  - ...I've also never used it before. But its only the view part of "MVC" that would be new.
  
Although I was very familiar with **Option #1**, it has too many drawbacks, and just doesn't feel like a good fit: so I ruled that out immediately. So I focused on **#2** and **#3**. Ultimately, given my time constraints, I decided option **#3** was a better compromise between my needs and resources. I watched a few videos and ReactJS and it seemed like a less risky proposition, while still making the application a bit lighter, and affording an opportunity to go full-bore SPF if I found myself with extra time.

##### Some other thoughts

 - In order to support a variety of devices, I decided to focus on a mobile-first responsive design approach. Using CSS & non-device-specific media queries, I implemented each view around a set of breakpoints, which allowed me to quickly and easily accomplish some nice designs with minimal device-specific work. Check out `layout.png` to see an early mockup of the design I aimed for.
 - For a production deployment, I envisioned leveraging a CDN (like Cloudfront) to deliver most of the pre-compiled assets quickly to the user. If time had permitted, and a SPF could have been implemented, it was conceivable that the entire application could have been served in static form from CDN, removing the need for a web-server entirely allowing it to scale wide and cheap.
 - I had plans for encapsulating the web-server in a Docker container, something that would have made installation really easy. Unfortunately, given the limitations of the laptop I was working on, I did not have the capability to set up a Docker container with `docker-compose` (something I would have done on my home desktop.) So for now, it requuires a manual setup of Ruby to run.
