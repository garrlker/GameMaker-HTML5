// **********************************************************************************************************************
//
// Copyright (c)2011, YoYo Games Ltd. All Rights reserved.
//
// File:            runner.js
// Created:         16/02/2011
// Author:          Mike
// Project:         HTML5
// Description:
//
// **********************************************************************************************************************

const font = new Font("default");

Screen.setFrameCounter(true);
Screen.setVSync(false);


let ee_info = System.getCPUInfo();

let free_mem = `RAM: ${Math.floor(System.getMemoryStats().used / 1048576)}MB / ${Math.floor(ee_info.RAMSize / 1048576)}MB`;
let free_vram = Screen.getFreeVRAM();

// os.setInterval(() => { // Basically creates an infinite loop, similar to while true(you can use it too).
//   Screen.clear(); // Clear screen for the next frame.
//   free_mem = `RAM: ${Math.floor(System.getMemoryStats().used / 1048576)}MB / ${Math.floor(ee_info.RAMSize / 1048576)}MB`;
//   free_vram = Screen.getFreeVRAM();

//   font.print(10, 10, Screen.getFPS(360) + " FPS | " + free_mem + " | Free VRAM: " + free_vram + "KB");
//   Screen.flip(); // Updates the screen.
// }, 0);

// var window = globalThis
std.evalScript(`var window = globalThis`) // For some reason, window is undefined in the script, so we need to set it to globalThis
globalThis.foo = "bar";
console.log("window.foo", window.foo);
console.log("foo", foo);
window.addEventListener = (eventName) => {
  console.log(`addEventListener: ${eventName}`);
} // TODO: Stub with real impl
window.open = () => {} // No opening browsers
window.focus = () => {} // No focusing windows
window.requestAnimFrame = (callback) => {
  os.setInterval(callback, 0);
}
window.devicePixelRatio = 1;

std.evalScript(`globalThis.document = {}`) // document
globalThis.document.getElementById = (elementId) => {
  console.log(`getElementById: ${elementId}`);
} // No getting elements by id
globalThis.document.write = () => {} // No writing to the document
globalThis.document.body = {}


// Piggybag on engine debug logs
std.evalScript(`debug = console.log`)

// More debug
const loadScript = (script) => {
  free_mem = `RAM: ${Math.floor(System.getMemoryStats().used / 1048576)}MB / ${Math.floor(ee_info.RAMSize / 1048576)}MB`;
  console.log(`loadingScript: ${script} | Current Free RAM: ${free_mem}`);
  std.loadScript(script)
}

