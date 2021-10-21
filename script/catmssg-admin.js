// categories data
var categories =[
    {
        sn : 1,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 2,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 3,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    
    {
        sn : 4,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 5,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 6,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 7,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 8,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 9,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 10,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 11,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 12,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 13,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 14,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 15,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 16,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 17,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 18,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 19,
        categoryName : "Category Name",
        numberOfPolls : 684

    },
    {
        sn : 20,
        categoryName : "Category Name",
        numberOfPolls : 684

    }
]


    //    categories function

var displayCategory = document.getElementById("cat");
var html = "";

categories.forEach(e =>{
    html +=`
    <tr>
        <th scope="row">${e.sn}</th>
        <td>${e.categoryName}</td>
        <td>${e.numberOfPolls}</td> 
        <td><span><a href="#edit-category" class=" text-decoration-none" data-bs-toggle="modal" data-bs-target=".edit-category"><img src="./images/border_color_24px_outlined.svg"
        alt=""></a></span>
<span><a href="#"><img src="./images/visibility_24px.png" alt=""></a></span></t d>
    </tr>

    `
    
    displayCategory.innerHTML = html;
})
// datatable for search,pagination and info

$(document).ready(function() {
    $('#tab').DataTable({
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search",
            "paginate": {
                "previous": "&lt&lt",
                "next": "&gt&gt"
              }
        },
        "pagingType": "simple_numbers",
        "bLengthChange": false,
        "bFilter": true,
        "bAutoWidth": false,
        searching: false
    } );
    }) ;
    // progress bar function

    $(function() {

        $(".progress").each(function() {
      
          var value = $(this).attr('data-value');
          var left = $(this).find('.progress-left .progress-bar');
          var right = $(this).find('.progress-right .progress-bar');
      
          if (value > 0) {
            if (value <= 50) {
              right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
              right.css('transform', 'rotate(180deg)')
              left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
          }
      
        })
      
        function percentageToDegrees(percentage) {
        
          return percentage / 100 * 360
      
        }
      
      });

    /*messages*/
    $('.card-body').scrollTop(1000000);


