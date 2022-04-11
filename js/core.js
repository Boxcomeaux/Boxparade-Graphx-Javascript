'use strict';
var index = -1;
window.addEventListener('DOMContentLoaded', function(){
    var graphObj = document.querySelector('#graph');
    graphObj.style.width = '600px';
    var names2 = ['Apple', 'Samsung','Google'];
    var names5 = ['test item 1', 'test item 2', 'test item 3', 'test item 4', 'test item 5'];
    var names6 = ['1', '2', '3', '4', '5'];
    var names7 = ['Texas Census', 'Colorado Census', 'California Census'];
    var colors2 = ['rgb(63,98,181,0.5)','rgb(41,195,190,0.5)','rgb(242,114,111,0.5)'];
    var colors5 = ['rgb(63,98,181,0.5)','rgb(41,195,190,0.5)','rgb(242,114,111,0.5)','rgb(255,197,51,0.5)','rgb(98,181,143,0.5)'];
    var colors3 = ['rgb(63,98,181,1)', 'rgb(242,114,111,1)','rgb(41,195,190,1)'];
    var pieData = [
        [
            {
                name:'test item 1',
                color:'rgb(63,98,181,1)',
                value:3
            },{
            name:'test item 2',
            color:'rgb(41,195,190,1)',
            value:50
        },
            {
                name:'test item 3',
                color:'rgb(242,114,111,1)',
                value:20
            },
            {
                name:'test item 4',
                color:'rgb(255,197,51,1)',
                value:45
            },
            {
                name:'test item 5',
                color:'rgb(98,181,143,1)',
                value:60
            }

            ]
    ];
    /*
    ,{
                name:'test item 2',
                color:'rgb(41,195,190,1)',
                value:250
            },
            {
                name:'test item 3',
                color:'rgb(242,114,111,1)',
                value:20
            },
            {
                name:'test item 4',
                color:'rgb(255,197,51,1)',
                value:45
            },
            {
                name:'test item 5',
                color:'rgb(98,181,143,1)',
                value:60
            }
    * */
    var barComparativeData = [

        [
            {
                value:70
            },
            {
                value:34
            },
            {
                value:50
            }
        ],[
            {
                value:50
            },{
                value:90
            },{
                value:60
            }
        ],[
            {
                value:30
            },{
                value:100
            },{
                value:24
            }
        ],[
            {
                value:40
            },{
                value:36
            },{
                value:95
            }
        ],[
            {
                value:25
            },{
                value:130
            },{
                value:56
            }
        ]
    ];
    var barData = [

        [
            {
                value:70
            }
        ],[
            {
                value:50
            }
        ],[
            {
                value:30
            }
        ],[
            {
                value:40
            }
        ],[
            {
                value:25
            }
        ]
    ];
    var pieJson = {
        id:'graph',
        title:'Test Pie Chart',
        subtitle:'Test Sub Title',
        type:'bar',
        background: 'transparent',
        showlegend: true,
        showtitle: true,
        textsize: '1',
        chartSize:'2',
        ringsize: 55,
        offset:15,
        strokewidth:'1',
        strokecolor:'#242424',
        labeltextcolor:'rgba(0,0,0,0.8)',
        pointradius:'5',
        strokeopacity: '5',
        verticalbarcolor: 'rgba(0,0,0,1)',
        verticalbaropacity:'1',
        fillopacity:'10',
        showlefttitle: true,
        showbottomtitle: true,
        valuetype:' kwh',
        divisions: 5,
        tilt: 1,
        labelForEach: true,
        showdescription:true,
        spinnable:true,
        descriptionborder: 'solid #787878 1px',
        descriptionborderradius: '0',
        linestyling:'none',
        titlecolor: '#242424',
        subtextcolor: '#848484',
        descriptioncolor: 'rgba(255,255,255,1)',
        descriptiontextcolor:'rgba(80,80,80,1)',
        hover: 'wireframe',
        introanimation: 'draw',
        lefttitle:'left title test',
        bottomtitle: 'Years',
        showpercentage: true,
        legendposition: 'bottom',
        graphstyling:'none',
        fontfamily: '\'Poppins\', sans-serif',
        labelstyling: 'spider',
        labelcolorisitemcolor: false,
        description:'This is a $name test description: $value and $title',
        titles: ['1990', '1995', '2000', '2005', '2010'],
        colors: colors5,
        data:barData,
        names: names6
    }
    var chartToggleContainer = document.querySelector('.chartToggleContainer');
    var chartToggleContainerBtns = document.querySelectorAll('.chartToggleContainer > button');
    var prevI = 0;
    if(chartToggleContainer !== undefined && chartToggleContainer !== null){
        var loop = 0;
        while(loop < chartToggleContainerBtns.length){
            chartToggleContainerBtns[loop].addEventListener('click', function(e){
                var array = Array.prototype.slice.call(chartToggleContainerBtns);
                index = array.indexOf(e.currentTarget);
                chartToggleContainerBtns[index].setAttribute('class','active');
                if(prevI !== index){
                    chartToggleContainerBtns[prevI].removeAttribute('class');
                }
                switch(index){
                    case 0:
                        pieJson.type = 'PIE';
                        pieJson.data = pieData;
                        pieJson.title = 'Test Pie Chart';
                        pieJson.chartSize = '2';
                        pieJson.fillopacity = '10';
                        pieJson.strokecolor = '#242424';
                        graphObj.style.width = '600px';
                        break;
                    case 1:
                        pieJson.type = 'PIE-DONUT';
                        pieJson.data = pieData;
                        pieJson.title = 'Test Pie-Donut Chart';
                        pieJson.chartSize = '2';
                        pieJson.strokecolor = '#242424';
                        pieJson.names = names5;
                        pieJson.fillopacity = '10';
                        graphObj.style.width = '600px';
                        break;
                    case 2:
                        pieJson.type = '3D-PIE';
                        pieJson.data = pieData;
                        pieJson.names = names5;
                        pieJson.fillopacity = '10';
                        pieJson.strokecolor = '#242424';
                        pieJson.title = 'Test 3D-Pie Chart';
                        pieJson.chartSize = '1';
                        pieJson.offset = 10;
                        graphObj.style.width = '600px';
                        break;
                    case 3:
                        pieJson.type = '3D-PIE-DONUT';
                        pieJson.data = pieData;
                        pieJson.chartSize = '1';
                        pieJson.offset = 15;
                        pieJson.fillopacity = '10';
                        pieJson.strokecolor = '#242424';
                        pieJson.names = names5;
                        graphObj.style.width = '600px';
                        break;
                    case 4:
                        pieJson.type = 'BAR';
                        pieJson.data = barData;
                        pieJson.title = 'Test Bar Chart';
                        pieJson.chartSize = '1';
                        pieJson.fillopacity = '10';
                        pieJson.colors = colors5;
                        pieJson.names = names5;
                        pieJson.strokecolor = '#000';
                        graphObj.style.width = '';
                        break;
                    case 5:
                        pieJson.type = 'BAR';
                        pieJson.data = barComparativeData;
                        pieJson.chartSize = '3';
                        pieJson.title = 'Test Comparative Bar Chart';
                        pieJson.names = names2;
                        pieJson.colors = colors2;
                        pieJson.strokecolor = '#000';
                        pieJson.fillopacity = '10';
                        graphObj.style.width = '';
                        break;
                    case 6:
                        pieJson.type = '3D-BAR';
                        pieJson.data = barData;
                        pieJson.chartSize = '3';
                        pieJson.title = 'Test 3D-Bar Chart';
                        pieJson.colors = colors5;
                        pieJson.strokecolor = '#000';
                        pieJson.offset = 15;
                        pieJson.names = names5;
                        pieJson.fillopacity = '10';
                        graphObj.style.width = '';
                        break;
                    case 7:
                        pieJson.type = '3D-BAR';
                        pieJson.title = 'Test 3D Comparative Bar Chart';
                        pieJson.data = barComparativeData;
                        pieJson.strokecolor = '#000';
                        pieJson.chartSize = '3';
                        pieJson.offset = 15;
                        pieJson.names = names2;
                        pieJson.fillopacity = '10';
                        pieJson.colors = colors2;
                        graphObj.style.width = '';
                        break;
                    case 8:
                        pieJson.type = 'LINE';
                        pieJson.data = barData;
                        pieJson.title = 'Test Line Chart';
                        pieJson.chartSize = '3';
                        pieJson.colors = colors3;
                        pieJson.names = names7;
                        pieJson.fillopacity = '10';
                        pieJson.strokecolor = '#fff';
                        graphObj.style.width = '';
                        break;
                    case 9:
                        pieJson.type = 'LINE';
                        pieJson.data = barComparativeData;
                        pieJson.title = 'Test Comparative Line Chart';
                        pieJson.chartSize = '3';
                        pieJson.colors = colors3;
                        pieJson.names = names7;
                        pieJson.strokecolor = '#fff';
                        pieJson.fillopacity = '10';
                        graphObj.style.width = '';
                        break;
                    case 10:
                        pieJson.type = 'AREA';
                        pieJson.data = barData;
                        pieJson.title = 'Test Area Chart';
                        pieJson.chartSize = '3';
                        pieJson.colors = colors3;
                        pieJson.names = names7;
                        pieJson.fillopacity = '5';
                        graphObj.style.width = '';
                        pieJson.offset = 5
                        break;
                    case 11:
                        pieJson.type = 'AREA';
                        pieJson.data = barComparativeData;
                        pieJson.title = 'Test Comparative Area Chart';
                        pieJson.chartSize = '3';
                        pieJson.colors = colors3;
                        pieJson.fillopacity = '5';
                        pieJson.names = names7;
                        graphObj.style.width = '';
                        pieJson.offset = 0
                        break;
                    case 12:
                        pieJson.type = 'STACKED-BAR';
                        pieJson.data = barComparativeData;
                        pieJson.title = 'Test Stacked Bar Chart';
                        pieJson.chartSize = '3';
                        pieJson.names = names2;
                        pieJson.colors = colors2;
                        pieJson.strokecolor = '#000';
                        pieJson.fillopacity = '10';
                        graphObj.style.width = '';
                        break;
                }
                boxparadeGraphX(pieJson);
                prevI = index;
            });
            loop++;
        }
    }
    boxparadeGraphX(pieJson);
});
/*
        names: ['test item 1', 'test item 2', 'test item 3', 'test item 4', 'test item 5'],
colors: ['rgb(63,98,181,1)','rgb(41,195,190,1)','rgb(242,114,111,1)','rgb(255,197,51,1)','rgb(98,181,143,1)'],
data:[

            [
                {
                    value:70
                }
            ],[
                {
                    value:50
                }
            ],[
                {
                    value:30
                }
            ],[
                {
                    value:40
                }
            ],[
                {
                    value:25
                }
            ]
        ]*/
/*
names: ['test item 1', 'test item 2', 'test item 3', 'test item 4', 'test item 5'],
colors: ['rgb(63,98,181,1)','rgb(41,195,190,1)','rgb(242,114,111,1)','rgb(255,197,51,1)','rgb(98,181,143,1)'],
data:[

            [
                {
                    value:70
                },{
                    value:34
                }
            ],[
                {
                    value:50
                },{
                    value:90
                }
            ],[
                {
                    value:30
                },{
                    value:20
                }
            ],[
                {
                    value:40
                },{
                    value:36
                }
            ],[
                {
                    value:25
                },{
                    value:12
                }
            ]
        ]*/

/*

             */
