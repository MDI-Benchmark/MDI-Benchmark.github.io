$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    var dropdowns = document.getElementsByClassName('dropdown');
    for (let dropdown of dropdowns) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
            dropdown.classList.toggle('is-active');
        });
    }

    //响应操作
    document.addEventListener('DOMContentLoaded', function() {
        var tables = document.querySelectorAll('table');
      
        tables.forEach(function(table) {
            if (!table) return;
      
            var initialRows = Array.from(table.rows).slice(1);
            table.addEventListener('click', function(event) {
                var clickedCell = event.target.closest('td, th');
                if (!clickedCell) return;
                var headerRow = clickedCell.parentNode;
                var columnIndex = Array.from(headerRow.cells).indexOf(clickedCell);
                var type = clickedCell.getAttribute('data-type');
      
                if (headerRow.rowIndex === 0) {
                    if (columnIndex === 0) {
                        table.tBodies[0].innerHTML = '';
                        initialRows.forEach(row => table.tBodies[0].appendChild(row.cloneNode(true)));
                    }
                }
            });
        });
      });

    document.getElementById('toggleButton').addEventListener('click', toggleTables);
    // load and display default models
    // let qids = getRandomSubarray(num_output_qs);
    // let [folder , output_data] = read_data('Multimodal Bard');
    // output_data.addEventListener('load', function() {
    //     refresh_table(qids);
    // });
    // [folder , output_data] = read_data('CoT GPT4 (Caption+OCR)');
    // output_data.addEventListener('load', function() {
    //     refresh_table(qids);
    // });
    // // refresh_table(qids);
    // let dropdown_displays = document.getElementsByClassName('dropdown-display');
    // let refresh_button = document.getElementById('refresh-qids');
    // refresh_button.addEventListener('click', function(event) {
    //     qids = getRandomSubarray(num_output_qs);
    //     refresh_table(qids);
    // });

    // // let dropdown_displays = document.getElementsByClassName('dropdown-display');
    // let dropdown_contents = document.getElementsByClassName('dropdown-content');
    // for (let i = 0; i < dropdown_contents.length; i++) {
    //     // add an <a> tag to the dropdown-content for each key in model_output_folder_list
    //     let dropdown_content = dropdown_contents[i];
    //     for (let name in model_output_folder_list) {
    //         let a = document.createElement('a');
    //         a.classList.add('dropdown-item');
    //         a.innerHTML = '<b> ' + name + ' </b>';
    //         dropdown_content.appendChild(a);
    //         a.addEventListener('click', function(event) {
    //             dropdown_displays[i].innerHTML = name;
    //             let [folder, script_tag] = read_data(name);
    //             script_tag.addEventListener('load', function() {
    //                 refresh_table(qids);
    //             });
    //         });
    //         a.style.padding = '0.375em 1em';
    //     }
    // }

    // // create the leaderboard
    // let leaderboard = new Tabulator("#score-table", {
    //     data:score_table, //assign data to table
    //     layout:"fitDataTable",
    //     // layout:"fitColumns",
    //     initialSort:[
    //         {column:"ALL", dir:"desc"}, //sort by this first
    //     ],
    //     autoColumns:true, //create columns from data field names
    // });
})



// 展示卡片内容
function showTakeaway(id) {
    // First hide all takeaways
    document.querySelectorAll('.exemplar-takeaways > .takeaway-card').forEach(function(takeaway) {
        takeaway.style.display = 'none';
    });

    // Then show the hovered one
    var takeaway = document.getElementById(id);
    takeaway.style.display = 'block';
}

