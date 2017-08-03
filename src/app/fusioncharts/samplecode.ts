var  fcDemos = {};

fcDemos['ex1'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex1.html'\n})\n\nexport class Ex1 {\n    demoId = 'ex1';\n    dataSource = {\n        chart: {\n            "caption": "Harry\\'s SuperMart",\n            subCaption: "Top 5 stores in last month by revenue",\n            numberPrefix: "$",\n            theme: "ocean"\n        },\n        data:[{\n            label: "Bakersfield Central",\n            value: "880000"\n        },\n        {\n            label: "Garden Groove harbour",\n            value: "730000"\n        },\n        {\n            label: "Los Angeles Topanga",\n            value: "590000"\n        },\n        {\n            label: "Compton-Rancho Dom",\n            value: "520000"\n        },\n        {\n            label: "Daly City Serramonte",\n            value: "330000"\n        }]\n    };\n}`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="column2d"\n    dataFormat="json"\n    [dataSource]=dataSource >\n</fusioncharts>`
};

fcDemos['ex2'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex2.html'\n})\n\nexport class Ex2 {\n    demoId = 'ex2';\n    dataSource = {\n        chart: {\n            caption: "Age profile of website visitors",\n            subcaption: "Last Year",\n            startingangle: "120",\n            showlabels: "0",\n            showlegend: "1",\n            enablemultislicing: "0",\n            slicingdistance: "15",\n            showpercentvalues: "1",\n            showpercentintooltip: "0",\n            plottooltext: "Age group : $label Total visit : $datavalue",\n            theme: "ocean"\n        },\n        data: [\n            {\n                label: "Teenage",\n                value: "1250400"\n            },\n            {\n                label: "Adult",\n                value: "1463300"\n            },\n            {\n                label: "Mid-age",\n                value: "1050700"\n            },\n            {\n                label: "Senior",\n                value: "491000"\n            }\n        ]\n    }\n}\n`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="pie3d"\n    [dataSource]=dataSource >\n</fusioncharts>`
};

fcDemos['ex3'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex3.html'\n})\n\nexport class Ex3 {\n    demoId = 'ex3';\n    dataSource = {\n        "chart": {\n            "caption": "Actual Revenues, Targeted Revenues & Profits",\n            "subcaption": "Last year",\n            "xaxisname": "Month",\n            "yaxisname": "Amount (In USD)",\n            "numberprefix": "$",\n            "theme": "ocean",\n        },\n        "categories": [\n            {\n                "category": [\n                    {\n                        "label": "Jan"\n                    },\n                    {\n                        "label": "Feb"\n                    },\n                    {\n                        "label": "Mar"\n                    },\n                    {\n                        "label": "Apr"\n                    },\n                    {\n                        "label": "May"\n                    },\n                    {\n                        "label": "Jun"\n                    },\n                    {\n                        "label": "Jul"\n                    },\n                    {\n                        "label": "Aug"\n                    },\n                    {\n                        "label": "Sep"\n                    },\n                    {\n                        "label": "Oct"\n                    },\n                    {\n                        "label": "Nov"\n                    },\n                    {\n                        "label": "Dec"\n                    }\n                ]\n            }\n        ],\n        "dataset": [\n            {\n                "seriesname": "Actual Revenue",\n                "data": [\n                    {\n                        "value": "16000"\n                    },\n                    {\n                        "value": "20000"\n                    },\n                    {\n                        "value": "18000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "15000"\n                    },\n                    {\n                        "value": "21000"\n                    },\n                    {\n                        "value": "16000"\n                    },\n                    {\n                        "value": "20000"\n                    },\n                    {\n                        "value": "17000"\n                    },\n                    {\n                        "value": "25000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "23000"\n                    }\n                ]\n            },\n            {\n                "seriesname": "Projected Revenue",\n                "renderas": "line",\n                "showvalues": "0",\n                "data": [\n                    {\n                        "value": "15000"\n                    },\n                    {\n                        "value": "16000"\n                    },\n                    {\n                        "value": "17000"\n                    },\n                    {\n                        "value": "18000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "19000"\n                    },\n                    {\n                        "value": "20000"\n                    },\n                    {\n                        "value": "21000"\n                    },\n                    {\n                        "value": "22000"\n                    },\n                    {\n                        "value": "23000"\n                    }\n                ]\n            },\n            {\n                "seriesname": "Profit",\n                "renderas": "area",\n                "showvalues": "0",\n                "data": [\n                    {\n                        "value": "4000"\n                    },\n                    {\n                        "value": "5000"\n                    },\n                    {\n                        "value": "3000"\n                    },\n                    {\n                        "value": "4000"\n                    },\n                    {\n                        "value": "1000"\n                    },\n                    {\n                        "value": "7000"\n                    },\n                    {\n                        "value": "1000"\n                    },\n                    {\n                        "value": "4000"\n                    },\n                    {\n                        "value": "1000"\n                    },\n                    {\n                        "value": "8000"\n                    },\n                    {\n                        "value": "2000"\n                    },\n                    {\n                        "value": "7000"\n                    }\n                ]\n            }\n        ]\n    };\n}\n`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="mscombi2d"\n    [dataSource]=dataSource>\n</fusioncharts>\n`
};

