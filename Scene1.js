class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image('logo', 'assets/logo.png');
      this.load.image('fondo', 'assets/fondo.png');
      this.load.image('fondo_der', 'assets/fon_derrota.png');
      this.load.image('ground', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.image('INICIAR', 'assets/INICIAR.png');
      this.load.image('INICIAR2', 'assets/INICIAR_2.png');
      this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('luffy', 'assets/luffy.png', { frameWidth: 66, frameHeight: 60 });      
    }

    create() {

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('luffy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'luffy', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('luffy', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      var logo = this.add.image(400, 300, 'logo').setScale(0.26)
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );

  

      var Inicar = this.add.image(410, 320, 'INICIAR').setScale(1.1)
      .setInteractive()
      .on('pointerover', () => this.add.image(410, 320, 'INICIAR2').setScale(1.1))
      .on('pointerout', () => this.add.image(410, 320, 'INICIAR').setScale(1.1))
      .on('pointerdown', () => this.INICIAR())


      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }

    INICIAR(){
      this.scene.start('juego');
    }

}
