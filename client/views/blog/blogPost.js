Template.blogPost.events({
    'click .home-navHandler': function () {
        $('.blog-nav').toggleClass('active');
        $(this).toggleClass('active');
    },

    'click .toggle-search': function () {
       $('.blog-search').toggleClass('active');
       $(this).toggleClass('active');
   }
});