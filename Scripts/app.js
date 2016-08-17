var core;
(function(core) {
    "use strict";
    var canvas;
    core.CANVAS_WIDTH = 640;
    core.CANVAS_HEIGHT = 480;
    var stage;
    var rollButton;
    var blank1;
    var blank2;



    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    function gameLoop() {
        var random = Math.floor((Math.random() * 6) + 1);
        console.log(random);
        var random2 = Math.floor((Math.random() * 6) + 1);
        console.log(random2);
        if (random = 1) {
            var i1 = new createjs.Bitmap("../Assets/images/1.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random = 2) {
            var i1 = new createjs.Bitmap("../Assets/images/2.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random = 3) {
            var i1 = new createjs.Bitmap("../Assets/images/3.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random = 4) {
            var i1 = new createjs.Bitmap("../Assets/images/4.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random = 5) {
            var i1 = new createjs.Bitmap("../Assets/images/5.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random = 6) {
            var i1 = new createjs.Bitmap("../Assets/images/6.png");
            i1.x = 100;
            i1.y = 20;
            stage.addChild(i1);
        }
        if (random2 = 1) {
            var i1 = new createjs.Bitmap("../Assets/images/1.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        } else if (random2 = 2) {
var i1 = new createjs.Bitmap("../Assets/images/2.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        }
 else if (random2 = 3) {
var i1 = new createjs.Bitmap("../Assets/images/3.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        }
         else if (random2 = 4) {
var i1 = new createjs.Bitmap("../Assets/images/4.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        }
         else if (random2 = 5) {
var i1 = new createjs.Bitmap("../Assets/images/5.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        }
         else if (random2 = 6) {
var i1 = new createjs.Bitmap("../Assets/images/6.png");
            i1.x = 350;
            i1.y = 20;
            stage.addChild(i1);
        }
        stage.update();
    }

    function main() {
        rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        rollButton.x = 200;
        rollButton.y = 250;
        stage.addChild(rollButton);
        blank1 = new createjs.Bitmap("../Assets/images/blank.png");
        blank1.x = 100;
        blank1.y = 20;
        stage.addChild(blank1);
        blank2 = new createjs.Bitmap("../Assets/images/blank.png");
        blank2.x = 350;
        blank2.y = 20;
        stage.addChild(blank2);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map