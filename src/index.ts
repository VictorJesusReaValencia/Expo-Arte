import './styles.css';
import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

import entradaImage from './images/entrada.jpg';
import pasilloImage from './images/pasillo.jpg';
import salaImage from './images/sala.jpg';
import loaderGif from './images/loader.gif';
import img1 from './images/1.png';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpg';
import img9 from './images/9.png';
import img10 from './images/10.png';

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
