const Reddit  = require("./js/download_posts_reddit");
const Twitter = require("./js/download_posts_twitter");

function main(params) {
    //Reddit.removeFilesDuplicate();
    Reddit.buscarPostsReddit("Animewallpaper");
    //Twitter.buscarPostsTwitter("from:DekuNaro");
}

main();