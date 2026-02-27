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
    // --- Multi-scale motion sampling for smoother feel ---
    float motion = texture2D(uMotionTex, vUv).r;
    float motionWide = (
      texture2D(uMotionTex, vUv + vec2(uMotionTexelSize.x * 3.0, 0.0)).r +
      texture2D(uMotionTex, vUv - vec2(uMotionTexelSize.x * 3.0, 0.0)).r +
      texture2D(uMotionTex, vUv + vec2(0.0, uMotionTexelSize.y * 3.0)).r +
      texture2D(uMotionTex, vUv - vec2(0.0, uMotionTexelSize.y * 3.0)).r
    ) * 0.25;
    float motionBlend = mix(motion, motionWide, 0.35);

    // --- Compute local gradient for displacement direction ---
    float mL = texture2D(uMotionTex, vUv + vec2(-uMotionTexelSize.x * 2.0, 0.0)).r;
    float mR = texture2D(uMotionTex, vUv + vec2( uMotionTexelSize.x * 2.0, 0.0)).r;
    float mU = texture2D(uMotionTex, vUv + vec2(0.0,  uMotionTexelSize.y * 2.0)).r;
    float mD = texture2D(uMotionTex, vUv + vec2(0.0, -uMotionTexelSize.y * 2.0)).r;

    vec2 gradient = vec2(mR - mL, mU - mD);

    // --- Swirl / rotation from gradient (water vortex) ---
    vec2 swirl = vec2(-gradient.y, gradient.x) * 0.6;

    // --- Water-like organic turbulence ---
    float phase = uTime * 0.5;
    vec2 turbulence = vec2(
      sin(vUv.y * 12.0 + phase) * 0.25 +
      cos(vUv.x * 8.0 + phase * 0.7) * 0.18 +
      sin(vUv.y * 5.0 - phase * 0.3 + vUv.x * 3.0) * 0.12,

      cos(vUv.x * 10.0 + phase * 0.9) * 0.22 +
      sin(vUv.y * 6.0 + phase * 0.5) * 0.15 +
      cos(vUv.x * 4.0 + phase * 0.2 - vUv.y * 7.0) * 0.10
    );

    // --- Subtle idle ripple (always active) ---
    float breathe = sin(uTime * 0.25) * 0.001 + cos(uTime * 0.15 + vUv.x * 3.0) * 0.0006;
    vec2 idle = vec2(breathe, breathe * 0.8);

    // --- Combine: strong displacement with swirl + turbulence ---
    float power = motionBlend * motionBlend; // quadratic for more dramatic peaks
    vec2 displacement = (
      gradient * 14.0 +
      swirl * 8.0 +
      turbulence * motionBlend * 1.5
    ) * uStrength * power + idle;

    vec2 uv = vUv + displacement;

    // --- Chromatic aberration (stronger, water-like color split) ---
    float aberration = motionBlend * uStrength * 0.02;
    vec2 aberrDir = normalize(gradient + vec2(0.001)) * aberration;
    float r = texture2D(uTex, uv + aberrDir).r;
    float g = texture2D(uTex, uv).g;
    float b = texture2D(uTex, uv - aberrDir).b;

    vec3 color = vec3(r, g, b);

    // --- Subtle brightness boost in motion areas (wet highlight) ---
    color += motionBlend * 0.04 * uStrength;

    // --- Vignette ---
    float dist = length(vUv - 0.5);
    float vignette = 1.0 - smoothstep(0.45, 0.95, dist);
    color *= mix(1.0, vignette, 0.25);

    gl_FragColor = vec4(color, 1.0);
  }
`
