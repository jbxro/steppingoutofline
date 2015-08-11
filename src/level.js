NSTC.Level = function(game){};
NSTC.Level.prototype = {
  init: function(levelDefinition){
    this.definition = levelDefinition;
  },
  create: function(){
    this.fingers = this.game.add.group();
    this.targets = this.game.add.group();

    this.oneFinger = new NSTC.Finger(this, 250, 400, 'a');
    this.twoFinger = new NSTC.Finger(this, 380, 400, 's');
    this.threeFinger = new NSTC.Finger(this, 510, 400, 'd');

    this.oneTarget = new NSTC.Target(this, this.oneFinger, this.twoFinger, 4500, 315, 0);

    this.game.add.text(50, 50, this.definition.text, { fill: '#FFF' });
    this.loopTimerText = this.game.add.text(50, 150, '', { fill: '#FFF' });

    this.music = this.game.add.sound('test_loop');
    this.music.loopFull();
  },
  update: function(){
    this.game.keyManager.update();
    this.loopTimerText.setText(String(this.music.currentTime));
    this.targets.y = -100 + (this.music.currentTime/this.music.durationMS) * 800;
    if(this.game.keyManager.isReleased('enter')){
      this.state.start('StartMenu');
    }
  },
}
