const config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoibXJvZGEiLCJhIjoiY2x1dHl3cXM5MDRmZTJscDZuczk1MGR0MyJ9.b4OLZlubx4b5Hc19pGZRpQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Truck Routes and Biked Marked Streets in NYC',
    subtitle: 'Truck routes can be dangerous places for cyclists. However, truck routes are essential for the city and allow for the movement of goods. Oftentimes, GPS apps direct cyclists to use truck routes that have unprotected bike lanes or "sharrows."',
    byline: 'By Marcos Rodriguez Anderson',
    footer: '<br> Created using a Mapbox Storytelling template. <a href="https://github.com/MrodAnd/Final-Project" target="_blank"> Sources </a>',

    //chapters information
//chapter 1
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Trucks Routes are Essential',
            image: 'images/truckmovement.jpg',
            subtitleText: 'This image shows',
            description: 'Truck routes are vital for the city to function properly. It is important to provide ample street space for trucks. Nevertheless, over 50% of fatal bike and pedestrian crashes happened on truck routes even though they make up just 13% of city roads. <div></div> <i> Truck routes shown in orange </i>  <div></div> <i>  Truck routes with bike markings shown in white </i>',
            location: {
                center: [-73.95430, 40.70613],
                zoom: 10,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

            onChapterEnter: [
                {
                    layer: 'trucks',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'bikeandtrucks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'trucks',
                    opacity: 0
                }
            ]
        },
        //chapter 2
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Streets with Protected Bike Lanes and Truck Routes are not the Problem',
            image: 'images/protectlane.jpg',
            description: '<i>Grand Avenue is a truck route with a protected bike lane </i> <div></div> Some streets have both truck routes and bike paths which are shown by the white line. Truck routes that have protected bike lanes are not dangerous for cyclists. However, truck routes that have unprotected bike lanes or sharrows tell a different story.',
            location: {
                center: [-73.94979, 40.71113],
                zoom: 12.5,
                pitch: 30,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bikeandtrucks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'bikeandtrucks',
                    opacity: 0
                }
            ]
        },
        //chapter 3
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Unprotected Bike Lanes Can be an Issue',
            image: 'images/unprotectedlane.jpg',
            description: '<i> A fatal accident occurred on this street last year </i> <div></div> Overall, trucks were involved in half of last year’s 30 bike fatalities while over 1/3rd of cyclist accidents happened on bike marked streets. Last year, a cyclist was struck by a truck on this street which has an unprotected bike lane. Bike lanes that are unprotected provide little safety from trucks, especially when the vehicles are making turns.',
            location: {
                center: [-73.95469, 40.68725],
                zoom: 20.0,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bikeandtrucks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
            ]
        },
        //chapter 4
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Sharrows are the Main Problem',
            image: 'images/bikedeath2.png',
            description: '<i> A cyclist was killed by a box truck on this street last year </i> <div></div> Many accidents occur on "sharrows” which are road markings indicating that cars and bicycles must share a lane. Two cyclists were killed last year riding in sharrows. Sharrows made up a substantial portion of the 400 miles of <i>bike lanes </i> created during the Bloomberg administration. Some argue that sharrows do nothing to protect cyclists and are more dangerous. This is because GPS apps will advise riders to use sharrows instead of streets without any bike markings.',
            location: {
                center: [-73.99335, 40.67265],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'bikeandtrucks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'bikeandtrucks',
                    opacity: 0
                }
            ]
        },
        //chapter 5
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'What Can We Do?',
            image: 'images/morebikelanes.jpg',
            description: '<b>The government should upgrade sharrows with improved bike infrastructure. <div></div> GPS apps should classify truck routes with unprotected bike lanes as a separate road category. GPS apps then could program cyclist trips to avoid truck routes that do not have protected bike infrastructure.</b>',
            location: {
                center: [-73.91737, 40.71908],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trucks',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'bikeandtrucks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
    ]
};
