
function outbox(from_bld_id, to_bld_id, view_count) {
  ajax_get_from_building_name(from_bld_id, function (response) {
    $("#from_bulding_name").html(response.d);
  });

  ajax_get_envelope_count(from_bld_id, to_bld_id, function (response) {
    $("#envelope_count").html(response.d);
  });

  ajax_get_package_count(from_bld_id, to_bld_id, function (response) {
    $("#package_count").html(response.d);
  });
  
  $("#yes_no_envelope").bind("change", function (event, ui) {
    event.stopPropagation();
    show_or_hide_save_button();
  });

  $("#yes_no_package").bind("change", function (event, ui) {
    event.stopPropagation();
    show_or_hide_save_button();
  });

  $("#btnSave").css({ "border-radius": "20px" });
  $("#btnSave").css({ "padding": "6px 18px 6px 38px" });
  $("#btnSave").hide();

  $("#btnSave").bind("click", function (event, ui) {
    event.preventDefault(); // Without this the page goes back 1 in history.
    event.stopPropagation();
    var envelope_switch = $("#yes_no_envelope");
    var envelopes = false;
    if (envelope_switch[0] != undefined) {
      envelopes = envelope_switch[0].selectedIndex == 1 ? true : false;
    }
    var package_switch = $("#yes_no_package");
    var packages = false;
    if (package_switch[0] != undefined) {
      packages = package_switch[0].selectedIndex == 1 ? true : false;
    }
    ajax_save_outbox_got_delivered(from_bld_id, to_bld_id, envelopes, packages, function (response) {
      $.mobile.changePage("default.htm")
      default_page(from_bld_id);
    });
  });
}

function refreshPage() {
  jQuery.mobile.changePage(window.location.href, {
    allowSamePageTransition: true,
    transition: 'none',
    reloadPage: true
  });
}

function show_or_hide_save_button() {
  var envelope_switch = $("#yes_no_envelope");
  var show_envelope = false;
  if (envelope_switch[0] != undefined) {
    show_envelope = envelope_switch[0].selectedIndex == 1 ? true : false;
  }
  var package_switch = $("#yes_no_package");
  var show_package = false;
  if (package_switch[0] != undefined) {
    show_package = package_switch[0].selectedIndex == 1 ? true : false;
  }
  if ((show_envelope == true) || (show_package == true)) {
    //alert("Yes");
    $("#btnSave").show();
  } else {
    //alert("No");
    $("#btnSave").hide();
  }
}

//function GetParameterValues(param) {
//  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//  //alert(url);
//  for (var i = 0; i < url.length; i++) {
//    var urlparam = url[i].split('=');
//    if (urlparam[0] == param) {
//      return urlparam[1];
//    }
//  }
//} 