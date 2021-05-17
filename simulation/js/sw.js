var stop=true;
var end=false;
var s1,s2;
var ab=[[0.03,0.072,0.108,0.163,0.194,0.25,0.278,0.329,0.05,0.199],
		[0.030,0.075,0.127,0.175,0.213,0.265,0.292,0.337,0.079,0.169],
		[0.028,0.06,0.1,0.143,0.181,0.213,0.246,0.286,0.033,0.162],
		[0.022,0.076,0.119,0.164,0.201,0.244,0.292,0.337,0.054,0.185],
		[0.052,0.092,0.121,0.165,0.197,0.231,0.279,0.324,0.063,0.162],
		[0.025,0.073,0.135,0.182,0.231,0.284,0.325,0.373,0.058,0.306]];
var p = Math.floor(Math.random()*6);
// var p=5;
	//tranmittance=power(10,2-absorbance); 
// var tr=[[93.33,84.72,77.98,68.71,63.97,56.23,52.72,46.88,89.13,63.24],
		// [89.74,84.14,72.95,66.83,57.15,54.33,51.05,46.03,83.37,67.76],
		// [93.76,87.10,79.43,71.94,65.92,63.24,51.76,56.75,92.68,68.87],
		// [93.76,87.10,79.43,71.94,65.92,63.24,51.76,56.75,92.68,68.87],

