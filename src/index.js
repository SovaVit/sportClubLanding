import "./less/app.less";
import "./css/main.css";
import $ from "jquery";

$(document).ready(function() {
  $(".span-menu").on("click", function() {
    $(".items-left").toggleClass("nav-open");
    $(".clients").toggleClass("clients-open");
    $(".nav_item").toggleClass("nav_item-open");
  });
  $(".nav_item").on("click", function() {
    $(".items-left").toggleClass("nav-open");
    $(".clients").toggleClass("clients-open");
    $(".nav_item").toggleClass("nav_item-open");
  });
  $(window).scroll( function() {
    $(".items-left").removeClass("nav-open");
    $(".clients").removeClass("clients-open");
    $(".nav_item").removeClass("nav_item-open");
  });
});
