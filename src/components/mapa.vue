<template>
  <div>
    <b-container fluid>
      <h3 class="text-center" style="margin-top:5rem;">Fraccionnamiento Amanecer</h3>
      <b-row>
        <b-col lg="6" sm="12">

          <svg
            style="margin-top:-6rem;"
            :width="svgWidth"
            :height="svgHeight"
            viewBox="0 0 2834.5662 1786.4328"
            version="1.1"
            :id="elementIdSVG"
            :class="[{ 'puff-out-center': isPuffed, 'puff-in-center': !isPuffed }]"
            @animationend="handleAnimationEnd"
            xml:space="preserve"
            inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
            sodipodi:docname="Mapa_1000.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview
              id="namedview1"
              pagecolor="#ffffff"
              bordercolor="#000000"
              borderopacity="0.25"
              inkscape:showpageshadow="2"
              inkscape:pageopacity="0.0"
              inkscape:pagecheckerboard="0"
              inkscape:deskcolor="#d1d1d1"
              inkscape:document-units="mm"
              inkscape:zoom="1"
              inkscape:cx="568.5"
              inkscape:cy="259.5"
              inkscape:window-width="1920"
              inkscape:window-height="1009"
              inkscape:window-x="-8"
              inkscape:window-y="-8"
              inkscape:window-maximized="1"
              inkscape:current-layer="layer1" />
            <defs id="defs1" />
            <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="translate(-123.10344,-19.67914)">
            <path
            style="fill:#007bff;fill-opacity:0.5;stroke:#000000;stroke-width:2.39753;stroke-dasharray:none"
            d="m 205.06597,480.61219 110.95084,846.54971 1547.06609,270.1134 248.9476,-79.3195 655.624,-396.3545 -339.6934,-510.03664 -96.5757,-37.00535 -481.3829,84.10308 -168.4464,-28.35476 -36.6837,71.1272 719.4535,126.39493 166.2003,251.82884 -551.007,335.4511 -140.7465,43.7336 L 430.59095,1213.015 339.44622,504.16882 205.06337,480.61996"
            id="path1" :class="{ 'heartbeat': indicador1 }" @click="handleClick('path1')"
            sodipodi:nodetypes="ccccccccccccccccc" /><path
            style="fill:#007bff;fill-opacity:0.5;stroke:#000000;stroke-width:2.41475;stroke-dasharray:none"
            d="m 188.5744,366.2507 11.21653,82.97496 1315.32327,232.81799 38.092,-74.15633 0.2642,-3.10617 -0.3964,-3.62387 -2.9083,-3.01988 -3.3046,-1.9845 -7.9313,-1.89821 -6.7415,-1.03541 -1344.73553,-239.2928 z"
            id="path2" :class="{ 'heartbeat': indicador2 }" @click="handleClick('path1')" /><path
            style="fill:#28a745;fill-opacity:0.5;stroke:#000000;stroke-width:2.44363;stroke-dasharray:none"
            d="m 535.67211,538.58679 -117.03031,236.78118 48.40798,382.57373 11.70305,3.6886 h 3.59068 l 5.85155,0.1758 6.78245,-0.5271 5.18653,-1.2295 283.10756,-577.30304 z"
            id="path3" :class="{ 'heartbeat': indicador3 }" @click="handleClick('Area1Component')"
            inkscape:label="path3" /><path
            style="fill:#17a2b8;fill-opacity:0.5;stroke:#000000;stroke-width:2.39693;stroke-dasharray:none"
            d="M 827.01238,588.7616 1074.1868,631.62078 768.39244,1242.4842 520.84448,1198.1804 Z"
            id="path4" :class="{ 'heartbeat': indicador4 }" @click="handleClick('/AreaDos')"/><path
            style="fill:#ffc107;fill-opacity:0.5;stroke:#000000;stroke-width:2.40473;stroke-dasharray:none"
            d="m 1121.8483,642.79961 -311.65056,607.88529 277.75666,48.1119 311.5029,-607.96154 z"
            id="path5" :class="{ 'heartbeat': indicador5 }" @click="handleClick('path1')"/><path
            style="fill:#dc3545;fill-opacity:0.5;stroke:#000000;stroke-width:2.40307;stroke-dasharray:none"
            d="m 1431.3378,716.38152 304.1269,56.03776 -295.1353,588.05482 -304.1268,-54.3294 z"
            id="path6" :class="{ 'heartbeat': indicador6 }" @click="handleClick('path1')"/><path
            style="fill:#343a40;fill-opacity:0.5;stroke:#000000;stroke-width:2.40123;stroke-dasharray:none"
            d="m 1798.5793,756.10284 276.0653,49.285 -310.0426,609.77436 -276.5963,-47.5855 z"
            id="path7" :class="{ 'heartbeat': indicador7 }" @click="handleClick('path1')"/><path
            style="fill:#6c757d ;fill-opacity:0.5;stroke:#000000;stroke-width:2.39347;stroke-dasharray:none"
            d="m 2118.4032,812.29299 205.3823,35.5634 16.4094,27.09595 -199.0302,394.58456 -193.7369,117.5287 -111.6898,35.2246 -8.9987,0.8468 -3.0437,-0.6773 -3.8377,-0.9315 -3.4406,-2.625 -1.8527,-3.5563 0.1319,-2.8789 1.5878,-2.8789 z"
            id="path8" :class="{ 'heartbeat': indicador8 }" @click="handleClick('path1')"/><path
            style="fill:#20c997 ;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none"
            d="m 2338.3174,22.743002 46.8639,111.194758 131.3117,235.94203 30.0787,-5.65838 57.2774,104.37873 104.4132,130.45769 209.4751,300.02775 17.7943,15.79375 16.6362,7.47571 -78.1264,10.21329 64.4385,114.87317 -105.2917,170.7831 -617.8515,430.643 -200.4754,19.6895 -666.8997,27.991 -209.9693,40.3433 -484.29985,67.6872 -528.76133,-85.9181"
            id="path9"
            sodipodi:nodetypes="cccccccccccccccccc" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03260645;stroke-dasharray:none"
            d="M 2032.6887,22.000663 1754.445,449.07236 158.74988,169.96591 142.35723,19.843735"
            id="path10" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none"
            d="m 125.10181,29.54991 18.98096,149.47509 617.31273,108.70916 5.71585,-0.21569 3.7207,-0.9167 3.45109,-1.402 5.60801,-4.85309"
            id="path11" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none"
            d="m 964.09278,312.43098 1.13239,6.47079 1.72554,2.58831 2.85793,1.72554 3.50501,1.6177 5.55409,1.24023 772.03686,134.22524 13.2466,2.7936 3.6668,0.16168 13.1032,-0.16168 2.4267,-0.59316 4.799,-1.34808 4.0982,-1.18631 4.0982,-1.61769 3.9903,-2.48047 3.7208,-3.45108 8.0344,-11.3778 9.0053,-14.28964 14.1817,-16.55443 13.9662,-14.1818 16.5005,-13.42687 18.4956,-13.10334 26.638,-15.63772 37.8541,-17.25542 25.6136,-9.43656 42.4375,-12.0788 29.9813,-6.25509 16.7702,-2.69616 22.378,-3.0197 23.6724,-1.88731 22.7556,-1.29416 41.0894,-0.43138 41.4669,2.804 22.9713,3.0197 36.6139,6.30902 23.0791,6.03939 11.3239,3.07363 30.4127,9.22086 23.187,8.95125 20.7065,9.49048 9.6521,4.85309 7.3336,3.77463 14.7749,8.8434 13.373,8.68163 9.868,7.38748 5.8237,4.6374 4.2599,2.91185 3.7208,2.04908 4.5295,1.99516 3.4511,1.402 4.4217,0.97062 5.554,0.80885 5.9316,-0.2157 6.255,-0.21569 8.5199,-1.72554 27.7705,-5.23055 38.0158,-8.46594"
            id="path12"
            sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.30435;stroke-dasharray:none"
            d="m 1756.3952,449.92757 5.4907,0.91511 7.3208,0.9151 8.5411,-1.83021 9.761,-4.57553 5.1856,-4.88056 10.6763,-15.25179 17.082,-21.04746 17.3871,-17.38703 22.8776,-17.38703 33.2489,-21.04745 32.6388,-16.1669 33.859,-13.11654 18.3021,-6.1007 43.6202,-10.37122 34.774,-7.01581 36.2993,-4.27051 29.5884,-2.13524 29.2835,-0.61008 32.3337,1.52519 27.4532,1.52517 22.2676,2.13525 21.0475,3.35539 31.1136,5.1856 25.6229,6.40576 55.5166,18.60716 28.9784,12.20143 17.9971,10.37122 18.6072,10.98128 14.9468,9.76113 9.1695,6.87098 10.5052,6.47435 12.9641,1.14388 27.4532,-4.42301 42.4432,-7.91562"
            id="path13"
            sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccc" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none"
            d="m 1855.8745,476.51927 11.8092,-23.99583 14.4515,-20.7065 19.1966,-18.76528 27.393,-20.05942 21.5693,-12.72588 28.4714,-13.37295 48.7466,-17.03973 33.8638,-6.90217 33.0009,-5.17662 32.7853,-2.80401 28.4715,-0.43139 30.4127,1.29416 26.3145,3.0197 28.9028,3.66678 26.9616,5.39232 30.8441,9.49048 26.3145,9.05909 25.0204,11.43172 25.236,13.80434 -500.8386,86.92419 -5.5373,0.93307 -4.3846,-0.28599 -7.2797,-0.43139 -2.4264,-0.10785 z"
            id="path14"
            sodipodi:nodetypes="cccccccccccccccccccccccccc" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none"
            d="m 2354.8752,381.29456 -493.7002,85.5625"
            id="path15" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none"
            d="m 1864.9879,458.01103 478.8376,-82.7056"
            id="path16" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none"
            d="m 2270.9752,387.16853 -10.2992,-3.28931 -11.2701,-3.18147 -14.4514,-3.28932 -13.5886,-2.69616 -20.7065,-3.0197 -14.9907,-1.56377 -11.1082,-0.75492 -34.888,0.0243 -27.682,1.83021 -19.0647,2.13524 -12.2014,2.36403 -15.0992,2.97411 -12.8115,3.27913 -13.6504,3.73668 -10.8288,3.58417 -11.5914,4.2705 -12.2775,5.41439 -15.8619,8.00718 -12.5066,6.63452 -10.7525,6.8633 -11.8962,9.22733 -8.1598,7.32086 -7.3972,7.62589"
            id="path17" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2085.9648,419.73814 12.2945,24.58898 42.9229,-6.90217 -12.5102,-25.23606 z"
            id="path18" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2177.6343,600.0573 -7.1179,-13.80434 42.7072,-7.76494 6.4707,13.15726"
            id="path19" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.42391273;stroke-dasharray:0.21195637,0.21195637;stroke-dashoffset:0"
            d="m 2075.3959,397.73748 94.042,187.65271 42.7072,-7.76494 -94.042,-186.78994 z"
            id="path20" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="M 2106.2399,459.20992 2148.3,451.44498"
            id="path21" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="m 2113.7892,473.22995 42.0601,-7.11786"
            id="path22" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="m 2120.9071,487.89706 42.06,-6.68648"
            id="path23" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="m 2148.0843,542.68302 42.2758,-7.33355"
            id="path24" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="m 2155.2022,556.70305 42.4915,-7.33355"
            id="path25" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54347194,2.54347194;stroke-dashoffset:0"
            d="m 2162.7515,571.37016 42.06,-7.33355"
            id="path26" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07608617;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2549.4886,364.41294 3.6668,-0.53923 9.1669,0.21569 23.8341,1.94124 22.0006,1.72554 11.8631,0.43139 14.4515,-0.75493 14.3435,-0.43138 233.7718,-40.91815"
            id="path27" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2687.6692,562.79077 -20.7426,-30.19853 -1.8301,-16.47192 5.7956,-17.38703 17.082,-15.55683 17.387,-8.54099 8.846,-3.05036 222.0661,-37.82442"
            id="path28" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2888.0774,378.2442 -200.1033,35.38414 -3.2461,1.90379 -1.2942,2.15693 v 1.18631 l 0.5392,1.18631 1.5099,1.18631 2.2648,0.97062 2.4804,0.32354 202.212,-34.61869"
            id="path29" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.42391273;stroke-dasharray:2.54347647,2.54347647;stroke-dashoffset:0"
            d="m 2257.8739,551.50444 441.6915,-76.2589"
            id="path30" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 2250.858,539.30303 2931.3925,421.55926"
            id="path31" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="m 2201.4423,444.43693 436.201,-75.3438"
            id="path32" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 2207.238,458.16355 2889.6026,338.89461"
            id="path33" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 2895.3984,351.09604 2212.1185,470.67"
            id="path34" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="m 2221.2696,482.26135 680.5345,-118.9639"
            id="path35" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 2917.3609,396.85138 2238.9616,515.20521"
            id="path36" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 2244.7573,527.40664 2923.4616,409.05281"
            id="path37" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03260645;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 1927.8253,471.89015 29.8934,59.78698"
            id="path38" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 1975.4109,556.69006 31.4187,64.36252"
            id="path39" /><path
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:3.03261;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2008.9647,536.55771 56.4317,-10.06618"
            id="path40" /><rect
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:2.7188;stroke-dasharray:none;stroke-dashoffset:0"
            id="rect41"
            width="176.52405"
            height="23.233017"
            x="1919.4458"
            y="827.93262"
            transform="matrix(0.98796456,-0.1546804,0.20195361,0.97939509,0,0)"
            ry="11.616508" /><rect
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:2.39353;stroke-dasharray:none;stroke-dashoffset:0"
            id="rect41-0"
            width="146.58327"
            height="21.684362"
            x="2174.6389"
            y="870.09399"
            transform="matrix(0.98463114,-0.17464684,0.1790702,0.9838363,0,0)"
            ry="10.84218" /><rect
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:2.39353;stroke-dasharray:none;stroke-dashoffset:0"
            id="rect41-0-8"
            width="146.58327"
            height="21.684362"
            x="1731.3352"
            y="869.51404"
            transform="matrix(0.98463114,-0.17464684,0.1790702,0.9838363,0,0)"
            ry="10.84218" /><ellipse
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.56448;stroke-dasharray:none;stroke-dashoffset:0"
            id="path42"
            cx="2153.4226"
            cy="511.51538"
            rx="19.114233"
            ry="10.540444" /><ellipse
            style="fill:#ff0000;fill-opacity:0;stroke:#000000;stroke-width:1.07646;stroke-dasharray:none;stroke-dashoffset:0"
            id="path42-2"
            cx="2153.314"
            cy="511.67603"
            rx="13.103151"
            ry="7.2794452" /><ellipse
            style="fill:#1a1a1a;fill-opacity:0.98723406;stroke:#000000;stroke-width:0.571209;stroke-dasharray:none;stroke-dashoffset:0"
            id="path42-2-3"
            cx="2152.936"
            cy="511.51419"
            rx="7.0467625"
            ry="3.8113697" /><path
            style="fill:#1a1a1a;fill-opacity:0.987234;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 1553.2037,609.54778 126.6116,22.86344"
            id="path43" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 1678.1536,630.05112 3.9655,-3.66042 4.2705,-1.6777 4.118,-1.83021 h 4.728 l 7.0158,0.76259 144.4344,25.31796 159.9912,-27.75824 444.2081,-77.63158 2.7453,-12.58272 4.3468,-6.63452 6.1007,-4.42301 9.7612,-4.57554 8.5409,-1.37267 133.1482,-24.40284"
            id="path44" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2624.9081,501.55486 -64.0577,9.98992 -35.9178,5.87194 -42.4,7.09208 -3.9655,1.37265 -2.6691,2.13526 -2.1352,2.74532 -0.6862,3.58417 -4.6519,14.64171 -3.1267,8.00719 -6.9394,13.57408 -7.1684,11.43883 -6.9395,9.37986 -10.7525,12.35393 -7.931,7.47337 -14.9468,13.11654 -13.2691,9.91365 -20.8949,13.19281 -12.7352,6.86329 -24.8604,11.5151 -22.1913,8.08344 -19.5986,6.17697 -25.7181,7.06629 -35.2889,6.8891 -24.9367,3.05035 -21.2763,1.75396 -11.1339,0.15254 -17.2343,0.68632 -13.1166,0.15253 -15.9381,-0.45754 -21.2763,-1.1439 -22.4201,-2.05898 -18.3784,-2.36403 -22.5727,-4.27049 -22.1914,-4.95683 -21.3523,-6.17698 -15.4043,-4.88057 -12.2777,-4.34676 -14.7181,-6.02446 -15.0229,-7.16833 -11.0576,-5.49064 -7.0159,-4.57554"
            id="path45" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 228.16667,236.40263 -6.71079,4.88057 -7.93092,7.93092 -6.71079,10.06618 -3.20288,9.15107 -1.52517,8.99854 v 9.30359 l 1.52517,8.08346 2.28777,6.10071 3.81295,7.47337 6.10071,8.08344 9.76115,8.69353 -55.36398,-8.69353 -3.96546,-1.52517 -3.20288,-3.05036 -2.74532,-6.71079 -7.93092,-71.07331 2.74532,-3.20286 5.1856,-2.5928 6.40575,-1.98274 z"
            id="path46" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 258.97526,240.06306 -14.18415,11.43882 -6.10072,7.47338 -5.03308,8.38848 -2.89784,11.28632 0.30504,12.8115 5.03308,10.37121 11.43884,13.72661 7.16833,5.49064 11.89639,7.01583 8.99855,3.81293 10.82878,3.66042 10.52372,2.74532 1374.0331,239.453 12.5064,-1.83022 8.236,-1.37267 12.0489,-3.66042 11.1338,-4.72804 8.846,-4.88058 7.931,-6.71079 6.2532,-8.6935 3.3555,-11.59137 0.915,-9.30358 -4.4231,-9.45611 -7.1682,-9.60862 -13.2691,-8.38848 -5.4907,-3.20288 z"
            id="path47" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.07609;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 1525.7883,553.02963 -17.2345,34.92658"
            id="path48" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.42391273;stroke-dasharray:2.54347647,2.54347647;stroke-dashoffset:0"
            d="M 1673.7306,592.07418 164.41421,328.82843"
            id="path49" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 158.3135,340.72482 1668.2399,604.58065"
            id="path50" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 126.89483,219.62567 285.8184,1430.0071"
            id="path51" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 125.97972,617.39215 232.7422,1431.5323"
            id="path52" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 146.11208,194.91778 1734.4327,470.67"
            id="path53" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:2.54348, 2.54348;stroke-dashoffset:0"
            d="M 1726.8068,483.78654 146.41711,207.42424"
            id="path54" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.72825959;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 125.67469,924.86808 91.5107,680.83952 -93.95099,-10.9812"
            id="path55" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 125.67469,380.07441 66.49777,501.47861 -3.44128,2.78736 h -3.66678 l -2.15693,-3.0197 -57.58997,-444.9742"
            id="path56" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:0.423912;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 193.26073,958.53869 -1.07847,-6.47078 3.23539,-3.23539 h 3.45109 l 2.37262,3.88247 1.29416,10.78464 57.15858,436.77787 -2.37262,2.804 h -1.94123 l -3.66678,-1.7255 -1.50985,-6.2551 z"
            id="path57" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:3.03260645;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 195.41765,1454.2007 9.92187,8.6277 12.94157,7.3336 19.84373,7.3335 14.66711,0.4314 19.41235,0.4314 21.56928,-5.1766 14.66711,-6.4708 12.94156,-9.0591 7.33356,-10.7847 -141.88145,-1086.62 -5.79568,0.30503 -5.49064,2.13525 -4.88058,3.50791 -1.22014,4.57553 141.079,1074.64058 -1.83022,4.118 -5.9482,5.1856 -9.15107,5.7957 -9.15107,3.5079 -10.82876,2.5928 -16.77696,0.9151 -13.11654,-1.5252 -11.74386,-3.3554 -12.8115,-6.1007 -6.71079,-6.5583 -87.85027,-674.89132"
            id="path58" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.72825;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2358.5356,941.34001 4.7023,-1.45874 5.1766,-0.86277 5.8237,0.21569 7.1179,1.50985 86.0614,127.69016 1.1863,2.804 -0.3235,2.4804 -1.402,3.2354 -217.8497,130.3863 -4.6374,0.1079 -5.5002,0.5392 -4.7452,-1.7256 -3.8825,-2.4804 -2.9119,-2.9119 z"
            id="path59" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.72825;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 2368.091,946.35205 3.0197,-0.97062 3.0197,0.43139 82.6103,124.45468 0.107,1.9413 -1.7256,2.5883 -211.271,126.6117 h -2.9119 l -1.8334,-1.0785 1.5099,-4.5296 z"
            id="path60" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.72825;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 409.66287,638.89717 10.52374,1.06762 10.21869,-0.45756 3.81295,-1.37265 53.38124,-105.38982 -102.79702,-19.06474 16.01438,122.77685 z"
            id="path61" /><path
            style="fill:#1a1a1a;fill-opacity:0;stroke:#000000;stroke-width:1.72825;stroke-dasharray:none;stroke-dashoffset:0"
            d="m 412.10315,632.79644 13.42158,1.06763 48.65318,-97.45888 -77.7841,-13.87912 z"
            id="path62" /></g>
          </svg>
          <br>
          
          <vs-button
            style="margin-top:-8rem"
            circle
            icon
            floating
            @click="increaseSize"
          >
            <box-icon name='plus'  color="#FFF"></box-icon>
          </vs-button>
          <vs-button
            color="#ff3e4e"
            circle
            icon
            floating
            @click="decreaseSize"
          >
            <box-icon name='minus' color="#FFF"></box-icon>
          </vs-button>

        </b-col>
        <b-col lg="6" sm="12">
          <b-row  class="margin-top">
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(1)" border-variant="primary" title="Area Perimetral" sub-title="8 x 16 m">
                  <b-card-text>
                    128.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(2)" border-variant="primary" title="Area Perimetral" sub-title="8 x 16 m">
                  <b-card-text>
                    128.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(3)" border-variant="success" title="Area 1" sub-title="8 x 16 m">
                  <b-card-text>
                    128.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
              <b-card class="card-rounder" @click="indicated(4)" border-variant="info" title="Area 2" sub-title="8 x 16 m & 10 x 20 m">
                <b-card-text>
                    128.00m2 & 200.00m2
                </b-card-text>
                <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
              </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(5)" border-variant="warning" title="Area 3" sub-title="8 x 16 m & 10 x 20 m">
                  <b-card-text>
                    128.00m2 & 200.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(6)" border-variant="danger" title="Area 4" sub-title="10 x 20 m">
                  <b-card-text>
                      200.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(7)" border-variant="dark" title="Area 5" sub-title="8 x 16 m & 10 x 20 m">
                  <b-card-text>
                    128.00m2 & 200.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col lg="4" sm="6">
                <b-card class="card-rounder" @click="indicated(8)" border-variant="secondary" title="Area 6" sub-title="8 x 16 m">
                  <b-card-text>
                    128.00m2
                  </b-card-text>
                  <b-card-text>
                    lugares disponibles <b-badge pill variant="danger">23</b-badge>
                  </b-card-text>
                </b-card>
              </b-col>
          </b-row>
        </b-col>
      </b-row>

      <PoppupComponent :vista="currentView"/>
    </b-container>
  </div>
