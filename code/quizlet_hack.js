javascript:try{var gravityScore,href=window.location.href;function getId(e){return document.getElementById(e)}function getClass(e){return document.getElementsByClassName(e)}!function(){function e(e){var t='<div class="UIModal is-white is-open" id="customMessageContainer" role="document" tabindex="-1"> <div class="UIModal-box"> <div class="UIModalHeader"> <div class="UIModalHeader-wrapper"> <span class="UIModalHeader-close"> <div class="UIModalHeader-closeIconButton"> <span class="UIIconButton"> <button class="UIButton UIButton--inverted" type="button" id="customCloseButton" onclick="document.getElementById(&quot;customMessageContainer&quot;).remove();"> <span class="UIButton-wrapper"> <svg class="UIIcon UIIcon--x-thin"> <noscript></noscript> <use xlink:href="#x-thin"></use> <noscript></noscript> </svg> </span> </button> </span> </div> </span> <div class="UIModalHeader-childrenWrapper"> <h3 class="UIHeading UIHeading--three"><span id="customTitle">JeffNJellyBean\'s Quizlet Exploit</span></h3> </div> </div> </div> <div class="UIModalBody"> <div class="UIDiv SetPageEmbedModal-content"> <div> <p class="UIParagraph"><span id="customMessage">'+e+"</span></p></div></div></div></div></div>",n=document.createElement("div");n.innerHTML=t,document.body.appendChild(n)}!function(){function t(){if("100%"==getClass("SpellModeControls-progressValue")[0].innerHTML)return 1;null!==getId("js-spellInput")&&(getId("js-spellInput").value=s(getClass("qDef lang-en TermText")[0].innerHTML),setTimeout(t,10))}function n(){if(getClass("ProgressSegmentedSemicircle-percent")[0].innerHTML="100%")return 1;if(function(){if(document.getElementsByClassName("UIButton UIButton--whiteBorder UIButton--fill")[0].click(),document.getElementsByClassName("UICheckbox-input")[3].checked&&!0!==document.getElementsByClassName("UICheckbox-input")[2].checked&&!0!==document.getElementsByClassName("UICheckbox-input")[4].checked)return document.getElementsByClassName("UIButton UIButton--inverted")[0].click(),1;!0===document.getElementsByClassName("UICheckbox-input")[4].checked&&document.getElementsByClassName("UICheckbox-input")[4].click(),!0===document.getElementsByClassName("UICheckbox-input")[2].checked&&document.getElementsByClassName("UICheckbox-input")[2].click(),!1===document.getElementsByClassName("UICheckbox-input")[3].checked&&document.getElementsByClassName("UICheckbox-input")[3].click(),document.getElementsByClassName("UIButton UIButton--inverted")[0].click()}(),void 0!==getClass("AssistantMultipleChoiceQuestionPromptView-inner")[0]){var e=s(getClass("FormattedText notranslate TermText lang-en")[0].innerHTML),t=getClass("FormattedText notranslate TermText lang-en")[1],o=getClass("FormattedText notranslate TermText lang-en")[2],i=getClass("FormattedText notranslate TermText lang-en")[3],a=getClass("FormattedText notranslate TermText lang-en")[4];if(e==t.innerHTML)t.click();else if(e==o.innerHTML)o.click();else if(e==i.innerHTML)i.click();else{if(e!=a.innerHTML)return console.error("ERROR: Unable to find / click answer"),0;a.click()}getClass("UIButton")[4].click(),setTimeout(n,10)}else setTimeout(n,100)}function s(e){return void 0!==Quizlet.assistantModeData?t(Quizlet.assistantModeData.terms,e):void 0!==Quizlet.learnGameData?t(Quizlet.learnGameData.allTerms,e):void 0!==Quizlet.testModeData?t(Quizlet.testModeData.terms,e):void 0!==Quizlet.spellModeData?t(Quizlet.spellModeData.spellGameData.termsById,e):void 0!==Quizlet.matchModeData?t(Quizlet.matchModeData.terms,e):void 0!==Quizlet.gravityModeData?t(Quizlet.gravityModeData.terms,e):0;function t(e,t){var n=e;if("-1"!=t.indexOf("_"))if("_"==t.slice(-1))for(var s=0;s<n.length;s++){if("-1"!=n[s].definition.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_")[0]))return n[s].word;if("-1"!=n[s].word.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_")[0]))return n[s].definition}else if("_"==t[0])for(s=0;s<n.length;s++){if("-1"!=n[s].definition.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0]))return n[s].word;if("-1"!=n[s].word.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0]))return n[s].definition}else for(s=0;s<n.length;s++){if("-1"!=n[s].definition.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0])&&"-1"!=n[s].definition.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_")[0]))return n[s].word;if("-1"!=n[s].word.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0])&&"-1"!=n[s].word.indexOf(getClass("qDef lang-en TermText")[0].innerHTML.split("_")[0]))return n[s].definition}var o=[];for(s=0;s<n.length;s++)n[s].definition=n[s].definition.replace("\n","<br>"),n[s].word=n[s].word.replace("\n","<br>"),t==n[s].word?o.push(n[s].definition):t==n[s].definition&&o.push(n[s].word);return o[Math.floor(Math.random()*o.length)]}}href.includes("quizlet.com")&&(href.includes("/learn")?(e('<h2>Game Mode: Learn</h2>Thank you for using JeffNJellyBean\'s Quizlet Exploit<br>Dont bother changing the time it only goes to 0.5<br><h4>Instructions:</h4>Just wait for this script to finish!<br><br><button class="UIButton" id="learnButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("learnButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),n()})):href.includes("/flashcards")?(e('<h2>Game Mode: Flashcards</h2>Thank you for using Ray JeffNJellyBean\'s Quizlet Exploit<br>Dont bother changing the time it only goes to 0.5<br><h4>Changelog:</h4>+ Added Match time freeze for regular match and diagrams<br>+ Added Gravity score exploit to get ANY score you want!<br>+ Added custom alert box<br>+ Fixed graphics<br>- Removed useless alert boxes.<h4>Instructions:</h4>Umm why are you here? Go cheat somewhere else...<br><br><button class="UIButton" id="flashcardsButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("flashcardsButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove()})):href.includes("/write")?(e('<h2>Game Mode: Write</h2>Thank you for using JeffNJellyBean\'s Exploit<br>Dont bother changing the time it only goes to 0.5<br><h4>Instructions:</h4>You dont even have to wait,<br> this is my favorite one to watch!<br><br><button class="UIButton" id="writeButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("writeButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),function(){for(var e=parseInt(document.getElementsByClassName("LearnModeProgressBar-value")[0].innerHTML),t=0;t<e;t++)getId("user-answer").value=Math.random(),getId("js-learnModeAnswerButton").click(),getClass("js-learnModeOverrideIncorrect")[0].click()}()})):href.includes("/spell")?(e('<h2>Game Mode: Spell</h2>Thank you for using JeffNJellyBean\'s Quizlet Exploit<br>Dont bother changing the time it only goes to 0.5.<br><h4>Instructions:</h4>Hold down enter and wait.<br><br><button class="UIButton" id="spellButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("spellButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),t()})):href.includes("/test")?(e('<h2>Game Mode: Test</h2>Thank you for using JeffNJellyBean\'s Quizlet Exploit<br>Dont bother changing the time it only goes to 0.5<br><br><h4>Instructions:</h4>Right click to toggle answers.<br>(Be subtle when using)<br><br><button class="UIButton" id="testButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("testButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),function(){for(var e=getClass("TermText notranslate lang-en"),t=0;t<e.length;t++)e[t].innerHTML+='<br><small style="font-weight: bold; display: block;" class="answers">'+s(e[t].innerHTML)+"</small>";window.oncontextmenu=function(e){e.preventDefault();var t=getClass("answers");if("block"==t[0].style.display)for(var n=0;n<t.length;n++)t[n].style.display="none";else for(n=0;n<t.length;n++)t[n].style.display="block"}}()})):href.includes("/micromatch")?(e('<h2>Game Mode: Micromatch</h2>Thank you for using JeffNJellyBean\'s Quizlet Exploit<br>Dont bother changing the time it only goes to 0.5<br><h4>Instructions:</h4>The timer will be paused when at choosen time.<br>The answers will also be highlighted for you.<br>At your leisure, solve the questions.<br><h4>Match Time: </h4><input type="text" id="matchTimeInput" value="0"></input><br><br><button class="UIButton" id="micromatchButton" type="button"><span class="UIButton-wrapper"><span>Inject</span></span></button>'),getId("micromatchButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),button=getClass("UIButton UIButton--hero")[0],button&&button.click(),setTimeout(function(){setTimeout(function(){for(var e=setTimeout(";"),t=0;t<e;t++)clearTimeout(t)},0);for(var e=getClass("MatchModeQuestionGridTile-text"),t=0;t<e.length;t++){"is-selected"!=getClass("MatchModeQuestionGridTile")[t].classList[1]&&o(getClass("MatchModeQuestionGridBoard-tile")[t].childNodes[0],"pointerdown");for(var n=0;n<e.length;n++)e[n].childNodes[0].innerHTML==s(e[t].childNodes[0].innerHTML)&&"is-selected"!=getClass("MatchModeQuestionGridTile")[n].classList[1]&&(o(getClass("MatchModeQuestionGridBoard-tile")[n].childNodes[0],"pointerdown"),n=e.length)}function o(e,t){if(e.fireEvent)e.fireEvent("on"+t);else{var n=document.createEvent("Events");n.initEvent(t,!0,!1),e.dispatchEvent(n)}}},500)})):href.includes("/match")&&(freeze_time=prompt("Time until freeze (milliseconds):"),e(`\n<h2>Game Mode: Match</h2>\nThank you for using JeffNJellyBean's Quizlet Exploit<br>\n<h4>Instructions:</h4>\nThe timer will be paused when at ${freeze_time} milliseconds.<br>\nThe answers will also be highlighted for you.<br>\nAt your leisure, solve the questions.<br>\n<br>\n<button class="UIButton" id="matchButton" type="button">\n<span class="UIButton-wrapper">\n<span>Inject</span>\n</span>\n</button>\n`),getId("matchButton").addEventListener("click",function(){document.getElementById("customMessageContainer").remove(),button=getClass("UIButton UIButton--hero")[0],button&&button.click(),setTimeout(function(){var e=setInterval(function(){!function(){if(getClass("MatchModeQuestionScatterTile")||getClass("MatchModeQuestionGridBoard-tile")){for(var t=setTimeout(";"),n=0;n<t;n++)clearTimeout(n);var o=getClass("MatchModeQuestionScatterTile"),i=["#FF0000","#FF0000","#FF6600","#FF6600","#FFFF00","#FFFF00","#00FF00","#00FF00","#00FFFF","#00FFFF","#0033FF","#0033FF","#FF00FF","#FF00FF","#CC00FF","#CC00FF","#6E0DD0","#6E0DD0","#C0C0C0","#C0C0C0","#FFFFFF","#FFFFFF","#A52A2A","#A52A2A","#F6CFFF","#F6CFFF","#CFD9FF","#CFD9FF","#FBFFA3","#FBFFA3","#FFD1A3","#FFD1A3","#710000","#710000"];for(n=0;n<o.length;n++){o[n].style.backgroundColor=i[n];for(var a=0;a<o.length;a++)o[a].childNodes[0].innerHTML==s(o[a].childNodes[0].innerHTML)&&(o[a].style.backgroundColor=i[n])}clearTimeout(e)}}()},1)},freeze_time)})))}()}()}catch(e){alert(e.message)}