fcDemos['ex4'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex4.html'\n})\n\nexport class Ex4 {\n    demoId = 'ex4';\n    dataSource = {\n        chart: {\n            caption: "Harry's SuperMart",\n            subCaption: "Top 5 stores in last month by revenue",\n            numberPrefix: "$",\n            theme: "ocean"\n        },\n        data:[{\n            label: "Bakersfield Central",\n            value: "880000"\n        },\n        {\n            label: "Garden Groove harbour",\n            value: "730000"\n        },\n        {\n            label: "Los Angeles Topanga",\n            value: "590000"\n        },\n        {\n            label: "Compton-Rancho Dom",\n            value: "520000"\n        },\n        {\n            label: "Daly City Serramonte",\n            value: "330000"\n        }]\n    };\n};\n`,
    html: `<fusioncharts\n    width="300" \n    height="200"\n    type="column2d"\n    [dataSource]=dataSource>\n</fusioncharts>\n\n<fusioncharts\n    width="300" \n    height="200"\n    type="column2d"\n    [dataSource]=dataSource>\n</fusioncharts>`
};

fcDemos['ex5'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex5.html'\n})\n\nexport class Ex5 {\n    demoId = 'ex5';\n};\n\n`,
    html: `<fusioncharts \n    dataFormat="jsonurl"\n    dataSource="../data/data.json"\n    type="column2d"\n    width="600"\n    height="400">\n</fusioncharts>\n`
};

fcDemos['ex5a'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex5a.html'\n})\n\nexport class Ex5a {\n    demoId = 'ex5a';\n};\n`,
    html: `<fusioncharts\n    dataFormat="xmlurl"\n    dataSource="data/data.xml"\n    type="column2d"\n    width="600"\n    height="400" >\n</fusioncharts>\n`
};

fcDemos['ex6'] =  {
    js: `import { Component } from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex6.html'\n})\n\nexport class Ex6 {\n    demoId = 'ex6';\n    type = "Column2D";\n    width = "600";\n    height = "300";\n    dataFormat = "json";\n    dataSource: any = {\n        chart: {\n            caption: "Harry's SuperMart",\n            subCaption: "Top 5 stores in last month by revenue",\n            numberPrefix: "$",\n            theme: "ocean"\n        },\n        data:[{\n            label: "Bakersfield Central",\n            value: "880000"\n        },\n        {\n            label: "Garden Groove harbour",\n            value: "730000"\n        },\n        {\n            label: "Los Angeles Topanga",\n            value: "590000"\n        },\n        {\n            label: "Compton-Rancho Dom",\n            value: "520000"\n        },\n        {\n            label: "Daly City Serramonte",\n            value: "330000"\n        }]\n    }\n\n    getRandomNumber = function () {\n        var max = 900000, min = 300000;\n        return Math.round(((max - min) * Math.random()) + min);\n    }\n    updateMyChartData() {\n\n        this.dataSource.data[2].label = "This Label is Updated";\n        this.dataSource.data[2].value = this.getRandomNumber();\n\n        this.dataSource.data[3].label = "This is updated as well";\n        this.dataSource.data[3].value = this.getRandomNumber();\n    }\n}\n`,
    html: `<fusioncharts\n    width={{width}}\n    height={{height}}\n    type={{type}}\n    dataFormat={{dataFormat}}\n    [dataSource]=dataSource >\n</fusioncharts>\n`
};

fcDemos['ex7'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex7.html'\n})\n\nexport class Ex7 {\n    demoId = 'ex7';\n\n    dataSource = {\n        chart: {\n            caption: "Harry's SuperMart",\n            subCaption: "Top 5 stores in last month by revenue",\n            numberPrefix: "$",\n            theme: "ocean"\n        },\n        data:[{\n            label: "Bakersfield Central",\n            value: "880000"\n        },\n        {\n            label: "Garden Groove harbour",\n            value: "730000"\n        },\n        {\n            label: "Los Angeles Topanga",\n            value: "590000"\n        },\n        {\n            label: "Compton-Rancho Dom",\n            value: "520000"\n        },\n        {\n            label: "Daly City Serramonte",\n            value: "330000"\n        }]\n    };\n    \n    selectedValue: string = "nothing";\n\n    update() {\n        var _this = this;\n        return (eve, arg) => {\n            _this.selectedValue = arg.displayValue;\n        }\n    }\n\n    events = {\n        dataPlotRollOver: this.update()\n    }\n}\n`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="column2d"\n    [dataSource]="dataSource"\n    [events]="events" >\n</fusioncharts>\n\n<p>The value that you have selected is: {{ selectedValue }}</p>`
};

