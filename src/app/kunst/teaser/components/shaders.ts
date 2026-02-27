/**
 * GLSL Shaders for the Interactive Art Teaser
 * 
 * Fragment shader takes a placeholder image texture and a motion-map texture,
 * computes local gradients from the motion map for displacement direction,
 * and applies wind-like UV displacement + subtle chromatic aberration + vignette.
 */

export const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uTex;
  uniform sampler2D uMotionTex;
  uniform float uTime;
  uniform float uStrength;
  uniform vec2 uMotionTexelSize;

  varying vec2 vUv;

  void main() {
    // --- Sample motion map at current UV ---
    float motion = texture2D(uMotionTex, vUv).r;

    // --- Compute local gradient for displacement direction ---
    float mL = texture2D(uMotionTex, vUv + vec2(-uMotionTexelSize.x, 0.0)).r;
    float mR = texture2D(uMotionTex, vUv + vec2( uMotionTexelSize.x, 0.0)).r;
    float mU = texture2D(uMotionTex, vUv + vec2(0.0,  uMotionTexelSize.y)).r;
    float mD = texture2D(uMotionTex, vUv + vec2(0.0, -uMotionTexelSize.y)).r;

    vec2 gradient = vec2(mR - mL, mU - mD);

    // --- Wind-like organic motion ---
    float windPhase = uTime * 0.4;
    vec2 wind = vec2(
      sin(vUv.y * 7.0 + windPhase) * 0.3 + cos(vUv.x * 3.0 + windPhase * 0.6) * 0.2,
      cos(vUv.x * 5.0 + windPhase * 0.8) * 0.2 + sin(vUv.y * 4.0 + windPhase * 0.4) * 0.15
    );

    // --- Subtle idle breathing even without motion ---
    float breathe = sin(uTime * 0.3) * 0.0005 + cos(uTime * 0.2 + vUv.x * 2.0) * 0.0003;
    vec2 idle = vec2(breathe, breathe * 0.7);

    // --- Combine: gradient direction + wind, scaled by motion intensity & strength ---
    vec2 displacement = (gradient * 6.0 + wind * motion * 0.5) * uStrength * motion + idle;

    vec2 uv = vUv + displacement;

    // --- Chromatic aberration (motion-driven, subtle) ---
    float aberration = motion * uStrength * 0.006;
    float r = texture2D(uTex, uv + vec2( aberration,  aberration * 0.5)).r;
    float g = texture2D(uTex, uv).g;
    float b = texture2D(uTex, uv + vec2(-aberration, -aberration * 0.5)).b;

    vec3 color = vec3(r, g, b);

    // --- Subtle vignette ---
    float dist = length(vUv - 0.5);
    float vignette = 1.0 - smoothstep(0.45, 0.95, dist);
    color *= mix(1.0, vignette, 0.2);

    gl_FragColor = vec4(color, 1.0);
  }
`
