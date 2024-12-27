# Relationship Predictor
## Overview
Welcome to Relationship Predictor, a fun and interactive website where users can enter two names and discover the probable relationship between them. This project brings a delightful touch of animation, dynamic content, and playful emoji effects to make the experience engaging.
[Features](#features), [HowItWorks](#how-it-works), [Logic](#logic).
<br>
Click on the below link to open the website:
[link](https://yvsaihitesh.github.io/Relationship-Predictor/relationshipPredictor.html)

## Features
- **User Inputs:** Two input fields to enter your name and your crush's name.
- **Relationship Display:** The website predicts the relationship between the two names and displays it.
- **Background Image:** A background image that suits the predicted relationship.
- **Emoji Animation:** Emojis that suits the predicted relationship fall like snow across the webpage, adding a magical touch.

## How It Works
1. Enter your name and your crush's name in the respective input fields.
2. Click the Submit button.
3. Then the website will:
   - Predict the relationship and displays it in the webpage in a box along with some matter related to the respective relationship.
   - Displays a background image that matches the relationship.
   - Trigger falling emojis animation.

## Logic
The logic behind the relationship prediction follows these steps:
1. **Convert Common Letters**
 - For each letter common to both inputs, convert the letter into the digit 1.
 - Example: for Input1:rama, Input2:sita common letter a is converted into 1 in both inputs for once, resulting in Input1:r1ma, Input2:sit1
2. **Calculate Total Characters:** Count all the remaining alphabets in Input1 and Input2 after conversion. Let this total be count.
3. **Use FLAMES Array:**
   - Create an array FLAMES with the following elements {"F","L","A","M","E","S"}.
   - Start counting from the first element. Once you reach the count value, remove the corresponding element and continue counting from the next position.
   - Repeat until only one element remains
4. **Result:** The last remaining element in the FLAMES array is the predicted relationship between the two names.
     - F: Friends
     - L: Lovers
     - A: Attraction
     - M: Marriage
     - E: Enemies
     - S: Siblings



