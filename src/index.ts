import './styles.css';
import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

const entradaImage = 'https://i.imgur.com/2o8A3Vv.jpeg';
const pasilloImage = 'https://i.imgur.com/o74TMI8.jpeg';
const salaImage = 'https://i.imgur.com/ZFOEptt.jpeg';
import loaderGif from './images/loader.gif';
const img1 = 'https://i.imgur.com/yUgIwUX.png';
const img2 = 'https://i.imgur.com/dMNCdvQ.jpeg';
const img3 = 'https://i.imgur.com/lbTqP18.jpeg';
const img4 = 'https://i.imgur.com/I9HFAdi.jpeg';
const img5 = 'https://i.imgur.com/vKyBuR1.png';
const img6 = 'https://i.imgur.com/87LSqha.png';
const img7 = 'https://i.imgur.com/DgkGahR.jpeg';
const img8 = 'https://i.imgur.com/nDn0ixj.jpeg';
const img9 = 'https://i.imgur.com/B5fOKdi.png';
const img10 = 'https://i.imgur.com/06LtOnn.png';

const nodes = [
  {
    id: '1',
    panorama: entradaImage,
    name: 'Entrada edificio',
    caption: 'Expo arte digital <b>&copy; UAE</b>',
    links: [
      {
        nodeId: '2',
        position: { yaw: 21, pitch: 0.1 },
      },
    ],
    sphereCorrection: { pan: '58deg' },
  },
  {
    id: '2',
    panorama: pasilloImage,
    name: 'Pasillo',
    caption: 'Expo arte digital <b>&copy; UAE</b>',
    links: [
      {
        nodeId: '3',
        position: { yaw: Math.PI / 2 + 0.2, pitch: 0.1 },
      },
      {
        nodeId: '1',
        position: { yaw: -Math.PI / 2 + 0.2, pitch: 0.2 },
      },
    ],
    sphereCorrection: { pan: '80deg' },
  },
  {
    id: '3',
    panorama: salaImage,
    name: 'Dirección UAE',
    caption: 'Expo arte digital <b>&copy; UAE</b>',
    links: [
      {
        nodeId: '2',
        position: { yaw: 99, pitch: 0.1 },
      },
    ],
    markers: [
      {
        id: 'img1',
        image: img1,
        size: { width: 400, height: 200 },
        position: { yaw: -2.0, pitch: 0.3 },
      },
      {
        id: 'img2',
        image: img2,
        size: { width: 400, height: 200 },
        position: { yaw: -1.2, pitch: 0.25 },
      },
      {
        id: 'img3',
        image: img3,
        size: { width: 400, height: 200 },
        position: { yaw: -0.5, pitch: 0.15 },
      },
      {
        id: 'img4',
        image: img4,
        size: { width: 400, height: 200 },
        position: { yaw: 0.0, pitch: 0.2 },
      },
      {
        id: 'img5',
        image: img5,
        size: { width: 400, height: 200 },
        position: { yaw: 0.5, pitch: -0.4 },
      },
      {
        id: 'img6',
        image: img6,
        size: { width: 400, height: 200 },
        position: { yaw: 1.0, pitch: 0.25 },
      },
      {
        id: 'img7',
        image: img7,
        size: { width: 400, height: 200 },
        position: { yaw: 1.8, pitch: 0.2 },
      },
      {
        id: 'img8',
        image: img8,
        size: { width: 400, height: 200 },
        position: { yaw: 2.2, pitch: 0.25 },
      },
      {
        id: 'img9',
        image: img9,
        size: { width: 400, height: 200 },
        position: { yaw: 2.8, pitch: 0.2 },
      },
      {
        id: 'img10',
        image: img10,
        size: { width: 400, height: 200 },
        position: { yaw: 4.2, pitch: -0.4 },
      },
    ],
    sphereCorrection: { pan: '-145deg' },
  },
];

// Inicialización del visor
const viewer = new Viewer({
  container: 'viewer',
  loadingImg: loaderGif,
  touchmoveTwoFingers: false,
  mousewheelCtrlKey: true,
  defaultYaw: '130deg',
  navbar: 'zoom move gallery caption fullscreen',
  defaultZoomLvl: 0,
  plugins: [
    MarkersPlugin,
    [VirtualTourPlugin, {
      positionMode: 'manual',
      nodes: nodes,
      startNodeId: '1',
    }],
  ],
});
