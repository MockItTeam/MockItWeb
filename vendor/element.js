export default class ElementFactory {

  static createElement(obj) {
    switch (obj.type) {
      case "Text":
        return new Label(obj);
      case "VideoPlayer":
        return new VideoPlayer(obj);
      case "TextField":
        return new TextField(obj);
      case "TextArea":
        return new TextArea(obj);
      default:
        return new Element(obj);
    }
  }
  
}

class Element {

  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
  }

  render(jquery) {
    jquery.draggable({
      cancel: ''
    }).css({
      "z-order": this.z,
      top: this.y,
      left: this.x,
      width: this.width,
      height: this.height,
    });
  }

}

class Label extends Element {
  
  constructor(obj) {
    super(obj);
    this.text = obj.text;
  }

  render(jquery) {
    super.render(jquery);
    jquery.css({
      border: "none",
    });
    jquery.text(this.text);
  }

}

class VideoPlayer extends Element {
  
  constructor(obj) {
    super(obj);
  }

  render(jquery) {
    super.render(jquery);
    jquery.css({
      background: "#c2c2c2",
      color: "white",
      border: "none",
      "text-align": "center",
      "font-size": "20px",
      "line-height": this.height + "px"
    });
    jquery.text("Video Player");
  }

}

class TextField extends Element {
  
  constructor(obj) {
    super(obj);
  }

  render(jquery) {
    super.render(jquery);
    jquery.css({
      background: "#c2c2c2",
      color: "white",
      border: "none",
      "text-align": "center",
      "font-size": "20px",
      "line-height": this.height + "px"
    });
    jquery.text("TextField");
  }

}

class TextArea extends Element {
  
  constructor(obj) {
    super(obj);
  }

  render(jquery) {
    super.render(jquery);
    jquery.css({
      background: "#c2c2c2",
      color: "white",
      border: "none",
      "text-align": "center",
      "font-size": "20px",
      "line-height": this.height + "px"
    });
    jquery.text("TextArea");
  }

}