//
// here.
//
/*jshint evil:true*/
// std.loadScript("device/iOS.js");
loadScript("scripts/device/Gamepad.js"); // TODO: Add Gamepad support with Pad Module
loadScript("scripts/Vector3.js");
loadScript("scripts/Matrix.js");
loadScript("scripts/Plane.js");
loadScript("scripts/Frustum.js");
loadScript("scripts/Unsupported.js");
loadScript("scripts/Globals.js");
loadScript("scripts/GameGlobals.js");
loadScript("scripts/yyVariable.js");
loadScript("scripts/yyBuiltIn.js");
loadScript("scripts/yyTypes.js");
loadScript("scripts/yyQueue.js");
loadScript("scripts/yyList.js");
loadScript("scripts/yyOList.js");
loadScript("scripts/yyAllocate.js");
// loadScript("scripts/yyIOManager.js");  // TODO: Handles canvas IO, mouselocking, fullscreen, etc
loadScript("scripts/yyNineSliceData.js");
loadScript("scripts/yySprite.js");
loadScript("scripts/yyObject.js");
loadScript("scripts/yyInstance.js");
loadScript("scripts/yyBackground.js");
loadScript("scripts/yyFont.js");
loadScript("scripts/yySound.js");
loadScript("scripts/yyTile.js");
loadScript("scripts/yyPlayfield.js");
loadScript("scripts/yyPath.js");
loadScript("scripts/yyView.js");
loadScript("scripts/yyRoom.js");
loadScript("scripts/yy3DModel.js");
loadScript("scripts/yyGraphics.js");
loadScript("scripts/yyIniFile.js");
loadScript("scripts/yyParticle.js");
loadScript("scripts/yyTimeline.js");
loadScript("scripts/yyAnimCurve.js");
loadScript("scripts/yySequence.js");
loadScript("scripts/yyEffects.js");
loadScript("scripts/yyASync.js");
loadScript("scripts/yyTrigger.js");
loadScript("scripts/yyVertexManager.js");
loadScript("scripts/yyWeakRef.js");
loadScript("scripts/yyBufferVertex.js");
loadScript("scripts/yyBuffer.js");
loadScript("scripts/yyVideo.js");
loadScript("scripts/yyTime.js");
loadScript("scripts/LocalStorage.js");
loadScript("scripts/Storage.js");
loadScript("scripts/Events.js");
loadScript("scripts/Effects.js");
loadScript("scripts/CameraManager.js");
// loadScript("scripts/Builders/yyPrimBuilder.js");  // TODO: Ignoring physics for now
// loadScript("scripts/Builders/yyVBufferBuilder.js");
// loadScript("scripts/physics/yyPhysicsDebugRender.js");
// loadScript("scripts/physics/yyPhysicsFixture.js");
// loadScript("scripts/physics/yyPhysicsJoint.js");
// loadScript("scripts/physics/yyPhysicsObject.js");
// loadScript("scripts/physics/yyPhysicsWorld.js");
loadScript("scripts/functions/collections/ds_grid.js");
loadScript("scripts/functions/collections/ds_list.js");
loadScript("scripts/functions/collections/ds_map.js");
loadScript("scripts/functions/collections/ds_priority.js");
loadScript("scripts/functions/collections/ds_queue.js");
loadScript("scripts/functions/collections/ds_stack.js");
loadScript("scripts/functions/Function_Maths.js");
loadScript("scripts/functions/Function_Misc.js");
loadScript("scripts/functions/Function_YoYo.js");  // TODO: Some window IO
loadScript("scripts/functions/Function_String.js");
// loadScript("scripts/functions/Function_Debug.js");  // TODO: Silent crashing on load
loadScript("scripts/functions/Function_Date.js");
loadScript("scripts/functions/Function_IO.js");
loadScript("scripts/functions/Function_ini.js");
loadScript("scripts/functions/Function_Graphics.js");
loadScript("scripts/functions/Function_Texture.js");
// loadScript("scripts/functions/Function_Sound.js");  // TODO: Resets to memcard screen
loadScript("scripts/functions/Function_Sound_Legacy.js");
loadScript("scripts/functions/Function_Sprite.js");
loadScript("scripts/functions/Function_Object.js");
loadScript("scripts/functions/Function_Background.js");
loadScript("scripts/functions/Function_Path.js");
loadScript("scripts/functions/Function_Instance.js");
loadScript("scripts/functions/Function_Game.js");
loadScript("scripts/functions/Function_Tiles.js");
loadScript("scripts/functions/Function_Room.js");
loadScript("scripts/functions/Function_Layers.js");
loadScript("scripts/functions/Function_Particles.js");
loadScript("scripts/functions/Function_Movement.js");
loadScript("scripts/functions/Function_Surface.js");
loadScript("scripts/functions/Function_MotionPlanning.js");
loadScript("scripts/functions/Function_Collision.js");
loadScript("scripts/functions/Function_File.js");
loadScript("scripts/functions/Function_Font.js");
loadScript("scripts/functions/Function_Timeline.js");
loadScript("scripts/functions/Function_Action.js");
// loadScript("scripts/functions/Function_Window.js");  // TODO: Window IO
loadScript("scripts/functions/Function_Physics.js");  // TODO: Ignoring physics for now
loadScript("scripts/functions/Function_Gamepad.js");
// loadScript("scripts/functions/Function_Shaders.js");  // WONTFIX: WebGL/Shaders not supported on PS2
// loadScript("scripts/functions/Function_D3D.js"); // TODO: We actually could implement a D3D like api
// loadScript("scripts/functions/Function_IAP.js");  // WONTFIX: Not adding in app purchases, we're not EA
// loadScript("scripts/functions/Function_HTTP.js");  // TODO: Maybe implement if networking stablizes in Athena
// loadScript("scripts/functions/Function_Networking.js");  // TODO: Maybe implement if networking stablizes in Athena
// loadScript("scripts/functions/Function_AnimCurve.js");  // plz no
// loadScript("scripts/functions/Function_Sequence.js");
loadScript("scripts/functions/Function_Tags.js");
loadScript("scripts/functions/Function_Time.js");
// loadScript("scripts/animation/yySkeletonInstance.js");  // Avoiding animations for now, maybe forever
// loadScript("scripts/animation/yySkeletonSkin.js");
// loadScript("scripts/animation/yySkeletonSprite.js");
loadScript("scripts/libWebGL/yyRenderStateManager.js"); 
// loadScript("scripts/libWebGL/libWebGL.js");
// loadScript("scripts/libWebGL/libWebGLConsts.js");
// loadScript("scripts/libWebGL/yyCommandBuilder.js");
// loadScript("scripts/libWebGL/yySamplerState.js");
// loadScript("scripts/libWebGL/yyGLTexture.js");
// loadScript("scripts/libWebGL/yyVBuffer.js");
// loadScript("scripts/libWebGL/yyVBufferManager.js");
// loadScript("scripts/libWebGL/yyVertexFormat.js");
// loadScript("scripts/libWebGL/shaders/basicShader.js");
// loadScript("scripts/libWebGL/shaders/fullShader.js");
// loadScript("scripts/SWF/yySWFBitmap.js");  // Avoiding SWF
// loadScript("scripts/SWF/yySWFShape.js");
// loadScript("scripts/SWF/yySWFTimeline.js");
// loadScript("scripts/yyWebGL.js");  // No webgl, but we need the declarations
loadScript("scripts/yyWebGLDeclarations.js");  // No webgl, but we need some declarations
loadScript("scripts/yyTextureGroupInfo.js");
loadScript("scripts/LoadGame.js");
loadScript("scripts/_GameMaker.js");

