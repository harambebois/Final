var namespace = "http://www.w3.org/2000/svg"
var player = makeImage("http://www.elmers.com/Content/images/products/category-headers/glues-and-adhesives/img-home-and-office-logo-lg-on.png", 10, 90, 10, 10)

// Write your code here!
var end = makeRect(180, 70, 20, 10, "white")
var wall = makeRect(0, 70, 10, 30, "red")
var wall2 = makeRect(0, 70, 40, 10, "red")
var wall3 = makeRect(20, 90, 10, 10, "red")
var wall4 = makeRect(40, 70, 10, 20, "red")
var wall5 = makeRect(60, 60, 10, 40, "red")
var wall6 = makeRect(60, 50, 30, 10, "red")
var wall7 = makeRect(30, 50, 30, 10, "red")
var wall8 = makeRect(0, 50, 20, 10, "red")
var wall9 = makeRect(20, 0, 10, 40, "red")
var wall10 = makeRect(0, 0, 10, 50, "red")
var wall11 = makeRect(40, 30, 30, 10, "red")
var wall12 = makeRect(40, 10, 10, 20, "red")
var wall13 = makeRect(60, 0, 10, 30, "red")
var wall14 = makeRect(80, 30, 10, 30, "red")
var wall15 = makeRect(80, 10, 30, 10, "red")
var wall16 = makeRect(100, 20, 10, 40, "red")
var wall17 = makeRect(60, 70, 100, 10, "red")
var wall18 = makeRect(120, 30, 10, 30, "red")
var wall19 = makeRect(120, 0, 10, 20, "red")
var wall20 = makeRect(120, 30, 40, 10, "red")
var wall21 = makeRect(140, 10, 10, 30, "red")
var wall22 = makeRect(160, 0, 10, 20, "red")
var wall23 = makeRect(150, 40, 10, 20, "red")
var wall24 = makeRect(160, 30, 30, 10, "red")
var wall25 = makeRect(180, 10, 10, 20, "red")
var wall26 = makeRect(170, 40, 10, 50, "red")
var wall27 = makeRect(150, 70, 10, 30, "red")
var wall28 = makeRect(170, 80, 30, 10, "red")
var wall29 = makeRect(0, 70, 10, 30, "red")
var winscreen = makeText("CONGRATULATIONS", 0, -20, 20, "cursive", "white")
 addEventListener("keydown", playGame)
function playGame(event){
var X = getX(player)
var Y = getY(player)
  if(event.key == "a" && X > 0){
  move(player, -2, 0)
}else if(event.key == "d" && X < 190){
  move(player, 2, 0)
}else if(event.key == "s" && Y < 90){
  move(player, 0, 2)
}else if(event.key == "w" && Y > 0){
  move(player, 0, -2)
}
if(collides(player, wall)){
  gameOver()
}else if(collides(player, wall2)){
  gameOver()
}else if(collides(player, wall3)){
  gameOver()
}else if(collides(player, wall4)){
  gameOver()
}else if(collides(player, wall5)){
  gameOver()
}else if(collides(player, wall6)){
  gameOver()
}else if(collides(player, wall7)){
  gameOver()
}else if(collides(player, wall8)){
  gameOver()
}else if(collides(player, wall9)){
  gameOver()
}else if(collides(player, wall10)){
  gameOver()
}else if(collides(player, wall11)){
  gameOver()
}else if(collides(player, wall12)){
  gameOver()
}else if(collides(player, wall13)){
  gameOver()
}else if(collides(player, wall14)){
  gameOver()
}else if(collides(player, wall15)){
  gameOver()
}else if(collides(player, wall16)){
  gameOver()
}else if(collides(player, wall17)){
  gameOver()
}else if(collides(player, wall19)){
  gameOver()
}else if(collides(player, wall18)){
  gameOver()
}else if(collides(player, wall20)){
  gameOver()
}else if(collides(player, wall21)){
  gameOver()
}else if(collides(player, wall22)){
  gameOver()
}else if(collides(player, wall23)){
  gameOver()
}else if(collides(player, wall24)){
  gameOver()
}else if(collides(player, wall25)){
  gameOver()
}else if(collides(player, wall27)){
  gameOver()
}else if(collides(player, wall28)){
  gameOver()
}else if(collides(player, wall29)){
  gameOver()
}else if(collides(player, end)){
  winner()
}else{
  requestAnimationFrame(playGame)
}
}
function restart(){
  location.reload(true)
}
var death = false
function gameOver(){
if(death == false){
alert("Too Fast, Be Careful")
death = true
}
}
function winner(){
  move(winscreen, 0, 5)
  var winY = getY(winscreen)
  if(winY < 75){
    requestAnimationFrame(winner)
  }
}

// DO NOT EDIT CODE BELOW THIS LINE!

function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
