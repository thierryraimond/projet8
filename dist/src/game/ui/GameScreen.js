define(["src/utils/assetsmanager/SpriteManager","src/utils/assetsmanager/SoundManager","src/utils/localization/txt"],function(e,t,n){var r=function(){};return r.prototype.init=function(t){$("#screenContainer").append("<div id='GameScreen'></div>"),$("#GameScreen").css("background-image","url("+e.get("GameScreenBackground").src+")").css("width",1136).css("height",640).css("background-size","100% 100%"),$("#GameScreen").append("<div id='hudSpecialText'>"+n.get("LABEL_HUD_CAPACITE_TITLE")+"</div>");var r=3;$("#GameScreen").append("<div id='hudSpecialContainer'></div>");for(var i=0;i<r;i++){$("#hudSpecialContainer").append("<div class='hudSpecialLogo' id='specialLogo"+i+"'></div>");var s=50+60*i;$("#specialLogo"+i).css("left",s).css("background-image","url("+e.get("hudSpecialLogo").src+")")}$("#GameScreen").append("<div id='hudTimeText'>20s</div>"),$("#GameScreen").append("<div id='hudActionContainer'></div>"),$("#hudActionContainer").append("<div id='hudActionTitleText'>"+n.get("LABEL_HUD_ACTION_TITLE")+"</div>"),$("#hudActionContainer").append("<div id='hudActionNumberText'>12</div>")},new r});