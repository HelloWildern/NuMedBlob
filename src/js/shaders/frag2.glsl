#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D texture;

vec3 colorA = vec3(0.749, 0.1176, 0.0863);
vec3 colorB = vec3(0.8941, 0.1451, 0.1059);

void main() {
    vec3 color = vec3(0.0);

    float pct = abs(sin(u_time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color, 1.0 ) * texture2D( texture, gl_PointCoord );

    if ( gl_FragColor.a < ALPHATEST ) discard;
}
