
   function assignGrade(score){
    {
        if(score > 90){
            return console.log("For scoring " +score+ " points, you get an A" );
        } else if (score > 80){
            return console.log("For scoring " +score+ " points, you get an B" );
        } else if (score > 70){
            return console.log("For scoring " +score+ " points, you get an C" );
        } else if (score > 65){
            return console.log("For scoring " +score+ " points, you get an D" );
        } else {
            return console.log("For scoring " +score+ " points, you get an E" );
        }
    }
}
for (let score = 60; score <= 100; score++){
    console.log(assignGrade(score))
}
