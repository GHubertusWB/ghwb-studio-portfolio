/**
 * GLSL Shaders for the Interactive Art Teaser — Grass Meadow
 *
 * Vertex shader: instanced grass blades bent by wind (motion-map driven).
 * Fragment shader: natural grass color gradient with depth fog.
 * Ground shaders: dark earth/moss floor with fog.
 */

export const grassVertexShader = /* glsl */ `
  attribute float bladeHeight;
  attribute vec3 aOffset;
  attribute float aScale;
  attribute float aPhase;
  attribute float aAngle;
  attribute float aColorVar;

  uniform sampler2D uMotionTex;
  uniform float uTime;
  uniform float uStrength;
  uniform float uFieldSize;
  uniform vec2 uMotionTexelSize;

  varying float vHeight;
  varying float vColorVar;
  varying float vFogDepth;

  void main() {
    vHeight = bladeHeight;
    vColorVar = aColorVar;

    // Rotate blade around Y axis
    float ca = cos(aAngle);
    float sa = sin(aAngle);
    vec3 pos = position;
    float rx = pos.x * ca - pos.z * sa;
    float rz = pos.x * sa + pos.z * ca;
    pos.x = rx;
    pos.z = rz;

    // Scale blade height
    pos.y *= aScale;

    // Map blade ground position to motion texture UV
    float halfField = uFieldSize * 0.5;
    vec2 motionUV = (aOffset.xz + halfField) / uFieldSize;
    motionUV = clamp(motionUV, 0.01, 0.99);

    // Sample motion intensity
    float motion = texture2D(uMotionTex, motionUV).r;

    // Wind direction from gradient (wider sampling)
    float mL = texture2D(uMotionTex, motionUV + vec2(-uMotionTexelSize.x * 3.0, 0.0)).r;
    float mR = texture2D(uMotionTex, motionUV + vec2( uMotionTexelSize.x * 3.0, 0.0)).r;
    float mU = texture2D(uMotionTex, motionUV + vec2(0.0,  uMotionTexelSize.y * 3.0)).r;
    float mD = texture2D(uMotionTex, motionUV + vec2(0.0, -uMotionTexelSize.y * 3.0)).r;
    vec2 windDir = vec2(mR - mL, mU - mD);

    // Fallback direction when no clear gradient
    float dirLen = length(windDir);
    if (dirLen < 0.001) {
      windDir = vec2(sin(aPhase), cos(aPhase)) * motion;
    }

    // Multi-frequency natural sway (always active, gentle breeze)
    float sway1 = sin(uTime * 1.0 + aPhase + aOffset.x * 0.15) * 0.12;
    float sway2 = sin(uTime * 1.9 + aPhase * 1.4 + aOffset.z * 0.25) * 0.06;
    float sway3 = cos(uTime * 0.45 + aOffset.x * 0.07 + aOffset.z * 0.1) * 0.09;
    float sway = sway1 + sway2 + sway3;

    // Bending: cubic falloff (tip bends most, base stays fixed)
    float bend = bladeHeight * bladeHeight * bladeHeight;
    float bendSoft = bladeHeight * bladeHeight;

    // Apply wind force
    float windForce = uStrength * 14.0;
    pos.x += (windDir.x * windForce + sway * 0.5) * bend * aScale;
    pos.z += (windDir.y * windForce + sway * 0.25) * bend * aScale;

    // Droop under wind (grass bends down when pushed)
    pos.y -= motion * uStrength * bendSoft * aScale * 3.5;

    // World position
    vec3 worldPos = pos + aOffset;
    vec4 mvPos = modelViewMatrix * vec4(worldPos, 1.0);
    vFogDepth = -mvPos.z;

    gl_Position = projectionMatrix * mvPos;
  }
`

export const grassFragmentShader = /* glsl */ `
  precision highp float;

  varying float vHeight;
  varying float vColorVar;
  varying float vFogDepth;

  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;

  void main() {
    // Rich grass color palette
    vec3 rootColor = vec3(0.03, 0.10, 0.02);
    vec3 baseColor = vec3(0.06, 0.22, 0.03);
    vec3 midColor  = vec3(0.14, 0.44, 0.06);
    vec3 tipColor  = vec3(0.38, 0.64, 0.12);

    vec3 color = mix(rootColor, baseColor, smoothstep(0.0, 0.15, vHeight));
    color = mix(color, midColor, smoothstep(0.15, 0.55, vHeight));
    color = mix(color, tipColor, smoothstep(0.5, 1.0, vHeight));

    // Per-blade color variation
    color += vColorVar * vec3(0.05, 0.08, 0.02);

    // Light catching on tips
    float topLight = smoothstep(0.6, 1.0, vHeight) * 0.12;
    color += vec3(0.10, 0.07, 0.02) * topLight;

    // Ambient occlusion at base
    float ao = smoothstep(0.0, 0.25, vHeight);
    color *= mix(0.4, 1.0, ao);

    // Depth fog
    float fogFactor = smoothstep(uFogNear, uFogFar, vFogDepth);
    color = mix(color, uFogColor, fogFactor);

    gl_FragColor = vec4(color, 1.0);
  }
`

export const groundVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying float vFogDepth;

  void main() {
    vUv = uv;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vFogDepth = -mvPos.z;
    gl_Position = projectionMatrix * mvPos;
  }
`

export const groundFragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  varying float vFogDepth;

  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;

  void main() {
    vec3 color = vec3(0.03, 0.07, 0.02);
    float n = fract(sin(dot(vUv * 40.0, vec2(12.9898, 78.233))) * 43758.5453);
    color += n * 0.015;

    float fogFactor = smoothstep(uFogNear, uFogFar, vFogDepth);
    color = mix(color, uFogColor, fogFactor);
    gl_FragColor = vec4(color, 1.0);
  }
`
