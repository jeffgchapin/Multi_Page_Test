var pageName = "web_service.aspx";

// -----default--------------------------------------------------------------------

function ajax_get_from_building_name(from_bld_id, callback) {
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_get_from_building_name",
    data: JSON.stringify({ from_bld_id: from_bld_id }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      callback(response);
    }
  });
}

function ajax_get_out_boxes_with_mail(from_bld_id, view_count, callback) {
  //alert(pageName);
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_get_out_boxes_with_mail",
    data: JSON.stringify({ from_bld_id: from_bld_id, view_count: view_count }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      callback(response); // ajax returns a value. The value is the new id in the created object.
    }
  });
}

// -----outbox--------------------------------------------------------------------

function ajax_get_envelope_count(from_bld_id, to_bld_id, callback) {
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_get_envelope_count",
    data: JSON.stringify({ from_bld_id: from_bld_id, to_bld_id: to_bld_id }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      callback(response);
    }
  });
}

function ajax_get_package_count(from_bld_id, to_bld_id, callback) {
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_get_package_count",
    data: JSON.stringify({ from_bld_id: from_bld_id, to_bld_id: to_bld_id }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      callback(response);
    }
  });
}

function ajax_save_outbox_got_delivered(from_bld_id, to_bld_id, envelopes, packages) {
  //alert(pageName + ' ' +from_bld_id + ' ' + to_bld_id + ' ' + envelopes + ' ' + packages);
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_save_outbox_got_delivered",
    data: JSON.stringify({ from_bld_id: from_bld_id, to_bld_id: to_bld_id, envelopes: envelopes, packages: packages }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //var x = 5;
      //$('#<%= goBack.ClientID %>').click();
      //var URL = 'default.aspx?v=' + view_count;
      //window.location.href = URL;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //var x = 5;
      //someErrorFunction();
    }
  });
}

// -----send---------------------------------------------------------------------------------

function ajax_get_all_out_boxes(callback) {
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_get_all_out_boxes",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      callback(response);
    }
  });
}

//-----mailbox-----------------------------------------------------------------------------

function ajax_save_mailbox(from_bld_id, to_bld_id, drag_item) {
  $.ajax({
    type: "POST",
    url: pageName + "/aspx_save_mailbox",
    data: JSON.stringify({ from_bld_id: from_bld_id, to_bld_id: to_bld_id, drag_item: drag_item }),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (response) {
      //callback(response); // ajax returns a value. The value is the new id in the created object.
      //setTimeout(goLink, 1500);
    },
    error: function (e) {
      $("#outbox").html(e);
    }
  });
}