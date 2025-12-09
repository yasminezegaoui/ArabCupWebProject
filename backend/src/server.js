import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});







/*

Core Sections (Required)
● Teams Section: list teams, flags, group info, and team details.
● Players Section: player profiles and stats (goals, assists, cards, minutes).
● Matches Section: upcoming + finished matches, match details.
● Leaderboard: group standings, points, goals for/against.
● Filters & Search: dynamic search and filtering system.

*/
