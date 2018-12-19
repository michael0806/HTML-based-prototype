$(document).ready(function () {
    showhome();
    console.log('ready!');
});

function showhome() {
    abc(1);
    hidechat();
    hidequiz();
    hidereview();
    hidemail();
    hidepeople();
    hidesetting();
}

function abc(i) {
    let item2 = $("#item2");
    let item3 = $("#item3");
    let item4 = $("#item4");
    let item5 = $("#item5");
    let item6 = $("#item6");
    switch (i) {
        case 1:
            console.log('1!');
            item2.css("background", "rgba(255, 255, 255, 0.8)");
            item3.css("background", "rgba(255, 255, 255, 0.5)");
            item4.css("background", "rgba(255, 255, 255, 0.5)");
            item5.css("background", "rgba(255, 255, 255, 0.5)");
            item6.html("<b>Concept</b><br><br>Lactic acid is an organic compound with the formula CH3CH(OH)COOH. In its solid state, it is white and water-soluble.<br>During power exercises such as sprinting, when the rate of demand for energy is high, glucose is broken down and oxidized to pyruvate, and lactate is then produced from the pyruvate faster than the body can process it, causing lactate concentrations to rise. The production of lactate is beneficial for NAD+ regeneration (pyruvate is reduced to lactate while NADH is oxidized to NAD+), which is used up in oxidation of glyceraldehyde 3-phosphate during production of pyruvate from glucose, and this ensures that energy production is maintained and exercise can continue. (During intense exercise, the respiratory chain cannot keep up with the amount of hydrogen atoms that join to form NADH, and cannot regenerate NAD+ quickly enough.)<br><br>The resulting lactate can be used in two ways:<br>1. Oxidation back to pyruvate by well-oxygenated muscle cells, heart cells, and brain cells. Pyruvate is then directly used to fuel the Krebs cycle.<br>2. Conversion to glucose via gluconeogenesis in the liver and release back into circulation; If blood glucose concentrations are high, the glucose can be used to build up the liver's glycogen stores.");
            break;
        case 2:
            console.log('2!');
            item2.css("background", "rgba(255, 255, 255, 0.5)");
            item3.css("background", "rgba(255, 255, 255, 0.8)");
            item4.css("background", "rgba(255, 255, 255, 0.5)");
            item5.css("background", "rgba(255, 255, 255, 0.5)");
            item6.html("<b>Quiz</b><br><br><div class='quiz' onclick='showreview()'>Quiz 1:review</div><div class='quiz' onclick='showquiz()'>Quiz 2:todo</div><div class='quiz' onclick='showquiz()'>Quiz 3:todo</div><div class='quiz' onclick='showquiz()'>Quiz 4:todo</div>");
            break;
        case 3:
            console.log('3!');
            item2.css("background", "rgba(255, 255, 255, 0.5)");
            item3.css("background", "rgba(255, 255, 255, 0.5)");
            item4.css("background", "rgba(255, 255, 255, 0.8)");
            item5.css("background", "rgba(255, 255, 255, 0.5)");
            item6.html("<b>Form</b><br><br>Nothing");
            break;
        case 4:
            console.log('4!');
            item2.css("background", "rgba(255, 255, 255, 0.5)");
            item3.css("background", "rgba(255, 255, 255, 0.5)");
            item4.css("background", "rgba(255, 255, 255, 0.5)");
            item5.css("background", "rgba(255, 255, 255, 0.8)");
            item6.html("<b>About</b><br><br>This website is good for people who is interested in PE and Lactic acids");
    }
}

function showchat() {
    $("#chat").show();
}

function hidechat() {
    $("#chat").hide();
}

function showquiz() {
    $("#quiz-box").show();
}

function hidequiz() {
    $("#quiz-box").hide();
}

function showreview() {
    $("#quiz-review").show();
}

function hidereview() {
    $("#quiz-review").hide();
}

function showmail() {
    $("#mail").show();
}

function hidemail() {
    $("#mail").hide();
}

function showpeople() {
    $("#people-box").show();
}

function hidepeople() {
    $("#people-box").hide();
}

function showsetting() {
    $("#setting").show();
}

function hidesetting() {
    $("#setting").hide();
}

function sendchat() {
    let message = $("#input").val();
    $("#chat-box").append("<div class=\"receive\">\n" +
        "<div class=\"send-author\">Micheal</div>\n" +
        "<div class=\"send-message\">" + message + "</div>\n" +
        "</div>");
    autoreply(message);
}

function autoreply(message) {
    let name = ["Gary", "Tom", "Bob", "Clark"];
    let author = name[~~(Math.random() * name.length)];
    $("#chat-box").append("<div class=\"receive\">\n" +
        "<div class=\"receive-author\">" + author + "</div>\n" +
        "<div class=\"receive-message\">" + message + "</div>\n" +
        "</div>");
}

function postcomment() {
    $("#comments").append("<div class=\"comment-entry\">Micheal: " + $("#comments-input").val() + "</div>");
}