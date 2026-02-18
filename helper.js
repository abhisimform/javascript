function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    // behavior: "smooth"
  });
}

function b() {
  print("<br>");
}

function print(text) {
  document.write(text);
  scrollToBottom();
}

function printB(text) {
  document.write("<b>" + text + "</b>");
}

function printObject(obj) {
  document.write("<pre>" + JSON.stringify(obj, null, 2) + "</pre>");
  scrollToBottom();
}

// function printObject(obj, indent = "") {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         document.write(indent + key + ":<br>");
//         printObject(obj[key], indent + "&nbsp;&nbsp;&nbsp;&nbsp;");
//       } else {
//         document.write(indent + key + ": " + obj[key] + "<br>");
//       }
//     }
//   }
// }
