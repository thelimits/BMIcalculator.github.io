
const navslide = () => 
{
    //    jquery
    $('.box-wrap .box .wrapping-input .small-box , .box-wrap .box .wrapping-input .small-boxresponsive').on('click', (e) =>
    {
        e.preventDefault();
        $(".box-wrap .box .wrapping-input .information").toggleClass("information-normal");
        $(".box-wrap .informationresponsive").toggleClass("informationresponsive-normal");
    });
}







navslide();