// loadScript("scripts/fontjs/Font.js");
// loadScript("scripts/jsBox2D/jsliquidfun.js");
// loadScript("scripts/zlib/inflate.min.js");
// loadScript("scripts/zlib/deflate.min.js");
// loadScript("scripts/fingerprintjs/fingerprint.js");
// loadScript("scripts/sound/WorkletNodeManager.js");
// loadScript("scripts/sound/AudioBus.js");
// loadScript("scripts/sound/AudioEffect.js");
// loadScript("scripts/sound/AudioEmitter.js");
// loadScript("scripts/sound/AudioPlaybackProps.js");
// loadScript("scripts/sound/AudioPropsCalc.js");
// loadScript("scripts/sound/effects/Bitcrusher.js");
// loadScript("scripts/sound/effects/Compressor.js");
// loadScript("scripts/sound/effects/Delay.js");
// loadScript("scripts/sound/effects/EQ.js");
// loadScript("scripts/sound/effects/Gain.js");
// loadScript("scripts/sound/effects/HiShelf.js");
// loadScript("scripts/sound/effects/HPF2.js");
// loadScript("scripts/sound/effects/LoShelf.js");
// loadScript("scripts/sound/effects/LPF2.js");
// loadScript("scripts/sound/effects/PeakEQ.js");
// loadScript("scripts/sound/effects/Reverb1.js");
// loadScript("scripts/sound/effects/Tremolo.js");
// //loadScript("scripts/spine/spine.js");
// loadScript("scripts/spine/spine-core.js");


// loadScript("scripts/functions/Function_ClickableButton.js");

// loadScript("scripts/jsgif/LZWEncoder.js");
// loadScript("scripts/jsgif/NeuQuant.js");
// loadScript("scripts/jsgif/GIFEncoder.js");

// loadScript("scripts/long/long.js");
// loadScript("scripts/utils/TimeRampedParamLinear.js");
// //loadScript("scripts/yoga/yoga-wasm-base64-esm.js");
// loadScript("scripts/yoga/AAyoga.js");
// loadScript("scripts/yoga/GMYoga.js");
console.log("Loading game script");
loadScript("html5game/SRPS2.js");
console.log("game json", JSON.stringify(JSON_game))
// /*jshint evil:false*/

console.log("Calling GameMaker_Init");
window.GameMaker_Init()