</template>

<script>
import { EventBus } from '@/utils/eventBus.js';
import PoppupComponent from '@/components/poppup.vue';

export default {
  name: 'MapaComponent',
  data:() => ({
    isPuffed: false,
    indicador1: false,
    indicador2: false,
    indicador3: false,
    indicador4: false,
    indicador5: false,
    indicador6: false,
    indicador7: false,
    indicador8: false,
    elementIdSVG: 'elementIdSVG',
    pathId: "",
    svgWidth: 900,
    svgHeight: 900,
    currentView: null
  }),
  components: {
    PoppupComponent,
  },
  methods: {
    increaseSize() {
      this.svgWidth += 100;
      this.svgHeight += 100;
    },
    decreaseSize() {
      if (this.svgWidth > 100 && this.svgHeight > 100) {
        this.svgWidth -= 100;
        this.svgHeight -= 100;
      }
    },
    handleClick(pathId) {
      this.isPuffed = !this.isPuffed;
      this.pathId = pathId;

    },
    handleAnimationEnd() {
      if (this.isPuffed) {
        this.currentView = this.pathId;
        this.isPuffed = !this.isPuffed;
        EventBus.$emit('activate-modal');
        // this.$router.push(this.pathId); // Navega después de la animación
      }
    },
    indicated(id){
      this.nonIndicated()
      switch(id){
        case 1:
          this.indicador1 = true;
        break;
        case 2:
          this.indicador2 = true;
        break;
        case 3:
          this.indicador3 = true;
        break;
        case 4:
          this.indicador4 = true;
        break;
        case 5:
          this.indicador5 = true;
        break;
        case 6:
          this.indicador6 = true;
        break;
        case 7:
          this.indicador7 = true;
        break;
        case 8:
          this.indicador8 = true;
        break;
      }
    },
    nonIndicated(){
      this.indicador1 = false;
      this.indicador2 = false;
      this.indicador3 = false;
      this.indicador4 = false;
      this.indicador5 = false;
      this.indicador6 = false;
      this.indicador7 = false;
      this.indicador8 = false;

    }
  },
};
</script>

<style>
.card-rounder {
        border-radius: 1rem !important;
        margin: 0.5rem;
}

</style>