/**********Created By: Trayvon Como***********/
var idArray23519094330298074353 = [];
function boxparadeGraphX(graph){
    var styling = document.createElement('style');
    var stylingOld = document.createElement('style');
    var body = document.getElementsByTagName('body');
    var head = document.getElementsByTagName('head');
    var chartContainer = document.createElement('div');
    var padding = 1;
    var colorArray = [];
    var centerX = 0;
    var touchdevice = isTouchDevice();
    var centerY = 0;
    var outerRadius = 0;
    var animationComplete = true;
    var outerRadiusY = 0;
    var degreeArray = [];
    var innerRadius = 0;
    var innerRadiusY = 0;
    var inCount = 0;
    var percentTextArray = [];
    var prevBarE = null;
    var descriptionTimer;
    var barMaxValue = 0;
    var globalIndex = -1;
    var updatedDegreeArray = [];
    var updatedBarHeightArray = [];
    var xPosNew = 0;
    var yPosNew = 0;
    var mousedown = false;
    var rad = 0;
    var deg = 0;
    var mainWidth = 0;
    var linePath = null;
    var barPath = null;
    var rotateDegrees = 0;
    var downElem = null;
    var rotateRadians = 0;
    var percentTextWidthArray = [];
    var pieceUp = false;
    var updatedDegree = 0;
    var updatedSpiderDegree = 0;
    var objLoop = 0;
    var initialDegreeArray = [];
    var totalArray = [];
    var activeElement = null;
    var spiderObjectPointsArray = [];
    var rotX = 0;
    var rotY = 0;
    var divisionDistance = 0;
    var initRotDegree = 0;
    var prevTouchCount = 0;
    var svgRealWidth = 0;
    var translatedOffset = 0;
    var descriptionMouseDown = false;
    var sectionTopGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var sectionSpiderLegGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var sectionBottomGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var sectionPercentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var descriptionContainer = document.createElement('div');
    var sectionOuter = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var sectionInner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var sectionLeft = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var sectionRight = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var spiderGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var sectionGroupArray = [];
    var savedInner;
    var savedOuter;
    var rotation = false;
    var idFound = false;
    var objLengthLoop = 0;
    var pieceLengthLoop = 0;
    var initialRotationPositionX = 0;
    var initialRotationPositionY = 0;
    var newRotationPositionX = 0;
    var newRotationPositionY = 0;
    var initialRotDegrees = 0;
    var begin = true;
    var leave = false;
    var svgLeftMax = 0;
    var barColor = '#000';
    var prevTouchStyling = '';
    var prevOverflowStyling = '';
    var svgRightMax = 0;
    var mouseuptimer;
    var objI = -1;
    var objName = '';
    var threeDPiePointsArray = [];
    var threeDPiePointsShadowArray = [];
    var initialEndDegreeArray = [];
    var startDegreeArray = [];
    var selectArray = [];
    var textCenterArray = [];
    var outerSelect = false;
    var legendSelect = false;
    var pie180 = 180 / Math.PI;
    var dataLength = 0;
    var bottomBarX1 = 0;
    var bottomBarY1 = 0;
    var deltaX = 0;
    var deltaY = 0;
    var bottomBarX2 = 0;
    var total = 0;
    var bottomBarY2 = 0;
    var flatTextHeight = 0;
    var sectionCenter = 0;
    var resizeTimer;
    var mainPieceLoop = 0;
    var code = Math.floor(Math.random() * (9999999999999 - 1000000000000) + 1000000000000);
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var barLineHeight = svg.getBoundingClientRect().height * .1;
    var drawGraph = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var prevXInner = 0;
    var prevYInner = 0;
    var prevXOuter = 0;
    var prevYOuter = 0;
    var prevXInnerShadow = 0;
    var prevYInnerShadow = 0;
    var prevXOuterShadow = 0;
    var prevYOuterShadow = 0;
    var nextInnerXPartial = 0;
    var nextInnerYPartial = 0;
    var nextOuterXPartial = 0;
    var nextOuterYPartial = 0;
    var barValue = 0;
    var barSvgHeight = 0;
    var barSvgWidth = 0;
    var barSvgSectionWidth = 0;
    var barPadding = 0;
    sectionCenter = 0;
    var textSectionCenter = 0;
    var barWidth = 0;
    var barSvgSectionStartPosition = 0;
    var barTextSvgSectionStartPosition = 0;
    var barX1 = 0;
    var barX2 = 0;
    var barY1 = 0;
    var barY2 = 0;
    var pieceHeight = 0;
    var barValueArray = [];
    var nextInnerXShadowPartial = 0
    var nextInnerYShadowPartial = 0;
    var leftWidth = 0;
    var nextOuterXShadowPartial = 0;
    var nextOuterYShadowPartial = 0;
    var radians = 0;
    var spiderRadians = 0;
    var nextInnerX = 0;
    var nextInnerY = 0;
    var nextOuterX = 0;
    var nextOuterY = 0;
    var spiderX = 0;
    var spiderY = 0;
    var spiderX2 = 0;
    var spiderY2 = 0;
    var nextInnerXShadow = 0
    var nextInnerYShadow = 0;
    var nextOuterXShadow = 0;
    var nextOuterYShadow = 0;
    var piOneEighty = Math.PI/180;
    if(graph === undefined){
        return false;
    }
    if(JSON.parse(JSON.stringify(graph))){
        if(graph.id !== null && graph.id !== undefined) {
            //AUTO-COMPLETE VARIABLES
            var title = graph.title !== null && graph.title !== undefined ? graph.title : '';
            var subTitle = graph.subtitle !== null && graph.subtitle !== undefined ? graph.subtitle : '';
            var background = graph.background !== null && graph.background !== undefined ? colorConverter(graph.background.toString(), false) : 'transparent';
            var typeArray = ['3D-PIE-DONUT','3D-PIE', 'PIE-DONUT','PIE','3D-BAR','BAR','STACKED-BAR','LINE','AREA'];
            var type = graph.type !== null && graph.type !== undefined ? validateValue(typeArray, graph.type) : typeArray[0];
            var showlegend = graph.showlegend !== null && graph.showlegend !== undefined ? validateBoolean(graph.showlegend, true) : true;
            var showTitle = graph.showtitle !== null && graph.showtitle !== undefined ? validateBoolean(graph.showtitle, true) : true;
            var showPercentage = graph.showpercentage !== null && graph.showpercentage !== undefined ? validateBoolean(graph.showpercentage, true) : true;
            var labelColorAsItemColor = graph.labelcolorisitemcolor !== null && graph.labelcolorisitemcolor !== undefined ? validateBoolean(graph.labelcolorisitemcolor, true) : false;
            var strokeColor = graph.strokecolor !== null && graph.strokecolor !== undefined ? colorConverter(graph.strokecolor.toString(), true) : 'rgb(223,223,223)';
            var descriptionBorder = graph.descriptionborder !== null && graph.descriptionborder !== undefined ? graph.descriptionborder : 'none';
            var labelForEach = graph.labelForEach !== null && graph.labelForEach !== undefined ? validateBoolean(graph.labelForEach, true) : true;
            var descriptionBorderRadius = graph.descriptionborderradius !== null && graph.descriptionborderradius !== undefined ? validateNumber(graph.descriptionborderradius, 'descriptionborderradius').toString() + 'px' : '5px';
            var legendPositionArray = ['BOTTOM','TOP'];
            var introAnimationArray = ['NONE','DRAW'];
            var labelStylingArray = ['NONE','SPIDER'];
            var lineStylingArray = ['NONE', 'HOLLOW', 'DASHED'];
            var graphStylingArray = ['DEFAULT','BULLET'];
            var tilt = graph.tilt !== null && graph.tilt !== undefined ? validateNumber(graph.tilt, 'tilt') : 2;
            tilt = tilt > 10 || isNaN(tilt) ? 10 : tilt;
            var fillOpacity = graph.fillopacity !== null && graph.fillopacity !== undefined ? validateNumber(graph.fillopacity, 'fillopacity')  : 10;
            fillOpacity = fillOpacity > 10 || fillOpacity < 0 ? 1 : (fillOpacity * .1);
            var valueType = graph.valuetype !== null && graph.valuetype !== undefined ? graph.valuetype : 'NONE';
            if(graph.valuetype !== null && graph.valuetype !== undefined){
                if(valueType.toUpperCase() !== 'NONE'){
                    valueType = graph.valuetype.substring(0, 4);
                }
            }
            var lineStyling = graph.linestyling !== null && graph.linestyling !== undefined ? validateValue(lineStylingArray, graph.linestyling) : lineStylingArray[0];
            var graphStyling = graph.graphstyling !== null && graph.graphstyling !== undefined ? validateValue(graphStylingArray, graph.graphstyling) : graphStylingArray[0];
            var labelStyling = graph.labelstyling !== null && graph.labelstyling !== undefined ? validateValue(labelStylingArray, graph.labelstyling) : labelStylingArray[0];
            var labelTextColor = graph.labeltextcolor !== null && graph.labeltextcolor !== undefined ? colorConverter(graph.labeltextcolor.toString(), false) : 'rgb(255,255,255)';
            var verticalBarColor = graph.verticalbarcolor !== null && graph.verticalbarcolor !== undefined ? colorConverter(graph.verticalbarcolor.toString(), true) : 'rgb(0,0,0)';
            var verticalBarOpacity = graph.verticalbaropacity !== null && graph.verticalbaropacity !== undefined ? validateNumber(graph.verticalbaropacity, 'verticalbaropacity').toString() : '5';
            var spinnable = graph.spinnable !== null && graph.spinnable !== undefined ? validateBoolean(graph.spinnable, false) : false;
            verticalBarOpacity = (Number(verticalBarOpacity) * .1).toString();
            var introAnimation = graph.introanimation !== null && graph.introanimation !== undefined ? validateValue(introAnimationArray, graph.introanimation) : introAnimationArray[0];
            var leftTitle = graph.lefttitle !== null && graph.lefttitle !== undefined ? graph.lefttitle.toString() : 'left title text';
            var leftTitleBool = graph.showlefttitle !== null && graph.showlefttitle !== undefined ? validateBoolean(graph.showlefttitle, true) : true;
            var bottomTitle = graph.bottomtitle !== null && graph.bottomtitle !== undefined ? graph.bottomtitle.toString() : 'bottom title text';
            var bottomTitleBool = graph.showbottomtitle !== null && graph.showbottomtitle  !== undefined ? validateBoolean(graph.showbottomtitle , true) : true;
            var divisions = graph.divisions !== null && graph.divisions !== undefined ? validateNumber(graph.divisions, 'division') : 5;
            if(divisions > 15){
                divisions = 15;
            }else if(divisions <= 0){
                divisions = 1;
            }
            var showDescription = graph.showdescription !== null && graph.showdescription !== undefined ? validateBoolean(graph.showdescription, true) : true;
            var pointRadius = graph.pointradius !== null && graph.pointradius !== undefined ? validateNumber(graph.pointradius, 'pointradius') : '4';
            var textSize = graph.textsize !== null && graph.textsize !== undefined ? validateNumber(graph.textsize, 'textsize') : '1';
            var svgWidth = graph.chartSize !== undefined && graph.chartSize !== null ? graph.chartSize.toString() : '2';
            var legendPosition = graph.legendposition !== null && graph.legendposition !== undefined ? validateValue(legendPositionArray, graph.legendposition) : legendPositionArray[0];
            var fontFamily = graph.fontfamily !== null && graph.fontfamily !== undefined ? graph.fontfamily : '\'Arial\', sans-serif';
            var description = graph.description !== null && graph.description !== undefined ? graph.description : '$value';
            var ringSize = graph.ringsize !== null && graph.ringsize !== undefined ? graph.ringsize : 50;
            var offset = graph.offset !== null && graph.offset !== undefined ? graph.offset : 14;
            dataLength = type === 'PIE' || type === 'PIE-DONUT' || type === '3D-PIE'|| type === '3D-PIE-DONUT' ? graph.data[0].length : graph.data.length;
            if(Number(textSize) === 1){
                flatTextHeight = 19;
            }else if(Number(textSize) === 2){
                flatTextHeight = 20;
            }else{
                flatTextHeight = 21;
            }
            if(!isNaN(offset)){
                if(offset > 20 || offset < 0){
                    if(type !== 'AREA' && type !== 'LINE'){
                        offset = 15;
                    }else{
                        offset = 0;
                    }
                    boxparadeAlert('JSON property "offset" number is too large. Must be 1-20');
                }
            }else{
                if(type !== 'AREA' && type !== 'LINE'){
                    offset = 14;
                }else{
                    offset = 0;
                }
                boxparadeAlert('Invalid JSON property "offset".');
            }
            var strokeWidth = graph.strokewidth !== null && graph.strokewidth !== undefined ? validateNumber(graph.strokewidth, 'strokewidth') + 'px' : '1px';
            var strokeOpacity = graph.strokeopacity !== null && graph.strokeopacity !== undefined ? validateNumber(graph.strokeopacity, 'strokeopacity') * .1 : '0.4';
            var titleColor = graph.titlecolor !== null && graph.titlecolor !== undefined ? colorConverter(graph.titlecolor.toString(), false) : '';
            var subtextColor = graph.subtextcolor !== null && graph.subtextcolor !== undefined ? colorConverter(graph.subtextcolor.toString(), false) : '';
            var descriptionColor =  graph.descriptioncolor !== null && graph.descriptioncolor !== undefined ? colorConverter(graph.descriptioncolor.toString(), false) : 'rgba(0,0,0,0.9)';
            var descriptionTextColor =  graph.descriptiontextcolor !== null && graph.descriptiontextcolor !== undefined ? colorConverter(graph.descriptiontextcolor.toString(), false) : 'rgba(255,255,255,0.8)';
            var legendBtnBgColor = 'rgba(100,100,100,0.1)';
            var legendBtnBgColor2 = 'rgba(100,100,100,0.2)';
            var legendStylingText = '@keyframes draw{ to{ stroke-dashoffset: 0; } }.bxp-legend-item-container-'+ graph.id +'{display:inline-block;position:relative; width:auto;padding:5px 10px 5px 10px;flex:0 0 auto;cursor:pointer;border:none;border-radius:3px;left:50%;transform:translate(-50%, 0);margin:0 5px 15px 0;background-color:'+ legendBtnBgColor +';transition:background-color 200ms ease;}.bxp-legend-item-container-'+ graph.id +':hover{background-color:'+ legendBtnBgColor2 +';}.bxp-legend-item-container-'+ graph.id +':focus{outline:solid rgba(0,0,0,0.1) 3px;}.bxp-legend-item-container-'+ graph.id +' > span{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;height:auto;width:auto;}.bxp-legend-item-container-'+ graph.id +' > span > span:first-of-type{display:inline-flex;position:relative;flex-direction:column;}.bxp-legend-item-container-'+ graph.id +' > span > span:first-of-type > span{display:inline-block;position:relative;flex:0 0 auto;width:16px;height:16px;border-radius:3px;margin-right:5px;vertical-align:middle;top:50%;transform:translate(0, -50%);}.bxp-legend-item-container-'+ graph.id +' > span > span:nth-of-type(2){display:flex;flex-direction:column;position:relative;flex-wrap:nowrap;}.bxp-legend-item-container-'+ graph.id +' > span > span:nth-of-type(2) > span{display:block;user-select:none;position:relative;font-family:'+ fontFamily +';font-size:14px;color:'+ subtextColor+'}';
            if(graphStyling === 'BULLET'){
                legendStylingText = '@keyframes draw{ to{ stroke-dashoffset: 0; } }.bxp-legend-item-container-'+ graph.id +'{display:inline-block;position:relative; width:auto;padding:5px 10px 5px 10px;flex:0 0 auto;cursor:pointer;border:none;left:50%;transform:translate(-50%, 0);margin:0 5px 15px 0;background-color:transparent;transition:background-color 200ms ease;}.bxp-legend-item-container-'+ graph.id +':hover{background-color:'+ legendBtnBgColor +';}.bxp-legend-item-container-'+ graph.id +':focus{outline:solid rgba(0,0,0,0.1) 3px;}.bxp-legend-item-container-'+ graph.id +' > span{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;height:auto;width:auto;}.bxp-legend-item-container-'+ graph.id +' > span > span:first-of-type{display:inline-flex;position:relative;flex-direction:column;}.bxp-legend-item-container-'+ graph.id +' > span > span:first-of-type > span{display:inline-block;position:relative;flex:0 0 auto;width:16px;height:16px;border-radius:8px;margin-right:5px;vertical-align:middle;top:50%;transform:translate(0, -50%);}.bxp-legend-item-container-'+ graph.id +' > span > span:nth-of-type(2){display:flex;flex-direction:column;position:relative;flex-wrap:nowrap;}.bxp-legend-item-container-'+ graph.id +' > span > span:nth-of-type(2) > span{display:block;user-select:none;position:relative;font-family:'+ fontFamily +';font-size:14px;color:'+ subtextColor+'}';
            }
            var loop = 0;
            var idArrayLength = idArray23519094330298074353.length;
            do{
                if(idArray23519094330298074353[0] === undefined){
                    idArray23519094330298074353.push([graph.id, code]);
                }else{
                    if(idArray23519094330298074353[loop][0] === graph.id){
                        idFound = true;
                        objName = idArray23519094330298074353[loop][0] + idArray23519094330298074353[loop][1];
                        code = idArray23519094330298074353[loop][1];
                    }
                    if(loop === idArrayLength - 1 && !idFound){
                        idArray23519094330298074353.push([graph.id, code]);
                    }
                }
                loop++;
            }while(loop < idArrayLength);
            if(idFound){
                loop = 0;
                var headNodes = head[0].childNodes;
                while(loop < headNodes.length){
                    if(headNodes[loop].nodeName.toUpperCase() === 'STYLE'){
                        var styleTxt = headNodes[loop].innerHTML.toString().substring(1,(graph.id.length + 1 + code.toString().length));
                        if(styleTxt === objName){
                            stylingOld = headNodes[loop];
                        }
                    }
                    loop++;
                }
            }
            if(body[0] !== null && body[0] !== undefined){
                var stylingNode = document.createTextNode('#'+ graph.id + code +'{}@keyframes showBoxparadeError{0%{transform:translate(0, -100px);opacity:0;}10%{transform:translate(0, 0);opacity:1;}90%{transform:translate(0, 0);opacity:1;}100%{transform:translate(0, -100px);opacity:0;}}#boxparadeErrorBox{display:flex;position:fixed;flex-direction:row;width:300px;max-width:92%;border-radius:5px;background-color:#C1000E;box-shadow:0rem 0.5rem 1rem rgba(164,0,12,0.7);box-sizing:border-box;padding:20px;top:1vw;right:1vw;transform:translate(0, -100px);opacity:0;animation:showBoxparadeError 5s ease-out 0ms 1 forwards;}#boxparadeErrorBox > div{display:flex;flex-direction:column;flex-wrap:nowrap;flex:1 0 1%;width:1%;}#boxparadeErrorBox > div:first-of-type{flex:0 0 70px;}#boxparadeErrorBox > div:first-of-type > svg{display:block;position:relative;vertical-align:top;margin:auto auto auto 0;width:50px;height:50px;}#boxparadeErrorBox > div:last-of-type > span{display:inline-block;position:relative;vertical-align:top;font-size:14px;font-family:'+ fontFamily +';color:#fff;letter-spacing:0.1px;top:50%;transform:translate(0, -50%);}');
                styling.appendChild(stylingNode);
                if(!idFound){
                    head[0].appendChild(styling);
                }else{
                    head[0].removeChild(stylingOld);
                    head[0].appendChild(styling);
                }
            }else{
                alert('No <body> tag identified.');
            }
            if(graph.data !== undefined && graph.data !== null){
                var id = document.getElementById(graph.id);
                if(id !== null && id !== undefined){
                    //CLEAR CONTAINER
                    loop = 0;
                    var idChildrenLength = id.childNodes.length;
                    while(loop < idChildrenLength){
                        id.removeChild(id.childNodes[0]);
                        loop++;
                    }
                    //DESCRIPTION CONTAINER
                    descriptionContainer.setAttribute('class','bxp-description-container-' + graph.id);
                    if(touchdevice){
                        descriptionContainer.addEventListener('touchstart', function(){
                            descriptionMouseDown = true;
                        });
                        descriptionContainer.addEventListener('touchmove', function(e){
                            e.preventDefault();
                            moveDescription(e);
                        });
                    }
                    descriptionContainer.addEventListener('mouseup', function(){
                        pieceLeave(activeElement);
                    });
                    var descriptionContainerStyling = document.createTextNode('.bxp-description-container-' + graph.id + '{display:none;position:absolute;padding:4px 8px 4px 8px;border:'+ descriptionBorder +';border-radius:'+ descriptionBorderRadius +';background-color:'+ descriptionColor +';max-width:96%;width:auto;z-index:500;opacity:0;transition:opacity 200ms ease, background-color 200ms ease;}.bxp-description-container-' + graph.id +' > span{display:flex;position:relative;width:auto;transition:opacity 200ms ease;top:0;}.bxp-description-container-' + graph.id +' > span > span:first-of-type{display:inline-block;position:relative;}.bxp-description-container-' + graph.id +' > span > span:nth-of-type(2){display:inline-block;position:relative;width:auto;top:0;vertical-align:top;margin-left:5px;}.bxp-description-container-' + graph.id +' > span > span:nth-of-type(2) > span{display:block;position:relative;width:auto;left:0;top:50%;line-height:1.4;transform:translate(0,-50%);padding-right:10px;color:'+ descriptionTextColor +';font-family:'+ fontFamily +';font-size:12px;user-select:none;}.bxp-description-container-' + graph.id +' > span > span:first-of-type > span{display:block;position:relative;width:12px;height:12px;border-radius:3px;left:50%;top:50%;transform:translate(-50%, -50%);}');
                    if(introAnimation === 'DRAW'){
                        var drawStyling = document.createTextNode('.bxp-svg-'+ graph.id +' > g > path{stroke-dasharray: 1400; stroke-dashoffset: 1400; animation:draw 5s ease 0ms 1 forwards;}');
                        styling.appendChild(drawStyling);
                    }
                    styling.appendChild(descriptionContainerStyling);
                    chartContainer.appendChild(descriptionContainer);
                    //CHART CONTAINER
                    chartContainer.setAttribute('class','bxp-chart-container-' + graph.id);
                    var chartBGColor = background;
                    var chartContainerStyling = document.createTextNode('.bxp-chart-container-' + graph.id + '{display:flex;position:relative;left:0;top:0;width:100%;flex-direction:row;flex-wrap:wrap;background:'+ chartBGColor +'; border-radius:0;overflow:hidden;}');
                    styling.appendChild(chartContainerStyling);
                    id.appendChild(chartContainer);
                    //CHART
                    var chart = document.createElement('div');
                    chart.setAttribute('class','bxp-chart-' + graph.id);
                    var chartStyling = document.createTextNode('.bxp-chart-' + graph.id + '{display:block;position:relative;flex:1 0 90%;overflow:visible;width:1%;box-sizing:border-box;}');
                    styling.appendChild(chartStyling);
                    //CHART TITLE
                    var chartTitle = document.createElement('div');
                    chartTitle.setAttribute('class','bxp-title-' + graph.id);
                    //var endPadding = type === 'BAR' || type === '3D-BAR' || type === 'LINE' || type === 'AREA' ? (100 * padding) : (25 * padding);
                    var chartTitleStyling = document.createTextNode('.bxp-title-' + graph.id + '{display:block;position:relative;flex:1 0 90%;width:1%;box-sizing:border-box;padding:' + (25 * padding) + 'px ' + (25 * padding) + 'px 0 ' +  25 + 'px;}');
                    if(graphStyling === 'BULLET'){
                        chartTitleStyling = document.createTextNode('@keyframes expand{0%{width:0;}100%{width:100%;}}.bxp-title-' + graph.id + '{display:block;position:relative;flex:1 0 90%;width:1%;box-sizing:border-box;padding:' + (25 * padding) + 'px ' + (25 * padding) + 'px 0 0;}.bxp-title-' + graph.id + ':after{content:\'\';display:block;position:absolute;left:0;width:0;bottom:0;height:1px;background-color:'+ subtextColor +';opacity:0.4;animation: expand 2.5s ease 0ms 1 forwards;}');
                    }
                    styling.appendChild(chartTitleStyling);
                    var chartTitleHeader = document.createElement('h1');
                    var chartTitleText = document.createTextNode(title);
                    chartTitleHeader.appendChild(chartTitleText);
                    if(title.length > 0){
                        var chartHeaderStyling = document.createTextNode('.bxp-title-' + graph.id + ' > h1{display:block;position:relative;text-align:center;user-select:none;font-family:'+ fontFamily +';font-size:'+ (18 + (2 * Number(textSize))) +'px;margin-bottom:' + (4 * padding) + 'px;color:'+ titleColor +';}');
                        if(graphStyling === 'BULLET'){
                            chartHeaderStyling = document.createTextNode('.bxp-title-' + graph.id + ' > h1{display:block;position:relative;text-align:left;user-select:none;font-family:'+ fontFamily +';font-size:'+ (18 + (2 * Number(textSize))) +'px;margin-bottom:' + (4 * padding) + 'px;color:'+ titleColor +';}');
                        }
                        styling.appendChild(chartHeaderStyling);
                        chartTitle.appendChild(chartTitleHeader);
                    }
                    var chartSubtitle = document.createElement('p');
                    var chartSubtitleText = document.createTextNode(subTitle);
                    chartSubtitle.appendChild(chartSubtitleText);
                    if(graph.subtitle.length > 0){
                        var chartSubtitleStyling = document.createTextNode('.bxp-title-' + graph.id + ' > p{display:block;position:relative;text-align:center;user-select:none;font-family:'+ fontFamily +';font-size:'+ (10 + (2 * Number(textSize))) +'px;margin-bottom:' + (8 * padding) + 'px;color:'+ subtextColor +';}');
                        if(graphStyling === 'BULLET'){
                            chartSubtitleStyling = document.createTextNode('.bxp-title-' + graph.id + ' > p{display:block;position:relative;text-align:left;user-select:none;font-family:'+ fontFamily +';font-size:'+ (10 + (2 * Number(textSize))) +'px;margin-bottom:' + (8 * padding) + 'px;color:'+ subtextColor +';}');
                        }
                        styling.appendChild(chartSubtitleStyling);
                    }
                    //CHART LEGEND
                    var chartLegend = document.createElement('div');
                    chartLegend.setAttribute('class','bxp-legend-' + graph.id);
                    var chartLegendStyling = document.createTextNode('.bxp-legend-' + graph.id + '{display:flex;position:relative;flex:1 0 90%;width:1%;flex-wrap:wrap;flex-direction:row;box-sizing:border-box;padding:' + (25 * padding) + 'px;}.bxp-legend-' + graph.id +' > div{display:block;position:relative;width:auto;flex:1 0 auto;}.bxp-legend-' + graph.id +' > div:last-of-type > button{margin:0;}');
                    if(graphStyling === 'BULLET'){
                        chartLegendStyling = document.createTextNode('.bxp-legend-' + graph.id + '{display:block;position:relative;width:100%;box-sizing:border-box;padding:10px 3px ' + (25 * padding) + 'px 3px;}.bxp-legend-' + graph.id + ':before{content:\'\';display:block;position:absolute;height:1px;width:0;left:0;animation:expand 3s ease-out 0ms 1 forwards;background-color:'+ subtextColor +';top:0;opacity:0.4;}.bxp-legend-' + graph.id +' > div{display:inline-block;position:relative;width:auto;}.bxp-legend-' + graph.id +' > div:last-of-type > button{margin:0;}');
                    }
                    if(legendPosition === 'BOTTOM'){
                        if(showTitle){
                            chartTitle.appendChild(chartSubtitle);
                            chartContainer.appendChild(chartTitle);
                        }
                        chartContainer.appendChild(chart);
                        if(showlegend){
                            styling.appendChild(chartLegendStyling);
                            chartContainer.appendChild(chartLegend);
                        }
                    }else{
                        if(showTitle){
                            chartTitle.appendChild(chartSubtitle);
                            chartContainer.appendChild(chartTitle);
                        }
                        if(showlegend){
                            styling.appendChild(chartLegendStyling);
                            chartContainer.appendChild(chartLegend);
                        }
                        chartContainer.appendChild(chart);
                    }
                   // setTimeout(function(){
                        //CHART SVG

                        svg.setAttribute('class', 'bxp-svg-' + graph.id);
                        window.removeEventListener('mouseup', windowMouseUp,true);
                        window.removeEventListener('resize', resizeGraph, true);
                        window.removeEventListener('orientationchange',resizeGraph, true);
                        svgSize();
                        var svgStyling = document.createTextNode('.bxp-svg-' + graph.id + '{display:block;position:relative;border:none;user-select:none;background-color:'+ chartBGColor +';left:0;right:0;margin:0 auto 0 auto;}');
                        styling.appendChild(svgStyling);
                        chart.appendChild(svg);
                        if(isNaN(Number(svgWidth))){
                            boxparadeAlert('Invalid "chartsize" in JSON.');
                        }
                        window.addEventListener('resize', resizeGraph, true);
                        window.addEventListener('orientationchange',resizeGraph, true);
                        //CHART DATA VARIABLES
                        var itemLoop = 0;
                        if(graph.data.length > 0){
                            if(type === 'PIE' || type === 'PIE-DONUT' || type === '3D-PIE'|| type === '3D-PIE-DONUT'){
                                while(objLoop < graph.data.length){
                                    itemLoop = 0;
                                    while(itemLoop < dataLength){
                                        var dataObjVal = graph.data[objLoop][itemLoop].value;
                                        if(dataObjVal !== null && dataObjVal !== undefined){
                                            var value = Number(dataObjVal);
                                            if(!isNaN(value)){
                                                total = total + dataObjVal;
                                            }else{
                                                boxparadeAlert('Data object "'+ objLoop +'" at position "'+ itemLoop +'" is not a number.');
                                                return false;
                                            }
                                        }else{
                                            boxparadeAlert('No value is present in data object "'+ objLoop +'" at position "'+ itemLoop + '"');
                                        }
                                        if(itemLoop === (dataLength - 1)){
                                            totalArray.push(total);
                                        }
                                        itemLoop++;
                                    }
                                    objLoop++;
                                }
                            }
                        }else{
                            boxparadeAlert('Invalid JSON data in "data" property (use an array).');
                            return false;
                        }
                        objLoop = 0;
                        //CHART GRAPHICS
                      //  while(objLoop < totalArray.length){
                            if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
                                if(objLoop === 0){
                                    //var pathStyling = document.createTextNode('.bxp-svg-' + graph.id + ' > g > path{cursor:default;}');
                                    //styling.appendChild(pathStyling);
                                    centerX = svg.getBoundingClientRect().width / 2;
                                    centerY = svg.getBoundingClientRect().height / 2;
                                    if(!isNaN(Number(ringSize))){
                                        if(ringSize > 90){
                                            ringSize = 90;
                                        }else{
                                            ringSize = Number(ringSize);
                                        }
                                    }else{
                                        ringSize = 20;
                                        boxparadeAlert('"ringSize" is not a valid number.');
                                    }
                                    if(type === '3D-PIE' || type === 'PIE'){
                                        ringSize = 0;
                                    }
                                    outerRadius = centerX * .5;
                                    outerRadiusY = centerY * .62;
                                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                                        sectionTopGroup.setAttribute('class','bxp-sectionTopGroup-' + graph.id);
                                        sectionSpiderLegGroup.setAttribute('class','bxp-sectionSpiderLegGroup-' + graph.id);
                                        sectionBottomGroup.setAttribute('class','bxp-sectionBottomGroup-' + graph.id);
                                        sectionPercentGroup.setAttribute('class','bxp-sectionPercentGroup-' + graph.id);
                                        outerRadius = centerX * .6;
                                        outerRadiusY = centerY * (.45 + (tilt * .025));
                                    }
                                    innerRadius = (ringSize * .01) * outerRadius;
                                    innerRadiusY = (ringSize * .01) * outerRadiusY;
                                    //rotateDegrees = 0;
                                    var sltLoop = 0;
                                    while(sltLoop < graph.data[0].length){
                                        selectArray.push(false);
                                        sltLoop++;
                                    }
                                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                                        svg.appendChild(sectionBottomGroup);
                                    }else{
                                        svg.appendChild(sectionTopGroup);
                                        svg.appendChild(sectionPercentGroup);
                                    }
                                    drawPie();
                                    var percentLoop = 0;
                                    svgRightMax = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width;
                                    svgLeftMax = svg.getBoundingClientRect().left;
                                    percentTextWidthArray = [];
                                    var updatedFontSize = ((.026 * svg.getBoundingClientRect().width) * (1 + ((Number(textSize)) *.1))) < 9 ? 9 : ((.026 * svg.getBoundingClientRect().width) * (1 + ((Number(textSize)) *.1)));
                                    while(percentLoop < degreeArray.length){
                                        percentTextArray[percentLoop].setAttribute('font-size', updatedFontSize + 'px');
                                        percentTextWidthArray.push(percentTextArray[percentLoop].getBoundingClientRect().width);
                                        percentLoop++;
                                    }
                                    percentTextResize();
                                    if(touchdevice){
                                        window.addEventListener('touchmove', function(e){
                                            piemovement(e);
                                            if(spinnable){
                                                fixPiece();
                                            }
                                        });
                                        window.addEventListener('touchend', function(e){
                                            initialRotDegrees = rotateDegrees * dataLength;
                                            rotation = false;
                                            outerSelect = false;
                                            mousedown = false;
                                            pieceLeave(activeElement);
                                            document.body.style.overflow = prevOverflowStyling;
                                            document.documentElement.style.overflow = prevOverflowStyling;
                                            document.body.style.touchAction = prevTouchStyling;
                                            document.documentElement.style.touchAction = prevTouchStyling;
                                        });
                                    }else{
                                        window.addEventListener('mousemove', function(e){
                                            piemovement(e);
                                            if(spinnable){
                                                fixPiece();
                                            }
                                        });
                                        window.addEventListener('mouseup', windowMouseUp, false);
                                    }
                                    svg.addEventListener('mouseleave', function(){
                                        hideDescription();
                                    });
                                }else{
                                    boxparadeAlert('You may only create one pie chart for each JSON object');
                                }
                            }
                            else if(type === '3D-BAR' || type === 'BAR' || type === 'LINE' || type === 'AREA' || type === 'STACKED-BAR'){
                                drawBarLine();
                            }
                }else{
                    boxparadeAlert('No element with ID "'+ graph.id + '" found in the DOM.');
                }
            }else{
                boxparadeAlert('The "data" property is required in the JSON.');
            }
        }else{
            boxparadeAlert('No Application ID added. Please add an ID tag');
        }
    }else{
        boxparadeAlert('Invalid JSON object for graph')
    }
    function windowMouseUp(){
        initialRotDegrees = rotateDegrees * dataLength;
        rotation = false;
        outerSelect = false;
        mousedown = false;
        type = graph.type !== null && graph.type !== undefined ? validateValue(typeArray, graph.type) : typeArray[0];
        if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
            pieceLeave(activeElement);
        }
    }
    function drawBarLine() {
        barMaxValue = 0;
        var prefix = '';
        var suffix = '';
        if(graph.colors !== null && graph.titles !== null){
            var inLoop = 0;
            var newPieceLength = 0;
            var pieceDataLength = 0;
            while(inLoop < graph.data.length){
                var loop2 = 0;
                var pieceMax = 0;
                while(loop2 < graph.data[inLoop].length){
                    var valid = false;
                    if(begin){
                        if(graph.data[inLoop].length > 1){
                            if(inLoop === 0){
                                selectArray.push(false);
                                newPieceLength++;
                            }
                        }else{
                            if(type === 'LINE' || type === 'AREA'){
                                if(inLoop === 0){
                                    selectArray.push(false);
                                }
                            }else{
                                selectArray.push(false);
                            }
                            newPieceLength = 1;
                        }
                        if(loop2 === graph.data[inLoop].length - 1){
                            pieceDataLength++;
                        }
                    }else{
                        if(graph.data[inLoop].length > 1){
                                valid = !selectArray[loop2];
                                if(inLoop === 0 && !selectArray[loop2]){
                                    newPieceLength++;
                                }
                            if(loop2 === graph.data[inLoop].length - 1){
                                pieceDataLength++;
                            }
                        }else{
                            if(type === 'LINE' || type === 'AREA'){
                                valid = !selectArray[loop2];
                            }else{
                                valid = !selectArray[inLoop];
                            }
                            if(valid){
                                newPieceLength = 1;
                                pieceDataLength++;
                            }
                        }
                    }
                    if(valid || begin || loop2 === graph.data[inLoop].length - 1){
                        var pieceValue = graph.data[inLoop][loop2].value;
                        if(type === 'STACKED-BAR'){
                            pieceMax = valid || begin ? pieceMax + pieceValue : pieceMax;
                            if(loop2 === graph.data[inLoop].length - 1){
                                barMaxValue = pieceMax > barMaxValue ? pieceMax : barMaxValue;
                            }
                        }else{
                            if(valid || begin){
                                barMaxValue = pieceValue > barMaxValue ? pieceValue : barMaxValue;
                            }
                        }
                    }
                    loop2++;
                }
                inLoop++;
            }
            barMaxValue = Math.ceil(barMaxValue * 1.17).toFixed(0);
            type = graph.type !== null && graph.type !== undefined ? validateValue(typeArray, graph.type) : typeArray[0];
                bottomBarX1 = svg.getBoundingClientRect().width * .12;
                bottomBarY1 = svg.getBoundingClientRect().height * .8;
                bottomBarX2 = svg.getBoundingClientRect().width * .97;
                bottomBarY2 = svg.getBoundingClientRect().height * .8;
                barLineHeight = svg.getBoundingClientRect().height * .15;
                drawGraph = document.querySelector('.bxp-svg-' + graph.id + ' > path');
                if(drawGraph === null || drawGraph === undefined){
                    drawGraph = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    drawGraph.setAttribute('stroke', '#dfdfdf');
                    drawGraph.setAttribute('stroke-width', '1px');
                    drawGraph.setAttribute('stroke-opacity', '0.4');
                    drawGraph.setAttribute('fill','none');
                    drawGraph.setAttribute('stroke-linecap', 'butt');
                    svg.appendChild(drawGraph);
                }
                var drawString = 'M' + bottomBarX1 + ', ' + bottomBarY1 + ' L' + bottomBarX2 + ', ' + bottomBarY2 + ' ';
                var leftTextGroup = document.querySelector('.bxp-leftTextGroup-' + graph.id);
                if(leftTextGroup === null){
                    leftTextGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                    leftTextGroup.setAttribute('class','bxp-leftTextGroup-' + graph.id);
                }
                divisionDistance = (bottomBarY1 - barLineHeight) / (divisions - 1);
                var divLoop = 0;
                var barTextVal = 0;
            var leftGroupFound = document.querySelector('.bxp-leftTextGroup-' + graph.id);
            if(leftGroupFound === null || leftGroupFound === undefined){
                svg.appendChild(leftTextGroup);
            }

                while(divLoop < Number(divisions)) {
                    drawString = drawString + 'M' + bottomBarX1 + ', ' + (bottomBarY1 - (divisionDistance * (divLoop))) + ' L' + bottomBarX2 + ', ' + (bottomBarY2 - (divisionDistance * (divLoop)));
                    var currentBarText = document.querySelectorAll('.bxp-leftTextGroup-' + graph.id + ' > text')[divLoop];
                    var barText = document.querySelectorAll('.bxp-leftTextGroup-' + graph.id + ' > text')[divLoop] === undefined ? document.createElementNS('http://www.w3.org/2000/svg', 'text') : currentBarText;
                    var numText = Math.floor(Number((barMaxValue / (divisions - 1)) * divLoop)).toString();
                    var barTextNode = numText.toString();
                    prefix = '';
                    suffix = '';
                    if(valueType.toUpperCase() === 'USD') {
                        prefix = '$';
                    }else if(valueType.toUpperCase() === 'EUR'){
                        prefix = '\u20Ac';
                    }else if(valueType.toUpperCase() === 'JPY'){
                        prefix = '\u00A5';
                    }else if(valueType.toUpperCase() === 'NONE'){
                        prefix = '';
                    }else{
                        suffix = graph.valuetype;
                    }

                    if(numText.length === 15){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 3)+ 'T' + suffix);
                    }else if(numText.length === 14){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 2)+ 'T' + suffix);
                    }else if(numText.length === 13){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 1) + 'T' + suffix);
                    }else if(numText.length === 12){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 3)+ 'B' + suffix);
                    }else if(numText.length === 11){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 2)+ 'B' + suffix);
                    }else if(numText.length === 10){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 1) + 'B' + suffix);
                    }else if(numText.length === 9){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 3)+ 'M' + suffix);
                    }else if(numText.length === 8){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 2)+ 'M' + suffix);
                    }else if(numText.length === 7){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 1) + 'M' + suffix);
                    }else if(numText.length === 6){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 3) + 'K' + suffix);
                    }else if(numText.length === 5){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 2) + 'K' + suffix);
                    }else if(numText.length === 4){
                        barTextNode = document.createTextNode(prefix + numText.toString().substring(0, 1) + 'K' + suffix);
                    }else{
                        barTextNode = document.createTextNode(prefix + numText.toString() + suffix);
                    }
                    if(barText !== undefined){
                        barText.setAttribute('stroke','none');
                        barText.setAttribute('fill', subtextColor);
                        barText.setAttribute('font-family',fontFamily);
                        barText.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02)) + 'px');
                        barText.setAttribute('y', Number((bottomBarY1 + ((10 + (textSize)) / 3)) - (divisionDistance * divLoop)).toString());
                        barText.appendChild(barTextNode);
                        if(currentBarText !== null && currentBarText !== undefined){
                            barText.replaceChild(barTextNode, barText.childNodes[0]);
                            barTextVal = barText.getBoundingClientRect().width > barTextVal ? barText.getBoundingClientRect().width : barTextVal;
                            barText.setAttribute('x', Number((bottomBarX1 - barTextVal) - 5).toString());
                        }else{
                            leftTextGroup.appendChild(barText);
                            barTextVal = barText.getBoundingClientRect().width > barTextVal ? barText.getBoundingClientRect().width : barTextVal;
                            barText.setAttribute('x', Number((bottomBarX1 - barTextVal) - 5).toString());
                        }
                    }
                    divLoop++;
                }

                if(drawGraph !== null){
                    drawGraph.setAttribute('d', drawString);
                }
                if(leftTitleBool){
                    var leftTextFound = document.querySelectorAll('.bxp-svg-' + graph.id + ' > text')[0];
                    var leftText = leftTextFound === undefined ? document.createElementNS('http://www.w3.org/2000/svg', 'text') : document.querySelectorAll('.bxp-svg-' + graph.id + ' > text')[0];
                    leftText.setAttribute('font-family', fontFamily);
                    if(leftTextFound === null || leftTextFound === undefined){
                        leftText.setAttribute('stroke','none');
                        leftText.setAttribute('fill', subtextColor);
                        leftText.setAttribute('font-family', fontFamily);
                        leftText.setAttribute('font-size', 11 + textSize);
                        leftText.setAttribute('shape-rendering', 'crispEdges');
                        var leftTextNode = document.createTextNode(leftTitle);
                        leftText.appendChild(leftTextNode);
                        svg.appendChild(leftText);
                    }
                    var ltX = (bottomBarX1 - barTextVal) - (svg.getBoundingClientRect().width * 0.05);
                    if(ltX < 10){
                        ltX = 10;
                    }
                    var fontViewport = ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02));
                    leftText.setAttribute('font-size', fontViewport  + 'px');
                    leftWidth = leftText.getBoundingClientRect().width === 0 ? leftWidth : leftText.getBoundingClientRect().width;
                    if(!begin){
                        leftWidth = leftText.getBoundingClientRect().height === 0 ? leftWidth : leftText.getBoundingClientRect().height;
                    }
                    var ltY = Number((barLineHeight + ((bottomBarY1 - barLineHeight) / 2)) + (leftWidth / 2) );
                    leftText.setAttribute('x', ltX.toString());
                    leftText.setAttribute('y', ltY.toString());
                    leftText.setAttribute('transform','rotate(270 '+ ltX +' '+ ltY +')');
                }
                if(bottomTitleBool){
                    var txtI = 0;
                    if(leftTitleBool){
                        txtI = 1;
                    }
                    var bottomText = document.querySelectorAll('.bxp-svg-' + graph.id + ' > text')[txtI];
                    if(bottomText === undefined || bottomText === null){
                        bottomText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        bottomText.setAttribute('stroke','none');
                        bottomText.setAttribute('fill', subtextColor);
                        bottomText.setAttribute('font-family', fontFamily);
                        bottomText.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02)).toString() + 'px');
                        bottomText.setAttribute('shape-rendering', 'crispEdges');
                        var bottomTextNode = document.createTextNode(bottomTitle);
                        bottomText.appendChild(bottomTextNode);
                        svg.appendChild(bottomText);
                    }
                    bottomText.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02))  + 'px');
                    var bottomTitleWidth = bottomText.getBoundingClientRect().width;
                    var ltXb = Number((bottomBarX1 + ((bottomBarX2 - bottomBarX1) / 2)) - (bottomTitleWidth));
                    var ltYb = Number((svg.getBoundingClientRect().height - (svg.getBoundingClientRect().height * .04)));
                    bottomText.setAttribute('x', ltXb.toString());
                    bottomText.setAttribute('y', ltYb.toString());
                    bottomText.setAttribute('font-family', fontFamily);
                }
                var barGroup = document.querySelectorAll('.bxp-bar-group-' + graph.id);
                var rectGroup = document.querySelector('.bxp-rect-group-' + graph.id);
                var barTextGroup = document.querySelector('.bxp-barText-group-' + graph.id);
            if(barTextGroup === null || barTextGroup === undefined && (type === 'LINE' || type === 'AREA')){
                barTextGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                barTextGroup.setAttribute('class','bxp-barText-group-' + graph.id);
                svg.appendChild(barTextGroup);
            }
            if(rectGroup === null || rectGroup === undefined && type === 'LINE'){
                rectGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                rectGroup.setAttribute('class','bxp-rect-group-' + graph.id);
            }
                var lineGroup = document.querySelector('.bxp-line-group-' + graph.id);
            if((lineGroup === null || lineGroup === undefined) && type === 'AREA'){
                lineGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                lineGroup.setAttribute('class','bxp-line-group-' + graph.id);
                svg.appendChild(lineGroup);
            }
                mainPieceLoop = 0;
                translatedOffset = type === 'BAR' || type === 'STACKED-BAR' ? 0 : offset * .5;
                var bar2X1;
                var bar2X2;
                var bar2Y1;
                var bar2Y2;
            barSvgHeight = bottomBarY1 - barLineHeight;
            barSvgWidth = bottomBarX2 - bottomBarX1;
            barSvgSectionWidth = type === 'STACKED-BAR' ?  barSvgWidth / graph.data.length : barSvgWidth / pieceDataLength;
            barPadding = barSvgSectionWidth * (1 / pieceDataLength);
            updatedBarHeightArray = [];
            barValueArray = [];
            if(type === 'LINE' || pieceDataLength <= 1){
                barPadding = 0;
            }
            sectionCenter = ((barSvgWidth / pieceDataLength) / 2) - (barPadding / 2);
            textSectionCenter = type === 'LINE' || type === 'AREA' ? ((barSvgWidth / graph.data.length) / 2) - (barPadding / 2) : ((barSvgWidth / pieceDataLength) / 2) - (barPadding / 2);
            barSvgSectionStartPosition = 0;
            objLengthLoop = 0;
            while(mainPieceLoop < graph.data.length){
                pieceLengthLoop = 0;
                var barName =  graph.titles[mainPieceLoop] !== undefined ? graph.titles[mainPieceLoop] : undefined;
                    barColor = graph.colors[mainPieceLoop] !== null && graph.colors[mainPieceLoop] !== undefined ? colorConverter(graph.colors[mainPieceLoop], true) : '#000';
                    barGroup = document.querySelectorAll('.bxp-bar-group-' + graph.id)[mainPieceLoop];
                    barText = document.querySelectorAll('.bxp-bar-group-' + graph.id + ' > text:last-of-type')[mainPieceLoop];
                    if(type === 'AREA' || type === 'LINE'){
                        barText = document.querySelectorAll('.bxp-barText-group-' + graph.id)[0];
                        if(barText !== null && barText !== undefined){
                            barText = barText.getElementsByTagName('text')[mainPieceLoop];
                        }
                    }
                    if(barGroup === null || barGroup === undefined){
                        barGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                        barGroup.setAttribute('class','bxp-bar-group-' + graph.id);
                        if(type !== 'LINE' && type !== 'AREA' && !selectArray[mainPieceLoop]){
                            svg.appendChild(barGroup);
                        }
                    }
                    var lineLoop = 0;
                    var pieceLength = graph.data[mainPieceLoop].length;
                    barWidth = graph.data[mainPieceLoop].length > 1 && type !== 'LINE' ? (barSvgSectionWidth - barPadding) / newPieceLength : (barSvgSectionWidth - barPadding) / 2;
                    if(pieceDataLength <= 1){
                        barWidth = ((barSvgSectionWidth / 3) - barPadding) / 2;
                    }
                    while(lineLoop < pieceLength){
                            if(graph.data[mainPieceLoop].length <= 1){
                                if(type === 'LINE' || type === 'AREA'){
                                    barTextSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / graph.data.length) * mainPieceLoop) + (barPadding / 2));
                                }else{
                                    barTextSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / pieceDataLength) * objLengthLoop) + (barPadding / 2));
                                }
                            }else{
                                barTextSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / pieceDataLength) * mainPieceLoop) + (barPadding / 2));
                            }
                        if(type === 'LINE'){
                            if(graph.data[mainPieceLoop].length <= 1){
                                barSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / pieceDataLength) * objLengthLoop) + (barPadding / 2));
                            }else{
                                barSvgSectionStartPosition = (bottomBarX1 + ((barSvgWidth / graph.data.length) * mainPieceLoop));
                            }
                        }else if(type === 'STACKED-BAR'){
                            barSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / graph.data.length) * mainPieceLoop) + (barPadding / 2));
                        }else{
                            if(graph.data[mainPieceLoop].length <= 1){
                                barSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / pieceDataLength) * objLengthLoop) + (barPadding / 2));
                            }else{
                                barSvgSectionStartPosition = (bottomBarX1 + (((barSvgWidth) / pieceDataLength) * mainPieceLoop) + (barPadding / 2));
                            }
                        }
                        if((graph.data[mainPieceLoop].length > 1 && !selectArray[lineLoop]) || (graph.data[mainPieceLoop].length < 2 && !selectArray[mainPieceLoop]) || (graph.data[mainPieceLoop].length < 2 && !selectArray[mainPieceLoop])){

                            if(type === 'LINE' || type === 'AREA'){
                                barGroup = document.querySelectorAll('.bxp-bar-group-' + graph.id)[lineLoop];
                                if((barGroup === null || barGroup === undefined)){
                                    barGroup = document.createElementNS('http://www.w3.org/2000/svg','g');
                                    barGroup.setAttribute('class','bxp-bar-group-' + graph.id);
                                    svg.appendChild(barGroup);
                                }
                            }
                            barValue = validateNumber(graph.data[mainPieceLoop][lineLoop].value, 'value');
                            if(type === 'STACKED-BAR'){
                                barValue = barValueArray[mainPieceLoop] === undefined ? validateNumber(graph.data[mainPieceLoop][lineLoop].value, 'value') : validateNumber(graph.data[mainPieceLoop][lineLoop].value + barValueArray[mainPieceLoop], 'value');
                                barValueArray.splice(mainPieceLoop, 1, barValue);
                                barWidth = (barSvgSectionWidth - barPadding) / 2;
                                barX1 = (((barSvgSectionStartPosition - (barPadding / 2)) + (barSvgSectionWidth / 2)) - (barWidth / 2));
                                barX2 = barX1 + barWidth;
                                barY1 = updatedBarHeightArray[mainPieceLoop] === undefined ? bottomBarY1 : updatedBarHeightArray[mainPieceLoop];
                                barY2 = updatedBarHeightArray[mainPieceLoop] === undefined ? bottomBarY1 : updatedBarHeightArray[mainPieceLoop];
                                pieceHeight = updatedBarHeightArray[mainPieceLoop] === undefined ? (bottomBarY1 - ((Number(barValue) / Number(barMaxValue)) * barSvgHeight)) : updatedBarHeightArray[mainPieceLoop] - (((Number(graph.data[mainPieceLoop][lineLoop].value) / Number(barMaxValue)) * barSvgHeight));
                                updatedBarHeightArray.splice(mainPieceLoop,1, pieceHeight);
                            }else{
                                barX1 = graph.data[mainPieceLoop].length > 1 ? (barSvgSectionStartPosition + (barWidth * pieceLengthLoop)) : (((barSvgSectionStartPosition - (barPadding / 2)) + (barSvgSectionWidth / 2)) - (barWidth / 2));
                                barX2 = graph.data[mainPieceLoop].length > 1 ? (barSvgSectionStartPosition + (barWidth * (pieceLengthLoop + 1))) : barX1 + barWidth;
                                barY1 = bottomBarY1;
                                barY2 = bottomBarY2;
                                pieceHeight = bottomBarY1 - ((Number(barValue) / Number(barMaxValue)) * barSvgHeight);
                            }
                            if ((graph.data[mainPieceLoop].length > 1) || (graph.data.length > 1 && type === 'LINE')) {
                                barColor = graph.colors[lineLoop] !== null && graph.colors[lineLoop] !== undefined ? colorConverter(graph.colors[lineLoop], true) : '#000';
                            }
                            if(type !== 'LINE' && type !== 'AREA'){
                                linePath = document.querySelectorAll('.bxp-bar-group-' + graph.id)[mainPieceLoop].getElementsByTagName('path')[lineLoop];
                            }
                            var stackedTotal = null;
                            var stackedTotalNode = null;
                            if(type === 'BAR' || type === 'STACKED-BAR'){
                                if(linePath === null || linePath === undefined){
                                    addBarStyling();
                                    if((pieceLength < 2 && lineLoop === 0) || (pieceLength > 1 && mainPieceLoop === 0)){
                                        // selectArray.push(false);
                                        addLegendButton(lineLoop, mainPieceLoop);
                                    }
                                    barGroup.appendChild(linePath);
                                    if(type === 'STACKED-BAR' && lineLoop === pieceLength - 1){
                                        stackedTotal = document.createElementNS('http://www.w3.org/2000/svg','text');
                                        stackedTotalNode = document.createTextNode(prefix + barValue.toString() + suffix);
                                        stackedTotal.setAttribute('font-family', fontFamily);
                                        if(labelColorAsItemColor){
                                            stackedTotal.setAttribute('fill', barColor);
                                        }else{
                                            stackedTotal.setAttribute('fill', subtextColor);
                                        }
                                        stackedTotal.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02)).toString());
                                        stackedTotal.appendChild(stackedTotalNode);
                                        stackedTotal.setAttribute('y', (pieceHeight - 5).toString());
                                        barGroup.appendChild(stackedTotal);
                                        stackedTotal.setAttribute('x', ((barX1 + (barWidth / 2)) - (stackedTotal.getBoundingClientRect().width / 2)).toString());
                                    }
                                }else if(type === 'STACKED-BAR'){
                                    stackedTotal = document.querySelectorAll('.bxp-bar-group-' + graph.id)[mainPieceLoop].getElementsByTagName('text')[0];
                                    stackedTotalNode = document.createTextNode(prefix + barValue.toString() + suffix);
                                    stackedTotal.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02)).toString());
                                    stackedTotal.replaceChild(stackedTotalNode, stackedTotal.childNodes[0]);
                                    stackedTotal.setAttribute('y', (pieceHeight - 5).toString());
                                    stackedTotal.setAttribute('x', ((barX1 + (barWidth / 2)) - (stackedTotal.getBoundingClientRect().width / 2)).toString());
                                }
                                linePath.setAttribute('d', 'M' + barX1 + ', ' + barY1 + ' L' + barX1 + ', ' + pieceHeight + ' L' + barX2 + ', ' + pieceHeight + ' L' + barX2 + ', ' + barY2 + ' Z');
                            }else if(type === '3D-BAR') {
                                bar2X1 = barX1 - translatedOffset;
                                bar2X2 = barX2 - translatedOffset;
                                bar2Y1 = barY1 + translatedOffset;
                                bar2Y2 = barY2 + translatedOffset;
                                var bpLoop = 0;
                                var startBpLoop = 6 * lineLoop;
                                while (bpLoop < 6) {
                                    linePath = barGroup.childNodes[startBpLoop + bpLoop] === undefined || barGroup.childNodes[startBpLoop + bpLoop] === null ? document.createElementNS('http://www.w3.org/2000/svg', 'path') : barGroup.childNodes[startBpLoop + bpLoop];
                                    if(begin){
                                        addBarStyling();
                                        barGroup.appendChild(linePath);
                                    }
                                    if(bpLoop === 3 || bpLoop === 4){
                                        linePath.setAttribute('fill', darkerColor(barColor));
                                    }else{
                                        linePath.setAttribute('fill', barColor);
                                    }
                                    switch (startBpLoop + bpLoop) {
                                        case startBpLoop:
                                            linePath.setAttribute('d', 'M' + barX1 + ', ' + barY1 + ' L' + barX1 + ', ' + pieceHeight + ' L' + barX2 + ', ' + pieceHeight + ' L' + barX2 + ', ' + barY2 + ' Z');
                                            break;
                                        case startBpLoop + 1:
                                            linePath.setAttribute('d', 'M' + bar2X1 + ', ' + bar2Y1 + ' L' + barX1 + ', ' + barY1 + ' L' + barX1 + ', ' + pieceHeight + ' L' + bar2X1 + ', ' + (pieceHeight + translatedOffset) + ' Z');
                                            break;
                                        case startBpLoop + 2:
                                            linePath.setAttribute('d', 'M' + bar2X1 + ', ' + bar2Y1 + ' L' + barX1 + ', ' + barY1 + ' L' + barX2 + ', ' + barY2 + ' L' + bar2X2 + ', ' + bar2Y2 + ' Z');
                                            break;
                                        case startBpLoop + 3:
                                            linePath.setAttribute('d', 'M' + bar2X2 + ', ' + bar2Y2 + ' L' + barX2 + ', ' + barY2 + ' L' + barX2 + ', ' + pieceHeight + ' L' + bar2X2 + ', ' + (pieceHeight + translatedOffset) + ' Z');
                                            break;
                                        case startBpLoop + 4:
                                            linePath.setAttribute('d', 'M' + barX1 + ', ' + pieceHeight + ' L' + bar2X1 + ', ' + (pieceHeight + translatedOffset) + ' L' + bar2X2 + ', ' + (pieceHeight + translatedOffset) + ' L' + barX2 + ', ' + pieceHeight + ' Z');
                                            break;
                                        case startBpLoop + 5:
                                            linePath.setAttribute('d','M' + bar2X1 + ', ' + bar2Y1 + ' L' + bar2X1 + ', ' + (pieceHeight + translatedOffset) + ' L' + bar2X2 + ', ' + (pieceHeight + translatedOffset) + ' L' + bar2X2 + ', ' + bar2Y2 + ' Z');
                                    }
                                    if(begin){
                                        if((graph.data[mainPieceLoop].length < 2 && lineLoop === 0 && bpLoop === 0) || (graph.data[mainPieceLoop].length > 1 && mainPieceLoop === 0 && bpLoop === 0)){
                                            //    selectArray.push(false);
                                            addLegendButton(lineLoop, mainPieceLoop);
                                        }
                                    }
                                    bpLoop++;
                                }
                            }else if(type === 'LINE' || type === 'AREA'){
                                linePath = document.querySelectorAll('.bxp-bar-group-' + graph.id)[lineLoop].getElementsByTagName('path')[0];
                                barPath = barGroup.getElementsByTagName('circle')[mainPieceLoop] === undefined || barGroup.getElementsByTagName('circle')[mainPieceLoop] === null ? document.createElementNS('http://www.w3.org/2000/svg','circle') : barGroup.getElementsByTagName('circle')[mainPieceLoop];
                                var emptyPath = barGroup.getElementsByTagName('circle')[mainPieceLoop] === undefined || barGroup.getElementsByTagName('circle')[mainPieceLoop] === null;
                                var lineValue = bottomBarY1 - ((Number(graph.data[mainPieceLoop][lineLoop].value) / Number(barMaxValue)) * barSvgHeight);
                                var lineCenter = ((bottomBarX1 + ((barSvgWidth / graph.data.length) * mainPieceLoop)) + barWidth);
                                barColor = graph.colors[lineLoop] !== null && graph.colors[lineLoop] !== undefined ? colorConverter(graph.colors[lineLoop], true) : '#000';
                                if(type === 'AREA'){
                                    lineCenter = bottomBarX1 + ((((bottomBarX2 - bottomBarX1) / (graph.data.length - 1))) * mainPieceLoop);
                                }
                                if(mainPieceLoop === 0 && begin){
                                    addLegendButton(lineLoop, mainPieceLoop);
                                }
                                if(emptyPath && type === 'LINE'){
                                    emptyPath = true;
                                    barPath = document.createElementNS('http://www.w3.org/2000/svg','circle');
                                    barPath.setAttribute('stroke', strokeColor);
                                    barPath.setAttribute('r',pointRadius);
                                    barPath.setAttribute('stroke-width', strokeWidth);
                                    if(lineStyling === 'HOLLOW'){
                                        barPath.setAttribute('fill', '#fff');
                                    }else{
                                        barPath.setAttribute('fill', barColor);
                                    }
                                    barGroup.appendChild(barPath);
                                }

                                if(linePath === null || linePath === undefined){
                                    linePath = document.createElementNS('http://www.w3.org/2000/svg','path');
                                    linePath.setAttribute('fill', 'none');
                                    linePath.setAttribute('stroke-width', strokeWidth);
                                    linePath.setAttribute('stroke', barColor);
                                    linePath.setAttribute('stroke-linejoin', 'miter');
                                    linePath.setAttribute('stroke-linecap', 'butt');
                                    linePath.setAttribute('stroke-opacity', strokeOpacity);
                                    if(type === 'AREA'){
                                        linePath.setAttribute('fill', barColor);
                                        linePath.setAttribute('fill-opacity', fillOpacity);
                                    }
                                    if (offset > 0) {
                                        linePath.setAttribute('style', 'filter: drop-shadow(' + (offset * 0.3) + 'px ' + (offset * 0.3) + 'px 2px #787878);');
                                    }
                                    if(lineStyling === 'DASHED'){
                                        if(linePath.getAttribute('style') !== null){
                                            linePath.setAttribute('style', linePath.getAttribute('style') + 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                                        }else{
                                            linePath.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                                        }
                                    }
                                    if(mainPieceLoop === 0){
                                        linePath.setAttribute('d','M' + lineCenter + ', ' + lineValue);
                                    }
                                    barGroup.appendChild(linePath);
                                }else{
                                    if(barMaxValue > 0){
                                        if(mainPieceLoop === 0){
                                            linePath.setAttribute('d','M' + lineCenter + ', ' + lineValue);
                                        }else{
                                            linePath.setAttribute('d', linePath.getAttribute('d') + ' L' + lineCenter + ', ' + lineValue);
                                            if(mainPieceLoop === graph.data.length - 1 && type === 'AREA'){
                                                linePath.setAttribute('d', linePath.getAttribute('d') + ' L' + bottomBarX2 + ', ' + bottomBarY1 + 'L' + bottomBarX1 + ', ' + bottomBarY1 + 'Z');
                                            }
                                        }
                                    }else{
                                        linePath.setAttribute('d','');
                                    }
                                }

                                if (pieceLengthLoop === 0 && barMaxValue > 0) {
                                    var barBoxFound = rectGroup.childNodes[mainPieceLoop] === undefined || rectGroup.childNodes[mainPieceLoop] === null;
                                    var barHoverBox = barBoxFound ? document.createElementNS('http://www.w3.org/2000/svg','rect'): rectGroup.childNodes[mainPieceLoop];
                                    var barLine = undefined;
                                    if(type === 'AREA'){
                                        barLine = lineGroup.childNodes[mainPieceLoop] === undefined || lineGroup.childNodes[mainPieceLoop] === null ? document.createElementNS('http://www.w3.org/2000/svg','line'): lineGroup.childNodes[mainPieceLoop];
                                    }
                                    barHoverBox.setAttribute('width', barSvgSectionWidth.toString());
                                    barHoverBox.setAttribute('height', barSvgHeight.toString());

                                    barHoverBox.setAttribute('y', Number((bottomBarY1 + (((textSize)) / 3)) - (divisionDistance * (divisions - 1))).toString());
                                    if(begin){
                                        barHoverBox.setAttribute('fill','#fff');
                                        barHoverBox.setAttribute('fill-opacity','0');
                                        if(touchdevice){
                                            barHoverBox.addEventListener('touchstart', function(e){
                                                if(pieceLengthLoop > 0 || ((type === 'LINE' || type === 'AREA') && !selectArray[0])){
                                                    pieceEnterOrClick(e);
                                                    if(!descriptionMouseDown){
                                                        moveDescription(e);
                                                    }
                                                    if(prevBarE !== null){
                                                        if(e.target !== prevBarE.target){
                                                            pieceLeave(prevBarE);
                                                        }
                                                    }
                                                    prevBarE = e;
                                                }
                                            });
                                            if(mainPieceLoop === 0){
                                                svg.addEventListener('mouseleave',function(){
                                                    if(pieceLengthLoop > 0 || ((type === 'LINE' || type === 'AREA') && !selectArray[0])){
                                                        hideDescription();
                                                        pieceLeave(prevBarE);

                                                    }
                                                });
                                            }
                                        }else{
                                            barHoverBox.addEventListener('mouseenter', function(e){
                                                if(pieceLengthLoop > 0 || ((type === 'LINE' || type === 'AREA') && !selectArray[0])){
                                                    pieceEnterOrClick(e);
                                                }
                                            });
                                            barHoverBox.addEventListener('mouseleave',function(e){
                                                if(pieceLengthLoop > 0 || ((type === 'LINE' || type === 'AREA') && !selectArray[0])){
                                                    pieceLeave(e);
                                                }
                                                hideDescription();
                                            });
                                            barHoverBox.addEventListener('mousemove',function(e){
                                                if(pieceLengthLoop > 0 || ((type === 'LINE' || type === 'AREA') && !selectArray[0])){
                                                    moveDescription(e);

                                                }
                                            });
                                        }
                                        if(type !== 'AREA'){
                                            barGroup.appendChild(barPath);
                                        }else{
                                            lineGroup.appendChild(barLine);
                                        }
                                        if(barBoxFound){
                                            rectGroup.appendChild(barHoverBox);
                                        }
                                        if(mainPieceLoop === dataLength - 1){
                                            svg.appendChild(rectGroup);

                                        }
                                    }
                                    if(barLine !== undefined){
                                        barLine.setAttribute('stroke', verticalBarColor);
                                        barLine.setAttribute('stroke-width', '1px');
                                        barLine.setAttribute('stroke-opacity', '0');
                                        barLine.setAttribute('y2', barLineHeight.toString());
                                        barLine.setAttribute('y1', bottomBarY1.toString());
                                    }
                                }
                                if(barMaxValue > 0){
                                    if(type === 'LINE'){
                                        barPath.setAttribute('cx',lineCenter.toString());
                                        barPath.setAttribute('cy',lineValue.toString());
                                    }else if(type === 'AREA' && barLine !== null){
                                        barLine.setAttribute('x1', ((lineCenter - ((barSvgSectionWidth + (barSvgSectionWidth / graph.data.length)) / 2)) + ((barSvgSectionWidth + (barSvgSectionWidth / graph.data.length)) / 2)).toString());
                                        barLine.setAttribute('x2', ((lineCenter - ((barSvgSectionWidth + (barSvgSectionWidth / graph.data.length)) / 2)) + ((barSvgSectionWidth + (barSvgSectionWidth / graph.data.length)) / 2)).toString());
                                    }
                                }
                            }
                            if((barText === null || barText === undefined) && lineLoop === pieceLength - 1){
                                barText = document.createElementNS('http://www.w3.org/2000/svg','text');
                                if(barName !== undefined){
                                    barText.setAttribute('font-family',fontFamily);
                                    if(labelColorAsItemColor){
                                        barText.setAttribute('fill', barColor);
                                    }else{
                                        barText.setAttribute('fill', subtextColor);
                                    }
                                    var barNameTextNode = document.createTextNode(barName);
                                    barText.appendChild(barNameTextNode);
                                    if((type !== 'LINE' && type !== 'AREA')){
                                        barGroup.appendChild(barText);
                                    }else{
                                        barTextGroup.appendChild(barText);
                                    }
                                }
                            }
                            //textCenterArray.push(barSvgSectionStartPosition);


                            pieceLengthLoop = selectArray.length > 1 ? pieceLengthLoop + 1 : pieceLengthLoop;
                            objLengthLoop = lineLoop === 0 ? objLengthLoop + 1 : objLengthLoop;
                        }
                        if(barText !== undefined && barText !== null){
                            barHoverBox = rectGroup.childNodes[mainPieceLoop];
                            barText.setAttribute('font-size', ((.50 + (textSize * .25)) * (svg.getBoundingClientRect().width * .02)).toString());
                            if(type !=='3D-BAR'){
                                translatedOffset = 0;
                            }
                            barText.setAttribute('y', Number((bottomBarY1 + barText.getBoundingClientRect().height + (svg.getBoundingClientRect().height * .01)) + translatedOffset).toString());
                            if(!isNaN(barTextSvgSectionStartPosition)){
                                barText.setAttribute('x', (((barTextSvgSectionStartPosition - (barText.getBoundingClientRect().width / 2)) + textSectionCenter) - translatedOffset).toString());
                            }
                            if(type === 'AREA'){
                                barText.setAttribute('x', ((bottomBarX1 + ((barSvgWidth / (graph.titles.length - 1)) * mainPieceLoop)) - (barText.getBoundingClientRect().width / 2)).toString());
                                if(barMaxValue > 0){
                                    barHoverBox.setAttribute('x', (barSvgSectionStartPosition - (barText.getBoundingClientRect().width / 2)).toString());
                                }
                            }else if(type === 'LINE' && barMaxValue > 0){
                                barHoverBox.setAttribute('x', (barSvgSectionStartPosition).toString());
                            }
                        }
                        if(lineLoop === pieceLength - 1 && pieceLengthLoop === 0 && type === 'STACKED-BAR'){
                            stackedTotal = document.querySelectorAll('.bxp-bar-group-' + graph.id)[mainPieceLoop].getElementsByTagName('text')[0];
                            stackedTotal.setAttribute('display','none');
                        }
                        lineLoop++;
                    }

                    mainPieceLoop++;
                }
        }else{
            boxparadeAlert('A "colors" and "titles" property is required for ' + type);
        }
        begin = false;
    }
    function addBarStyling(){
        linePath = document.createElementNS('http://www.w3.org/2000/svg','path');
        linePath.setAttribute('stroke-width', strokeWidth);
        linePath.setAttribute('stroke', strokeColor);
        linePath.setAttribute('stroke-linejoin','miter');
        linePath.setAttribute('stroke-linecap','butt');
        linePath.setAttribute('stroke-opacity',strokeOpacity);
        linePath.setAttribute('fill', barColor);
        if(lineStyling === 'DASHED'){
            linePath.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
        }
        if(touchdevice){
            linePath.addEventListener('touchstart', function(e){
                pieceEnterOrClick(e);
                if(!descriptionMouseDown){
                    moveDescription(e);
                }
                if(prevBarE !== null){
                    if(e.target !== prevBarE.target){
                        pieceLeave(prevBarE);
                    }
                }
                prevBarE = e;
            });
            if(mainPieceLoop === 0){
                chart.addEventListener('mouseleave',function(){
                    hideDescription();
                    pieceLeave(prevBarE);
                });
            }
        }else{
            linePath.addEventListener('mouseenter',function(e){
                pieceEnterOrClick(e);
            });
            linePath.addEventListener('mouseleave',function(e){
                hideDescription();
                pieceLeave(e);
            });
            linePath.addEventListener('mousemove',function(e){
                moveDescription(e);
            });
        }

    }
    var groups = document.querySelectorAll('.bxp-svg-' + graph.id + ' > g');
    function drawPie(){
        var itemLoop = 0;
        objLoop = 0;
        rotateRadians = (rotateDegrees * dataLength) * piOneEighty;
        var cosRotateRadians = Math.cos(rotateRadians);
        var sinRotateRadians = Math.sin(rotateRadians);
        prevXInner = centerX - innerRadius * cosRotateRadians;
        prevYInner = centerY - innerRadiusY * sinRotateRadians
        prevXOuter = centerX - outerRadius * cosRotateRadians;
        prevYOuter = centerY - outerRadiusY * sinRotateRadians
        prevXInnerShadow = prevXInner;
        prevYInnerShadow = (centerY - innerRadiusY * sinRotateRadians) + offset;
        prevXOuterShadow = prevXOuter;
        prevYOuterShadow = (centerY - outerRadiusY * sinRotateRadians) + offset;
        var max = 2;
        if(type !== '3D-PIE' && type !== '3D-PIE-DONUT'){
            itemLoop = 1;
        }

        threeDPiePointsArray = [];
        spiderObjectPointsArray = [];
        threeDPiePointsShadowArray = [];
        var darkerColorArray = [];
        degreeArray = [];
        updatedDegreeArray = [];
        var looped = false;
        while(itemLoop < max){
            var pieceLoop = 0;
            var threeDObjectPoints = [];
            var spiderObjectPoints = [];
            updatedDegree = 0;
            updatedSpiderDegree = 0;
            while(pieceLoop < dataLength){
                var percentage = (graph.data[objLoop][pieceLoop].value / total);
                nextOuterXPartial = 0;
                var degree = (percentage * 360);
                if(pieceLoop === 0){
                    degree = (percentage * 360)  + (rotateDegrees * dataLength);
                }
                if(!looped){
                    if(begin){
                        initialDegreeArray.push(degree);
                    }
                    degreeArray.push(degree);
                }
                var partialDegree = 0;
                var partialRadians = 0;
                if((initialDegreeArray[pieceLoop] > 180)){
                    partialDegree = degree - 180;
                    degree = 180;
                    //partialRadians = ((updatedDegree + (rotateDegrees * graph.data[objloop].length)) + 180) * (Math.PI / 180);
                    if(graph.data.length < 2){
                        partialRadians = (degreeArray[0] + 180) * piOneEighty;
                    }else{
                        partialRadians = (updatedDegree + 180) * piOneEighty;
                    }
                }
                updatedSpiderDegree = updatedDegree + ((degree + partialDegree) / 2);
                updatedDegree = updatedDegree + (degree + partialDegree);
               /* nextInnerXPartial = 0;
                nextInnerYPartial = 0;
                nextOuterXPartial = 0;
                nextOuterYPartial = 0;
                nextInnerXShadowPartial = 0
                nextInnerYShadowPartial = 0;
                nextOuterXShadowPartial = 0;
                nextOuterYShadowPartial = 0;*/
                if((initialDegreeArray[pieceLoop] > 180)){
                    var ptRadCos = Math.cos(partialRadians);
                    var ptRadSin = Math.sin(partialRadians);
                    nextInnerXPartial = centerX - innerRadius * ptRadCos;
                    nextInnerYPartial = centerY - innerRadiusY * ptRadSin;
                    nextOuterXPartial = centerX - outerRadius * ptRadCos;
                    nextOuterYPartial = centerY - outerRadiusY * ptRadSin;
                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                        nextInnerXShadowPartial = centerX - innerRadius * ptRadCos;
                        nextInnerYShadowPartial = (centerY - innerRadiusY * ptRadSin) + offset;
                        nextOuterXShadowPartial = centerX - outerRadius * ptRadCos;
                        nextOuterYShadowPartial = (centerY - outerRadiusY * ptRadSin) + offset;
                    }
                }
                radians = updatedDegree * piOneEighty;
                var cosRadians = Math.cos(radians);
                var sinRadians = Math.sin(radians);
                spiderRadians = updatedSpiderDegree * piOneEighty;
                if(pieceLoop === 0){
                    spiderRadians = (updatedDegree - (initialDegreeArray[0] / 2)) * piOneEighty;
                }
                nextInnerX = centerX - innerRadius * cosRadians;
                nextInnerY = centerY - innerRadiusY * sinRadians;
                nextOuterX = centerX - outerRadius * cosRadians;
                nextOuterY = centerY - outerRadiusY * sinRadians;
                /*spiderX = 0;
                spiderY = 0;
                spiderX2 = 0;
                spiderY2 = 0;*/
                var cosSpiderRadians = Math.cos(spiderRadians);
                var sinSpiderRadians = Math.sin(spiderRadians);
                if(labelStyling === 'SPIDER'){
                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                        spiderX = centerX - outerRadius * cosSpiderRadians;
                        //spiderY = centerY - outerRadiusY * Math.sin(spiderRadians);
                        spiderY = centerY - outerRadiusY * sinSpiderRadians + (offset / 2);
                        spiderX2 = centerX - (outerRadius * 1.2) * cosSpiderRadians;
                        //spiderY2 = centerY - (outerRadiusY * 1.2) * Math.sin(spiderRadians);
                        spiderY2 = centerY - (outerRadiusY * 1.3) * sinSpiderRadians + (offset / 2);
                    }else{
                        spiderX = centerX - outerRadius * cosSpiderRadians;
                        spiderY = centerY - outerRadiusY * sinSpiderRadians;
                        spiderX2 = centerX - (outerRadius * 1.2) * cosSpiderRadians;
                        spiderY2 = centerY - (outerRadiusY * 1.2) * sinSpiderRadians;
                    }
                }else{
                    spiderX = centerX - outerRadius * cosSpiderRadians;
                    spiderY = centerY - outerRadiusY * sinSpiderRadians;
                    spiderX2 = centerX - (outerRadius * .75) * cosSpiderRadians;
                    spiderY2 = centerY - (outerRadiusY * .75) * sinSpiderRadians;
                }
                if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                    nextInnerXShadow = nextInnerX;
                    nextInnerYShadow = (centerY - innerRadiusY * sinRadians) + offset;
                    nextOuterXShadow = nextOuterX;
                    nextOuterYShadow = (centerY - outerRadiusY * sinRadians) + offset;
                }

                var piece = document.createElementNS('http://www.w3.org/2000/svg','path');
                if(!begin){
                    if(itemLoop === 0){
                        piece = sectionBottomGroup.childNodes[pieceLoop];
                    }else{
                        piece = sectionTopGroup.childNodes[pieceLoop];
                    }
                }
                var color = graph.data[0][pieceLoop].color !== null && graph.data[0][pieceLoop].color !== undefined ? colorConverter(graph.data[0][pieceLoop].color.toString(), true) : randomizeColor();
                var darkColor = darkerColor(color);


                if(itemLoop === 0 && piece !== undefined && !isNaN(nextOuterX)){
                    darkerColorArray.push(darkColor);
                    if(partialDegree === 0 && type === '3D-PIE-DONUT'){
                        piece.setAttribute('d','M' + prevXInnerShadow + ', ' + prevYInnerShadow + ' L' + prevXOuterShadow + ', ' + prevYOuterShadow + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXShadow + ' ' + nextOuterYShadow + ' L' + nextInnerXShadow + ', ' + nextInnerYShadow + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + prevXInnerShadow + ' ' + prevYInnerShadow + ' Z');
                    }else if(partialDegree === 0 && type === '3D-PIE'){
                        piece.setAttribute('d','M' + prevXInnerShadow + ', ' + prevYInnerShadow + ' L' + prevXOuterShadow + ', ' + prevYOuterShadow + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXShadow + ' ' + nextOuterYShadow + ' Z');
                    } else if(partialDegree !== 0 && type === '3D-PIE-DONUT'){
                        piece.setAttribute('d','M' + prevXInnerShadow + ', ' + prevYInnerShadow + ' L' + prevXOuterShadow + ', ' + prevYOuterShadow + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXShadowPartial + ' ' + nextOuterYShadowPartial + ' A'+ outerRadius + ' '+ outerRadiusY +' 0 0 1 '+ nextOuterXShadow + ' '+ nextOuterYShadow +' L' + nextInnerXShadow + ', ' + nextInnerYShadow + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + nextInnerXShadowPartial + ' ' + nextInnerYShadowPartial + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + prevXInnerShadow + ' ' + prevYInnerShadow + ' Z');
                    }else{
                        piece.setAttribute('d','M' + prevXInnerShadow + ', ' + prevYInnerShadow + ' L' + prevXOuterShadow + ', ' + prevYOuterShadow + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXShadowPartial + ' ' + nextOuterYShadowPartial + ' A'+ outerRadius + ' '+ outerRadiusY +' 0 0 1 '+ nextOuterXShadow + ' '+ nextOuterYShadow + ' Z');
                    }
                  //  piece.setAttribute('fill', darkColor);
                 //   piece.setAttribute('fill-opacity', fillOpacity);
                }else if(piece !== undefined && !isNaN(nextOuterX)){
                    if(partialDegree === 0 && (type === 'PIE-DONUT' || type === '3D-PIE-DONUT')){
                        piece.setAttribute('d','M' + prevXInner + ', ' + prevYInner + ' L' + prevXOuter + ', ' + prevYOuter + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterX + ' ' + nextOuterY + ' L' + nextInnerX + ', ' + nextInnerY + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + prevXInner + ' ' + prevYInner + ' Z');
                    }else if(partialDegree === 0 && (type !== 'PIE-DONUT' && type !== '3D-PIE-DONUT')){
                        piece.setAttribute('d','M' + centerX + ', ' + centerY + ' L' + prevXOuter + ', ' + prevYOuter + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterX + ' ' + nextOuterY + ' Z');
                    } else if(partialDegree !== 0 && (type === 'PIE-DONUT' || type === '3D-PIE-DONUT')){
                        piece.setAttribute('d','M' + prevXInner + ', ' + prevYInner + ' L' + prevXOuter + ', ' + prevYOuter + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXPartial + ' ' + nextOuterYPartial + ' A'+ outerRadius + ' '+ outerRadiusY +' 0 0 1 '+ nextOuterX + ' '+ nextOuterY +' L' + nextInnerX + ', ' + nextInnerY + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + nextInnerXPartial + ' ' + nextInnerYPartial + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + prevXInner + ' ' + prevYInner + ' Z');
                    }else{
                        piece.setAttribute('d','M' + prevXInner + ', ' + prevYInner + ' L' + prevXOuter + ', ' + prevYOuter + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + nextOuterXPartial + ' ' + nextOuterYPartial + ' A'+ outerRadius + ' '+ outerRadiusY +' 0 0 1 '+ nextOuterX + ' '+ nextOuterY + ' Z');
                    }

                    if(globalIndex !== -1 && pieceLoop === globalIndex){
                        piece.setAttribute('fill', lighterColor(colorConverter(color, true)));
                    }else{
                        piece.setAttribute('fill', colorConverter(color, true));
                    }
                }
                if(piece !== undefined) {
                    if(begin){
                        if(lineStyling === 'DASHED'){
                            piece.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                        }
                        if(itemLoop === 0 && (type === '3D-PIE' || type === '3D-PIE-DONUT') && nextOuterXPartial > 0){
                            piece.setAttribute('stroke-width', Number(Number(strokeWidth.replace('px','')) + 1) + 'px');
                        }else{
                            piece.setAttribute('stroke-width', strokeWidth);
                        }
                        piece.setAttribute('stroke', strokeColor);
                        piece.setAttribute('stroke-linejoin', 'butt');
                        piece.setAttribute('stroke-linecap', 'butt');
                        piece.setAttribute('stroke-opacity', strokeOpacity);
                        piece.setAttribute('fill-opacity', fillOpacity);
                        addEventsToPiece(piece);
                    }
                    if ((type === '3D-PIE' || type === '3D-PIE-DONUT') && itemLoop === 1) {
                        if (type === '3D-PIE-DONUT') {
                            spiderObjectPoints = [spiderX, spiderY,spiderX2, spiderY2];
                            if (partialDegree !== 0) {
                                threeDObjectPoints = [prevXInner, prevYInner, prevXOuter, prevYOuter, nextOuterXPartial, nextOuterYPartial, nextOuterX, nextOuterY, nextInnerX, nextInnerY, nextInnerXPartial, nextInnerYPartial];
                            }else{
                                threeDObjectPoints = [prevXInner, prevYInner, prevXOuter, prevYOuter, nextOuterX, nextOuterY, nextInnerX, nextInnerY];
                            }
                        } else {
                            spiderObjectPoints = [spiderX, spiderY,spiderX2, spiderY2];
                            if (partialDegree !== 0) {
                                threeDObjectPoints = [prevXInner, prevYInner, prevXOuter, prevYOuter, nextOuterXPartial, nextOuterYPartial, nextOuterX, nextOuterY];
                            }else{
                                threeDObjectPoints = [prevXInner, prevYInner, prevXOuter, prevYOuter, nextOuterX, nextOuterY];
                            }
                        }
                        spiderObjectPointsArray.push(spiderObjectPoints);
                        threeDPiePointsArray.push(threeDObjectPoints);
                    } else if ((type === 'PIE' || type === 'PIE-DONUT') && itemLoop === 1) {
                        spiderObjectPointsArray.push([spiderX, spiderY,spiderX2, spiderY2]);
                    }

                    if (itemLoop === 0) {
                        if (begin) {
                            piece.setAttribute('fill', color);
                            sectionBottomGroup.appendChild(piece);
                        }
                        if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                            if (type === '3D-PIE-DONUT') {
                                if (partialDegree !== 0) {
                                    threeDObjectPoints = [prevXInnerShadow, prevYInnerShadow, prevXOuterShadow, prevYOuterShadow, nextOuterXShadowPartial, nextOuterYShadowPartial, nextOuterXShadow, nextOuterYShadow, nextInnerXShadow, nextInnerYShadow, nextInnerXShadowPartial, nextInnerYShadowPartial];
                                }else{
                                    threeDObjectPoints = [prevXInnerShadow, prevYInnerShadow, prevXOuterShadow, prevYOuterShadow, nextOuterXShadow, nextOuterYShadow, nextInnerXShadow, nextInnerYShadow];
                                }
                            } else {
                                if (partialDegree !== 0) {
                                    threeDObjectPoints = [prevXInnerShadow, prevYInnerShadow, prevXOuterShadow, prevYOuterShadow, nextOuterXShadowPartial, nextOuterYShadowPartial, nextOuterXShadow, nextOuterYShadow];
                                }else{
                                    threeDObjectPoints = [prevXInnerShadow, prevYInnerShadow, prevXOuterShadow, prevYOuterShadow, nextOuterXShadow, nextOuterYShadow];
                                }
                            }
                            threeDPiePointsShadowArray.push(threeDObjectPoints);
                            prevXInnerShadow = nextInnerXShadow;
                            prevYInnerShadow = nextInnerYShadow;
                            prevXOuterShadow = nextOuterXShadow;
                            prevYOuterShadow = nextOuterYShadow;
                        }

                    } else {
                        updatedDegreeArray.push(updatedDegree);
                        if (begin) {
                            colorArray.push(color);
                            var allBtns = document.getElementsByClassName('bxp-legend-item-container-' + graph.id);
                            if(allBtns.length < dataLength){
                                addLegendButton(pieceLoop, itemLoop);
                            }
                            var percentText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            var percentTextNode = document.createTextNode(Number(percentage * 100).toFixed(2).toString() + '%');
                            if (begin && showPercentage) {
                                percentText.appendChild(percentTextNode);
                            }
                            var updatedFontSize = ((.026 * svgRealWidth) * (1 + ((Number(textSize)) * .1))) < 9 ? 9 : ((.026 * svgRealWidth) * (1 + ((Number(textSize)) * .1)));
                            percentText.setAttribute('font-size', updatedFontSize + 'px');
                            percentText.setAttribute('font-family', fontFamily);
                            if (labelColorAsItemColor) {
                                percentText.setAttribute('fill', color);
                            } else {
                                percentText.setAttribute('fill', labelTextColor);
                            }
                            percentText.setAttribute('stroke', 'none');
                            percentText.setAttribute('style', 'cursor:default;');
                            percentTextArray.push(percentText);
                            sectionTopGroup.appendChild(piece);
                            sectionPercentGroup.appendChild(percentText);
                            if (labelStyling === 'SPIDER' && pieceLoop === dataLength - 1 && (type === 'PIE' || type === 'PIE-DONUT')) {
                                var spLoop = 0;
                                while (spLoop < dataLength) {
                                    spLeg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                    spLeg.setAttribute('stroke', strokeColor);
                                    spLeg.setAttribute('stroke-width', '0.5');
                                    spLeg.setAttribute('fill', 'none');
                                    spLeg.setAttribute('stroke-opacity', '1');
                                    sectionPercentGroup.appendChild(spLeg);
                                    spLoop++;
                                }
                            }
                        }
                        prevXInner = nextInnerX;
                        prevYInner = nextInnerY;
                        prevXOuter = nextOuterX;
                        prevYOuter = nextOuterY;
                    }
                }
                pieceLoop++;
            }
            looped = true;
            itemLoop++;
        }
        if(percentTextWidthArray.length > 0){
            percentTextResize();
        }
        if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
            loop = 0;
            var totalDegree = 0;
            if(inCount < 2){
                groups = document.querySelectorAll('.bxp-svg-' + graph.id + ' > g');
                inCount++;
            }
            var degLoop = 0;
            startDegreeArray = [];
            initialEndDegreeArray = [];
            while(degLoop < dataLength){
                var startDegree = (updatedDegreeArray[degLoop] % 360) - initialDegreeArray[degLoop] < 0 ? 360 + ((updatedDegreeArray[degLoop] % 360) - initialDegreeArray[degLoop]) : (updatedDegreeArray[degLoop] % 360) - initialDegreeArray[degLoop];
                startDegree = startDegree < 0 ? 360 + startDegree : startDegree;
                var endDegree = startDegree + initialDegreeArray[degLoop] > 360 ? (startDegree + initialDegreeArray[degLoop]) % 360 : startDegree + initialDegreeArray[degLoop];
                var startDegreeDiff = startDegree;
                var absStart = Math.abs(270 - startDegree);
                if(startDegree <= 360 && startDegree > 180){
                    startDegreeDiff = absStart;
                } else if(startDegree >= 90 && startDegree <= 180) {
                    startDegreeDiff = (270 - startDegree);
                }else{
                    startDegreeDiff = 90 + startDegree;
                }

                var endDegreeDiff = endDegree;
                if(endDegree <= 360 && endDegree > 180){
                    endDegreeDiff = absStart;
                } else if(endDegree >= 90 && endDegree <= 180) {
                    endDegreeDiff = (270 - endDegree);
                }else{
                    endDegreeDiff = 90 + endDegree;
                }
                var totalDiff = startDegreeDiff;
                if(endDegreeDiff > startDegreeDiff){
                    totalDiff = endDegreeDiff;
                }
                if((startDegree < 90 && endDegree > 90) || (endDegree > 90 && startDegree > endDegree) || (startDegree < 180 && initialDegreeArray[degLoop] > 180) ){
                    totalDiff = 720;
                }
                if(((startDegree >= 90 && startDegree <= 270) && ((endDegree < 360 && endDegree > 270) || endDegree < startDegree)) && initialDegreeArray[degLoop] < 180){
                    totalDiff = 0;
                }
                startDegreeArray.push([startDegree,degLoop,totalDiff, initialDegreeArray[degLoop]]);
                initialEndDegreeArray.push([endDegree,degLoop,totalDiff, initialDegreeArray[degLoop]]);
                if(degLoop === threeDPiePointsArray.length - 1){
                    startDegreeArray.sort(function(a,b){
                        if(a[2] > b[2]){
                            return -1;
                        }else if(a[2] < b[2]){
                            return 1;
                        }
                        return 0;
                    });

                    initialEndDegreeArray.sort(function(a,b){
                        if(a[2] > b[2]){
                            return -1;
                        }else if(a[2] < b[2]){
                            return 1;
                        }
                        return 0;
                    });
                }
                degLoop++;
            }

            while(loop < threeDPiePointsArray.length) {
                var extends180Split = false;
                var extendDegree = 0;
                if(initialDegreeArray[startDegreeArray[loop][1]] > 180){
                    extends180Split = true;
                    extendDegree = (totalDegree + degreeArray[loop]) - 180;
                }
                totalDegree = totalDegree + degreeArray[loop];
                var sectionGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                if(begin){
                    sectionOuter = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    sectionInner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    sectionLeft = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    sectionRight = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    sectionOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                    sectionInner.setAttribute('fill',colorArray[startDegreeArray[loop][1]]);
                    sectionLeft.setAttribute('fill',colorArray[startDegreeArray[loop][1]]);
                    sectionRight.setAttribute('fill',colorArray[startDegreeArray[loop][1]]);
                    addEventsToPiece(sectionOuter);
                    addEventsToPiece(sectionInner);
                    addEventsToPiece(sectionLeft);
                    addEventsToPiece(sectionRight);
                    if(lineStyling === 'DASHED'){
                        sectionOuter.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                        sectionInner.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                        sectionLeft.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                        sectionRight.setAttribute('style', 'stroke-dashoffset:80;stroke-dasharray:10 !important;');
                    }
                }else{
                    if(groups[loop + 1] !== undefined && startDegreeArray[loop][3] <= 180){
                        if(startDegreeArray[loop][0] >= 0 && startDegreeArray[loop][0] <= 90){
                            if(initialEndDegreeArray[loop][0] > 0 && initialEndDegreeArray[loop][0] <= 90){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[3];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }

                            }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionInner = groups[loop + 1].childNodes[3];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }

                            }else if(initialEndDegreeArray[loop][0] > 180 && initialEndDegreeArray[loop][0] <= 270){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[3];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }
                            }else{
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionInner = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }
                        }else if(startDegreeArray[loop][0] > 90 && startDegreeArray[loop][0] <= 180){
                            if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionInner = groups[loop + 1].childNodes[3];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }
                            }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionInner = groups[loop + 1].childNodes[3];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }
                            }else if(initialEndDegreeArray[loop][0] > 180 && initialEndDegreeArray[loop][0] <= 270){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[3];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }
                            }else{
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }

                        } else if(startDegreeArray[loop][0] > 180 && startDegreeArray[loop][0] <= 270){
                            if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionInner = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }else if(initialEndDegreeArray[loop][0] > 180 && initialEndDegreeArray[loop][0] <= 270){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[0];
                                    sectionRight = groups[loop + 1].childNodes[3];
                                    sectionInner = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }
                            }else{
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[2];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[1];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionInner = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }
                        }else{
                            if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[3];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }
                            }else if(initialEndDegreeArray[loop][0] >= 90 && initialEndDegreeArray[loop][0] <= 180){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[3];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionInner = groups[loop + 1].childNodes[2];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }
                            }else if(initialEndDegreeArray[loop][0] >= 180 && initialEndDegreeArray[loop][0] <= 270){
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[3];
                                    sectionRight = groups[loop + 1].childNodes[2];
                                    sectionInner = groups[loop + 1].childNodes[1];
                                    sectionOuter = groups[loop + 1].childNodes[0];
                                }
                            }else{
                                if(type === '3D-PIE'){
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[1];
                                }else{
                                    sectionLeft = groups[loop + 1].childNodes[2];
                                    sectionRight = groups[loop + 1].childNodes[1];
                                    sectionInner = groups[loop + 1].childNodes[0];
                                    sectionOuter = groups[loop + 1].childNodes[3];
                                }
                            }
                        }
                        if(type === '3D-PIE' && groups[loop + 1].childNodes[3] !== undefined){
                            groups[loop + 1].childNodes[3].setAttribute('d','');
                        }
                        if(sectionOuter !== undefined && sectionInner !== undefined && sectionLeft !== undefined && sectionRight !== undefined){
                            if(globalIndex !== -1 && startDegreeArray[loop][1] === globalIndex){
                                sectionOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                sectionInner.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                sectionLeft.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                sectionRight.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                            }else{
                                sectionOuter.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                sectionInner.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                sectionLeft.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                sectionRight.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                            }
                        }
                    }
                }
                if(startDegreeArray[loop][3] > 180 && !begin){
                    if(sectionInner === undefined){
                        sectionInner = savedInner;
                    }else if(sectionOuter === undefined){
                        sectionOuter = savedInner;
                    }else if(sectionLeft === undefined){
                        sectionLeft = savedInner;
                    }else if(sectionRight === undefined){
                        sectionRight = savedInner;
                    }
                    if(sectionInner === undefined){
                        sectionInner = savedOuter;
                    }else if(sectionOuter === undefined){
                        sectionOuter = savedOuter;
                    }else if(sectionLeft === undefined){
                        sectionLeft = savedOuter;
                    }else if(sectionRight === undefined){
                        sectionRight = savedOuter;
                    }
                }

                if(sectionInner !== undefined && sectionOuter !== undefined && sectionLeft !== undefined && sectionRight !== undefined && (type === '3D-PIE' || type === '3D-PIE-DONUT')){
                    if(extends180Split && threeDPiePointsShadowArray[startDegreeArray[loop][1]] !== undefined){
                        var patchGroupChildren = document.querySelector('.bxp-patchGroup-' + graph.id);
                        if(type === '3D-PIE-DONUT'){
                            if(startDegreeArray[loop][3] > 180 && !begin && groups[loop + 1] !== undefined && patchGroupChildren !== null && threeDPiePointsShadowArray[startDegreeArray[loop][1]] !== undefined){
                                if(startDegreeArray[loop][0] >= 0 && startDegreeArray[loop][0] <= 90){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[1];
                                        sectionOuter = groups[loop + 1].childNodes[0];
                                        groups[loop + 1].childNodes[4].setAttribute('d','');
                                    }else if(initialEndDegreeArray[loop][0] > 180 && initialEndDegreeArray[loop][0] <= 270){
                                        sectionLeft = groups[loop + 1].childNodes[4];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        patchGroupChildren.childNodes[0].setAttribute('d','');
                                        savedInner = groups[loop + 1].childNodes[1];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = groups[loop + 1].childNodes[3]
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[4];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[3];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                    }
                                }else if(startDegreeArray[loop][0] > 90 && startDegreeArray[loop][0] <= 180){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                        groups[loop + 1].childNodes[4].setAttribute('d','');
                                    }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                        groups[loop + 1].childNodes[4].setAttribute('d','');
                                    }else {
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[4];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                    }
                                } else if(startDegreeArray[loop][0] > 180 && startDegreeArray[loop][0] <= 270){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                        if(groups[loop + 1].childNodes[4] !== undefined){
                                            groups[loop + 1].childNodes[4].setAttribute('d','');
                                        }
                                    }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[2];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        groups[loop + 1].childNodes[1].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                        if(groups[loop + 1].childNodes[4] !== undefined){
                                            groups[loop + 1].childNodes[4].setAttribute('d','');
                                        }
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        patchGroupChildren.childNodes[0].setAttribute('d','');
                                        savedInner = groups[loop + 1].childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[3];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                        if(groups[loop + 1].childNodes[4] !== undefined){
                                            groups[loop + 1].childNodes[4].setAttribute('d','');
                                        }
                                    }
                                }else{
                                    if(initialEndDegreeArray[loop][0] >= 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[1];
                                        sectionRight = groups[loop + 1].childNodes[3];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        savedInner = groups[loop + 1].childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[0];
                                        sectionOuter = groups[loop + 1].childNodes[2];
                                        if(groups[loop + 1].childNodes[4] !== undefined){
                                            groups[loop + 1].childNodes[4].setAttribute('d','');
                                        }
                                    }else if(initialEndDegreeArray[loop][0] >= 180 && initialEndDegreeArray[loop][0] <= 270){
                                        sectionLeft = groups[loop + 1].childNodes[1];
                                        sectionRight = groups[loop + 1].childNodes[3];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        patchGroupChildren.childNodes[0].setAttribute('d','');
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        savedInner = groups[loop + 1].childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[4];
                                        sectionOuter = groups[loop + 1].childNodes[2];
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[3];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        groups[loop + 1].childNodes[2].setAttribute('d','');
                                        patchGroupChildren.childNodes[0].setAttribute('d','');
                                        savedInner = groups[loop + 1].childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[1];
                                        sectionOuter = groups[loop + 1].childNodes[4];
                                    }
                                }

                                if(threeDPiePointsShadowArray[startDegreeArray[loop][1]] !== undefined){
                                    if(globalIndex !== -1 && startDegreeArray[loop][1] === globalIndex){
                                        if(savedOuter !== undefined){
                                            savedOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                        }
                                        if(sectionOuter !== undefined){
                                            sectionOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                        }
                                        savedInner.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                        if(sectionLeft !== undefined){
                                            sectionLeft.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                        }
                                        sectionRight.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                    }else{
                                        if(savedOuter !== undefined){
                                            savedOuter.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                        }
                                        if(sectionOuter !== undefined){
                                            sectionOuter.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                        }
                                        savedInner.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                        if(sectionLeft !== undefined){
                                            sectionLeft.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                        }
                                        sectionRight.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                    }
                                    if(savedInner !== undefined){
                                        savedInner.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' A' + innerRadius + ' ' + innerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][10] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][11] + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][8] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][9] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][9] + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][10] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][11] + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] +' Z');
                                    }
                                    if(sectionLeft !== undefined){
                                        sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                    }
                                    sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][9] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][9] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' Z');
                                    sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] +' Z');
                                    savedOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' Z');
                                }
                            }else{
                                if(groups[loop + 1] !== undefined){
                                    if(groups[loop + 1].childNodes[4] !== undefined){
                                        groups[loop + 1].childNodes[4].setAttribute('d','');
                                    }
                                }
                                sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] +' Z');
                                sectionInner.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' A' + innerRadius + ' ' + innerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][10] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][11] + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][8] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][9] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][9] + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][10] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][11] + ' A'+ innerRadius + ' ' + innerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] +' Z');
                                sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][9] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][8] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][9] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' Z');
                            }
                        }else{
                            if(startDegreeArray[loop][3] > 180 && !begin && groups[loop + 1] !== undefined && patchGroupChildren !== null){
                                if(startDegreeArray[loop][0] >= 0 && startDegreeArray[loop][0] <= 90){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[0];
                                    }else if(initialEndDegreeArray[loop][0] > 180 && initialEndDegreeArray[loop][0] <= 270){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[3];
                                        sectionOuter = groups[loop + 1].childNodes[0];
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[1];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[0];
                                    }
                                }else if(startDegreeArray[loop][0] > 90 && startDegreeArray[loop][0] <= 180){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                    }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[3];
                                        sectionOuter = patchGroupChildren.childNodes[1];
                                    }else {
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        groups[loop + 1].childNodes[0].setAttribute('d','');
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[1];
                                        sectionOuter = groups[loop + 1].childNodes[3];
                                    }
                                } else if(startDegreeArray[loop][0] > 180 && startDegreeArray[loop][0] <= 270){
                                    if(initialEndDegreeArray[loop][0] >= 0 && initialEndDegreeArray[loop][0] <= 90){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = patchGroupChildren.childNodes[2];
                                    }else if(initialEndDegreeArray[loop][0] > 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = patchGroupChildren.childNodes[2];
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = patchGroupChildren.childNodes[2];
                                    }
                                }else{
                                    if(initialEndDegreeArray[loop][0] >= 90 && initialEndDegreeArray[loop][0] <= 180){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[0];

                                    }else if(initialEndDegreeArray[loop][0] >= 180 && initialEndDegreeArray[loop][0] <= 270){
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = groups[loop + 1].childNodes[0];
                                        sectionOuter = groups[loop + 1].childNodes[3];
                                    }else{
                                        sectionLeft = groups[loop + 1].childNodes[2];
                                        sectionRight = groups[loop + 1].childNodes[1];
                                        patchGroupChildren.childNodes[1].setAttribute('d','');
                                        patchGroupChildren.childNodes[2].setAttribute('d','');
                                        savedInner = patchGroupChildren.childNodes[0];
                                        savedOuter = patchGroupChildren.childNodes[2];
                                        sectionOuter = groups[loop + 1].childNodes[0];
                                        groups[loop + 1].childNodes[3].setAttribute('d','');
                                    }
                                }

                                if(globalIndex !== -1 && startDegreeArray[loop][1] === globalIndex){
                                    savedOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                    sectionOuter.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                    savedInner.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                    sectionLeft.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                    sectionRight.setAttribute('fill', colorArray[startDegreeArray[loop][1]]);
                                }else{
                                    savedOuter.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                    sectionOuter.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                    savedInner.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                    sectionLeft.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                    sectionRight.setAttribute('fill', darkerColorArray[startDegreeArray[loop][1]]);
                                }

                                sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] +' Z');
                                savedOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' Z');
                                sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                savedInner.setAttribute('d','');

                            }else{
                                sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] +' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A'+ outerRadius + ' ' + outerRadiusY + ' 0 0 0 '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' '+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] +' Z');
                                sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionInner.setAttribute('d','');
                            }
                        }
                    }else{
                        if(threeDPiePointsShadowArray[startDegreeArray[loop][1]] !== undefined){
                            if(type === '3D-PIE-DONUT'){
                                if(groups[loop + 1] !== undefined){
                                    if(groups[loop + 1].childNodes[4] !== undefined){
                                        groups[loop + 1].childNodes[4].setAttribute('d','');
                                    }
                                }
                                sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' Z');
                                sectionInner.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' A' + innerRadius + ' ' + innerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' A' + innerRadius + ' ' + innerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][7] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][6] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][7] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' Z');
                            }else{
                                sectionOuter.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' A' + outerRadius + ' ' + outerRadiusY +  ' 0 0 1 ' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ' ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' A' + outerRadius + ' ' + outerRadiusY + ' 0 0 0 ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ' ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' Z');
                                sectionInner.setAttribute('d','');
                                sectionLeft.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][3] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][2] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][3] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                                sectionRight.setAttribute('d','M' + threeDPiePointsArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][1] + ' L' + threeDPiePointsArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsArray[startDegreeArray[loop][1]][5] + ' L' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][4] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][5] + ' L'+ threeDPiePointsShadowArray[startDegreeArray[loop][1]][0] + ', ' + threeDPiePointsShadowArray[startDegreeArray[loop][1]][1] + ' Z');
                            }
                        }
                    }
                    if(begin){
                        sectionInner.setAttribute('stroke-linejoin', 'round');
                        sectionOuter.setAttribute('stroke-linejoin','round');
                        sectionLeft.setAttribute('stroke-linejoin','round');
                        sectionRight.setAttribute('stroke-linejoin','round');
                        sectionOuter.setAttribute('stroke-width',strokeWidth);
                        sectionInner.setAttribute('stroke-width',strokeWidth);
                        sectionLeft.setAttribute('stroke-width', strokeWidth);
                        sectionRight.setAttribute('stroke-width', strokeWidth);
                        sectionInner.setAttribute('fill-opacity',fillOpacity);
                        sectionLeft.setAttribute('fill-opacity',fillOpacity);
                        sectionRight.setAttribute('fill-opacity',fillOpacity);

                    }
                    sectionInner.setAttribute('stroke-opacity', strokeOpacity);
                    if(sectionLeft !== undefined){
                        sectionLeft.setAttribute('stroke-opacity',strokeOpacity);
                    }
                    sectionRight.setAttribute('stroke-opacity',strokeOpacity);
                    sectionOuter.setAttribute('fill-opacity',fillOpacity);
                    sectionOuter.setAttribute('stroke-opacity',strokeOpacity);
                    if(sectionLeft !== undefined){
                        sectionLeft.setAttribute('stroke', strokeColor);
                    }
                    sectionRight.setAttribute('stroke', strokeColor);
                    sectionOuter.setAttribute('stroke', strokeColor);
                    sectionInner.setAttribute('stroke', strokeColor);
                    if(savedOuter !== undefined){
                        savedOuter.setAttribute('fill-opacity',fillOpacity);
                    }
                    if(savedInner !== undefined){
                        savedInner.setAttribute('fill-opacity',fillOpacity);
                    }


                    if(startDegreeArray[loop][3] > 180){
                        sectionOuter.setAttribute('stroke', 'none');
                        if(savedOuter !== undefined){
                            savedOuter.setAttribute('stroke', 'none');
                        }
                    }else if(startDegreeArray[loop][3] > 0){
                        if(savedInner !== undefined){
                            savedInner.setAttribute('stroke', strokeColor);
                        }
                    }else{
                        sectionOuter.setAttribute('stroke', strokeColor);
                    }

                    if(begin){
                        sectionGroup.appendChild(sectionLeft);
                        sectionGroup.appendChild(sectionRight);
                        if(type === '3D-PIE-DONUT'){
                            sectionGroup.appendChild(sectionInner);
                        }
                        sectionGroup.appendChild(sectionOuter);
                        if(startDegreeArray[loop][3] > 180){
                            savedInner = sectionInner.cloneNode(true);
                            savedOuter = sectionOuter.cloneNode(true);
                            addEventsToPiece(savedInner);
                            addEventsToPiece(savedOuter);
                        }
                        if(begin){
                            var sectionSpare = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            sectionGroup.appendChild(sectionSpare);
                        }
                        sectionGroupArray.push(sectionGroup);
                        if(labelStyling === 'SPIDER'){
                            var spLeg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            spLeg.setAttribute('stroke', strokeColor);
                            spLeg.setAttribute('stroke-width', '0.5');
                            spLeg.setAttribute('fill', 'none');
                            spLeg.setAttribute('stroke-opacity', '1');
                            sectionSpiderLegGroup.appendChild(spLeg);
                        }
                        if(loop === threeDPiePointsArray.length - 1){
                            var addLoop = 0;
                            spiderGroup.setAttribute('class','bxp-spiderGroup-' + graph.id);
                            var sdaLength = startDegreeArray.length;
                            while(addLoop < sdaLength) {
                                svg.appendChild(sectionGroupArray[addLoop]);
                                if(addLoop === startDegreeArray.length - 1 && savedInner !== undefined && savedOuter !== undefined){
                                    var patchGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                                    var patchPiece0 = savedInner;
                                    patchGroup.appendChild(patchPiece0);
                                    addEventsToPiece(patchPiece0);
                                    var patchPiece1 = savedOuter;
                                    patchGroup.appendChild(patchPiece1);
                                    addEventsToPiece(patchPiece1);
                                    var patchPiece2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                    patchGroup.appendChild(patchPiece2);
                                    addEventsToPiece(patchPiece2);
                                    patchGroup.setAttribute('class','bxp-patchGroup-' + graph.id);
                                    svg.appendChild(patchGroup);
                                }
                                addLoop++;
                            }
                            if(labelStyling === 'SPIDER'){
                                svg.appendChild(sectionSpiderLegGroup);
                            }
                            svg.appendChild(sectionTopGroup);
                            svg.appendChild(sectionPercentGroup);
                        }
                    }
                }
                loop++;
            }
        }
        if(begin){
            begin = false;
            drawPie();
        }
    }
    function validateBoolean(value, defaultVal){
        if(typeof value === 'boolean'){
            return value;
        }
        return defaultVal;
    }
    function validateNumber(x, propertyName){
        if(isNaN(Number(x))){
            boxparadeAlert('Please use a number for the ' + propertyName + ' property.');
            return '1';
        }
        return Number(x);
    }
    function validateValue(array, value){
        if(array[0] !== undefined && array[0] !== null){
            var loop = 0;
            while(loop < array.length && value !== null && value !== undefined) {
                if(value.toUpperCase().trim() === array[loop].toUpperCase().trim()){
                    return array[loop].toUpperCase().trim();
                }
                loop++;
            }
            return array[0];
        }else{
            boxparadeAlert('Invalid Array object to validate.');
        }
    }
    function pieceEnterOrClick(e){
        activeElement = e;
        if(!mousedown || touchdevice){
            outerSelect = false;
            var element = e.target;
            var parentChildren = element.parentNode;
            var pieceContainerChildren = element.parentNode.parentNode.childNodes;
            var array = Array.prototype.slice.call(pieceContainerChildren);
            var i = array.indexOf(parentChildren);
            var value;
            var parent = element.parentNode.classList;
            var found = false;
            var loop = 0;
            if(type === '3D-PIE-DONUT' || type === '3D-PIE' || type === 'PIE-DONUT' || type === 'PIE'){
                if(parent.toString().toLowerCase().indexOf('topgroup') > -1 || parent.toString().toLowerCase().indexOf('bottomgroup') > -1 || parent.toString().toLowerCase().indexOf('percentgroup') > -1 || parent.toString().toLowerCase().indexOf('spiderleggroup') > -1 || type === 'PIE'|| type === 'PIE-DONUT'){
                    parentChildren = element.parentNode.childNodes;
                    array = Array.prototype.slice.call(parentChildren);
                    i = array.indexOf(e.currentTarget);
                    if(i > graph.data[0].length - 1){
                        i = i - graph.data[0].length;
                    }
                    if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                        while(loop < startDegreeArray.length && !found) {
                            if(startDegreeArray[loop][1] === i){
                                objI = loop + 1;
                                found = true;
                            }
                            loop++;
                        }
                    }
                }else if(parent.toString().toLowerCase().indexOf('patchgroup') > -1){
                    while(loop < startDegreeArray.length && !found) {
                        if(startDegreeArray[loop][3] > 180){
                            found = true;
                            objI = loop + 1;
                            i = startDegreeArray[loop][1];
                            element = pieceContainerChildren[objI].childNodes[0];
                        }
                        loop++;
                    }
                } else{
                    objI = i;
                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                        i = startDegreeArray[i - 1][1];
                    }
                }
                globalIndex = i;
                resetDescription(i, element);
                value = colorConverter(graph.data[0][i].color, true);
                if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                    pieceContainerChildren[0].childNodes[i].setAttribute('fill', value);
                    if(startDegreeArray[objI - 1][3] < 180){
                        pieceContainerChildren[objI].childNodes[0].setAttribute('fill', value);
                        pieceContainerChildren[objI].childNodes[1].setAttribute('fill', value);
                        pieceContainerChildren[objI].childNodes[2].setAttribute('fill', value);
                        if(pieceContainerChildren[objI].childNodes[3] !== undefined){
                            pieceContainerChildren[objI].childNodes[3].setAttribute('fill', value);
                        }
                        if(pieceContainerChildren[objI].childNodes[4] !== undefined){
                            pieceContainerChildren[objI].childNodes[4].setAttribute('fill', value);
                        }
                    }else{
                        pieceContainerChildren[objI].childNodes[0].setAttribute('fill', value);
                        pieceContainerChildren[objI].childNodes[1].setAttribute('fill', value);
                        pieceContainerChildren[objI].childNodes[2].setAttribute('fill',value);
                        if(pieceContainerChildren[objI].childNodes[3] !== undefined){
                            pieceContainerChildren[objI].childNodes[3].setAttribute('fill', value);
                        }
                        if(pieceContainerChildren[objI].childNodes[4] !== undefined){
                            pieceContainerChildren[objI].childNodes[4].setAttribute('fill', value);
                        }
                        if(labelStyling === 'SPIDER'){
                            pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[0].setAttribute('fill', value);
                            pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[1].setAttribute('fill', value);
                            pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[2].setAttribute('fill', value);
                        }else{
                            pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[0].setAttribute('fill', value);
                            pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[1].setAttribute('fill', value);
                            pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[2].setAttribute('fill', value);
                        }

                    }
                    pieceContainerChildren[pieceContainerChildren.length - 2].childNodes[i].setAttribute('fill', lighterColor(value));
                }else{
                    pieceContainerChildren[0].childNodes[i].setAttribute('fill', lighterColor(value));
                }
            }else{
                var pi;
                parentChildren = document.querySelectorAll('.bxp-bar-group-' + graph.id);
                array = Array.prototype.slice.call(parentChildren);
                i = array.indexOf(element.parentNode);
                if(type === 'LINE' || type === 'AREA'){
                    parentChildren = document.querySelectorAll('.bxp-rect-group-' + graph.id + ' > rect');
                    array = Array.prototype.slice.call(parentChildren);
                    i = array.indexOf(element);
                }
                if(graph.colors[i] !== undefined){
                    value = colorConverter(graph.colors[i], true);
                }
                var barGroupsCircles = document.querySelectorAll('.bxp-bar-group-' + graph.id + ' > circle');
                var barRectGroups = document.querySelector('.bxp-rect-group-' + graph.id);
                var barLineGroups = document.querySelector('.bxp-line-group-' + graph.id);
                if(graph.data[0].length < 2){
                    resetDescription(i, element);
                    if(type === '3D-BAR'){
                        var sqLoop = 0;
                        while(sqLoop < parentChildren[i].childNodes.length - 1){
                            if(sqLoop < parentChildren[i].childNodes.length - 2){
                                parentChildren[i].childNodes[sqLoop].setAttribute('fill', value);
                            }else{
                                parentChildren[i].childNodes[sqLoop].setAttribute('fill', lighterColor(value));
                            }
                            sqLoop++;
                        }
                    }else{
                        if(type === 'LINE'){
                            barRectGroups.childNodes[i].setAttribute('fill', graph.colors[0].toString());
                            barRectGroups.childNodes[i].setAttribute('fill-opacity', '0.1');
                        }else if(type === 'AREA'){
                            barLineGroups.childNodes[i].setAttribute('stroke-opacity', verticalBarOpacity);
                        }else{
                            parentChildren[i].childNodes[0].setAttribute('fill', lighterColor(value));
                        }
                    }
                }else{
                    resetDescription(i, element);
                    if(type !== 'LINE' && type !== 'AREA'){
                        var innerArray = Array.prototype.slice.call(element.parentNode.childNodes);
                        pi = innerArray.indexOf(element);
                        value = colorConverter(graph.colors[Math.floor(pi / 6)], true);
                    }
                    if(type === 'BAR' && graph.data[0].length > 1 || type === 'STACKED-BAR' && graph.data[0].length > 1 ){
                        value = colorConverter(graph.colors[pi], true);
                    }
                    if(type === '3D-BAR' && graph.data[0].length > 1){
                        var bars = parentChildren[i].childNodes;
                        var posStart = Math.floor(pi / 6) * 6;
                        var posEnd = posStart + 6;
                        while(posStart < posEnd){
                            if(posStart < posEnd - 1){
                                bars[posStart].setAttribute('fill', value);
                            }else{
                                bars[posStart].setAttribute('fill', lighterColor(value));
                            }
                            posStart++;
                        }

                    }else{
                        if(type === 'LINE'){
                            barRectGroups.childNodes[i].setAttribute('fill', graph.colors[0].toString());
                            barRectGroups.childNodes[i].setAttribute('fill-opacity', '0.1');
                        }else if(type === 'AREA'){
                            barLineGroups.childNodes[i].setAttribute('stroke-opacity', verticalBarOpacity);
                        }else{
                            resetDescription(i, element);
                            parentChildren[i].childNodes[pi].setAttribute('fill', lighterColor(value));
                        }
                    }
                }
            }
        }
    }
    function pieceLeave(e){
        if(e !== null && !pieceUp){
            type = graph.type !== null && graph.type !== undefined ? validateValue(typeArray, graph.type) : typeArray[0];
            leave = true;
            var element = e.target;
            var parentChildren = element.parentNode.childNodes;
            var pieceContainerChildren = element.parentNode.parentNode.childNodes;
            var array = Array.prototype.slice.call(parentChildren);
            var i = array.indexOf(e.currentTarget);
            var parent = element.parentNode.classList.toString();
            var loop = 0;
            var value = '';
            var found = false;
            if(type === '3D-PIE-DONUT' || type === '3D-PIE' || type === 'PIE-DONUT' || type === 'PIE'){
                if(!mousedown && !rotation){
                    array = Array.prototype.slice.call(pieceContainerChildren);
                    i = array.indexOf(element.parentNode);
                    if(parent.toString().toLowerCase().indexOf('topgroup') > -1 || parent.toString().toLowerCase().indexOf('bottomgroup') > -1 || parent.toString().toLowerCase().indexOf('percentgroup') > -1 || parent.toString().toLowerCase().indexOf('spiderleggroup') > -1|| type === 'PIE'|| type === 'PIE-DONUT'){
                        array = Array.prototype.slice.call(parentChildren);
                        i = array.indexOf(element);
                        if(i > graph.data[0].length - 1){
                            i = i - graph.data[0].length;
                        }
                        if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                            while(loop < startDegreeArray.length && !found) {
                                if(startDegreeArray[loop][1] === i){
                                    objI = loop + 1;
                                    found = true;
                                }
                                loop++;
                            }
                        }
                    }else if(parent.toString().toLowerCase().indexOf('patchgroup') > -1){
                        while(loop < startDegreeArray.length && !found) {
                            if(startDegreeArray[loop][3] > 180){
                                found = true;
                                objI = loop + 1;
                                i = startDegreeArray[loop][1];
                            }
                            loop++;
                        }
                    }else{
                        objI = i;
                        if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                            if(i === 0){
                                objI = i + 1;
                                i = startDegreeArray[i] === undefined ? 0 : startDegreeArray[i][1];
                            }else{
                                i = startDegreeArray[i - 1][1];
                            }
                        }
                    }
                    // resetDescription(i, element);
                    value = colorConverter(graph.data[0][i].color, true);
                    if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                        if(startDegreeArray[objI - 1] !== undefined){
                            pieceContainerChildren[0].childNodes[i].setAttribute('fill', value);
                            if(startDegreeArray[objI - 1][3] < 180){
                                pieceContainerChildren[objI].childNodes[0].setAttribute('fill', darkerColor(value));
                                pieceContainerChildren[objI].childNodes[1].setAttribute('fill', darkerColor(value));
                                pieceContainerChildren[objI].childNodes[2].setAttribute('fill', darkerColor(value));
                                if(pieceContainerChildren[objI].childNodes[3] !== undefined){
                                    pieceContainerChildren[objI].childNodes[3].setAttribute('fill', darkerColor(value));
                                }
                                if(pieceContainerChildren[objI].childNodes[4] !== undefined){
                                    pieceContainerChildren[objI].childNodes[4].setAttribute('fill', darkerColor(value));
                                }
                            }else{
                                pieceContainerChildren[objI].childNodes[0].setAttribute('fill', darkerColor(value));
                                pieceContainerChildren[objI].childNodes[1].setAttribute('fill', darkerColor(value));
                                pieceContainerChildren[objI].childNodes[2].setAttribute('fill', darkerColor(value));
                                if(pieceContainerChildren[objI].childNodes[3] !== undefined){
                                    pieceContainerChildren[objI].childNodes[3].setAttribute('fill', darkerColor(value));
                                }
                                if(pieceContainerChildren[objI].childNodes[4] !== undefined){
                                    pieceContainerChildren[objI].childNodes[4].setAttribute('fill', darkerColor(value));
                                }
                                if(labelStyling === 'SPIDER'){
                                    if(pieceContainerChildren[pieceContainerChildren.length - 4] !== undefined){
                                        pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[0].setAttribute('fill', darkerColor(value));
                                        pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[1].setAttribute('fill', darkerColor(value));
                                        pieceContainerChildren[pieceContainerChildren.length - 4].childNodes[2].setAttribute('fill', darkerColor(value));
                                    }
                                }else{
                                    if(pieceContainerChildren[pieceContainerChildren.length - 3] !== undefined){
                                        pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[0].setAttribute('fill', darkerColor(value));
                                        pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[1].setAttribute('fill', darkerColor(value));
                                        pieceContainerChildren[pieceContainerChildren.length - 3].childNodes[2].setAttribute('fill', darkerColor(value));
                                    }
                                }
                            }
                            pieceContainerChildren[pieceContainerChildren.length - 2].childNodes[i].setAttribute('fill', value);
                        }
                    }else{
                        pieceContainerChildren[0].childNodes[i].setAttribute('fill', value);
                    }
                }
            }else{
                parentChildren = document.querySelectorAll('.bxp-bar-group-' + graph.id);
                array = Array.prototype.slice.call(parentChildren);
                i = array.indexOf(element.parentNode);
                if(graph.colors[i] !== undefined){
                    value = colorConverter(graph.colors[i], true);
                }
                if(type === 'LINE' || type === 'AREA'){
                    parentChildren = document.querySelectorAll('.bxp-rect-group-' + graph.id + ' > rect');
                    array = Array.prototype.slice.call(parentChildren);
                    i = array.indexOf(element);
                }
                var barRectGroups = document.querySelector('.bxp-rect-group-' + graph.id);
                var barLineGroups = document.querySelector('.bxp-line-group-' + graph.id);
                if(graph.data[0].length < 2){
                    if(type === '3D-BAR'){
                        var sqLoop = 0;
                        while(sqLoop < parentChildren[i].childNodes.length - 1){
                            if(sqLoop < parentChildren[i].childNodes.length - 2){
                                parentChildren[i].childNodes[sqLoop].setAttribute('fill', darkerColor(value));
                            }else{
                                parentChildren[i].childNodes[sqLoop].setAttribute('fill', value);
                            }
                            sqLoop++;
                        }
                    }else{
                        if(type === 'LINE'){
                            barRectGroups.childNodes[i].setAttribute('fill-opacity', '0');
                        }else if(type === 'AREA'){
                            barLineGroups.childNodes[i].setAttribute('stroke-opacity', '0');
                        }else{
                            if(parentChildren[i] !== undefined){
                                parentChildren[i].childNodes[0].setAttribute('fill', value);
                            }
                        }
                    }
                }else{
                    if(graph.colors[i] !== undefined){
                        value = colorConverter(graph.colors[i], true);
                    }
                    var innerArray = Array.prototype.slice.call(element.parentNode.childNodes);
                    var pi = innerArray.indexOf(element);
                    if((type === 'BAR' && graph.data[0].length > 1) || (type === 'STACKED-BAR' && graph.data[0].length > 1) ){
                        value = colorConverter(graph.colors[pi], true);
                    }
                    if(type === '3D-BAR' && graph.data[0].length > 1){
                        var bars = parentChildren[i].childNodes;
                        var posStart = Math.floor(pi / 6) * 6;
                        var colorI = Math.floor(pi / 6);
                        value = colorConverter(graph.colors[colorI], true);
                        var posEnd = posStart + 6;
                        while(posStart < posEnd){
                            if(posStart < posEnd - 1){
                                bars[posStart].setAttribute('fill', darkerColor(value));
                            }else{
                                bars[posStart].setAttribute('fill', value);
                            }
                            posStart++;
                        }

                    }else{
                        if(type === 'LINE'){
                            barRectGroups.childNodes[i].setAttribute('fill-opacity', '0');
                        }else if(type === 'AREA'){
                            barLineGroups.childNodes[i].setAttribute('stroke-opacity', '0');
                        }else{
                            parentChildren[i].childNodes[pi].setAttribute('fill', value);
                        }
                    }
                }
            }
        }
        pieceUp = false;
    }
    function resetDescription(x,target){
        if(showDescription){
            clearTimeout(descriptionTimer);
            descriptionContainer.style.display = 'block';
            var parent = target.parentNode;
            setTimeout(function(){
                descriptionContainer.style.opacity = '1';
            },0);
            var loop = 0;
            var descriptionLength = descriptionContainer.childNodes.length;
            while(loop < descriptionLength){
                descriptionContainer.removeChild(descriptionContainer.childNodes[0]);
                loop++;
            }
            var descriptionValueArray = [];
            var descriptionPercentArray = [];
            var descriptionColorArray = [];
            var descriptionNamesArray = [];
            var descriptionTitlesArray = [];
            var pi;
            if(type === '3D-PIE-DONUT' || type === '3D-PIE' || type === 'PIE-DONUT' || type === 'PIE'){
                descriptionValueArray.push(validateNumber(graph.data[0][x].value, 'value'));
                descriptionPercentArray.push(Number((graph.data[0][x].value / totalArray[0]) * 100).toFixed(2) + '%');
                descriptionColorArray.push(colorConverter(graph.data[0][x].color, false));
                parent = target.parentNode;

                if(graph.names !== undefined){
                    if(graph.names.length === graph.data[0].length){
                        loop = 0;
                        while(loop < graph.data[0].length){
                            if(graph.names[loop] === undefined){
                                descriptionNamesArray.push('name ' + (loop + 1));
                            }else{
                                descriptionNamesArray.push(graph.names[loop]);
                            }
                            loop++;
                        }
                    }
                }
            }else{
                loop = 0;
                var innerArray = Array.prototype.slice.call(target.parentNode.childNodes);
                pi = innerArray.indexOf(target);
                if(graph.data[0].length > 1){
                    if(type === 'LINE' || type === 'AREA'){
                        while(loop < graph.data[x].length){
                            descriptionValueArray.push(validateNumber(graph.data[x][loop].value, 'value'));
                            descriptionPercentArray.push(Number((graph.data[x][loop].value / totalArray[0]) * 100).toFixed(2) + '%');
                            descriptionColorArray.push(colorConverter(graph.colors[loop], true));
                            loop++;
                        }
                        parent = target;
                    }else{
                        if(type === '3D-BAR'){
                            var initI = Math.ceil((innerArray.length - 1) / 6);
                            while(loop < initI){
                                descriptionValueArray.push(validateNumber(graph.data[x][loop].value, 'value'));
                                descriptionPercentArray.push(Number((graph.data[x][loop].value / totalArray[0]) * 100).toFixed(2) + '%');
                                descriptionColorArray.push(colorConverter(graph.colors[loop], true));
                                loop++;
                            }
                        }else{
                            if(type === 'STACKED-BAR'){
                                while(loop < innerArray.length - 2){
                                    descriptionValueArray.push(validateNumber(graph.data[x][loop].value, 'value'));
                                    descriptionPercentArray.push(Number((graph.data[x][loop].value / totalArray[0]) * 100).toFixed(2) + '%');
                                    descriptionColorArray.push(colorConverter(graph.colors[loop], true));
                                    loop++;
                                }
                            }else{
                                while(loop < innerArray.length - 1){
                                    descriptionValueArray.push(validateNumber(graph.data[x][loop].value, 'value'));
                                    descriptionPercentArray.push(Number((graph.data[x][loop].value / totalArray[0]) * 100).toFixed(2) + '%');
                                    descriptionColorArray.push(colorConverter(graph.colors[loop], true));
                                    loop++;
                                }
                            }
                            parent = target.parentNode;
                        }
                    }
                    loop = 0;
                    while(loop < graph.names.length){
                        descriptionNamesArray.push(graph.names[loop]);
                        loop++;
                    }
                }else{
                    if(type === 'LINE' || type === 'AREA'){
                        descriptionValueArray.push(validateNumber(graph.data[x][0].value, 'value'));
                        descriptionPercentArray.push(Number((graph.data[x][0].value / totalArray[0]) * 100).toFixed(2) + '%');
                        descriptionColorArray.push(colorConverter(graph.colors[0], true));
                        parent = target;
                        loop = 0;
                        while(loop < graph.data[0].length){
                            descriptionNamesArray.push(graph.names[loop]);
                            loop++;
                        }
                    }else{
                        descriptionValueArray.push(validateNumber(graph.data[x][0].value, 'value'));
                        descriptionColorArray.push(colorConverter(graph.colors[x], true));
                        descriptionPercentArray.push(Number((graph.data[x][0].value / totalArray[0]) * 100).toFixed(2) + '%');
                        parent = target.parentNode;
                        loop = 0;
                        while(loop < graph.data.length){
                            descriptionNamesArray.push(graph.names[loop]);
                            loop++;
                        }
                    }
                }

            }
            loop = 0;
            if(type === 'LINE' || type === '3D-BAR' || type === 'BAR' || type === 'AREA' || type === 'STACKED-BAR'){
                while(loop < graph.data.length){
                    descriptionTitlesArray.push(graph.titles[loop]);
                    loop++;
                }
            }else{
                while(loop < graph.data[0].length){
                    descriptionTitlesArray.push(graph.titles[loop]);
                    loop++;
                }
            }
            loop = 0;
            while(loop < descriptionValueArray.length){
                var descriptionPercentFormat = description.replace(/\$percent/g, descriptionPercentArray[loop]);
                var desValue = descriptionValueArray[loop].toLocaleString();
                var prefix = '';
                var suffix = ''
                if(valueType === 'USD') {
                    prefix = '$';
                }else if(valueType === 'EUR'){
                    prefix = '\u20Ac';
                }else if(valueType === 'JPY'){
                    prefix = '\u00A5';
                }else if(valueType === 'NONE'){
                    prefix = '';
                }else{
                    suffix = valueType;
                }
                var descriptionValueFormat = descriptionPercentFormat.replace(/\$value/g, prefix + desValue + suffix);
                var descriptionTitlesFormat = descriptionValueFormat.replace(/\$title/g, descriptionTitlesArray[loop]);
                if(type === '3D-BAR' || type === 'BAR' || type === 'LINE' || type === 'AREA' || type === 'STACKED-BAR'){
                    descriptionTitlesFormat = descriptionValueFormat.replace(/\$title/g, descriptionTitlesArray[x]);
                }
                var titlesArray = Array.prototype.slice.call(document.querySelectorAll('.bxp-bar-group-' + graph.id));
                if(type === 'LINE' || type === 'AREA'){
                    titlesArray = Array.prototype.slice.call(document.querySelectorAll('.bxp-rect-group-' + graph.id + ' > rect'));
                }else if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
                    titlesArray = Array.prototype.slice.call(document.querySelectorAll('.bxp-svg-' + graph.id + ' > g'));
                }
                var tIndex = titlesArray.indexOf(parent);
                if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                    if(tIndex === titlesArray.length - 1 || tIndex === titlesArray.length - 2 || tIndex === 0){
                        titlesArray = Array.prototype.slice.call(parent.childNodes);
                        tIndex = titlesArray.indexOf(target);
                    }
                }
                // descriptionTitlesFormat = descriptionValueFormat.replace(/\$title/g, descriptionTitlesArray[tIndex]);

                var descriptionFormat = '';
                if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
                    descriptionFormat = descriptionTitlesFormat.replace(/\$name/g, descriptionNamesArray[x]);
                }else if((type === 'BAR' && graph.data[0].length < 2) || (type === '3D-BAR' && graph.data[0].length < 2) ){
                    descriptionFormat = descriptionTitlesFormat.replace(/\$name/g, descriptionNamesArray[tIndex]);
                }else{
                    descriptionFormat = descriptionTitlesFormat.replace(/\$name/g, descriptionNamesArray[loop]);
                }
                var descriptionBox = document.createElement('span');
                if((loop !== Math.floor(pi / 6) && graph.data[0].length > 1 && type === '3D-BAR') || (loop !== pi  && graph.data[0].length > 1 && type === 'BAR') || (loop !== pi && graph.data[0].length > 1 && type === 'STACKED-BAR')){
                    descriptionBox.style.opacity = '0.7';
                }

                var descriptionLeftContainer = document.createElement('span');
                var descriptionColorBox = document.createElement('span');
                descriptionColorBox.setAttribute('style','background-color:' + colorConverter(descriptionColorArray[loop],true) + ';opacity:'+ fillOpacity+';');
                descriptionLeftContainer.appendChild(descriptionColorBox);
                descriptionBox.appendChild(descriptionLeftContainer);
                var descriptionRightContainer = document.createElement('span');
                var descriptionTextBox = document.createElement('span');
                var descriptionTextNode = document.createTextNode(descriptionFormat);
                descriptionTextBox.appendChild(descriptionTextNode);
                descriptionRightContainer.appendChild(descriptionTextBox);
                descriptionBox.appendChild(descriptionRightContainer);
                descriptionContainer.appendChild(descriptionBox);
                loop++;
            }
            // setTimeout(function(){
            //   descriptionContainer.style.width = descriptionBox.getBoundingClientRect().width + 'px';
            // },15);
        }
    }
    function hideDescription(){
        descriptionContainer.style.opacity = '0';
        descriptionTimer = setTimeout(function(){
            descriptionContainer.removeAttribute('style');
        },300);

    }
    function moveDescription(e){
        var parent = document.querySelector('.bxp-chart-container-' + graph.id);
        var separationX = 15;
        var separationY = 20;
        var left;
        var top;
        var rightSideOfDescription;
        if(touchdevice && e.touches){
            left = (e.touches[0].clientX - parent.getBoundingClientRect().left) + separationX;
            top = (e.touches[0].clientY - parent.getBoundingClientRect().top) + separationY;
            rightSideOfDescription = descriptionContainer.getBoundingClientRect().width + e.touches[0].clientX;
        }else{
            left = (e.clientX - parent.getBoundingClientRect().left) + separationX;
            top = (e.clientY - parent.getBoundingClientRect().top) + separationY;
            rightSideOfDescription = descriptionContainer.getBoundingClientRect().width + e.clientX;
        }
        if(descriptionMouseDown){
            top = top - 30;
        }
        var parentDistanceFromLeft =  parent.getBoundingClientRect().left + parent.getBoundingClientRect().width;
        if((rightSideOfDescription) > (parentDistanceFromLeft - separationX)){
            if(touchdevice && e.touches){
                left = (((e.touches[0].clientX - parent.getBoundingClientRect().left) - descriptionContainer.getBoundingClientRect().width) - 5);
            }else{
                left = (((e.clientX - parent.getBoundingClientRect().left) - descriptionContainer.getBoundingClientRect().width) - 5);
            }
        }
        if(left < 0){
            left = 0;
        }
        descriptionContainer.style.left = left + 'px';
        descriptionContainer.style.top = top + 'px';
    }
    function shiftPiePiece(i,element){
        var group = svg.childNodes;
        var initI = i;
        var parent = element.parentNode.classList;
        var parentChildren = element.parentNode.childNodes;
        var array = Array.prototype.slice.call(parentChildren);
        var x = array.indexOf(element);
        var found = false;
        var loop = 0;
        if(parent.toString().toLowerCase().indexOf('topgroup') === -1 && parent.toString().toLowerCase().indexOf('bottomgroup') === -1 && parent.toString().toLowerCase().indexOf('percentgroup') === -1 && parent.toString().toLowerCase().indexOf('spiderleggroup') === -1 && parent.toString().toLowerCase().indexOf('patchgroup') === -1 && parent.toString().toLowerCase().indexOf('bxp-legend-item') === -1 && (type === '3D-PIE' || type === '3D-PIE-DONUT')){
            parentChildren = element.parentNode.parentNode.childNodes;
            array = Array.prototype.slice.call(parentChildren);
            initI = array.indexOf(element.parentNode);
            objI = initI;
            initI = startDegreeArray[initI - 1][1];
        }else if(parent.toString().toLowerCase().indexOf('patchgroup') > -1 || parent.toString().toLowerCase().indexOf('bxp-legend-item') > -1){
            while(loop < startDegreeArray.length && !found) {
                if(startDegreeArray[loop][3] > 180 && parent.toString().toLowerCase().indexOf('patchgroup') > -1){
                    found = true;
                    objI = loop + 1;
                    initI = startDegreeArray[loop][1];
                }else if(startDegreeArray[loop][1] === i){
                    objI = loop + 1;
                }
                loop++;
            }
        }else if((parent.toString().toLowerCase().indexOf('percentgroup') > -1 || parent.toString().toLowerCase().indexOf('spiderleggroup') > -1) && i > (startDegreeArray.length - 1)){
            i = i - startDegreeArray.length;
            initI = i;
            objI = startDegreeArray[i][1] + 1;
        }else{
            while(loop < startDegreeArray.length ) {
                if(startDegreeArray[loop][1] === initI){
                    objI = loop + 1;
                }
                loop++;
            }
        }
        if(selectArray.length > 1){
            if(selectArray[initI] === true){
                selectArray.splice(initI,1,false);
            }else{
                selectArray.splice(initI,1,true);
            }
            var degreeLoop = 0;
            var tempDegree = 0;
            while(degreeLoop < (initI + 1)) {
                if(degreeLoop === initI){
                    tempDegree = tempDegree + (degreeArray[degreeLoop] / 2);
                }else{
                    tempDegree = tempDegree + (degreeArray[degreeLoop]);
                }
                degreeLoop++;
            }
            if(type === 'PIE' || type === 'PIE-DONUT'){
                objI = 0;
            }
            if(initI === 0 && rotateDegrees >= 0){
                tempDegree = (initialDegreeArray[0] + (Math.abs(rotateDegrees) * graph.data[0].length)) - (initialDegreeArray[0] / 2);
            }else if(initI === 0 && rotateDegrees < 0){
                tempDegree = (initialDegreeArray[0] + (rotateDegrees * graph.data[0].length)) - (initialDegreeArray[0] / 2);
            }
            var radians = tempDegree * (Math.PI / 180);
            var xPos = centerX - (outerRadius * .8) * Math.cos(radians);
            var yPos = centerY - (outerRadiusY * .8) * Math.sin(radians);
            xPosNew = (centerX - outerRadius * Math.cos(radians)) - xPos;
            yPosNew = (centerY - outerRadiusY * Math.sin(radians)) - yPos;
            var prevPos = 0;
            if(tempDegree !== 360){
                if(selectArray[initI]){
                    if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[0].childNodes[initI]);
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 1].childNodes[initI]);
                        if(labelStyling === 'SPIDER'){
                            animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 3].childNodes[initI]);
                        }
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 2].childNodes[initI]);
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[objI]);
                        if(startDegreeArray[objI - 1][3] > 180){
                            //  animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[objI].childNodes[3]);
                            if(labelStyling === 'SPIDER'){
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 4].childNodes[0]);
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 4].childNodes[1]);
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 4].childNodes[2]);
                            }else{
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 3].childNodes[0]);
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 3].childNodes[1]);
                                animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 3].childNodes[2]);
                            }
                        }else{

                        }
                        // animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[objI].childNodes[2]);
                    }else{
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[0].childNodes[initI]);
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 1].childNodes[initI]);
                        animate([0,0],[xPosNew,yPosNew],'PIE-PIECE',180,group[group.length - 1].childNodes[initI + selectArray.length]);
                    }
                }else{
                    if(type === '3D-PIE-DONUT' || type === '3D-PIE') {
                        prevPos = group[0].childNodes[initI].getAttribute('transform').toString().split(/[(,)]/g);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[0].childNodes[initI]);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 1].childNodes[initI]);
                        if(labelStyling === 'SPIDER'){
                            animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 3].childNodes[initI]);
                        }
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 2].childNodes[initI]);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[objI]);
                        // animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[objI].childNodes[1]);
                        if(startDegreeArray[objI - 1][3] < 180){
                            //  animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[objI].childNodes[3]);
                        }else{
                            if(labelStyling === 'SPIDER'){
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 4].childNodes[0]);
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 4].childNodes[1]);
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 4].childNodes[2]);
                            }else{
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 3].childNodes[0]);
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 3].childNodes[1]);
                                animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 3].childNodes[2]);
                            }
                        }
                        // animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[objI].childNodes[2]);
                    }else{
                        prevPos = group[objI].childNodes[i].getAttribute('transform').toString().split(/[(,)]/g);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[0].childNodes[initI]);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 1].childNodes[initI]);
                        animate([Number(prevPos[1].toString().trim()),Number(prevPos[2].toString().trim())],[0,0],'PIE-PIECE',180,group[group.length - 1].childNodes[initI + selectArray.length]);

                    }

                }
                animationComplete = false;
            }
            legendSelect = false;
        }
    }
    function colorConverter(x, solid){
        var newColor = 'rgba(34,34,34,1)';
        x = x === undefined ? 'transparent' : x;
        if(x.toLowerCase() === 'transparent'){
            newColor = 'transparent';
        }
        if(x.toString().charAt(0).toUpperCase() === '#'){
            try{
                var colorSplit = x.toString().toLowerCase().split('');
                var valid = false;
                var newColorArray = [];
                if(x.toString().length > 4){
                    valid = true;
                }else if (x.toString().length === 4){
                    valid = true;
                    var clone = colorSplit[1];
                    colorSplit.push(clone);
                    var clone1 = colorSplit[2];
                    colorSplit.push(clone1);
                    var clone2 = colorSplit[3];
                    colorSplit.push(clone2);
                }else{
                    boxparadeAlert('Invalid color. "HEX" values should be 4 or 7 units long. (e.g.,#000,#000000)');
                }
                if(valid){
                    var loop0 = 0;
                    var colorValue = 0;
                    var colorPosition = 0;
                    var colorPosition2 = 0;
                    while(loop0 < 6){
                        if(loop0 % 2 === 0){
                            switch(colorSplit[loop0 + 1]) {
                                case '0':
                                    colorValue = 0;
                                    colorPosition = 1;
                                    break;
                                case '1':
                                    colorValue = 17;
                                    colorPosition = 2;
                                    break;
                                case '2':
                                    colorValue = 34;
                                    colorPosition = 3;
                                    break;
                                case '3':
                                    colorValue = 51;
                                    colorPosition = 4;
                                    break;
                                case '4':
                                    colorValue = 68;
                                    colorPosition = 5;
                                    break;
                                case '5':
                                    colorValue = 85;
                                    colorPosition = 6;
                                    break;
                                case '6':
                                    colorValue = 102;
                                    colorPosition = 7;
                                    break;
                                case '7':
                                    colorValue = 119;
                                    colorPosition = 8;
                                    break;
                                case '8':
                                    colorValue = 136;
                                    colorPosition = 9;
                                    break;
                                case '9':
                                    colorValue = 153;
                                    colorPosition = 10;
                                    break;
                                case 'a':
                                    colorValue = 170;
                                    colorPosition = 11;
                                    break;
                                case 'b':
                                    colorValue = 187;
                                    colorPosition = 12;
                                    break;
                                case 'c':
                                    colorValue = 204;
                                    colorPosition = 13;
                                    break;
                                case 'd':
                                    colorValue = 221;
                                    colorPosition = 14;
                                    break;
                                case 'e':
                                    colorValue = 238;
                                    colorPosition = 15;
                                    break;
                                case 'f':
                                    colorValue = 255;
                                    colorPosition = 16;
                                    break;
                                default:
                                    colorValue = 0;
                                    colorPosition = 1;
                                    break;
                            }
                        }else{
                            switch(colorSplit[loop0 + 1]) {
                                case '0':
                                    colorPosition2 = 1;
                                    break;
                                case '1':
                                    colorPosition2 = 2;
                                    break;
                                case '2':
                                    colorPosition2 = 3;
                                    break;
                                case '3':
                                    colorPosition2 = 4;
                                    break;
                                case '4':
                                    colorPosition2 = 5;
                                    break;
                                case '5':
                                    colorPosition2 = 6;
                                    break;
                                case '6':
                                    colorPosition2 = 7;
                                    break;
                                case '7':
                                    colorPosition2 = 8;
                                    break;
                                case '8':
                                    colorPosition2 = 9;
                                    break;
                                case '9':
                                    colorPosition2 = 10;
                                    break;
                                case 'a':
                                    colorPosition2 = 11;
                                    break;
                                case 'b':
                                    colorPosition2 = 12;
                                    break;
                                case 'c':
                                    colorPosition2 = 13;
                                    break;
                                case 'd':
                                    colorPosition2 = 14;
                                    break;
                                case 'e':
                                    colorPosition2 = 15;
                                    break;
                                case 'f':
                                    colorPosition2 = 16;
                                    break;
                            }
                            colorValue = colorValue - (colorPosition - colorPosition2);
                            newColorArray.push(colorValue);
                            colorValue = 0;
                            colorPosition = 0;
                            colorPosition2 = 0;
                        }
                        loop0++;
                    }
                    newColor = 'rgba(' + newColorArray.join(',') + ',1)';
                }
            }catch(e){
                boxparadeAlert('Invalid color. "HEX" values should be 4 or 7 units long. (e.g.,#000,#000000)');
            }
        }else{
            if(x.toString() !== 'transparent'){
                var splitColor = x.toString().toLowerCase().split(/[(,)]/g);
                if(solid){
                    newColor = 'rgb(' + splitColor[1] + ',' + splitColor[2] + ',' + splitColor[3] + ')';
                }else{
                    newColor = 'rgb(' + splitColor[1] + ',' + splitColor[2] + ',' + splitColor[3] + ','+ splitColor[4] +')';
                }
            }
        }
        if(newColor.toString().substring(0, 3).toUpperCase() !== 'RGB' && newColor !== 'transparent'){
            boxparadeAlert('Invalid color. Make sure colors are of "RGB" or "HEX"')
        }
        return newColor;
    }
    function randomizeColor() {
        var loop = 0;
        var colorArray = [];
        var color = 'rgba(';
        while(loop < 3){
            var rand = Math.floor(Math.random() * 255) + 51;
            colorArray.push(rand);
            loop++;
        }
        color = color + colorArray.join(',').toString() +',1)'
        return color;
    }
    function piecemouseup(e){
        pieceUp = true;
        if(!rotation && (e.which === 0 || e.button === 0)){
            var element = e.target;
            var parentChildren = element.parentNode.childNodes;
            var array = Array.prototype.slice.call(parentChildren);
            var i = array.indexOf(e.currentTarget);
            if(downElem !== null){
                element = downElem;
            }
            clearTimeout(mouseuptimer);
            mouseuptimer = setTimeout(function(){
                shiftPiePiece(i, element);
            }, 0);
            downElem = null;
        }
    }
    function darkerColor(x){
        var loop = 0;
        var darkerColor = '';
        var rgb = -1;
        var rgbSplit = x.toString().trim().split(/[(,);]/g);
        if(x.charAt(0) === '#' && ((x.toString().length === 4 || x.toString().length === 7))){
            rgb = 0;
        }else if(x.charAt(0).toString().trim().toUpperCase() === 'R' && (rgbSplit.length === 5 || rgbSplit.length === 6)){
            rgb = 1;
        }else{
            boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
            return false;
        }
        if(rgb === 0){
            while(loop < x.length){
                if(loop === 0 && x.charAt(loop) === '#'){
                    darkerColor = darkerColor + '#';
                }else{
                    var letter = x.charAt(loop).toLowerCase();
                    switch(letter){
                        case 'a':
                            darkerColor = darkerColor + '9';
                            break;
                        case 'b':
                            darkerColor = darkerColor + 'a';
                            break;
                        case 'c':
                            darkerColor = darkerColor + 'b';
                            break;
                        case 'd':
                            darkerColor = darkerColor + 'c';
                            break;
                        case 'e':
                            darkerColor = darkerColor + 'd';
                            break;
                        case 'f':
                            darkerColor = darkerColor + 'e';
                            break;
                        case '9':
                            darkerColor = darkerColor + '8';
                            break;
                        case '8':
                            darkerColor = darkerColor + '7';
                            break;
                        case '7':
                            darkerColor = darkerColor + '6';
                            break;
                        case '6':
                            darkerColor = darkerColor + '5';
                            break;
                        case '5':
                            darkerColor = darkerColor + '4';
                            break;
                        case '4':
                            darkerColor = darkerColor + '3';
                            break;
                        case '3':
                            darkerColor = darkerColor + '2';
                            break;
                        case '2':
                            darkerColor = darkerColor + '1';
                            break;
                        case '1':
                            darkerColor = darkerColor + '0';
                            break;
                        case '0':
                            darkerColor = darkerColor + '0';
                            break;
                        default:
                            darkerColor = darkerColor + '1';
                            break;
                    }
                }
                loop++;
            }
        }else{
            var r = Number(rgbSplit[1]);
            var g = Number(rgbSplit[2]);
            var b = Number(rgbSplit[3]);
            var a = 1;
            var alpha = false;
            if(!isNaN(Number(rgbSplit[1])) && !isNaN(Number(rgbSplit[2])) && !isNaN(Number(rgbSplit[3]))){
                if(rgbSplit.length === 6 && isNaN(a)){
                    boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
                    return false;
                }else if(rgbSplit.length === 6 && !isNaN(a)){
                    if(a >= 0 && a <= 1){
                        alpha = true;
                    }else{
                        boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX. (Use either a 1 or decimal lower than 1 and higher than 0)');
                        return false;
                    }
                }
                r = r - 17 < 0 ? 0 : r - 17;
                g = g - 17 < 0 ? 0 : g - 17;
                b = b - 17 < 0 ? 0 : b - 17;
                if(alpha){
                    darkerColor = 'rgba('+r + ',' + g + ','+ b + ')';
                }else{
                    darkerColor = 'rgb('+r + ',' + g + ','+ b + ')';
                }
            }else{
                boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
                return false;
            }
        }
        return darkerColor;
    }
    function lighterColor(x){
        var loop = 0;
        var lighterColor = '';
        var rgb = -1;
        var rgbSplit = x.toString().trim().split(/[(,);]/g);
        if(x.charAt(0) === '#' && ((x.toString().length === 4 || x.toString().length === 7))){
            rgb = 0;
        }else if(x.charAt(0).toString().trim().toUpperCase() === 'R' && (rgbSplit.length === 5 || rgbSplit.length === 6)){
            rgb = 1;
        }else{
            boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
            return false;
        }
        if(rgb === 0){
            while(loop < x.length){
                if(loop === 0 && x.charAt(loop) === '#'){
                    lighterColor = lighterColor + '#';
                }else{
                    var letter = x.charAt(loop).toLowerCase();
                    switch(letter){
                        case 'a':
                            lighterColor = lighterColor + 'b';
                            break;
                        case 'b':
                            lighterColor = lighterColor + 'c';
                            break;
                        case 'c':
                            lighterColor = lighterColor + 'd';
                            break;
                        case 'd':
                            lighterColor = lighterColor + 'e';
                            break;
                        case 'e':
                            lighterColor = lighterColor + 'f';
                            break;
                        case '0':
                            lighterColor = lighterColor + '1';
                            break;
                        case '9':
                            lighterColor = lighterColor + 'a';
                            break;
                        case '8':
                            lighterColor = lighterColor + '9';
                            break;
                        case '7':
                            lighterColor = lighterColor + '8';
                            break;
                        case '6':
                            lighterColor = lighterColor + '7';
                            break;
                        case '5':
                            lighterColor = lighterColor + '6';
                            break;
                        case '4':
                            lighterColor = lighterColor + '5';
                            break;
                        case '3':
                            lighterColor = lighterColor + '4';
                            break;
                        case '2':
                            lighterColor = lighterColor + '3';
                            break;
                        case '1':
                            lighterColor = lighterColor + '2';
                            break;
                        default:
                            lighterColor = lighterColor + '1';
                            break;
                    }
                }
                loop++;
            }
        }else{
            var r = Number(rgbSplit[1]);
            var g = Number(rgbSplit[2]);
            var b = Number(rgbSplit[3]);
            var a = 1;
            //var alpha = false;
            if(!isNaN(Number(rgbSplit[1])) && !isNaN(Number(rgbSplit[2])) && !isNaN(Number(rgbSplit[3]))){
                if(rgbSplit.length === 6 && isNaN(a)){
                    boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
                    return false;
                }else if(rgbSplit.length === 6 && !isNaN(a)){
                    if(a >= 0 && a <= 1){
                      //  alpha = true;
                    }else{
                        boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX. (Use either a 1 or decimal lower than 1 and higher than 0)');
                        return false;
                    }
                }
                r = r + 17 > 255 ? 255 : r + 17;
                g = g + 17 > 255 ? 255 : g + 17;
                b = b + 17 > 255 ? 255 : b + 17;
                /* if(alpha){
                     lighterColor = 'rgba('+r + ',' + g + ','+ b + ',' + a +')';
                 }else{*/
                lighterColor = 'rgb('+r + ',' + g + ','+ b +')';
                // }
            }else{
                boxparadeAlert('Invalid color value: "' + x + '". Color must be RGB or HEX.');
                return false;
            }
        }
        return lighterColor;
    }
    function boxparadeAlert(message){
        var boxparadeErrorBox = document.querySelector('#boxparadeErrorBox');
        if(boxparadeErrorBox !== null && boxparadeErrorBox !== undefined){
            boxparadeErrorBox.parentNode.removeChild(boxparadeErrorBox);
        }
        var errorBox = document.createElement('div');
        var font = graph.fontfamily !== null && graph.fontfamily !== undefined ? graph.fontfamily : '\'Arial\', sans-serif';
        errorBox.setAttribute('id','boxparadeErrorBox');
        var errorSVGDiv = document.createElement('div');
        var errorSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
        errorSVG.setAttribute('width','50');
        errorSVG.setAttribute('height','50');
        errorSVGDiv.appendChild(errorSVG);
        var errorPATH = document.createElementNS('http://www.w3.org/2000/svg','path');
        errorPATH.setAttribute('stroke', '#fff');
        errorPATH.setAttribute('stroke-width', '5px');
        errorPATH.setAttribute('stroke-linecap', 'round');
        errorPATH.setAttribute('stroke-linejoin','round');
        errorPATH.setAttribute('fill','none');
        errorPATH.setAttribute('d','M5, 35 L5, 15 L15, 5 L35, 5 L45, 15 L45, 35 L35, 45 L15, 45 Z M25, 15 L25, 27 M25, 35 L25, 35');
        errorSVG.appendChild(errorPATH);
        errorBox.appendChild(errorSVGDiv);
        var errorMessageContainer = document.createElement('div');
        var errorMessage = document.createElement('span');
        errorMessage.setAttribute('font-family', font);
        var errorMessageNode = document.createTextNode(message);
        errorMessage.appendChild(errorMessageNode);
        errorMessageContainer.appendChild(errorMessage);
        errorBox.appendChild(errorMessageContainer);

        if(body[0] !== null && body[0] !== undefined){
            body[0].appendChild(errorBox);
        }else{
            alert('No <body> tag identified.');
        }

    }
    function animate(fromArray,toArray,type,timing,element){
        var animationInterval;
        var frameTime = 15;
        var incrementSplit = timing / (frameTime);
        var loop = 1;
        var reverse = false;
        if(animationComplete){
            animationInterval = setInterval(function(){
                var incrementX = ((toArray[0] / incrementSplit) * loop) + fromArray[0];
                var incrementY = ((toArray[1] / incrementSplit) * loop) + fromArray[1];
                if((fromArray[0] !== 0 && toArray[0] === 0) && (fromArray[1] !== 0 && toArray[1] === 0)){
                    incrementX = fromArray[0] - ((fromArray[0] / incrementSplit) * loop);
                    incrementY = fromArray[1] - ((fromArray[1] / incrementSplit) * loop);
                    reverse = true;
                }
                if(loop === 1 && reverse){
                    setTimeout(function(){
                        if(element !== undefined){
                            element.setAttribute('transform','translate(0, 0)');
                        }
                    }, timing);
                }
                if(type.toString().toUpperCase() === 'PIE-PIECE' && incrementX !== toArray[0]  && incrementY !== toArray[1] ){
                    if(element !== undefined && !isNaN(incrementX) && !isNaN(incrementY)){
                        element.setAttribute('transform','translate('+ incrementX +', '+ incrementY  +')');
                    }else{
                        return false;
                    }
                }
                if(loop === (incrementSplit - 1)){
                    animationComplete = true;
                    clearInterval(animationInterval);
                }
                loop++;
            }, frameTime);
        }
    }
    function addLegendButton(pathLoop, sectionLoop){
        var legendBoundaryDiv = document.createElement('div');
        var legendItemContainer = document.createElement('button');
        // legendItemContainer.setAttribute('class','bxp-legend-btn-' + graph.id);
        legendItemContainer.addEventListener('click', function(e){
            var allLegendBtns = document.querySelectorAll('.bxp-legend-item-container-' + graph.id);
            var allLegendBtnColors = document.querySelectorAll('.bxp-legend-item-container-' + graph.id + ' > span > span:first-of-type > span');
            var array = Array.prototype.slice.call(allLegendBtns);
            var i = array.indexOf(e.currentTarget);
            if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
                if(type === '3D-PIE' || type === '3D-PIE-DONUT'){
                    legendSelect = true;
                }
                shiftPiePiece(i, allLegendBtns[i].childNodes[0]);

            }else{
                if(allLegendBtnColors[i].style.backgroundColor){
                    allLegendBtnColors[i].removeAttribute('style');
                }else{
                    allLegendBtnColors[i].style.backgroundColor = 'transparent';
                }
                showHideBar(i);
            }
        });
        legendBoundaryDiv.appendChild(legendItemContainer);
        legendItemContainer.setAttribute('class','bxp-legend-item-container-'+ graph.id);
        var legendItemBoxContainer = document.createElement('span');
        legendItemContainer.appendChild(legendItemBoxContainer);
        var legendColorBoxContainer = document.createElement('span');
        var legendColorBox = document.createElement('span');
        legendColorBox.setAttribute('class','bxp-legend-item-'+ graph.id + '-'+ pathLoop);
        legendColorBoxContainer.appendChild(legendColorBox);
        legendItemBoxContainer.appendChild(legendColorBoxContainer);
        var legendTextContainer = document.createElement('span');
        var legendText = document.createElement('span');
        var name = '';
        if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
            name = graph.data[0][pathLoop].name !== null && graph.data[0][pathLoop].name !== undefined ? graph.data[0][pathLoop].name : 'item ' + (pathLoop + 1);
            legendStylingText = legendStylingText + '.bxp-legend-item-'+ graph.id + '-' + pathLoop + '{background-color:'+ colorArray[pathLoop] +';transition:background-color 200ms ease;}';
        }else{
            if(graph.data[0].length > 1){
                name = graph.names[pathLoop];
                legendStylingText = legendStylingText + '.bxp-legend-item-'+ graph.id + '-' + pathLoop + '{background-color:'+ graph.colors[pathLoop] +';transition:background-color 200ms ease;}';
            }else{
                if(type === 'LINE' || type === 'AREA'){
                    name = graph.names[sectionLoop];
                }else{
                    name = graph.titles[sectionLoop];
                }
                legendColorBox.setAttribute('class','bxp-legend-item-'+ graph.id + '-'+ sectionLoop);
                legendStylingText = legendStylingText + '.bxp-legend-item-'+ graph.id + '-' + sectionLoop + '{background-color:'+ graph.colors[sectionLoop] +';transition:background-color 200ms ease;}';
            }
        }
        var legendTextNode = document.createTextNode(name);
        legendText.appendChild(legendTextNode);
        legendTextContainer.appendChild(legendText);
        legendItemBoxContainer.appendChild(legendTextContainer);
        var legendContainer = document.querySelector('.bxp-legend-' + graph.id);
        if(legendContainer !== null && legendContainer !== undefined){
            legendContainer.appendChild(legendBoundaryDiv);
        }
        var valid = false;
        if(type === '3D-PIE' || type === '3D-PIE-DONUT' || type === 'PIE' || type === 'PIE-DONUT'){
            if(pathLoop === (dataLength - 1)){
                valid = true;
            }
        }else{
            if((sectionLoop === dataLength - 1 && dataLength > 1) || (dataLength < 2) || pathLoop === graph.data[0].length - 1){
                valid = true;
            }
        }
        if(valid){
            var legendStyling = document.createTextNode(legendStylingText);
            styling.appendChild(legendStyling);
        }
    }
    function showHideBar(i){
        var barGroupList = document.querySelectorAll('.bxp-bar-group-' + graph.id);
        if(barGroupList[0] !== null && barGroupList[0] !== undefined){
            if(selectArray[i]){
                selectArray.splice(i,1,false);
            }else{
                selectArray.splice(i,1,true);
            }
            var loop = 0;
            while(loop < barGroupList.length){
                if(graph.data[0].length > 1){
                    if(type === '3D-BAR'){
                        var startPos = i * 6;
                        var endPos = startPos + 6;
                        while(startPos < endPos){
                            if(selectArray[i]){
                                barGroupList[loop].childNodes[startPos].setAttribute('display','none');
                            }else{
                                if(barGroupList[loop].childNodes[startPos].getAttribute('display') !== null){
                                    barGroupList[loop].childNodes[startPos].removeAttribute('display');
                                }
                            }
                            startPos++;
                        }
                    }else{
                        var inLoop = 0;
                        if(type === 'LINE' || type === 'AREA'){
                            if(selectArray[loop]){
                                while(inLoop < barGroupList[loop].childNodes.length){
                                    barGroupList[loop].childNodes[inLoop].setAttribute('display','none');
                                    inLoop++;
                                }
                            }else{
                                while(inLoop < barGroupList[loop].childNodes.length){
                                    if(barGroupList[loop].childNodes[inLoop].getAttribute('display') !== null){
                                        barGroupList[loop].childNodes[inLoop].removeAttribute('display');
                                    }
                                    inLoop++;
                                }
                            }
                            while(inLoop < barGroupList[loop].childNodes.length - 1){
                                if(selectArray[inLoop]){
                                    barGroupList[loop].childNodes[inLoop].setAttribute('display','none');
                                }else{
                                    if(barGroupList[loop].childNodes[inLoop].getAttribute('display') !== null){
                                        barGroupList[loop].childNodes[inLoop].removeAttribute('display');
                                    }
                                }
                                inLoop++;
                            }
                        }else{
                            while(inLoop < barGroupList[loop].childNodes.length){
                                if(selectArray[inLoop]){
                                    barGroupList[loop].childNodes[inLoop].setAttribute('display','none');
                                }else{
                                    if(barGroupList[loop].childNodes[inLoop].getAttribute('display') !== null){
                                        barGroupList[loop].childNodes[inLoop].removeAttribute('display');
                                    }
                                }
                                inLoop++;
                            }
                        }
                    }
                }else{
                    var sqLoop = 0;
                    if(type === 'LINE' || type === 'AREA'){
                        while(sqLoop < barGroupList[loop].childNodes.length){
                            if(selectArray[loop]){
                                barGroupList[loop].childNodes[sqLoop].setAttribute('display','none');
                            }else{
                                if(barGroupList[loop].childNodes[sqLoop].getAttribute('display') !== null){
                                    barGroupList[loop].childNodes[sqLoop].removeAttribute('display');
                                }
                            }
                            sqLoop++;
                        }
                    }else{
                        while(sqLoop < barGroupList[loop].childNodes.length){
                            if(selectArray[loop]){
                                barGroupList[loop].childNodes[sqLoop].setAttribute('display','none');
                            }else{
                                if(barGroupList[loop].childNodes[sqLoop].getAttribute('display') !== null){
                                    barGroupList[loop].childNodes[sqLoop].removeAttribute('display');
                                }
                            }
                            sqLoop++;
                        }
                    }
                }
                loop++;
            }
        }
        drawBarLine();
    }
    function fixPiece(){
        if(rotation && mousedown){
            var group = svg.childNodes;
            var sltLoop = 0;
            while(sltLoop < selectArray.length){
                var itemIndex = 0;
                var inLoop = 0;
                if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                    while(inLoop < startDegreeArray.length){
                        if(startDegreeArray[inLoop][1] === sltLoop){
                            itemIndex = inLoop + 1;
                        }
                        inLoop++;
                    }
                }else{
                    itemIndex = sltLoop;
                }
                if(selectArray[sltLoop] === true){
                    var degreeLoop = 0;
                    var tempDegree = 0;
                    while(degreeLoop < (sltLoop + 1)) {
                        if(degreeLoop === sltLoop){
                            tempDegree = tempDegree + (degreeArray[degreeLoop] / 2)
                        }else{
                            tempDegree = tempDegree + (degreeArray[degreeLoop]);
                        }
                        degreeLoop++;
                    }
                    if(sltLoop === 0 && rotateDegrees > 0){
                        tempDegree = (initialDegreeArray[0] + (Math.abs(rotateDegrees) * graph.data[0].length)) - (initialDegreeArray[0] / 2);
                    }else if(sltLoop === 0 && rotateDegrees < 0){
                        tempDegree = (initialDegreeArray[0] + (rotateDegrees * graph.data[0].length)) - (initialDegreeArray[0] / 2);
                    }
                    var radians = tempDegree * (Math.PI / 180);
                    var xPos = centerX - (outerRadius * .8) * Math.cos(radians);
                    var yPos = centerY - (outerRadiusY * .8) * Math.sin(radians);
                    xPosNew = (centerX - outerRadius * Math.cos(radians)) - xPos;
                    yPosNew = (centerY - outerRadiusY * Math.sin(radians)) - yPos;
                    if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                        group[0].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        group[group.length - 2].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        group[group.length - 1].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        if(labelStyling === 'SPIDER'){
                            group[group.length - 3].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        }
                        group[itemIndex].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        // group[itemIndex].childNodes[1].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        if(startDegreeArray[itemIndex - 1][3] < 180 && group[itemIndex].childNodes.length > 2 && type === '3D-PIE-DONUT'){
                            //  group[itemIndex].childNodes[3].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        }else if(startDegreeArray[itemIndex - 1][3] < 180 && group[itemIndex].childNodes.length > 2 && type === '3D-PIE'){
                            //    group[itemIndex].childNodes[2].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        }else{
                            if(labelStyling === 'SPIDER'){
                                group[group.length - 4].childNodes[0].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                                group[group.length - 4].childNodes[1].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                                group[group.length - 4].childNodes[2].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                            }else{
                                group[group.length - 3].childNodes[0].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                                group[group.length - 3].childNodes[1].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                                group[group.length - 3].childNodes[2].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                            }

                        }

                        // group[itemIndex].childNodes[2].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                    }else{
                        group[0].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        group[group.length - 1].childNodes[sltLoop].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        if(labelStyling === 'SPIDER'){
                            group[group.length - 1].childNodes[sltLoop + selectArray.length].setAttribute('transform','translate('+ xPosNew +', '+ yPosNew  +')');
                        }
                    }
                }else{
                    if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                            group[0].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                            group[group.length - 2].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                            group[group.length - 1].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                            if(labelStyling === 'SPIDER'){
                                group[group.length - 3].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                            }
                            group[itemIndex].setAttribute('transform','translate(0 0)');
                    }else{
                        group[0].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                        group[group.length - 1].childNodes[sltLoop].setAttribute('transform','translate(0 0)');
                        if(labelStyling === 'SPIDER'){
                            group[group.length - 1].childNodes[sltLoop + selectArray.length].setAttribute('transform','translate(0 0)');
                        }
                    }
                }
                sltLoop++;
            }
        }
    }
    function resizeGraph(){
        type = graph.type !== null && graph.type !== undefined ? validateValue(typeArray, graph.type) : typeArray[0];
        clearTimeout(resizeTimer);
        svgSize();
        chart = document.querySelector('.bxp-chart-' + graph.id);
        if(chart !== null && svg !== null && chart !== undefined && svg !== undefined) {
            if ((type === '3D-PIE-DONUT' || type === '3D-PIE' || type === 'PIE-DONUT' || type === 'PIE')) {
                centerX = svg.getBoundingClientRect().width / 2;
                centerY = svg.getBoundingClientRect().height / 2;
                outerRadius = centerX * .5;
                outerRadiusY = centerY * .62;
                if (type === '3D-PIE' || type === '3D-PIE-DONUT') {
                    outerRadius = centerX * .6;
                    outerRadiusY = centerY * (.45 + (tilt * .025));
                }
                innerRadius = (ringSize * .01) * outerRadius;
                innerRadiusY = (ringSize * .01) * outerRadiusY;
                drawPie();
                var percentLoop = 0;
                svgRightMax = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width;
                svgLeftMax = svg.getBoundingClientRect().left;
                percentTextWidthArray = [];
                var updatedFontSize = ((.026 * svg.getBoundingClientRect().width) * (1 + ((Number(textSize)) * .1))) < 9 ? 9 : ((.026 * svg.getBoundingClientRect().width) * (1 + ((Number(textSize)) * .1)));
                while (percentLoop < percentTextArray.length) {
                    percentTextArray[percentLoop].setAttribute('font-size', updatedFontSize + 'px');
                    percentTextWidthArray.push(percentTextArray[percentLoop].getBoundingClientRect().width);
                    percentLoop++;
                }
                percentTextResize();
            } else {
                drawBarLine();
            }
        }
    }
    function svgSize(){
        chart = document.querySelector('.bxp-chart-' + graph.id);
        if(chart !== null && svg !== null){
            svgWidth = Number(svgWidth);
            var findSvg = document.querySelector('.bxp-svg-' + graph.id);
            if(findSvg !== null && findSvg !== undefined){
                svg = findSvg;
            }
            svgRealWidth = chart.getBoundingClientRect().width * .96;
            if(type === '3D-PIE-DONUT' || type === '3D-PIE'){
                if(svgWidth === 1){
                    svg.setAttribute('width',  Number(svgRealWidth * .8).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .56).toString());
                }else if(svgWidth === 3){
                    svg.setAttribute('width',  Number(svgRealWidth).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .7).toString());
                }else{
                    svg.setAttribute('width',  Number(svgRealWidth * .9).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .63).toString());
                }
            }else if(type === 'PIE-DONUT' || type === 'PIE'){
                if(svgWidth === 1){
                    svg.setAttribute('width', Number(svgRealWidth * .6).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .48).toString());
                }else if(svgWidth === 3){
                    svg.setAttribute('width',  Number(svgRealWidth).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .8).toString());
                }else{
                    svg.setAttribute('width',  Number(svgRealWidth * .8).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .64).toString());
                }
            } else if(type === 'LINE' || type === '3D-BAR' || type === 'BAR' || type === 'AREA' || type === 'STACKED-BAR'){
                if(svgWidth === 1){
                    svg.setAttribute('width', Number(svgRealWidth * .8).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .32).toString());
                }else if(svgWidth === 3){
                    svg.setAttribute('width',  Number(svgRealWidth).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .4).toString());
                }else{
                    svg.setAttribute('width',  Number(svgRealWidth * .9).toString());
                    svg.setAttribute('height', Number(svgRealWidth * .36).toString());
                }
            }
            mainWidth = svg.getBoundingClientRect().width * .94;
        }else{
            return false;
        }
    }
    function piemovement(e) {
        if(spinnable){
            if(type === '3D-PIE-DONUT' || type === '3D-PIE' || type === 'PIE-DONUT' || type === 'PIE'){
                if(touchdevice){
                    if(e.touches){
                        newRotationPositionX = e.touches[0].clientX;
                        newRotationPositionY = e.touches[0].clientY;
                    }
                }else{
                    newRotationPositionX = e.clientX;
                    newRotationPositionY = e.clientY;
                }

                deltaX = rotX - newRotationPositionX;
                deltaY = rotY - newRotationPositionY;
                if(!rotation){
                    if(((Math.abs(Math.abs(initialRotationPositionX) - Math.abs(newRotationPositionX)) + Math.abs(Math.abs(initialRotationPositionY) - Math.abs(newRotationPositionY))) > 2) && mousedown){
                        rotation = true;
                    }
                }
                if(rotation && mousedown){
                    rad = Math.atan2(deltaY, deltaX);
                    deg = (rad * (pie180));
                    if(rotation){
                        rotateDegrees = (initialRotDegrees + (deg - initRotDegree)) / dataLength;
                        drawPie();
                    }
                }
            }
            if(leave && mousedown){
               // moveDescription(e);
            }
        }
    }
    function piedown(e) {
        rotY = svg.getBoundingClientRect().top + (svg.getBoundingClientRect().height / 2);
        rotX = svg.getBoundingClientRect().left + (svg.getBoundingClientRect().width / 2);
        if(touchdevice){
            initialRotationPositionY = e.touches[0].clientY;
            initialRotationPositionX = e.touches[0].clientX;
        }else{
            initialRotationPositionY = e.clientY;
            initialRotationPositionX = e.clientX;
        }
        deltaX = rotX - initialRotationPositionX;
        deltaY = rotY - initialRotationPositionY;
        rad = Math.atan2(deltaY, deltaX);
        initRotDegree =  (rad * (pie180));
        downElem = e.target;
        mousedown = true;
    }
    function addEventsToPiece(piece){
        if(touchdevice){
            piece.addEventListener('touchstart', function(e){
                e.preventDefault();
                if(prevTouchCount === 0){
                    prevOverflowStyling = document.body.style.overflow.toString();
                    prevTouchStyling = document.body.style.touchAction.toString();
                    prevTouchCount++;
                }
                piedown(e);
                pieceEnterOrClick(e);
                if(!descriptionMouseDown){
                    moveDescription(e);
                }
            });
            piece.addEventListener('touchmove', function(e){
                if(!descriptionMouseDown){
                    moveDescription(e);
                }
            });
            piece.addEventListener('touchend', function(e){
                piecemouseup(e);
            });

        }else{
            piece.addEventListener('mouseenter', function(e){
                pieceEnterOrClick(e);
            });
            piece.addEventListener('mouseup', function(e){
                piecemouseup(e);
            });
            piece.addEventListener('mousemove', function(e){
                moveDescription(e);
            });
            piece.addEventListener('mousedown', function(e){
                piedown(e);
            });

        }
        piece.addEventListener('mouseleave', function(e){
            if(!mousedown){
                hideDescription();
            }
            pieceLeave(e);
        });
    }
    function percentTextResize(){
        var percentLoop = 0;
        while(percentLoop < percentTextArray.length) {
            var ptLoop = percentTextArray[percentLoop];
            if(labelStyling === 'SPIDER'){
                var sectionPGroup = sectionPercentGroup.childNodes[percentLoop + (degreeArray.length)];
                var sectionPLeg = sectionSpiderLegGroup.childNodes[percentLoop];
                if(spiderObjectPointsArray[percentLoop][0] > ((svgRealWidth / 2) - percentTextWidthArray[percentLoop])){
                    if(type === 'PIE' || type === 'PIE-DONUT'){
                        if(sectionPGroup !== undefined) {
                            sectionPGroup.setAttribute('d', 'M' + spiderObjectPointsArray[percentLoop][0] + ', ' + spiderObjectPointsArray[percentLoop][1] + ' L' + spiderObjectPointsArray[percentLoop][2]  + ', ' + spiderObjectPointsArray[percentLoop][3]  + ' L' + Number(spiderObjectPointsArray[percentLoop][2]  + 15).toString() + ', ' + spiderObjectPointsArray[percentLoop][3]);
                        }
                    }else{
                        if(sectionPLeg !== undefined) {
                            sectionPLeg.setAttribute('d', 'M' + spiderObjectPointsArray[percentLoop][0] + ', ' + spiderObjectPointsArray[percentLoop][1] + ' L' + spiderObjectPointsArray[percentLoop][2]  + ', ' + spiderObjectPointsArray[percentLoop][3]  + ' L' + Number(spiderObjectPointsArray[percentLoop][2]  + 15).toString() + ', ' + spiderObjectPointsArray[percentLoop][3]);
                        }
                    }
                    ptLoop.setAttribute('x', spiderObjectPointsArray[percentLoop][2]);
                }else{
                    if(type === 'PIE' || type === 'PIE-DONUT'){
                        if(sectionPGroup !== undefined) {
                            sectionPGroup.setAttribute('d', 'M' + spiderObjectPointsArray[percentLoop][0] + ', ' + spiderObjectPointsArray[percentLoop][1] + ' L' + spiderObjectPointsArray[percentLoop][2] + ', ' + spiderObjectPointsArray[percentLoop][3] + ' L' + Number(spiderObjectPointsArray[percentLoop][2] - 15).toString() + ', ' + spiderObjectPointsArray[percentLoop][3]);
                        }
                    }else{
                        if(sectionPLeg !== undefined) {
                            sectionPLeg.setAttribute('d', 'M' + spiderObjectPointsArray[percentLoop][0] + ', ' + spiderObjectPointsArray[percentLoop][1] + ' L' + spiderObjectPointsArray[percentLoop][2]  + ', ' + spiderObjectPointsArray[percentLoop][3] + ' L' + Number(spiderObjectPointsArray[percentLoop][2] - 15).toString()  + ', ' + spiderObjectPointsArray[percentLoop][3]);
                        }
                    }
                    ptLoop.setAttribute('x', spiderObjectPointsArray[percentLoop][2] - percentTextWidthArray[percentLoop]);
                }
                ptLoop.setAttribute('y', spiderObjectPointsArray[percentLoop][3] - 3);
            }else{
                ptLoop.setAttribute('x', (spiderObjectPointsArray[percentLoop][2] - (percentTextWidthArray[percentLoop] / 2)));
                ptLoop.setAttribute('y', spiderObjectPointsArray[percentLoop][3] + (flatTextHeight / 4));
            }
            percentLoop++;
        }
    }
    function isTouchDevice(){
        try{
            var touchdevice = document.createEvent('TouchEvent');
            return true;
        }catch(e){
            return false;
        }
    }
}
