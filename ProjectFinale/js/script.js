$(document).ready(function () {
  try {
    $(".xzoom").xzoom({ position: "#zoom-area", tint: "#202020" });
  } catch {
    // nothing
  }

  $('#page-navigator').change( function() {
    location.href = $(this).val();
 });

  $(".arrow-icon").click(function () {
    if ($(this).hasClass("arrow-rotate")) {
      $(this).removeClass("arrow-rotate");
      $(this).parent("ul").find("li").slideUp("fast");
    } else {
      $(this).parent("ul").find("li").slideDown("fast");
      $(this).addClass("arrow-rotate");
    }
  });

  $(".filter-title").click(function () {
    var arrowIcon = $(this).parent().parent().find("img").first();

    if (arrowIcon.hasClass("arrow-rotate")) {
      arrowIcon.removeClass("arrow-rotate");
      arrowIcon.parent("ul").find("li").slideUp("fast");
    } else {
      arrowIcon.parent("ul").find("li").slideDown("fast");
      arrowIcon.addClass("arrow-rotate");
    }
  });

  $(".bookmark").click(function () {
    imageSource = $(this).attr("src");
    if (imageSource.includes("bookmark-empty.png"))
      $(this).attr("src", "materials/maquette2/bookmark-fill.png");
    else $(this).attr("src", "materials/maquette2/bookmark-empty.png");
  });
});
