function init(){var e=function(){function r(){gapi.auth.authorize({client_id:t,scope:n,immediate:!0},i)}function i(t){var n=document.getElementById("unauthorized");if(t&&!t.error)n.style.display="none",document.getElementById("authorized").style.display="block",e=gapi.auth.getToken(),$.ajaxSetup({data:{alt:"json",access_token:e.access_token,v:2}}),$("#tabs").tabs({activate:function(e,t){window.location.hash=t.newPanel.attr("id"),$("body").css("height","")},beforeActivate:function(e,t){}}),require(["app"],function(e){$("#templates").load("templates.html",function(){e.initialize()})});else{n.style.display="block";var r=document.getElementById("authorize-button");r.onclick=s}}function s(e){return gapi.auth.authorize({client_id:t,scope:n,immediate:!1},i),!1}var e,t="839470061072-vnrrpun7v55ter3runphe7a8tvnssm6j.apps.googleusercontent.com",n="https://www.googleapis.com/auth/plus.me https://picasaweb.google.com/data/";return function(){window.setTimeout(r,1)}};e()()}require.config({paths:{jquery:"libs/jquery-1.11.1.min",underscore:"libs/underscore-min",backbone:"libs/backbone-min"}}),require(["jquery"],function(e){require(["libs/jquery-ui-1.10.4.custom.min","libs/JResponsive-v1.5"],function(){require(["https://apis.google.com/js/client.js?onload=init"])}),require(["libs/macSearch"])});