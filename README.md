This is a price checker app to keep track of grocery list expenses.

To run this app:

-clone repo into desired directory.
-npm install
-npm run web (this will open browser and start metro bundler and then run app on localhost)

Features:
-Enter 4 digit code in text input.
    codes: 0001, 0002, 0003 (these are the id's of each item in sample data)
-Click Submit - this will add that item to list.
    The item's name, price and quantity will be displayed.
-Click + or - buttons to increase or decrease quantity.

Table of Contents:
App.js - parent component
GroceryList.js - main component
sampleData > foods.js - provided data

Currently, total displays NaN when items are added to list.
And there is an issue with the modal - always visible even when state should be false.
Hopefully in the future I can fix this issue so that the modal only opens when you press "Add Item" button.

Thank you.