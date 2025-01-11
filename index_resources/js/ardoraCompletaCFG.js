//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=3;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="index_resources/media/c2_kahhot.JPG"  align="left"><p>https://drive.google.com/file/d/1_FWAErphIEuBNaZYk5E09LkR9v-U-fLT/view?usp=drive_link </p><p>  </p><p> Lee el siguiente texto y completa las frases con las palabras adecuadas. </p><p>  </p><p> Kahoot es una herramienta ___ que permite crear juegos de preguntas y respuestas en línea. Su principal utilidad es ___ el aprendizaje de una manera divertida y ___. </p><p>  </p><p> Para utilizar Kahoot, el maestro o moderador debe crear un ___ en la plataforma y diseñar una serie de preguntas con varias opciones de respuesta. Luego, los participantes se unen al juego mediante un código PIN ___ que se les proporciona en la pantalla. </p><p>  </p><p> El juego se puede jugar de manera ___ en un aula o de forma ___ en línea, permitiendo que estudiantes de diferentes lugares participen al mismo tiempo. Cada respuesta correcta otorga puntos y se muestra un ___ con el ranking de los jugadores. </p><p>  </p><p> Además de ser una herramienta educativa, Kahoot también se utiliza en ___ y actividades de team building para mejorar la interacción y colaboración entre los participantes. </p><p>  </p><p> Palabras a utilizar: </p><p>  </p><p> <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> </p><p> <input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly> </p><p>  </p><p> </p>'];
var answers=["clasificador","Motivadora","presencial","interactiva","remota","único","reforzar","empresas","cuestionario"];
var a=["OA==","Mw==","Ng==","MQ==","Nw==","NQ==","Mg==","OQ==","NA=="];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["225","209","225","225"];
var info=["","","",""];
