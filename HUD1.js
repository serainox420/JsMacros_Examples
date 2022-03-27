// GUI SCREENS:
// 


const screen = Hud.createScreen("HUD 1 EXPERIMENTAL", true)
screen.setOnInit(JavaWrapper.methodToJava((s) => {

    const clear = () => Chat.say(".clear-chat")
    s.addButton(20, 10, 70, 20, "Clear Chat", JavaWrapper.methodToJava(clear)) // CLEAR CHAT
    
    
    const callback1 = () => JsMacros.runScript("1.js")
    s.addButton(20, 40, 50, 20, "TEST1", JavaWrapper.methodToJava(callback1))
    
    const callback2 = () => JsMacros.runScript("2.js")
    s.addButton(75, 40, 50, 20, "TEST2", JavaWrapper.methodToJava(callback2))
    
    const callback3 = () => JsMacros.runScript("3.js")
    s.addButton(20, 65, 50, 20, "TEST3", JavaWrapper.methodToJava(callback3))
    
    const callback4 = () => JsMacros.runScript("4.js")
    s.addButton(75, 65, 50, 20, "TEST4", JavaWrapper.methodToJava(callback4))
    
  
//const test1 = Chat.createTextBuilder().append("hello,").withColor(0x6).build()
 //   const txt1 = Hud.listDraw2Ds() 
 //   s.addText(txt1, 209, 100, 0xFFFFFF, true)
//    Hud.getOpenScreen()
}))
Hud.openScreen(screen)

