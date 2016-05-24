# question-game
CMS exercise for Local Projects  

#### Preliminary Research

https://wrapbootstrap.com/theme/rubix-reactjs-powered-admin-template-WB09498FH?l=m - cost money, varies by license, but seems promising

https://github.com/relax/relax - this is an awesome open source project, after a few minutes I created this:

			http://demo.getrelax.io/hola-todo-mundo

Both of these seem like overkill for the task at hand, and I suppose it is more relevant to build something simple from scratch.

#### General Plan
I have done some work with RoR, but lately I've been on a quest to learn React and Node, working with a NERD stack, so for consistencies sake, I will go that route.

My initial thoughts are as such:

- The questions are basically documents, like a survey. If we think of something like surveymonkey, we may expect that the client, in the future, would want to have all sorts of questions - meaning documents that do not have a uniform structure - multiple choice, open questions, ranking questions, or even some kind of task that is not a question at all, but has outcomes. So mongodb seems like a good choice. Also, I have been working with mongodb this past week, and I have deployed a simple NERD app with mognodb on heroku during my practice sessions, so I'll choose this path for simplicity (I just noticed you asked to use an RDBMS -- I'm happy to discuss both options). 

- The admin page will have a simple interface to begin with - A text box for questions, a text box for tokens, and CRUD operations. The questions and tokens would be grouped under some entity, for the time being let's call it Question. Of course, there would need to be a login as admin (say using JWT auth), and a way to decorate-protect some CRUD actions. 

---

Questions have the following attributes:
* id : Integer
* Text : String
* Outcomes : Collection of Outcome
 
---

Outcomes are entities themselves which have the following attributes:
* OutcomeType : Integer
* YesValue : Integer
* NoValue : Integer

---

We will use another entity called OutcomeType (so we don't have to store multiple copies of Outcome text) with the following attributes:
* id : Integer
* Text : String

---

- The web page (non admin) will simply retrieve documents (questions) from the db, and present these to the user, along with 'yes' and 'no' buttons. It will function as a SPA.
Once a question is answered, a QuestionAnswered action is fired with the corresponding payload ('yes' or 'no').

- The buttons will update the statistics according to the reply (as I understand it, after the game is served to the front facing UI, and does not communicate with the back end, so this is all done on the front end).

- These are the UI parts (for which I will build the needed React stores, actions and components using Flux workflow):

1. Question Panel
Corresponding actions: QuestionAnswered

2. The simple board, could be either some sort of chart library, or a React component that is comprised of child components (e.g. leftmost column is text, then number of tokens as updated after each question.) The board does not fire any actions, it only updates after a QuestionAnswered action propogates through the system (QuetsionAnswered action fired -> dipatcher -> registered stores update themselves -> Controller View -> UpdateOutcomes -> fire NextQuestion action)

### Setup

- clone repo and cd to root folder
- bower install
- npm install
- gulp
- server server/server.js
- visit http://localhost:7777/ with your browser to check out admin mode.

You should have mongodb installed and running.

### Testing
TODO

### See it live
http://question-game.herokuapp.com/
