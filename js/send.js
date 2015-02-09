function send(from_bld_id) {
  var view_count = 3;
  ajax_get_all_out_boxes(function (response) {
    if (response.d.length > 2) {
      $("#destination_list").empty();
      var data = $.parseJSON(response.d);
      $.each(data, function (i, item) {
        $("#destination_list").append("<li>" +
          "<a data-theme='a' id='li" + i + "' data-transition='slide' href='mailbox.htm?to_bld_id=" + item.to_bld_id + "'>" +
            item.building +
            "<span class='ui-li-count'>" + item.mail_count + "</span>" +
          "</a>" +
          "</li>"
        );
      });
      $("#destination_list").listview("refresh");
    }
  });
}