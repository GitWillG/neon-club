import * as THREE from 'three'
const cloudVertex = ``


const cloudFragment = `

varying vec3 vPattern;
varying vec2 vUv;
uniform vec2 uResolution;
uniform vec3 uMood;
uniform float uTime;
uniform float uBeat;



gl_FragColor = vec4(col , 1.) ;
`



export { cloudVertex, cloudFragment }