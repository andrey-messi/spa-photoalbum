  
 		  $(document).ready(function() {
												
													 showCancel ();
												
												$('.cancelBtn').bind( "click" , function()
														{
															$(".cancelBtn").stop();
															$(".cancelBtn").fadeTo(500 , 0 );
															$('.textBox').attr({value: ""});
															
														});
												
												$('.textBox').bind( "change" , function()
														{
															 showCancel ();
														});
												$('.textBox').bind( "keydown" , function()
														{
															showCancel ();
														});
												$('.textBox').bind( "keyup" , function()
														{
															 showCancel ();
														});
												
												function showCancel ( )
												{
													var textBxContent = $(".textBox").val();
															if((textBxContent  == "")  || (textBxContent  == " ") ||  (textBxContent  == null) )
															{
																$(".cancelBtn").fadeTo(500, 0 );
															}
															else
															{
																$(".cancelBtn").stop();
																$(".cancelBtn").fadeTo(500, 1 );
															}
												}
									 });