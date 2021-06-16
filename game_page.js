Player1name=localStorage.getItem("Player1key");
Player2name=localStorage.getItem("Player2key");
Player1score=0;
Player2score=0;
document.getElementById("Player1name").innerHTML=Player1name + " :";
document.getElementById("Player2name").innerHTML=Player2name + " :";
document.getElementById("Player1_score").innerHTML="\t"+Player1score;
document.getElementById("Player2_score").innerHTML="\t"+Player2score;
document.getElementById("Player_question").innerHTML="Question turn : "+Player1name;
document.getElementById("Player_answer").innerHTML="Answer turn : "+Player2name;
function send() {
    get_word=document.getElementById("Word").value;
    word= get_word.toLowerCase();
    console.log(word);
    char_1=word.charAt(1);
    console.log(char_1);
    position=Math.floor(word.length/2);
    char_2=word.charAt(position);
    console.log(char_2);
    char_3=word.charAt(word.length-1);
    console.log(char_3);
    underline_1=word.replace(char_1,"_");
    console.log(underline_1);
    underline_2=underline_1.replace(char_2,"_");
    console.log(underline_2);
    underline_3=underline_2.replace(char_3,"_");
    console.log(underline_3);
    question_tag="<h4 id='word_display'>Q."+underline_3+"</h4>";
    input_tag="<br>answer:<input id='input_check' type='text'>";
    button_tag="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_tag+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Word").value="";
}
var question_turn="player1";
var answer_turn="player2";
function check() {
    get_answer=document.getElementById("input_check").value;
    answer=get_answer.toLowerCase();
    if(answer==word) {
        if(answer_turn=="player1") {
            Player1score=Player1score+1;
            document.getElementById("Player1_score").innerHTML=Player1score;
        }
        else{
            Player2score=Player2score+1;
            document.getElementById("Player2_score").innerHTML=Player2score;
             }
       }
       if(question_turn=="player1") {
        question_turn="player2";
        document.getElementById("Player_question").innerHTML="Question turn: "+Player2name;
    }
        else {
    question_turn="player1";
    document.getElementById("Player_question").innerHTML="Question turn: "+Player1name;
        }
        if(answer_turn=="player2") {
            answer_turn="player1";
            document.getElementById("Player_answer").innerHTML="Answer turn: "+Player1name;
        }
            else {
        answer_turn="player2";
        document.getElementById("Player_answer").innerHTML="Answer turn: "+Player2name;
            }
            document.getElementById("output").innerHTML="";
}