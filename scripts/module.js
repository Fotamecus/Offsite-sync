Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {
    fetch('http://localhost:3000/foundry')
        .then(response => response.json())
        .then(data => console.log(data));
});
