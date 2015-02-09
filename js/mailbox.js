
function mailbox(from_bld_id, to_bld_id) {
  $("#envelope").draggable({
    revert: "invalid",
    start: function () { drag_item = this.id; }
  });

  $("#package").draggable({
    revert: "invalid",
    start: function () { drag_item = this.id; }
  });

  $("#outbox").droppable({
    activeClass: function (event, ui) {
      $(this)
      .find("p")
      .html("Drop the mail here.");
    },
    hoverClass: "ui-state-active",
    drop: function (event, ui) {
      event.stopPropagation();
      $(this)
      .addClass("ui-state-highlight")
      .find("p").html("Dropped!");
      //$("#envelope").html("Thanks");
      //$(".mail").fadeOut("slow");
      $("#" + drag_item).fadeOut("slow", function () {
        $("#outbox").html("Thanks<br />All Done");
        setTimeout(goLink, 1000);
      });
      ajax_save_mailbox(from_bld_id, to_bld_id, drag_item);
      //setTimeout(goLink, 600);
    }
  });
  //$("#package").css({ "border-radius": "10px" });
  $("#outbox").css({ "border-radius": "10px" });
  $("#howTo").css({ "border-radius": "10px" });
}

function refreshPage(page) {
  // Page refresh
  page.trigger('pagecreate');
  page.listview('refresh');
}

function goLink() {
  //refreshPage("send.htm")
  $(":mobile-pagecontainer").pagecontainer("change", "send.htm", { reverse: "true" });

  //$('#<%= goBack.ClientID %>').click();
  //window.location.href = 'Default.aspx';
  //var URL = 'send.aspx?v=' + view_count;
  //window.location.href = URL;
}