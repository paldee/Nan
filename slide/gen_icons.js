const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const fs = require('fs');

const fi = require('react-icons/fi');
const fa = require('react-icons/fa');
const gi = require('react-icons/gi');
const wi = require('react-icons/wi');

// icon name -> [lib, componentName, color]
const icons = {
  leaf: [gi, 'GiLeafSwirl', '2C5F2D'],
  mountain: [fa, 'FaMountain', '2C5F2D'],
  cloud: [wi, 'WiFog', '2C5F2D'],
  sun: [fi, 'FiSun', '2C5F2D'],
  snow: [wi, 'WiSnowflakeCold', '2C5F2D'],
  calendar: [fi, 'FiCalendar', '2C5F2D'],
  users: [fi, 'FiUsers', '2C5F2D'],
  map: [fi, 'FiMapPin', '2C5F2D'],
  trending: [fi, 'FiTrendingUp', '2C5F2D'],
  target: [fi, 'FiTarget', '2C5F2D'],
  dollar: [fi, 'FiDollarSign', '2C5F2D'],
  bulb: [fi, 'FiZap', '2C5F2D'],
  camera: [fi, 'FiCamera', '2C5F2D'],
  heart: [fi, 'FiHeart', '2C5F2D'],
  home: [fi, 'FiHome', '2C5F2D'],
  search: [fi, 'FiSearch', '2C5F2D'],
  alert: [fi, 'FiAlertTriangle', '2C5F2D'],
  layers: [fi, 'FiLayers', '2C5F2D'],
  checkcircle: [fi, 'FiCheckCircle', '2C5F2D'],
  smartphone: [fi, 'FiSmartphone', '2C5F2D'],
  database: [fi, 'FiDatabase', '2C5F2D'],
  cpu: [fi, 'FiCpu', '2C5F2D'],
  compass: [fi, 'FiCompass', '2C5F2D'],
  shield: [fi, 'FiShield', '2C5F2D'],
  gift: [fi, 'FiGift', '2C5F2D'],
  flag: [fi, 'FiFlag', '2C5F2D'],
  weave: [gi, 'GiWeaverBird', '2C5F2D'],
  rice: [gi, 'GiWheat', '2C5F2D'],
  temple: [gi, 'GiPagoda', '2C5F2D'],
};

async function main() {
  for (const [name, [lib, comp, color]] of Object.entries(icons)) {
    const Icon = lib[comp];
    if (!Icon) { console.error('MISSING', name, comp); continue; }
    const svg = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Icon, { size: 256, color: '#' + color })
    );
    const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}</svg>`;
    await sharp(Buffer.from(fullSvg)).png().toFile(`icons/${name}.png`);
    // also white version
    const svgWhite = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Icon, { size: 256, color: '#FFFFFF' })
    );
    const fullSvgWhite = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">${svgWhite.replace(/<svg[^>]*>|<\/svg>/g, '')}</svg>`;
    await sharp(Buffer.from(fullSvgWhite)).png().toFile(`icons/${name}_white.png`);
  }
  console.log('done', Object.keys(icons).length);
}
main();