fcDemos['ex8'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex8.html'\n})\n\nexport class Ex8 {\n    demoId = 'ex8';\n    dataSource = {\n        chart: {\n            caption: "Harry's SuperMart",\n            subCaption: "Top 5 stores in last month by revenue",\n            numberPrefix: "$",\n            theme: "ocean"\n        },\n        data:[{\n            label: "Bakersfield Central",\n            value: "880000"\n        },\n        {\n            label: "Garden Groove harbour",\n            value: "730000"\n        },\n        {\n            label: "Los Angeles Topanga",\n            value: "590000"\n        },\n        {\n            label: "Compton-Rancho Dom",\n            value: "520000"\n        },\n        {\n            label: "Daly City Serramonte",\n            value: "330000"\n        }]\n    };\n\n    changeBackgroundColor = function () {\n        this.dataSource.chart.bgColor = "#efefef";\n    };\n\n    changeCaptionTextAlignment = function () {\n        this.dataSource.chart.captionAlignment = "left";\n    };\n}\n`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="column2d"\n    [dataSource]="dataSource" >\n</fusioncharts>\n\n<p><a class="btn btn-default" (click)="changeBackgroundColor()">Change chart background color</a>\n    <a class="btn btn-default" (click)="changeCaptionTextAlignment()">Make Caption text left-aligned</a>\n</p>\n`
};

fcDemos['_ex9'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex9.html'\n})\n\nexport class Ex9 {\n    demoId = 'ex9';\n\n    dataSource = {\n        chart: {\n            "caption": "Sales - 2012 v 2013",\n            "numberprefix": "$",\n            "plotgradientcolor": "",\n            "bgcolor": "FFFFFF",\n            "showalternatehgridcolor": "0",\n            "divlinecolor": "CCCCCC",\n            "showvalues": "0",\n            "showcanvasborder": "0",\n            "canvasborderalpha": "0",\n            "canvasbordercolor": "CCCCCC",\n            "canvasborderthickness": "1",\n            "yaxismaxvalue": "30000",\n            "captionpadding": "30",\n            "linethickness": "3",\n            "yaxisvaluespadding": "15",\n            "legendshadow": "0",\n            "legendborderalpha": "0",\n            "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",\n            "showborder": "0"\n        },\n\n        categories: [\n            {\n                "category": [\n                    {\n                        "label": "Jan"\n                    },\n                    {\n                        "label": "Feb"\n                    },\n                    {\n                        "label": "Mar"\n                    },\n                    {\n                        "label": "Apr"\n                    },\n                    {\n                        "label": "May"\n                    },\n                    {\n                        "label": "Jun"\n                    },\n                    {\n                        "label": "Jul"\n                    },\n                    {\n                        "label": "Aug"\n                    },\n                    {\n                        "label": "Sep"\n                    },\n                    {\n                        "label": "Oct"\n                    },\n                    {\n                        "label": "Nov"\n                    },\n                    {\n                        "label": "Dec"\n                    }\n                ]\n            }\n        ],\n\n        dataset: [\n            {\n                "seriesname": "2013",\n                "data": [\n                    {\n                        "value": "22400"\n                    },\n                    {\n                        "value": "24800"\n                    },\n                    {\n                        "value": "21800"\n                    },\n                    {\n                        "value": "21800"\n                    },\n                    {\n                        "value": "24600"\n                    },\n                    {\n                        "value": "27600"\n                    },\n                    {\n                        "value": "26800"\n                    },\n                    {\n                        "value": "27700"\n                    },\n                    {\n                        "value": "23700"\n                    },\n                    {\n                        "value": "25900"\n                    },\n                    {\n                        "value": "26800"\n                    },\n                    {\n                        "value": "24800"\n                    }\n                ]\n            },\n            {\n                "seriesname": "2012",\n                "data": [\n                    {\n                        "value": "10000"\n                    },\n                    {\n                        "value": "11500"\n                    },\n                    {\n                        "value": "12500"\n                    },\n                    {\n                        "value": "15000"\n                    },\n                    {\n                        "value": "16000"\n                    },\n                    {\n                        "value": "17600"\n                    },\n                    {\n                        "value": "18800"\n                    },\n                    {\n                        "value": "19700"\n                    },\n                    {\n                        "value": "21700"\n                    },\n                    {\n                        "value": "21900"\n                    },\n                    {\n                        "value": "22900"\n                    },\n                    {\n                        "value": "20800"\n                    }\n                ]\n            }\n        ]\n    }\n}\n`,
    html: `<fusioncharts\n    width="600" \n    height="400"\n    type="msline"\n    dataFormat="json"\n    [dataSource]="dataSource" >\n</fusioncharts>\n`
};

