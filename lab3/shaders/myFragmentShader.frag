uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.x/u_resolution;
  
  float r = 5.0 * abs(sin(u_time));
  float g = 3.0 * abs(cos(u_time));
  float b = 5.0 * abs(sin(u_time));

  gl_FragColor = vec4(r * st.x, g * st.x, b *st.x, 1.0);
}
