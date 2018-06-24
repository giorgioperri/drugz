let drugName;
let pics = [
    "pics/madonna.png",
    "pics/visions.jpg",
    "pics/ascend.jpg"    
];
let drugPictures = document.getElementsByClassName('drugPicture');
var source   = document.getElementById("rightTemplate").innerHTML;
var template = Handlebars.compile(source);

var sourceLeft   = document.getElementById("leftTemplate").innerHTML;
var template1 = Handlebars.compile(sourceLeft);





$.getJSON('http://pieroit.org/cors/drugz.json', function(data) {

    

    for(let i = 0; i < data.length; i++){

        if(i%2 == 0) {

            drugName = data[i].name;
            drugPronunciation = data[i].pronunciation;
            drugCategory = data[i].category;
            drugPrice = data[i].price;
            drugDesc1 = data[i].description1;
            drugDesc2 = data[i].description2;

            //handlebars
            var context  = {    pronunciation: drugPronunciation, 
                                category: drugCategory, 
                                price: drugPrice,
                                name: drugName,
                                description1: drugDesc1,
                                description2: drugDesc2,
                                id: "drugname" + i
                        };

            var html = template(context);
            document.getElementById('content').innerHTML += html;

        } else {

            drugName = data[i].name;
            drugPronunciation = data[i].pronunciation;
            drugCategory = data[i].category;
            drugPrice = data[i].price;
            drugDesc1 = data[i].description1;
            drugDesc2 = data[i].description2;
            //handlebars
            var context  = {    pronunciation: drugPronunciation, 
                            category: drugCategory, 
                            price: drugPrice,
                            name: drugName,
                            description1: drugDesc1,
                            description2: drugDesc2,
                            id: "drugname" + i
                        };

            var html = template1(context);
            document.getElementById('content').innerHTML += html;

           

        }
        
        drugPictures[i].setAttribute("src", pics[i]);

    }

    
        //blotter
        //cocaine

        var text = new Blotter.Text("Cocaine", {
            family : "Circular Std Book",
            size : 250,
            fill : "#fff"
        });

        var material = new Blotter.LiquidDistortMaterial();

        material.uniforms.uSpeed.value = 0.2;
        material.uniforms.uVolatility.value = 0.1;

        var blotter = new Blotter(material, { texts : text });
        var scope = blotter.forText(text);
        scope.appendTo(drugname0);

        //LSD

        var textL = new Blotter.Text("LSD", {
            family : "Circular Std Book",
            size : 250,
            fill : "#fff"
        });

        var material2 = new Blotter.LiquidDistortMaterial();

        material2.uniforms.uSpeed.value = 0.2;
        material2.uniforms.uVolatility.value = 0.1;

        var blotter = new Blotter(material2, { texts : textL });
        var scope = blotter.forText(textL);
        scope.appendTo(drugname1);

        //heroin

        var textH = new Blotter.Text("Heroin", {
            family : "Circular Std Book",
            size : 250,
            fill : "#fff"
        });

        var material1 = new Blotter.LiquidDistortMaterial();

        material1.uniforms.uSpeed.value = 0.2;
        material1.uniforms.uVolatility.value = 0.1;

        var blotter = new Blotter(material1, { texts : textH });
        var scope = blotter.forText(textH);
        scope.appendTo(drugname2);

        
});




