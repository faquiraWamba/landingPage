let slider = tns({
    container : ".articlesList",
    autoPlay : true,
    mouseDrag : true,
    "slydeBy" : "1",
    "speed" : 700,
    "nav" : false,
    "prevButton": ".previous",
    "nextButton": ".next",
    "responsive" : {
        1024 : {
            items: 4,
            gutter: 50
        },
        1000 : {
            items: 3,
            gutter: 50
        },
        616 : {
            items: 2,
            gutter: 50
        },
        505 : {
            items: 3,
            gutter: 50
        },

        768 : {
            items: 2,
            gutter: 50
        },
        425: {
            items: 2,
            gutter: 50
        },
        375: {
            items: 2,
            gutter: 50
        },
        320: {
            items: 2,
            gutter: 50
        }}

        
})