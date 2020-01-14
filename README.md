# Alien Awareness

<p>Alien Awarness is a website designed for curious minds with eyes in the sky, it allows users to create an account and post about any and all alien sightings they have have witnessed. Similar to other social media accounts the user creates a unique username and password that allows them full acccess to the blog page. Other users will be able to see who creates a sighting post, where it happened, and a location of the event. </p>

<h2>The Site</h2>
<p>To checkout t the webiste visit the heroku hosted site below and click the sing up button in the bottom left corner.
https://morning-wildwood-42280.herokuapp.com/</p>


<h2>Installing</h2>

<p>If you are interested in stalling this on your own device simply clone the repo onto your computer and run the command "npm install, this should install the following packages: </p>
  <ul>
    <li>bcryptjs</li>
    <li>dotenv</li>
    <li>express</li>
    <li>express-handlebars</li>
    <li>express-sessio</li>
    <li>mysql2</li>
    <li>passport</li>
    <li>passport-local</li>
    <li>sequelize</li>
  </ul>
  
 <p> Once this is is done your are going to need to create a new .env file, this will store your mySQL database password, if you do not have mySQL you will also need to install that on your computer to store the data of the users and the posts. In the .env file you shoud have one line that reads: 

LOCAL_PASSWORD=your-mySQLDatabase-password-here

If you have done this right you should now be able to run the command node server.js and your device should start hosting the program from localhost:3000 
</p>

