function default_page(from_bld_id) {
  var view_count = 3;
  ajax_get_out_boxes_with_mail(from_bld_id, view_count, function (response) {
    if (response.d.length > 2) {
      $("#out_going_list").empty();
      var data = $.parseJSON(response.d);
      $.each(data, function (i, item) {
        $("#out_going_list").append("<li>" +
              "<a data-theme='a' id='li" + i + "' data-transition='slide' href='outbox.htm?to_bld_id=" + item.to_bld_id + "&v=" + item.view_count + "'>" +
                item.building +
                "<span class='ui-li-count'>" + item.mail_count + "</span>" +
              "</a>" +
            "</li>");
      });
      $("#out_going_list").listview("refresh");
    }
  });
}

//data-ajax='false' 