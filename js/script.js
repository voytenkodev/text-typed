list_colors = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'whitespace', 'pink',
    'brown', 'gray', 'crimson', 'gold', 'lime', 'springgreen', 'darkcyan', 'aqua', 'navy', 'orangered']
list_text = ['Developers!', 'Web-development', 'JavaScript', 'PHP', 'WordPress',
    'while(true){...}', 'Backend', 'Nice try', 'git push', 'Fronted', 'Love coding', 'databases',
    'HTML5', 'CSS3', 'phpMyAdmin', 'MySQL', 'Python', 'Django', 'SQLite3', 'React']
len_text = list_text.length;
len_colors = list_colors.length;
list_final = []
var h = $('#section-animation').height();
var w = $('#section-animation').width();
function go() {
    random_text = list_text[Math.floor(Math.random() * (len_text) + 1)];
    random_color = list_colors[Math.floor(Math.random() * (len_colors))];
    random_width = Math.floor(Math.random(w) * 1100) + 50 + "px"
    random_height = (Math.floor(Math.random(h) * 1100) / 2) + 50 + "px"
    if (random_height > h - 200) {
        random_height = random_height / 2;
    }
    random_size = Math.floor(Math.random() * 4) + 1 + "em"
    random_timer = Math.floor(Math.random() * 3000) + 1000
}
$(document).ready(function () {
    function gorandom() {
        go()
        $("#random-text").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom, 2200)
    function gorandom1() {
        go()
        $("#random-text1").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom1, 2400)
    function gorandom2() {
        go()
        $("#random-text2").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom2, 2600)
    function gorandom3() {
        go()
        $("#random-text3").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom3, 2800)
    function gorandom4() {
        go()
        $("#random-text4").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom4, 3000)
    function gorandom5() {
        go()
        $("#random-text5").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom5, 3200)
    function gorandom6() {
        go()
        $("#random-text6").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom6, 3400)
    function gorandom7() {
        go()
        $("#random-text7").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom7, 3500)
    function gorandom8() {
        go()
        $("#random-text8").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom8, 3600)
    function gorandom9() {
        go()
        $("#random-text9").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom9, 4700)
    function gorandom10() {
        go()
        $("#random-text10").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom10, 4800)
    function gorandom11() {
        go()
        $("#random-text11").text(random_text).css({
            "color": random_color, "left": random_width,
            "top": random_height, "font-size": random_size
        }).hide().delay(100).show('slow').delay(random_timer).hide('slow')
    };
    setInterval(gorandom11, 3900)

});

// PART ABOUT ME 

// script for animation in block "STACK" --> stackoverflow 

//var name = prompt('Enter your surname, please')
text_for_about_me = 'Knock knock mr. ' + name + '!My name is Bogdan and im web developer. Hello, my name is bogdan and im web developer.' +
    'Hello, my name is bogdan and im web developer.Hello, my name is bogdan and im web developer.'
index_text_about = 0
new_array_text_for_about_me = []
final_text_about_me = []
function final_func() {
    $(document).ready(function () {
        function textaboutme() {
            new_array_text_for_about_me.push(text_for_about_me[index_text_about])
            final_text_about_me = new_array_text_for_about_me.join('')
            $('#text-about-me-js').text(final_text_about_me).css({ "color": "black", "font-size": "2.3em" }).show('slow');
            index_text_about++;
        };
        setInterval(textaboutme, 35)
    })
}
setTimeout(final_func, 3500)