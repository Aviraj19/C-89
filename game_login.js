function login() {
    player1name=document.getElementById("Player1_name").value ;
    player2name=document.getElementById("Player2_name").value ;
    localStorage.setItem("Player1key",player1name);
    localStorage.setItem("Player2key",player2name);
    window.location="game_page.html";
}