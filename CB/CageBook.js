$(function(){

	//Directly copied from links.json
	var photos = [
"CagePhotos/5f7.jpg",
"CagePhotos/93d.png",
"CagePhotos/d18.jpg",
"CagePhotos/a32.jpg",
"CagePhotos/43b.jpg",
"CagePhotos/TegpY.gif",
"CagePhotos/49e.jpg",
"CagePhotos/65a.gif",
"CagePhotos/1694ac947f6a116e93fcbcf92e7480d1.gif",
"CagePhotos/tumblr_ltmwcwFM6n1qfyr8uo1_400.png",
"CagePhotos/tumblr_lrcs83yvuM1qdezf9o1_500.gif",
"CagePhotos/929.gif",
"CagePhotos/4ac.jpg",
"CagePhotos/c71.gif",
"CagePhotos/68a89945-5688-48e0-8529-a022ab3155dc.jpg",
"CagePhotos/500.gif",
"CagePhotos/af5.jpg",
"CagePhotos/fd7.gif",
"CagePhotos/721.gif",
"CagePhotos/628.jpg",
"CagePhotos/98c.jpg",
"CagePhotos/74d.jpg",
"CagePhotos/5d0.gif",
"CagePhotos/484.jpg",
"CagePhotos/0ad.gif",
"CagePhotos/289",
"CagePhotos/miORB.jpg",
"CagePhotos/5f8.jpg",
"CagePhotos/83f.png",
"CagePhotos/999.jpg",
"CagePhotos/d2c.jpg",
"CagePhotos/tumblr_lwlm8s8jjf1r8hfozo1_500.png",
"CagePhotos/b0e.jpg",
"CagePhotos/28c.jpg",
"CagePhotos/c67.jpg",
"CagePhotos/155.jpg",
"CagePhotos/tumblr_lmjvguFFuq1qzma4ho1_400.png",
"CagePhotos/tumblr_ls8ynpSoYY1qjc193o1_500.jpg",
"CagePhotos/997.jpg",
"CagePhotos/49a.png",
"CagePhotos/7df.jpg",
"CagePhotos/b2e.gif",
"CagePhotos/nickcage.jpeg",
"CagePhotos/c09.png",
"CagePhotos/1a6.jpg",
"CagePhotos/f4f.png",
"CagePhotos/5e9.jpg",
"CagePhotos/e63.jpg",
"CagePhotos/def.jpg",
"CagePhotos/1bc.jpg",
"CagePhotos/tumblr_lrsex9ijb81r1v4zao1_250.gif",
"CagePhotos/Nick%20Bird.jpg",
"CagePhotos/e9a.jpg",
"CagePhotos/04e.png",
"CagePhotos/b40.gif",
"CagePhotos/f2c.jpg",
"CagePhotos/770.gif",
"CagePhotos/fff.jpg",
"CagePhotos/3b1.jpg",
"CagePhotos/2ec.jpg",
"CagePhotos/a81.jpg",
"CagePhotos/Riot-Movie-Poster.jpg",
"CagePhotos/700.jpg",
"CagePhotos/4aa.gif",
"CagePhotos/84e.jpg",
"CagePhotos/eb3.png",
"CagePhotos/e8a.jpg",
"CagePhotos/b5b.jpg",
"CagePhotos/a2c.gif",
"CagePhotos/726.png",
"CagePhotos/ddf.png",
"CagePhotos/c53",
"CagePhotos/584.jpg",
"CagePhotos/4ef.gif",
"CagePhotos/d2d.gif",
"CagePhotos/article-0-0DEF505D00000578-629_634x391.jpg",
"CagePhotos/Q4hB1.jpg",
"CagePhotos/notthefudsicles1.jpg",
"CagePhotos/a2bbf93c-40be-4726-8c0b-f33e281eac3e.jpg",
"CagePhotos/Nicolas-Cage-Textbook-1322672538_jpg_627x1000_q85.jpg",
"CagePhotos/b5e.jpg",
"CagePhotos/3df.gif",
"CagePhotos/0fe.jpg",
"CagePhotos/885.jpg",
"CagePhotos/f05.png",
"CagePhotos/34c.jpg",
"CagePhotos/4fa.jpg",
"CagePhotos/e2b.gif",
"CagePhotos/428.jpg",
"CagePhotos/0f9.gif",
"CagePhotos/8f7.jpg",
"CagePhotos/20a.jpg",
"CagePhotos/8e0.png",
"CagePhotos/0b2.jpg",
"CagePhotos/a79.png",
"CagePhotos/Cage-intro.jpg",
"CagePhotos/tumblr_lrv7i7hCZh1qjc193o1_1280.jpg",
"CagePhotos/tumblr_lrudzgA5KK1qlnzs9o1_500.gif",
"CagePhotos/tumblr_lppbqi6jSo1qfcczho1_500.gif",
"CagePhotos/tumblr_lsfd166jE71qgpl0to1_500.jpg",
"CagePhotos/tumblr_lwwt8cxNg61qb36wno1_400.jpg",
"CagePhotos/699.jpg",
"CagePhotos/1f7.png",
"CagePhotos/ccf.jpg",
"CagePhotos/b03.gif",
"CagePhotos/3f2.jpg",
"CagePhotos/6d2.gif",
"CagePhotos/1b8.gif",
"CagePhotos/0a9.jpg",
"CagePhotos/77d.jpg",
"CagePhotos/2d7.jpg",
"CagePhotos/577.gif",
"CagePhotos/cba.jpg",
"CagePhotos/cfa.jpg",
"CagePhotos/a46.jpg",
"CagePhotos/5a2.png",
"CagePhotos/625.jpg",
"CagePhotos/0e3.jpg",
"CagePhotos/05a.jpg",
"CagePhotos/d3a.jpg",
"CagePhotos/01d.png",
"CagePhotos/9b9.jpg",
"CagePhotos/894.jpeg",
"CagePhotos/7a7.png",
"CagePhotos/769.jpg",
"CagePhotos/e7a.jpg",
"CagePhotos/1e3.jpg",
"CagePhotos/c03.gif",
"CagePhotos/8c8.png",
"CagePhotos/667.jpg",
"CagePhotos/67957.jpg",
"CagePhotos/31341.jpg"
];

	var i = 0;
	var attack = function(){
		$("img:not([src^=\"chrome\"])").each(function(index, element){
			element.src = chrome.runtime.getURL(photos[i++ % photos.length]);
		});
	};

	attack();

	window.onp

});
