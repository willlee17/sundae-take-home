Hello! My name’s William and this is my take on the Sundae frontend challenge. I was tasked with recreating the offers procedures screenshot and this is what I have. To run this challenge, pull/download this repository, run 'npm install' to install the few libraries I included, and then run 'npm start' or 'yarn start'. 

I recreated the screenshot as close as I could with CRA instead of webpack with the time given. Instead of using just one component, I decided to use multiple components to showcase nested components and functionality. The main app component holds the “data” (in this case the 3 procedures). It then sends them down to my RequestOfferHome.js component as props. 

The RequestOfferHome.js component is a React PureComponent that improves the components’ performance due to subtle changes on the shouldComponentUpdate() lifecycle method. I used MaterialUI’s Grid component for my projects’ grid system. Here I split the screen in half, one being the image (which I screenshoted from the screenshot) and the second being a functional component, called OfferProceduresList, which carries all the props thrown down. 

Inside OfferProceduresList, I use .map() to iterate through every procedure in the props and return them inside OfferProcedure. OfferProcedure is the last functional component and it takes the specified feature and adds a number avatar and stylized texts. 


_________________________________________


Styles
I used MaterialUI for styling the project. For regular CSS, I  placed most of them on App.css but some MaterialUI specific stylings were left in the component code (OfferProcedure.js ‘useStyles’) and one simple inline CSS style. The avatar (the pink numbered circles) dynamically updates depending on the “id” of the procedure. So when a fourth procedure is given, if the id is 4, the avatar will update with a pink 4. 	


_________________________________________


Improvements
- If I had more time, the first thing I’d do is to improve the responsiveness of my project. I did use MaterialUI’s Grid system as a substitute for flex box. However, I didn’t have enough time to re-edit the stylings so that they appear better on smaller screen sizes. 
- I realize I had the choice to combine OfferProceduresList and OfferProcedures into one big functional component but I wanted to keep code clean and show nested components. 
- I would also have added a routing library like React Router to take the app to a different component if the user clicks on the request offer button. 
- The paragraph that describes the steps could be squeezed in tighter. 
