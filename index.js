//Creating tweet button dynamically
var url = "http://naoyashiga.github.io/nko";
var tweetText;

//Change input form
$("input").keyup(function(){
	changeTweetText($(this).val());
});

function changeTweetText(answer){
	tweetText = "「○んこ」から連想した言葉は「" + answer + "んこ」です " + url;
	$("#social").html('<a href="https://twitter.com/share" class="twitter-share-button" data-text="'+ tweetText + '" data-lang="ja">ツイート</a>');

	twttr.widgets.load();

}
