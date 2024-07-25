<template>
  <div>
    <svg
      width="1800"
      height="720"
      viewBox="0 0 3313.041 1863.5856"
      version="1.1"
      id="svg1"
      xml:space="preserve"
      inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
      sodipodi:docname="MapaCompleto.svg"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
      id="namedview1"
      pagecolor="#ffffff"
      bordercolor="#000000"
      borderopacity="0.25"
      inkscape:showpageshadow="2"
      inkscape:pageopacity="0.0"
      inkscape:pagecheckerboard="0"
      inkscape:deskcolor="#d1d1d1"
      inkscape:document-units="mm"
      inkscape:zoom="0.51213162"
      inkscape:cx="616.05257"
      inkscape:cy="653.15241"
      inkscape:window-width="1920"
      inkscape:window-height="1009"
      inkscape:window-x="-8"
      inkscape:window-y="-8"
      inkscape:window-maximized="1"
      inkscape:current-layer="layer1" /><defs
      id="defs1" /><g
      inkscape:label="Capa 1"
      inkscape:groupmode="layer"
      id="layer1">
        <path 
        style="fill:#00ff00;fill-opacity:0.5;stroke:#000000;stroke-width:2.39753;stroke-dasharray:none"
        d="m 205.06597,480.61219 110.95084,846.54971 1547.06609,270.1134 248.9476,-79.3195 655.624,-396.3545 -339.6934,-510.03664 -96.5757,-37.00535 -481.3829,84.10308 -168.4464,-28.35476 -36.6837,71.1272 719.4535,126.39493 166.2003,251.82884 -551.007,335.4511 -140.7465,43.7336 L 430.59095,1213.015 339.44622,504.16882 205.06337,480.61996"
        id="path1" @click="handleClick('path1')" 
        sodipodi:nodetypes="ccccccccccccccccc" /><path
        style="fill:#00ffff;fill-opacity:0.5;stroke:#000000;stroke-width:2.41475;stroke-dasharray:none"
        d="m 188.5744,366.2507 11.21653,82.97496 1315.32327,232.81799 38.092,-74.15633 0.2642,-3.10617 -0.3964,-3.62387 -2.9083,-3.01988 -3.3046,-1.9845 -7.9313,-1.89821 -6.7415,-1.03541 -1344.73553,-239.2928 z"
        id="path2" @click="handleClick('path2')" /><path
        style="fill:#000080;fill-opacity:0.5;stroke:#000000;stroke-width:2.44363;stroke-dasharray:none"
        d="m 535.67211,538.58679 -117.03031,236.78118 48.40798,382.57373 11.70305,3.6886 h 3.59068 l 5.85155,0.1758 6.78245,-0.5271 5.18653,-1.2295 283.10756,-577.30304 z"
        id="path3" @click="handleClick('/AreaUno')"
        inkscape:label="path3" /><path
        style="fill:#0000ff;fill-opacity:0.5;stroke:#000000;stroke-width:2.39693;stroke-dasharray:none"
        d="M 827.01238,588.7616 1074.1868,631.62078 768.39244,1242.4842 520.84448,1198.1804 Z"
        id="path4" @click="handleClick('/AreaDos')" /><path
        style="fill:#800080;fill-opacity:0.5;stroke:#000000;stroke-width:2.40473;stroke-dasharray:none"
        d="m 1121.8483,642.79961 -311.65056,607.88529 277.75666,48.1119 311.5029,-607.96154 z"
        id="path5" @click="handleClick('path5')" /><path
        style="fill:#2b0000;fill-opacity:0.5;stroke:#000000;stroke-width:2.40307;stroke-dasharray:none"
        d="m 1431.3378,716.38152 304.1269,56.03776 -295.1353,588.05482 -304.1268,-54.3294 z"
        id="path6" @click="handleClick('path6')" /><path
        style="fill:#800000;fill-opacity:0.5;stroke:#000000;stroke-width:2.40123;stroke-dasharray:none"
        d="m 1798.5793,756.10284 276.0653,49.285 -310.0426,609.77436 -276.5963,-47.5855 z"
        id="path7" @click="handleClick('path7')" /><path
        style="fill:#ffd42a;fill-opacity:0.5;stroke:#000000;stroke-width:2.39347;stroke-dasharray:none"
        d="m 2118.4032,812.29299 205.3823,35.5634 16.4094,27.09595 -199.0302,394.58456 -193.7369,117.5287 -111.6898,35.2246 -8.9987,0.8468 -3.0437,-0.6773 -3.8377,-0.9315 -3.4406,-2.625 -1.8527,-3.5563 0.1319,-2.8789 1.5878,-2.8789 z"
        id="path8" @click="handleClick('path8')" /></g>
    </svg>

  </div>
</template>

<script>
export default {
  name: 'MapaComponent',
  methods: {
    handleClick(pathId) {
      this.$router.push(pathId);
    }
  }
}
</script>