fcDemos['ex9'] =  {
    js: `import {Component} from '@angular/core';\n\n@Component({\n    selector: 'chart',\n    templateUrl: 'ex10.html'\n})\n\nexport class Ex10 {\n    demoId = 'ex10';\n\n    logMessage = 'Hover on the plot to see the percentage of a column wrt total';\n\n    // Save the function reference in global object so that FusionCharts link can call \n    // it when called\n    globalContainer = function (msg) {\n        // Since the update is happening outside angular execution context we need \n        // the digest cycle to run to make sure that the view is updated.   \n        this.$apply (function() {\n            this.logMessage = "Percentage is  " + msg + "% of the total";\n        });\n    }\n\n    dataSource = {\n        "chart": {\n            "caption": "Monthly r    ue for last year",\n            "subCaption": "Harry's SuperMart",\n            "xAxisName": "Month",\n            "yAxisName": "Revenues (In USD)",\n            "numberPrefix": "$",\n            "paletteColors": "#0075c2",\n            "bgColor": "#ffffff",\n            "borderAlpha": "20",\n            "canvasBorderAlpha": "0",\n            "usePlotGradientColor": "0",\n            "plotBorderAlpha": "10",\n            "placevaluesInside": "1",\n            "rotatevalues": "1",\n            "valueFontColor": "#ffffff",                \n            "showXAxisLine": "1",\n            "xAxisLineColor": "#999999",\n            "divlineColor": "#999999",               \n            "divLineIsDashed": "1",\n            "showAlternateHGridColor": "0",\n            "subcaptionFontBold": "0",\n            "subcaptionFontSize": "14"\n        },            \n        "data": [\n            {\n                "label": "Jan",\n                "value": "420000"\n            }, \n            {\n                "label": "Feb",\n                "value": "810000"\n            }, \n            {\n                "label": "Mar",\n                "value": "720000"\n            }, \n            {\n                "label": "Apr",\n                "value": "550000"\n            }, \n            {\n                "label": "May",\n                "value": "910000"\n            }, \n            {\n                "label": "Jun",\n                "value": "510000"\n            }, \n            {\n                "label": "Jul",\n                "value": "680000"\n            }, \n            {\n                "label": "Aug",\n                "value": "620000"\n            }, \n            {\n                "label": "Sep",\n                "value": "610000"\n            }, \n            {\n                "label": "Oct",\n                "value": "490000"\n            }, \n            {\n                "label": "Nov",\n                "value": "900000"\n            }, \n            {\n                "label": "Dec",\n                "value": "730000"\n            }\n        ],\n        "trendlines": [\n            {\n                "line": [\n                    {\n                        "startvalue": "700000",\n                        "color": "#1aaf5d",\n                        "valueOnRight": "1",\n                        "displayvalue": "Monthly Target"\n                    }\n                ]\n            }\n        ]\n    }\n\n    total: number;\n\n    getPercentValue() {\n        let _this = this;\n        return (eve,  arg) => {\n            let value = (arg.value / _this.total * 100).toFixed(2);\n            _this.logMessage = "Percentage is  " + value + "% of the total";\n        }\n    }\n\n    events = {\n        dataPlotRollOver: this.getPercentValue()\n    }\n\n    constructor() {\n        let myData = this.dataSource.data;\n\n        this.total = 0;\n\n        // Calculate the sum of all values\n        for (let i = 0; i < myData.length; i++) {\n            this.total += Number(myData[i].value);\n        }\n    \n    }\n\n}`,
    html: `<style type="text/css">\n    .log-pane {\n        padding-top: 10px;\n        padding-right: 10px;\n        padding-bottom: 10px;\n        padding-left: 10px;\n        border: 2px solid black;\n        font-size: 20px;\n    }    \n</style>\n\n<fusioncharts\n     width="1000"\n     height="550"\n     type="column2d"\n     [events]="events"\n     [dataSource]="myDataSource">\n</fusioncharts>\n\n<div class='log-pane'>{{logMessage}}</div>`
};

export default fcDemos;