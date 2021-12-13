sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    statusbar.value += -3
})
let Zooombie: Sprite = null
let statusbar: StatusBarSprite = null
let Hooman = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
statusbar = statusbars.create(10, 2, StatusBarKind.Health)
statusbar.value = 100
statusbar.attachToSprite(Hooman)
controller.moveSprite(Hooman, 40, 40)
Hooman.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Zooombie = sprites.createProjectileFromSide(img`
        . . . . f 7 7 7 7 7 7 f f . . . 
        . . . f f 7 1 1 7 7 1 1 f . . . 
        . . . f 7 7 1 f 7 7 f 1 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . f f f f 7 7 f f f f 7 f f . . 
        f f 1 1 1 1 7 7 7 7 7 7 1 f f . 
        f 1 1 f f 1 1 7 7 7 7 1 1 1 f f 
        f 7 f f f 1 1 1 1 1 1 1 1 1 7 f 
        f 7 f . f 1 1 1 1 1 1 1 f 7 7 f 
        f 7 f . f 1 1 1 1 1 1 1 f f 7 f 
        f f f . f 8 8 8 8 8 8 8 f 7 7 f 
        . . . f 8 8 8 8 8 8 8 8 f f f f 
        . . . 8 8 8 8 f f 8 8 8 8 . . . 
        . . f f 8 8 f . . f 8 8 f . . . 
        . f f f f f . . . . f f f f . . 
        f f f f f f . . . . f f f f f . 
        `, -75, 0)
    Zooombie.setKind(SpriteKind.Enemy)
    Zooombie.y = randint(10, 150)
})