//to prevent entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function navNext()
{
	for(temp=0;temp<=13;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

var ca;
var questions=["Spectrophotometer reading is taken for absorption or</br> percentage transmission at _________ wavelength.",
				"The eqution to calculate absorbance</br> value from T or %T value is",
				"The ratio of the intensity of the transmitted light (I) to </br>the intensity of the incident light (I<sub>o</sub>) is",
				"Quantity of Buffer solution added to flasks is ",
				"Barium chloride added produces turbidity in</br> proportion to the Sulphate concentration?"];
var options2=[["390nm","420nm","440nm","470nm"],//420nm
			  ["A=-log10T","A=log10(1/T)","A=2-log10%T","All of the above"],//All of the above
			  ["Absorbance","Transmittance","Turbidity","None of the above"],//Transmittance
			  ["5ml","10ml","15ml","20ml"],//20ml
			  ["True","False"]];//True


function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


//Simulation screen actions
function magic()
{
	if(simsubscreennum==1) //display heading
	{
		$("#1-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	
	if(simsubscreennum==2) //prepare std sulphate solution
	{
		setTimeout(function()
		{
			//Open sulphate sulotion bottle
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			$("#2-1").click(function()
			{
				myStopFunction();
				$("#2-1").off("click");	
				$("#2-1").animate({"position":"absolute","top":"285px"},250,
				function()
				{
					$("#2-1").animate({"position":"absolute","left":"540px"},300,
					function()
					{
						$("#2-1").animate({"position":"absolute","top":"400px"},750,
						function()
						{
							$("#2-5").fadeIn(500,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#2-5").click(function()
								{
									myStopFunction();
									$("#2-5").off("click");	
									$("#2-5").animate({"position":"absolute","top":"150px"},750,
									function()
									{
										$("#2-61").css({"visibility":"visible"});
										$("#2-62").css({"visibility":"visible"});
										$("#2-63").css({"visibility":"visible"});
										$("#p2-1").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#2-62").click(function()
										{
											myStopFunction();
											$("#2-62").off("click");
											$("#2-61").css({"visibility":"hidden"});
											$("#2-62").css({"visibility":"hidden"});
											$("#2-63").css({"visibility":"hidden"});
											$("#p2-1").css({"visibility":"hidden"});	
											$("#2-51").animate({"position":"absolute","top":"320px"},750);
											$("#2-3").animate({"position":"absolute","top":"370px"},750,
											function()
											{
												//fill flask1 with 5ml solution
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:210px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#2-5").click(function()
												{
													myStopFunction();
													$("#2-5").off("click");	
													$("#2-5").animate({"position":"absolute","top":"90px"},750);
													$("#2-51").animate({"position":"absolute","top":"260px"},750,
													function()
													{
														$("#2-5").animate({"position":"absolute","left":"60px"},1200);
														$("#2-51").animate({"position":"absolute","left":"77px"},1200,
														function()
														{
															$("#2-5").animate({"position":"absolute","top":"120px"},750);
															$("#2-51").animate({"position":"absolute","top":"290px"},750,
															function()
															{
																$("#2-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#2-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#2-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																$("#p2-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																 // Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#2-63").click(function()
																{
																	myStopFunction();
																	$("#2-63").off("click");
																	$("#2-61").css({"visibility":"hidden"});
																	$("#2-62").css({"visibility":"hidden"});
																	$("#2-63").css({"visibility":"hidden"});
																	$("#p2-2").css({"visibility":"hidden"});	
																	document.getElementById("p2-1").innerHTML=" ";
																	$("#2-51").animate({"position":"absolute","top":"430px"},1250);
																	setTimeout(function()
																	{
																		$("#2-411").animate({"position":"absolute","top":"428px"},750,
																		function()
																		{
																			$("#2-5").fadeOut(500,
																			function()
																			{
																				//Dilute flask1 by adding distilled water
																				$("#p2-3").css({"visibility":"visible"});
																				$("#2-7").css({"visibility":"visible"});
																				$("#2-71").css({"visibility":"visible"});	
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:250px; top:380px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																				 // Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(0deg)";
																				$("#2-7").click(function()
																				{
																					myStopFunction();
																					$("#2-7").off("click");
																					$("#p2-3").css({"visibility":"hidden"});
																					$("#2-72").css({"visibility":"visible"});
																					$("#2-411").animate({"position":"absolute","top":"400px"},1500);
																					$("#2-71").animate({"position":"absolute","top":"375px"},1500,
																					function()
																					{
																						$("#2-72").css({"visibility":"hidden"});
																						$("#2-7").css({"visibility":"hidden"});
																						$("#2-71").css({"visibility":"hidden"});

																						//fill flask2 with 10ml sulphate solution	
																						setTimeout(function()
																						{
																							
																							$("#2-42").css({"visibility":"visible"});
																							$("#2-421").css({"visibility":"visible"});
																							$("#2-5").css({"position":"absolute","left":"477px","top":"80px"});
																							$("#2-5").fadeIn(500,
																							function()
																							{
																								myInt = setInterval(function(){ animatearrow(); }, 500);
																								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
																								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																								// Code for IE9
																								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																								 // Standard syntax
																								document.getElementById("arrow1").style.transform = "rotate(180deg)";
																								$("#2-5").click(function()
																								{
																									myStopFunction();
																									$("#2-5").off("click");	
																									$("#2-5").animate({"position":"absolute","top":"180px"},750,
																									function()
																									{
																										$("#2-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
																										$("#2-62").css({"visibility":"visible","left":"302px","top":"208px"});
																										$("#2-63").css({"visibility":"visible","left":"314px","top":"220px"});
																										document.getElementById("p2-1").innerHTML="Press the up arrow on the bulb </br></br>to take 10ml of sulphate solution</br></br> up into the pipette ";
																										$("#p2-1").css({"visibility":"visible"});
																										myInt = setInterval(function(){ animatearrow(); }, 500);
																										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
																										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																										// Code for IE9
																										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																										 // Standard syntax
																										document.getElementById("arrow1").style.transform = "rotate(180deg)";
																										$("#2-62").click(function()
																										{
																											myStopFunction();
																											$("#2-62").off("click");
																											$("#2-61").css({"visibility":"hidden"});
																											$("#2-62").css({"visibility":"hidden"});
																											$("#2-63").css({"visibility":"hidden"});
																											$("#2-51").css({"visibility":"hidden"});	
																											$("#p2-1").css({"visibility":"hidden"});	
																											$("#2-52").animate({"position":"absolute","top":"325px"},750);
																											$("#2-3").animate({"position":"absolute","top":"385px"},750,
																											function()
																											{
																												myInt = setInterval(function(){ animatearrow(); }, 500);
																												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
																												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																												// Code for IE9
																												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																												 // Standard syntax
																												document.getElementById("arrow1").style.transform = "rotate(180deg)";
																												$("#2-5").click(function()
																												{
																													myStopFunction();
																													$("#2-5").off("click");	
																													$("#2-5").animate({"position":"absolute","top":"90px"},750);
																													$("#2-52").animate({"position":"absolute","top":"235px"},750,
																													function()
																													{
																														$("#2-5").animate({"position":"absolute","left":"190px"},1200);
																														$("#2-52").animate({"position":"absolute","left":"208px"},1200,
																														function()
																														{
																															$("#2-5").animate({"position":"absolute","top":"120px"},750);
																															$("#2-52").animate({"position":"absolute","top":"262px"},750,
																															function()
																															{
																																$("#2-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																																$("#2-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																																$("#2-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																																//$("#p2-2").css({"visibility":"visible"});
																																myInt = setInterval(function(){ animatearrow(); }, 500);
																																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																																// Code for IE9
																																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																																 // Standard syntax
																																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																																$("#2-63").click(function()
																																{
																																									myStopFunction();
					$("#2-63").off("click");
					$("#2-61").css({"visibility":"hidden"});
					$("#2-62").css({"visibility":"hidden"});
					$("#2-63").css({"visibility":"hidden"});
					document.getElementById("p2-1").innerHTML=" ";
					$("#2-52").animate({"position":"absolute","top":"430px"},1250);
					setTimeout(function()
					{
						$("#2-421").animate({"position":"absolute","top":"425px"},750,
						function()
						{
								$("#2-5").fadeOut(500);
								$("#2-52").css({"visibility":"hidden"});
								$("#2-51").css({"visibility":"hidden"});
																				//Dilute flask2 by adding distilled water
																				setTimeout(function()
																				{
																				$("#p2-3").css({"visibility":"visible"});
																				$("#2-7").css({"visibility":"visible","position":"absolute","left":"220px"});
																				$("#2-71").css({"visibility":"visible","position":"absolute","left":"269px","top":"345px"});	
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:380px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																				 // Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(0deg)";
																				$("#2-7").click(function()
																				{
																					myStopFunction();
																					$("#2-7").off("click");
																					$("#p2-3").css({"visibility":"hidden"});
																					$("#2-72").css({"visibility":"visible","position":"absolute","left":"203px"});
																					$("#2-421").animate({"position":"absolute","top":"400px"},1700);
																					$("#2-71").animate({"position":"absolute","top":"370px"},1700,
																					function()
																					{
																						$("#2-72").css({"visibility":"hidden"});
																						$("#2-7").css({"visibility":"hidden"});
																						$("#2-71").css({"visibility":"hidden"});
																					
																			//close sulphate solution bottle
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			 // Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			$("#2-1").click(function()
																			{
																				myStopFunction();
																				$("#2-1").off("click");
																				$("#2-1").animate({"position":"absolute","top":"285px"},750,
																				function()
																				{
																					$("#2-1").animate({"position":"absolute","left":"472.5px"},300,
																					function()
																					{
																						$("#2-1").animate({"position":"absolute","top":"310px"},750,
																						function()
																						{
																							$("#d2-1").fadeIn(250);
																							$("#ok2-1").click(function()
																							{
																								$("#d2-1").css({"visibility":"hidden"});
																								$("#nextButton").css({"visibility":"visible"});
																							});
																						});
																					});
																				});
																			});
			
																		});
																	});
																},500);															});
																																	},700);
																																});
																															});
																														});
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						},200);
																					});
																				});
																			});
																		});
																	},800);
																});
															});
														});
													});
												});
											});	
										});
									});
								});
							});
						});
					});
				});	
			});
		},500);
	}
	if(simsubscreennum==3)
	{
		$("#2-42").css({"visibility":"hidden"});
		$("#2-421").css({"visibility":"hidden"});
		setTimeout(function()
		{
			//Open distilled water bottle
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			$("#13-1").click(function()
			{
				myStopFunction();
				$("#13-1").off("click");	
				$("#13-1").animate({"position":"absolute","top":"285px"},250,
				function()
				{
					$("#13-1").animate({"position":"absolute","left":"540px"},300,
					function()
					{
						$("#13-1").animate({"position":"absolute","top":"400px"},750,
						function()
						{
							$("#13-5").fadeIn(500,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#13-5").click(function()
								{
									myStopFunction();
									$("#13-5").off("click");	
									$("#13-5").animate({"position":"absolute","top":"150px"},750,
									function()
									{
										$("#13-61").css({"visibility":"visible"});
										$("#13-62").css({"visibility":"visible"});
										$("#13-63").css({"visibility":"visible"});
										$("#p13-1").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#13-62").click(function()
										{
											myStopFunction();
											$("#13-62").off("click");
											$("#13-61").css({"visibility":"hidden"});
											$("#13-62").css({"visibility":"hidden"});
											$("#13-63").css({"visibility":"hidden"});
											$("#p13-1").css({"visibility":"hidden"});	
											$("#13-51").animate({"position":"absolute","top":"240px"},750);
											$("#13-3").animate({"position":"absolute","top":"370px"},750,
											function()
											{
												//fill flask with 100ml of distilled water
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:210px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#13-5").click(function()
												{
													myStopFunction();
													$("#13-5").off("click");	
													$("#13-5").animate({"position":"absolute","top":"90px"},750);
													$("#13-51").animate({"position":"absolute","top":"180px"},750,//top=320px here top=260px 60 difference
													function()
													{
														$("#13-5").animate({"position":"absolute","left":"60px"},1200);
														$("#13-51").animate({"position":"absolute","left":"77px"},1200,
														function()
														{
															$("#13-5").animate({"position":"absolute","top":"120px"},750);
															$("#13-51").animate({"position":"absolute","top":"210px"},750,
															function()
															{
																$("#13-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#13-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#13-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																$("#p13-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																 // Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#13-63").click(function()
																{
																	myStopFunction();
																	$("#13-63").off("click");
																	$("#13-61").css({"visibility":"hidden"});
																	$("#13-62").css({"visibility":"hidden"});
																	$("#13-63").css({"visibility":"hidden"});
																	$("#p13-2").css({"visibility":"hidden"});	
																	document.getElementById("p2-1").innerHTML=" ";
																	$("#13-51").animate({"position":"absolute","top":"412px"},1250);
																	setTimeout(function()
																	{
																		$("#13-411").animate({"position":"absolute","top":"400px"},1000,
																		function()
																		{
																			$("#13-5").fadeOut(500,
																			function()
																			{
																				//close distilled water bottle
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																				// Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(270deg)";
																				$("#13-1").click(function()
																				{
																					myStopFunction();
																					$("#13-1").off("click");
																					$("#13-1").animate({"position":"absolute","top":"285px"},750,
																					function()
																					{
																						$("#13-1").animate({"position":"absolute","left":"472.5px"},300,
																						function()
																						{
																							$("#13-1").animate({"position":"absolute","top":"310px"},750,
																							function()
																							{
																								$("#13-1").css({"visibility":"hidden"});
																								$("#13-2").css({"visibility":"hidden"});
																								$("#13-3").css({"visibility":"hidden"});
																								$("#13-8").css({"visibility":"hidden"});
																								//pour 100ml of water sample to flask
																								setTimeout(function()
																								{
																									pourWaterSampletoFalsk();		
																								},700);
																							});
																						});
																					});
																				});
																			});
																		});
																	},800);
																});
															});
														});
													});
												});
											});	
										});
									});
								});
							});
						});
					});
				});	
			});
		},500);
	}
	if(simsubscreennum==4)
	{
		$("#13-1").css({"visibility":"hidden"});
		$("#13-2").css({"visibility":"hidden"});
		$("#13-3").css({"visibility":"hidden"});
		$("#13-8b").css({"visibility":"hidden"});
		$("#p13-9").css({"visibility":"hidden"});
		$("#p13-10").css({"visibility":"hidden"});
		$("#13-42").css({"visibility":"hidden"});
		$("#13-421").css({"visibility":"hidden"});
		setTimeout(function()
		{
			//Open sulphate sulotion bottle
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			$("#3-1").click(function()
			{
				myStopFunction();
				$("#3-1").off("click");	
				$("#3-1").animate({"position":"absolute","top":"285px"},250,
				function()
				{
					$("#3-1").animate({"position":"absolute","left":"540px"},300,
					function()
					{
						$("#3-1").animate({"position":"absolute","top":"400px"},750,
						function()
						{
							$("#3-5").fadeIn(500,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#3-5").click(function()
								{
									myStopFunction();
									$("#3-5").off("click");	
									$("#3-5").animate({"position":"absolute","top":"150px"},750,
									function()
									{
										$("#3-61").css({"visibility":"visible"});
										$("#3-62").css({"visibility":"visible"});
										$("#3-63").css({"visibility":"visible"});
										$("#p3-1").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#3-62").click(function()
										{
											myStopFunction();
											$("#3-62").off("click");
											$("#3-61").css({"visibility":"hidden"});
											$("#3-62").css({"visibility":"hidden"});
											$("#3-63").css({"visibility":"hidden"});
											$("#p3-1").css({"visibility":"hidden"});	
											$("#3-51").animate({"position":"absolute","top":"320px"},750);
											$("#3-3").animate({"position":"absolute","top":"370px"},750,
											function()
											{
												//fill flask1 with 20ml buffer solution
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:210px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#3-5").click(function()
												{
													myStopFunction();
													$("#3-5").off("click");	
													$("#3-5").animate({"position":"absolute","top":"90px"},750);
													$("#3-51").animate({"position":"absolute","top":"260px"},750,
													function()
													{
														$("#3-5").animate({"position":"absolute","left":"60px"},1200);
														$("#3-51").animate({"position":"absolute","left":"77px"},1200,
														function()
														{
															$("#3-5").animate({"position":"absolute","top":"120px"},750);
															$("#3-51").animate({"position":"absolute","top":"290px"},750,
															function()
															{
																$("#3-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#3-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#3-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																$("#p3-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																 // Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#3-63").click(function()
																{
																	myStopFunction();
																	$("#3-63").off("click");
																	$("#3-61").css({"visibility":"hidden"});
																	$("#3-62").css({"visibility":"hidden"});
																	$("#3-63").css({"visibility":"hidden"});
																	$("#p3-2").css({"visibility":"hidden"});	
																	
																	$("#3-51").animate({"position":"absolute","top":"430px"},1250);
																	setTimeout(function()
																	{
																		$("#3-411").animate({"position":"absolute","top":"397px"},750,
																		function()
																		{
																			$("#3-5").fadeOut(500,
																			function()
																			{
																				//fill flask2 with 10ml sulphate solution	
																						setTimeout(function()
																						{
																							
																							$("#3-42").css({"visibility":"visible"});
																							$("#3-421").css({"visibility":"visible"});
																							$("#3-5").css({"position":"absolute","left":"477px","top":"80px"});
																							$("#3-5").fadeIn(500,
																							function()
																							{
																								myInt = setInterval(function(){ animatearrow(); }, 500);
																								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
																								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																								// Code for IE9
																								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																								 // Standard syntax
																								document.getElementById("arrow1").style.transform = "rotate(180deg)";
																								$("#3-5").click(function()
																								{
																									myStopFunction();
																									$("#3-5").off("click");	
																									$("#3-5").animate({"position":"absolute","top":"180px"},750,
																									function()
																									{
																										$("#3-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
																										$("#3-62").css({"visibility":"visible","left":"302px","top":"208px"});
																										$("#3-63").css({"visibility":"visible","left":"314px","top":"220px"});
																										
																										$("#p3-1").css({"visibility":"visible"});
																										myInt = setInterval(function(){ animatearrow(); }, 500);
																										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
																										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																										// Code for IE9
																										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																										 // Standard syntax
																										document.getElementById("arrow1").style.transform = "rotate(180deg)";
																										$("#3-62").click(function()
																										{
																											myStopFunction();
																											$("#3-62").off("click");
																											$("#3-61").css({"visibility":"hidden"});
																											$("#3-62").css({"visibility":"hidden"});
																											$("#3-63").css({"visibility":"hidden"});
																											$("#3-51").css({"visibility":"hidden"});	
																											$("#p3-1").css({"visibility":"hidden"});	
																											$("#3-52").animate({"position":"absolute","top":"325px"},750);
																											$("#3-3").animate({"position":"absolute","top":"395px"},750,
																											function()
																											{
																												myInt = setInterval(function(){ animatearrow(); }, 500);
																												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
																												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																												// Code for IE9
																												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																												 // Standard syntax
																												document.getElementById("arrow1").style.transform = "rotate(180deg)";
																												$("#3-5").click(function()
																												{
																													myStopFunction();
																													$("#3-5").off("click");	
																													$("#3-5").animate({"position":"absolute","top":"90px"},750);
																													$("#3-52").animate({"position":"absolute","top":"235px"},750,
																													function()
																													{
																														$("#3-5").animate({"position":"absolute","left":"190px"},1200);
																														$("#3-52").animate({"position":"absolute","left":"208px"},1200,
																														function()
																														{
																															$("#3-5").animate({"position":"absolute","top":"120px"},750);
																															$("#3-52").animate({"position":"absolute","top":"262px"},750,
																															function()
																															{
																																$("#3-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																																$("#3-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																																$("#3-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																																
																																myInt = setInterval(function(){ animatearrow(); }, 500);
																																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																																// Code for IE9
																																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																																 // Standard syntax
																																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																																$("#3-63").click(function()
																																{
																																	myStopFunction();
																																	$("#3-63").off("click");
																																	$("#3-61").css({"visibility":"hidden"});
																																	$("#3-62").css({"visibility":"hidden"});
																																	$("#3-63").css({"visibility":"hidden"});
																																		
																																	document.getElementById("p3-1").innerHTML=" ";
																																	$("#3-52").animate({"position":"absolute","top":"430px"},1250);
																																	setTimeout(function()
																																	{
																																		$("#3-421").animate({"position":"absolute","top":"397px"},750,
																																		function()
																																		{
																																			$("#3-5").fadeOut(500);
																																			$("#3-52").css({"visibility":"hidden"});
																																			$("#3-51").css({"visibility":"hidden"});
																																						
																			//close sulphate solution bottle
																			myInt = setInterval(function(){ animatearrow(); }, 500);
																			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			 // Standard syntax
																			document.getElementById("arrow1").style.transform = "rotate(270deg)";
																			$("#3-1").click(function()
																			{
																				myStopFunction();
																				$("#3-1").off("click");
																				$("#3-1").animate({"position":"absolute","top":"285px"},750,
																				function()
																				{
																					$("#3-1").animate({"position":"absolute","left":"472.5px"},300,
																					function()
																					{
																						$("#3-1").animate({"position":"absolute","top":"310px"},750,
																						function()
																						{
																							$("#d3-1").fadeIn(250);
																							$("#ok3-1").click(function()
																							{
																								$("#d3-1").css({"visibility":"hidden"});
																								$("#nextButton").css({"visibility":"visible"});
																							});
																						}
																						);
																					});
																				});
																			});
			
																															});
																																	},700);
																																});
																															});
																														});
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						},200);
																					
																			});
																		});
																	},800);
																});
															});
														});
													});
												});
											});	
										});
									});
								});
							});
						});
					});
				});	
			});
		},500);
	}
	if(simsubscreennum==5)
	{
		$("#3-42").css({"visibility":"hidden"});
		$("#3-421").css({"visibility":"hidden"});
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:375px; height: 35px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById("4-1").onclick=function()
			{
				myStopFunction();
				document.getElementById("4-1").onclick="";
				$("#4-1").css({"visibility":"hidden"});
				$("#4-2").css({"visibility":"visible"});
				$("#4-2").animate({"position":"absolute","left":"170px","top":"85px"},1250,
				function()
				{
					$("#4-2").animate({"position":"absolute","left":"170px","top":"178px"},400,
					function()
					{
						$("#4-2").css({"visibility":"hidden"});
						$("#4-3").css({"visibility":"visible"});
						$("#4-4").css({"visibility":"visible"});
						$("#4-7").css({"visibility":"visible"});
						$("#4-8").css({"visibility":"visible"});
						$("#p4-1").css({"visibility":"visible"});
						document.getElementById("p4-1").innerHTML="Put stir bar into the conical flask";
						setTimeout(function()
						{						
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:517px; top:410px; height: 35px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
								// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
								// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(270deg)";
							document.getElementById("4-8").onclick=function()
							{
								myStopFunction();
								document.getElementById("4-8").onclick="";
								$("#p4-1").css({"visibility":"hidden"});
								$("#4-8").css({"visibility":"hidden"});
								$("#4-9").css({"visibility":"visible"});
								$("#4-9").animate({"position":"absolute","left":"181.5px","top":"145px"},1000,
								function()
								{
									$("#4-81").css({"visibility":"visible"});
									$("#4-9").css({"visibility":"hidden"});
									$("#4-81").animate({"position":"absolute","top":"303px"},600,
									function()
									{
										$("#4-7").css({"visibility":"hidden"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:200px; top:420px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										document.getElementById("4-5").onclick=function()
										{
											myStopFunction();
											document.getElementById("4-5").onclick="";
											$("#4-6").css({"visibility":"visible"});
											document.getElementById("4-81").style.animation="rotateStirBar 15s infinite linear";
											document.getElementById("4-4").style.animation="shake 2.5s infinite linear";
											setTimeout(function()
											{
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:200px; top:420px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
													// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												document.getElementById("4-6").onclick=function()
												{
													myStopFunction();
													document.getElementById("4-6").onclick="";
													$("#4-6").css({"visibility":"hidden"});
													$("#d4-1").fadeIn(500);
													document.getElementById("4-81").style.animation="";
													document.getElementById("4-4").style.animation="";
													document.getElementById("ok4-1").onclick=function()
													{
														$("#d4-1").css({"visibility":"hidden"});
														// document.getElementById("nextButton").style.visibility="visible";
														validateAnswer(3,3,"100px","100px");
													}
												}
											},7000);
										}
									});
								});
							}
						},250);
					});
				});
			}
		},500);
	}
	if(simsubscreennum==6)
	{
		$("#4-3").css({"visibility":"hidden"});
		$("#4-4").css({"visibility":"hidden"});
		$("#4-81").css({"visibility":"hidden"});
		$("#4-8").css({"visibility":"hidden"});
		tn=5;
		addBariumChloride();
	}
	if(simsubscreennum==7)
	{
		$("#5-4").css({"visibility":"hidden"});
		$("#5-3").css({"visibility":"hidden"});
		$("#6-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==8)
	{
		tn=7;
		fillCuvette();
	}
	if(simsubscreennum==9)
	{
		$("#7-3").css({"visibility":"hidden"});
		$("#7-4").css({"visibility":"hidden"});
		$("#7-5a").css({"visibility":"hidden"});
		$("#7-5b").css({"visibility":"hidden"});
		$("#7-5c").css({"visibility":"hidden"});
		$("#7-5d").css({"visibility":"hidden"});
		$("#7-5e").css({"visibility":"hidden"});
		$("#7-5f").css({"visibility":"hidden"});
		$("#7-6a").css({"visibility":"hidden"});
		$("#7-6b").css({"visibility":"hidden"});
		$("#7-6off").css({"visibility":"hidden"});
		$("#7blank").css({"visibility":"hidden"});
		$("#7-7mt").css({"visibility":"hidden"});
		$("#7-7ma").css({"visibility":"hidden"});
		$("#7-7mc").css({"visibility":"hidden"});
		$("#7-7mf").css({"visibility":"hidden"});
		$("#7-10").css({"visibility":"hidden"});
		$("#7-7D").css({"visibility":"hidden"});
		$("#7-7W").css({"visibility":"hidden"});
		$("#8-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==10)
	{
		tn=9;
		fillCuvette();
	}
	if(simsubscreennum==11)
	{
		$("#9-3").css({"visibility":"hidden"});
		$("#9-4").css({"visibility":"hidden"});
		$("#9-5a").css({"visibility":"hidden"});
		$("#9-5b").css({"visibility":"hidden"});
		$("#9-5c").css({"visibility":"hidden"});
		$("#9-5d").css({"visibility":"hidden"});
		$("#9-5e").css({"visibility":"hidden"});
		$("#9-5f").css({"visibility":"hidden"});
		$("#9-6a").css({"visibility":"hidden"});
		$("#9-6b").css({"visibility":"hidden"});
		$("#9-6off").css({"visibility":"hidden"});
		$("#9-6on").css({"visibility":"hidden"});
		$("#9blank").css({"visibility":"hidden"});
		$("#9-7mt").css({"visibility":"hidden"});
		$("#9-7ma").css({"visibility":"hidden"});
		$("#9-7mc").css({"visibility":"hidden"});
		$("#9-7mf").css({"visibility":"hidden"});
		$("#9-10").css({"visibility":"hidden"});
		$("#9-7D").css({"visibility":"hidden"});
		$("#9-7W").css({"visibility":"hidden"});
		
		var tab11=document.getElementById("t11-1");
		for(i=1;i<=9;i++)
		{
			var rows=tab11.insertRow(i);
			var cell0=rows.insertCell(0);
			var cell1=rows.insertCell(1);
			var cell2=rows.insertCell(2);
			var cell3=rows.insertCell(3);
			rows.style="font-size:14px; text-align:center; border:1px solid black;";
			cell0.style="border:1px solid black; padding:7px;"
			cell1.style="border:1px solid black; padding:7px;"
			cell2.style="border:1px solid black; padding:7px;"
			cell3.style="border:1px solid black; padding:7px;"
			cell0.innerHTML=i;
			cell1.innerHTML=i*5;
			cell2.innerHTML=ab[p][i-1];
			cell3.innerHTML=(Math.pow(10, 2 - ab[p][i-1])).toFixed(2);
			if(i==9)
			{
				cell0.innerHTML="Water Sample";
				cell1.innerHTML="--";
			}		
		}
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},500);
	}
	if(simsubscreennum==12)
	{     
		var h1=0,h2=0,h,count=0;
		var ytitle="";
		var headtitle="";

	  if(p==0)
	  {
		s1=5.45;
		s2=9.08;
	  }
	  if(p==1)
	  {
		s1=6.09;
		s2=7.86;
	  } 
	  if(p==2)
	  {
		s1=5.12;
		s2=8.49;
	  }
	  if(p==3)
	  {
		s1=5.55;
		s2=8.55;
	  }
	  if(p==4)
	  {
		s1=5.22;
		s2=7.91;
	  }
	  if(p==5)
	  {
		s1=5.7;
		s2=10.5;
	  }
	  function displayGraph(headtitle,h,ytitle) {
		var chart = new CanvasJS.Chart("chartContainer",
		{      
		zoomEnabled: true,
		zoomType: "xy",
		exportEnabled: true,
		  title:{
			text: headtitle,
			fontSize:18,
			fontFamily:"verdana"
		  },
		   axisX: {
			title:"Sulphate concentration(mg/l)",
			titleFontSize:16,
			interval: 0.5,
			intervalType: "Number"
		  },
		  axisY :{
			title: ytitle,
			titleFontSize:16,
			includeZero: false
		  },
		  data: [
		  {      
			type: "spline",  
			indexLabelFontColor: "orangered",      
			dataPoints: type1DataPoints(),
			cursor: "pointer"
		  },
		  {        
			type: "line",
			lineDashType: "dash",
			lineColor:"#ea3f49",
			dataPoints: [
			{ x:1, y: h[8] },
			{ x:s1, y: h[8], indexLabel:"Tap Water" },
			{ x:s1, y: 0 }
		  ]
		  },
		  {        
			type: "line",
			lineDashType: "dash",
			lineColor:"#33cb6b",
			dataPoints: [
			{ x:1, y: h[9] },
			{ x:s2, y: h[9], indexLabel:"Water Sample" },
			{ x:s2, y: 0 }
			]
		  }
		  ]
		});
		chart.render();
	}
		function type1DataPoints()
		{
			var dataPoints = [];
			for(var w = 0; w < 8 ; w ++){
				dataPoints.push({x: w+5 , y: h[w]});
			}
			return dataPoints
		}
	document.getElementById("g1").onclick=function()
	{
		h =  ab[p];
		displayGraph("Sulphate Concentration(mg/l) vs Absorbance",h,"Absorbance");
		if(count==0)
		{
			document.getElementById("q12").style.visibility="visible";
		}
		count++;
	}
	document.getElementById("g2").onclick=function()
	{
		var trans=[];
		for(var i = 0; i < 10 ; i ++){
			trans[i] = Math.pow(10, 2 - ab[p][i]);
			trans[i]=trans[i];
		}
		h=trans;
		displayGraph("Sulphate Concentration(mg/l) vs Transmittance",h,"Transmittance");
		if(count==0)
		{
			document.getElementById("q12").style.visibility="visible";
		}
		count++;
	}
	
	document.getElementById("check1").onclick=function()
	{
		if(!document.getElementById("wa").value  || !document.getElementById("wa").value!=" " || !document.getElementById("tw").value  || !document.getElementById("tw").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
				n1 = document.getElementById("wa").value;
				n2 = document.getElementById("tw").value;
				
				if(Math.round(n1) == Math.round(s1))
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("result1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("wa").style="border:none; background-color:white; color:black; width:55px;";
					document.getElementById("wa").disabled="true";
				}
				if(Math.round(n2) == Math.round(s2))
				{
					document.getElementById("check1").style.visibility="hidden";
					document.getElementById("r2").style.visibility="visible";
					document.getElementById("result1").style.visibility="hidden";
					document.getElementById("w2").style.visibility="hidden";
					document.getElementById("tw").style="border:none; background-color:white; color:black; width:55px;";
					document.getElementById("tw").disabled="true";
				}
				if(Math.round(n1) != Math.round(s1))
				{
					// document.getElementById("result1").style.visibility="visible";
					document.getElementById("check1").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
				if(Math.round(n2) != Math.round(s2))
				{
					// document.getElementById("result1").style.visibility="visible";
					document.getElementById("check1").style.visibility="visible";
					document.getElementById("w2").style.visibility="visible";
				}
				if(document.getElementById("r2").style.visibility=="visible" && document.getElementById("r1").style.visibility=="visible")
				{
					document.getElementById("nextButton").style.visibility="visible";
				}
			}	
	}
	}
	if(simsubscreennum==13)
	{
		document.getElementById("check1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("result1").style.visibility="hidden";
		document.getElementById("q12").style.visibility="hidden";
		document.getElementById("wa").style.visibility="hidden";
		document.getElementById("tw").style.visibility="hidden";
		document.getElementById("g1").style.visibility="hidden";
		document.getElementById("g2").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==3)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 150mg/l - 200mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		str1="suitable";
		str1=str1.fontcolor("green");
		str2="not";
		str2=str2.fontcolor("red");
		if(s1<=200)
		{
			if(s2<=200)
			{
				document.getElementById("infAns").innerHTML="Acceptable range of sulphate in drinking water is 150mg/l - 200mg/l.<br/>Sulphate concentration of given tap water is "+s1+"mg/l, since it is in the acceptable range it is "+str1+" for drinking.</br>Sulphate concentration of water sample obtained is "+s2+"mg/l, as it is in the acceptable range it is "+str1+" for drinking.";
			}
			else
			{
				document.getElementById("infAns").innerHTML="Acceptable range of sulphate in drinking water is 150mg/l - 200mg/l.<br/>Sulphate concentration of given tap water is "+s1+"mg/l, since it is in the acceptable range it is "+str1+" for drinking.</br>Sulphate concentration of water sample obtained is "+s2+"mg/l, so it is "+str2+" in the acceptable range.";
			}
		}
		else if(s1>200)
		{
			if(s2<=200)
			{
				document.getElementById("infAns").innerHTML="Acceptable range of sulphate in drinking water is 150mg/l - 200mg/l.<br/>Sulphate concentration of given tap water is "+s1+"mg/l, so it is "+str2+" in the acceptable range.</br>Sulphate concentration of water sample obtained is "+s2+"mg/l, as it is in the acceptable range it is "+str1+" for drinking.";
			}
			else
			{
				document.getElementById("infAns").innerHTML="Acceptable range of sulphate in drinking water is 150mg/l - 200mg/l.<br/>Sulphate concentration of given tap water is "+s1+"mg/l, since it is not in the acceptable range it is "+str2+" for drinking.</br>Sulphate concentration of water sample obtained is "+s2+"mg/l, so it is "+str2+" in the acceptable range.";
			}
		}
		$("#infAns").fadeIn(750);
	},1000);
}

// canvas12
// function dispGraph()
// {
	// if(id=="g1")
	// {
		// alert("gjhgjh");
		// $("#chartContainer1").css({"visibility":"visible"});
		// $("#chartContainer2").css({"visibility":"hidden"});
		// drawgraph("chartContainer1", datapoints1, "Sulphate Concentration (mg/l) ", "Absorbance");
	// }
	// if(id=="g2")
	// {
		// $("#chartContainer2").css({"visibility":"visible"});
		// $("#chartContainer1").css({"visibility":"hidden"});
		// drawgraph("chartContainer2", datapoints2, "Sulphate Concentration (mg/l) ", "Transmittance");
	// }
// }

//canvas 3
function pourWaterSampletoFalsk()
{
	
	$("#13-42").css({"visibility":"visible"});
	$("#13-421").css({"visibility":"visible"});
	$("#p13-10").css({"visibility":"visible"});
	setTimeout(function()
	{
		$("#13-1").css({"visibility":"visible"});
		$("#13-2").css({"visibility":"visible"});
		$("#13-3").css({"visibility":"visible","position":"absolute","top":"360px"});
		$("#13-8b").css({"visibility":"visible"});
		$("#13-5").css({"position":"absolute","left":"477px","top":"80px"});
		//Open distilled water bottle
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		$("#13-1").click(function()
		{
			myStopFunction();
			$("#13-1").off("click");	
			$("#13-1").animate({"position":"absolute","top":"285px"},250,
			function()
			{
				$("#13-1").animate({"position":"absolute","left":"540px"},300,
				function()
				{
					$("#13-1").animate({"position":"absolute","top":"400px"},750,
					function()
					{
						$("#13-5").fadeIn(500,
						function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$("#13-5").click(function()
							{
								myStopFunction();
								$("#13-5").off("click");	
								$("#13-5").animate({"position":"absolute","top":"150px"},750,
								function()
								{
									$("#13-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
									$("#13-62").css({"visibility":"visible","position":"absolute","left":"302px","top":"208px"});
									$("#13-63").css({"visibility":"visible","position":"absolute","left":"314px","top":"220px"});
									document.getElementById("p13-1").innerHTML="Press the up arrow on the </br></br>bulb to take water sample up </br></br>into the pipette ";
									$("#p13-1").css({"visibility":"visible"});
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									$("#13-62").click(function()
									{
										myStopFunction();
										$("#13-62").off("click");
										$("#13-52").css({"visibility":"visible"});
										$("#13-61").css({"visibility":"hidden"});
										$("#13-62").css({"visibility":"hidden"});
										$("#13-63").css({"visibility":"hidden"});
										$("#p13-1").css({"visibility":"hidden"});	
										$("#13-52").animate({"position":"absolute","top":"240px"},750);
										$("#13-3").animate({"position":"absolute","top":"370px"},750,
										function()
										{
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#13-5").click(function()
											{
												myStopFunction();
												$("#13-5").off("click");	
												$("#13-5").animate({"position":"absolute","top":"90px"},750);
												$("#13-52").animate({"position":"absolute","top":"180px"},750,
												function()
												{
													$("#13-5").animate({"position":"absolute","left":"190px"},1200);
													$("#13-52").animate({"position":"absolute","left":"208px"},1200,
													function()
													{
														$("#13-5").animate({"position":"absolute","top":"120px"},750);
														$("#13-52").animate({"position":"absolute","top":"210px"},750,
														function()
														{
															$("#13-61").css({"visibility":"visible","position":"absolute","left":"420px"});
															$("#13-62").css({"visibility":"visible","position":"absolute","left":"472px"});
															$("#13-63").css({"visibility":"visible","position":"absolute","left":"484px"});
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(180deg)";
															$("#13-63").click(function()
															{
																myStopFunction();
																$("#13-63").off("click");
																$("#13-61").css({"visibility":"hidden"});
																$("#13-62").css({"visibility":"hidden"});
																$("#13-63").css({"visibility":"hidden"});
																document.getElementById("p13-1").innerHTML=" ";
																$("#13-52").animate({"position":"absolute","top":"415px"},1250);
																setTimeout(function()
																{
																	$("#13-421").animate({"position":"absolute","top":"400px"},750,
																	function()
																	{
																		$("#13-5").fadeOut(500);
																		$("#13-52").css({"visibility":"hidden"});
																		$("#13-51").css({"visibility":"hidden"});
																		//close distilled water bottle
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:405px; height: 30px; z-index: 10;";
																		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																		// Code for IE9
																		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																		// Standard syntax
																		document.getElementById("arrow1").style.transform = "rotate(270deg)";
																		$("#13-1").click(function()
																		{
																			myStopFunction();
																			$("#13-1").off("click");
																			$("#13-1").animate({"position":"absolute","top":"285px"},750,
																			function()
																			{
																				$("#13-1").animate({"position":"absolute","left":"472.5px"},300,
																				function()
																				{
																					$("#13-1").animate({"position":"absolute","top":"310px"},750,
																					function()
																					{
																						$("#nextButton").css({"visibility":"visible"});
																					});
																				});
																			});
																		});
																	});
																},700);
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	},500);
}

// canvas 5
function addBariumChloride()
{
	setTimeout(function()
	{
		$("#"+tn+"-10").fadeIn(500);
		setTimeout(function()
		{
			$("#p"+tn+"-1").css({"visibility":"visible"});
			$("#"+tn+"-11").fadeIn(500);
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:565px; top:300px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(240deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(240deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(240deg)";
			document.getElementById(tn+"-11").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-11").onclick="";
				$("#"+tn+"-11").animate({"position":"absolute","left":"525px","top":"337.5"},450,
				function()
				{
					$("#"+tn+"-11").css({"visibility":"hidden"});
					$("#"+tn+"-12").css({"visibility":"visible"});
					$("#"+tn+"-12").animate({"position":"absolute","left":"504px"},150,
					function()
					{
						$("#"+tn+"-10").css({"visibility":"hidden"});
						$("#"+tn+"-13").css({"visibility":"visible"});
						$("#"+tn+"-12").animate({"position":"absolute","left":"185px","top":"258px"},1300,
						function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:225px; top:285px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(245deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(245deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(245deg)";
							document.getElementById(tn+"-12").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-12").onclick="";
								document.getElementById(tn+"-12").style.animation="rotateSpatula 1s forwards";
								setTimeout(function()
								{
									$("#"+tn+"-12").css({"visibility":"hidden"});
									$("#"+tn+"-11").css({"visibility":"visible","position":"absolute","left":"185px","top":"252px","transform":"rotate(-30deg)"});
									$("#"+tn+"-14").fadeIn(100,
									function()
									{
										$("#"+tn+"-14").animate({"position":"absolute","top":"380px"},800,
										function()
										{
											$("#"+tn+"-11").fadeOut(500,
											function()
											{
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:175px; top:370px; height: 35px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												document.getElementById(tn+"-3").onclick=function()
												{
													myStopFunction();
													document.getElementById(tn+"-3").onclick="";
													document.getElementById(tn+"-5").style.visibility="visible";
													document.getElementById(tn+"-3").style.visibility="hidden";
													document.getElementById(tn+"-13").style.visibility="hidden";
													document.getElementById(tn+"-14").style.visibility="hidden";
													document.getElementById(tn+"-5").style.animation="swing 2.5s 3 linear";
													setTimeout(function()
													{
														document.getElementById(tn+"-3").style.visibility="visible";
														document.getElementById(tn+"-4").style.visibility="visible";
														document.getElementById(tn+"-5").style.visibility="hidden";
														$("#d"+tn+"-1").fadeIn(500);
														document.getElementById("ok"+tn+"-1").onclick=function()
														{
															$("#d"+tn+"-1").css({"visibility":"hidden"});
															//document.getElementById("nextButton").style.visibility="visible";
															validateAnswer(4,0,"150px","150px");
														}
													},7500);
												}
											});
										});
									});
								},1000);
							}
						});
					});
				});
			}
		},250);
	},500);
}


function fillCuvette()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top:390px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(tn+"-1").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-1").onclick="";
			$("#"+tn+"-1").animate({"position":"absolute","left":"202.5px","top":"260px"},1500);
			$("#"+tn+"-2a").animate({"position":"absolute","left":"202.5px","top":"315.5px"},1500,
			function()
			{
				$("#"+tn+"-1").css({"transform":"rotate(-90deg)"});
				$("#"+tn+"-2a").css({"visibility":"hidden"});
				$("#"+tn+"-2b").css({"visibility":"visible"});
				$("#"+tn+"-2c").css({"visibility":"visible"});
				setTimeout(function()
				{
					$("#"+tn+"-2b").animate({"position":"absolute","top":"342px"},1500);
					$("#"+tn+"-4").animate({"position":"absolute","top":"355px"},1500,
					function()
					{
						$("#"+tn+"-1").css({"transform":"rotate(0deg)"});
						$("#"+tn+"-2a").css({"visibility":"visible","position":"absolute","top":"330px"});
						$("#"+tn+"-2b").css({"visibility":"hidden"});
						$("#"+tn+"-2c").css({"visibility":"hidden"});
						setTimeout(function()
						{
							$("#"+tn+"-1").animate({"position":"absolute","left":"440px","top":"330px"},1500);
							$("#"+tn+"-2a").animate({"position":"absolute","left":"440px","top":"400.5px"},1500,
							function()
							{
								setTimeout(function()
								{
									if(tn==7)
									{
										calibrate();
									}
									if(tn==9)
									{
										placeCuvette();
									}
								},300);
							});
						},250);
					});
				},500);
			});
		}			
	},500);
}

var next=0;
function calibrate()
{
	next=1;
	$("#"+tn+"-1").css({"visibility":"hidden"});
	$("#"+tn+"-2a").css({"visibility":"hidden"});
	$("#"+tn+"-5a").css({"visibility":"visible"});
	$("#"+tn+"-5b").css({"visibility":"visible"});
	$("#"+tn+"-5c").css({"visibility":"visible"});
	$("#"+tn+"-5d").css({"visibility":"visible"});
	$("#"+tn+"-5e").css({"visibility":"visible"});
	$("#"+tn+"-5f").css({"visibility":"visible"});
	$("#"+tn+"-6a").css({"visibility":"visible"});
	$("#"+tn+"-6b").css({"visibility":"visible"});
	$("#"+tn+"-6off").css({"visibility":"visible"});
	$("#"+tn+"blank").css({"visibility":"visible"});
	$("#"+tn+"-7mt").css({"visibility":"visible"});
	$("#"+tn+"-7ma").css({"visibility":"visible"});
	$("#"+tn+"-7mc").css({"visibility":"visible"});
	$("#"+tn+"-7mf").css({"visibility":"visible"});

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:560px; top:170px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById(tn+"-6off").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-6off").onclick="";
			$("#"+tn+"-6off").css({"transform":"rotate(180deg)"});
			$("#"+tn+"-7mt").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
			$("#"+tn+"-7W").css({"visibility":"visible"});
			$("#"+tn+"-7D").css({"visibility":"visible"});
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:590px; top:362.5px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(tn+"-5e").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-5e").onclick="";
				counter("#"+tn+"-7W",420,4000);
			}
		}
	},500);
}

function counter(id,dataCount,time)
{
	var $this = $(id),
    countTo = dataCount;
	$({ countNum: $this.text()}).animate({
		countNum: countTo
		},
		{
			duration: time,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
		},
		complete: function() {
		  $this.text(this.countNum);
		  //alert('finished');
		  setTimeout(function()
		  {
			  if(next==1)
				setZero();
			  if(next==3)
			  {
				  $("#"+tn+"-8").css({"visibility":"hidden"});
				  removeCuvette();
			  }
		  },250);
		}

	}); 
}

function setZero()
{
	next=2;
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:400px; top:420px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(tn+"-5c").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5c").onclick="";
		$("#"+tn+"-8").css({"visibility":"visible"});
		setTimeout(function()
		{
			$("#"+tn+"-8").css({"transform":"rotate(-4deg)"});
			var z=0;
			$("#"+tn+"-7D").text(z.toFixed(2));
			setTimeout(function()
			{
				$("#"+tn+"-8").css({"visibility":"hidden"});
				placeCuvette();
			},300);
		},350);
	}
}

function placeCuvette()
{
	if(tn==9)
	{
		$("#"+tn+"-1").css({"visibility":"hidden"});
		$("#"+tn+"-2a").css({"visibility":"hidden"});
		$("#"+tn+"-5a").css({"visibility":"visible"});
		$("#"+tn+"-5b").css({"visibility":"visible"});
		$("#"+tn+"-5c").css({"visibility":"visible"});
		$("#"+tn+"-5d").css({"visibility":"visible"});
		$("#"+tn+"-5e").css({"visibility":"visible"});
		$("#"+tn+"-5f").css({"visibility":"visible"});
		$("#"+tn+"-6a").css({"visibility":"visible"});
		$("#"+tn+"-6b").css({"visibility":"visible"});
		$("#"+tn+"-6on").css({"visibility":"visible"});
		$("#"+tn+"blank").css({"visibility":"visible"});
		$("#"+tn+"-7mt").css({"visibility":"visible"});
		$("#"+tn+"-7ma").css({"visibility":"visible"});
		$("#"+tn+"-7mc").css({"visibility":"visible"});
		$("#"+tn+"-7mf").css({"visibility":"visible"});
		$("#"+tn+"-7W").css({"visibility":"visible"});
		$("#"+tn+"-7W").text("420");
		$("#"+tn+"-7D").css({"visibility":"visible"});
		var a=0;
		$("#"+tn+"-7D").text(a.toFixed(2));
		$("#"+tn+"-7mt").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
	}
	//Open the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:330px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"220px"},200,
		function()
		{
			$("#"+tn+"-8ca").animate({"position":"absolute","left":"220px","top":"315px"},1000,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"220.5px","top":"400px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
			
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:150px; top:410px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(tn+"-3").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"-3").onclick="";
						$("#"+tn+"-3").css({"visibility":"hidden"});
						$("#"+tn+"-4").css({"visibility":"hidden"});
						$("#"+tn+"-9a").css({"visibility":"visible"});
						$("#"+tn+"-9a").animate({"position":"absolute","left":"280px","top":"200px"},900,
						function()
						{
							$("#"+tn+"-9a").animate({"position":"absolute","left":"367px","top":"200px"},900,
							function()
							{
								$("#"+tn+"-9a").animate({"position":"absolute","top":"280px"},500,
									function()
									{
										$("#"+tn+"-9a").css({"visibility":"hidden"});
										$("#"+tn+"-9b").css({"visibility":"visible"});
										placeCuvetteCap();
									}
								);
							});
						});
					}
				},1600);
			});
		});
	}
}

function placeCuvetteCap()
{
	//close the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:280px; top:410px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","left":"370.5px","top":"208px"},1200,
		function()
		{
		// $("#"+tn+"-8ca").animate({"position":"absolute","left":"370.5px","top":"208px"},1000,
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"228px"},200,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"371px","top":"314px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
				if(tn==7)
				{
					if(stop)
					{
						setHundred();
					}
					else
					{
						//document.getElementById("nextButton").style.visibility="visible";
						validateAnswer(0,1,"50px","100px");
					}
				}
				if(tn==9)
				{
					if(!end)
					{
						displayTransmittance();
					}
					else if(end)
					{
						displayTransmittanceAll();
					}
				}
			});
		});	
	}	
}

function setHundred()
{
	next=3;
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:567.5px; top:420px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById(tn+"-5d").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5d").onclick="";
		$("#"+tn+"-8").css({"visibility":"visible","position":"absolute","left":"560px"});
		setTimeout(function()
		{
			document.getElementById(tn+"-8").style.animation="set100 2s forwards";
			counter("#"+tn+"-7D",100,2000);
			
		},350);
	}
}

function removeCuvette()
{
	//Open the spectrophotometer cap
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:330px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-5f").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-5f").onclick="";
		$("#"+tn+"-5f").css({"visibility":"hidden"});
		$("#"+tn+"-8ca").css({"visibility":"visible"});
		$("#"+tn+"-8ca").animate({"position":"absolute","top":"220px"},200,
		function()
		{
			$("#"+tn+"-8ca").animate({"position":"absolute","left":"220px","top":"315px"},1000,
			function()
			{
				$("#"+tn+"-5f").css({"visibility":"visible","position":"absolute","left":"220.5px","top":"400px"});
				$("#"+tn+"-8ca").css({"visibility":"hidden"});
				$("#"+tn+"-10").css({"visibility":"visible"});
				//Taking cuvette out
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:335px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				document.getElementById(tn+"-10").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-10").onclick="";
					$("#"+tn+"-10").css({"visibility":"hidden"});
					$("#"+tn+"-9a").css({"visibility":"visible"});
					$("#"+tn+"-9b").css({"visibility":"hidden"});
					$("#"+tn+"-9a").animate({"position":"absolute","top":"220px"},600,
					function()
					{
						$("#"+tn+"-9a").animate({"position":"absolute","left":"250px"},900,
						function()
						{
							$("#"+tn+"-9a").animate({"position":"absolute","left":"135px","top":"319px"},1100,
							function()
							{
								$("#"+tn+"-9a").css({"visibility":"hidden"});
								$("#"+tn+"-3").css({"visibility":"visible"});
								$("#"+tn+"-4").css({"visibility":"visible"});
								stop=false;
								placeCuvetteCap();
							});
						});
					});
				}
			});
		});
	}
}

function displayTransmittance()
{
	$("#"+tn+"-7D").text(Math.pow(10,2-ab[0][0]));
	$("#"+tn+"-11").css({"visibility":"visible"});
	myInt = setInterval(function(){ animatearrow(); }, 500);
	setTimeout(function()
	{
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:577.55px; top:316px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(90deg)";
		document.getElementById(tn+"-11").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-11").style.visibility="hidden";
			$("#"+tn+"-7ma").css({"background-color":"#ff0000","border":"solid 1px #ff0000"});
			$("#"+tn+"-7mt").css({"background-color":"#800000","border":"solid 1px #000000"});
			$("#"+tn+"-7D").text(ab[0][0]);
			setTimeout(function()
			{
				end=true;
				removeCuvette();
			},300);
		}
	},300);
}

function displayTransmittanceAll()
{
	$("#"+tn+"-3").css({"visibility":"hidden"});
	$("#"+tn+"-4").css({"visibility":"hidden"});
	$("#"+tn+"-12").fadeIn(500);
	$("#b"+tn+"-1").click(function()
	{
		$("#"+tn+"-12").css({"visibility":"hidden"});
		// $("#nextButton").css({"visibility":"visible"});
		validateAnswer(1,3,"40px","200px");
	});
}