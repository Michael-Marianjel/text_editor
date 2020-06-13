var global_id = "";
var move_global_id =[];
function dragstart_handler(ev) {
  // Change the source element's background color to signify drag has started
  ev.currentTarget.style.border = "1px solid black";
  ev.target.style.size = "300px";

  // Add the id of the drag source element to the drag data payload so
  // it is available when the drop event is fired

  ev.dataTransfer.setData("copy_id", ev.target.id);
  // Tell the browser both copy and move are possible
  // ev.effectAllowed = "copyMove";
  if (ev.target.id != "row_layout" || ev.target.id != "col_layout")
    var style = window.getComputedStyle(ev.target, null);

    var str = (parseInt(style.getPropertyValue("left")) - ev.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - ev.clientY) + ',' + ev.target.id;

    ev.dataTransfer.setData("move_id", str);
}
function dragover_handler(ev) {
  // Change the target element's border to signify a drag over event
  // has occurred
  ev.preventDefault();
}
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  // Get the id of drag source element (that was added to the drag data
  // payload by the dragstart event handler)
  // Only Move the element if the source and destination ids are both "move"
  var id = ev.dataTransfer.getData("copy_id");
  var move_layout = ev.dataTransfer.getData("move_id").split(',');
  var move_id = move_layout[2]
  console.log(id)
  if ((id == "row_layout" || id == "col_layout" || id == "line_layout") && ev.target.id == "artboard") {
    var nodeCopy = document.getElementById(id).cloneNode(true);
    nodeCopy.id = "move_layout" + Math.floor((Math.random() * 10000) + 1);
    move_global_id.push(nodeCopy.id);
    ev.target.appendChild(nodeCopy);
  }
  console.log(move_global_id)
  for (i = 0; i < move_global_id.length; i++)
  {	if (move_id == move_global_id[i])
    {
      var offset = ev.dataTransfer.getData("move_id").split(',');
      var dm = document.getElementById(offset[2]);
      dm.style.left = (ev.clientX + parseInt(offset[0])) + 'px';
      dm.style.top = (ev.clientY + parseInt(offset[1])) + 'px';
      ev.preventDefault();

      return false;
    }
  }
  // Copy the element if the source and destination ids are both "copy"
}
function dragend_handler(ev) {
  console.log("dragEnd");
  // Restore source's border
  ev.target.style.border = "0.1px solid black";
  // Remove all of the drag data
  ev.dataTransfer.clearData();
}

var num_ranges = window.getSelection().rangeCount;

