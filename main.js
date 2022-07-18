document.getElementById('send_button').onclick = function()
{

    let span = document.getElementById("fname");
    let data = span.value;

    span.value = "";
    send_data(data);
}

document.getElementById('kbutton').onclick = function()
{
    send_data("stop sur la vie de ma mere");
}

document.getElementById('music').onclick = function()
{
    send_data("%%");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function send_data(donnee)
{
    alert(donnee);
    var data = new FormData();
    data.append("data" , donnee);
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.open( 'post', 'file.php', true );
    xhr.send(data);

    sleep(1000).then(() => {
        if (donnee !== "  ")
            send_data("  ");
    });

}