<p>Tienes 3 vidas&nbsp;(arriba a la derecha) as� que tienes 3 intentos y nos quedamos con tu mejor puntuaci�n ;-)</p><p>Entre intento e intento hay un retardo de 5 minutos, para animarte a volverte a ver lo que no te haya quedado claro en los v�deos y hacerlo mucho mejor</p>
<div id="vidasFlotantes" style="position:fixed; top:45px; right:0px; padding:5px; background-color:rgb(0, 68, 0); opacity:1;text-align:center;"><span style="color: #FFFFFF">mis vidas</span> <br>
<span id="vidas" style="font-size:x-large;"></span>
</div>
<script> function pintaVidas(){ var intentosTotales = Y.one('.quizinfo >p').get('text').slice(-1); var intentosRealizados = Y.all('.quizattemptsummary >tbody >tr').size(); var cadenaMisVidas=""; for (var i=0;i<intentosTotales-intentosRealizados;i++) cadenaMisVidas+="&#x1F49A;"; for (i;i<intentosTotales;i++)	 cadenaMisVidas+="&#x1F494;"; Y.one('#vidas').setContent(cadenaMisVidas); }; YUI().use('event-base', function (Y) { 	Y.on('domready', function () { pintaVidas(); }); }); </script>