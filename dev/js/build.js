let navbar = document.querySelector('.header-navbar');

function navbarOnload() {
    navbar.style.transform = 'translateX(1272px)';
    navbar.style.transition = '.5s cubic-bezier(.84, 0, .47, 1)'
}
document.addEventListener("DOMContentLoaded", navbarOnload);
const navbarListItem = document.querySelectorAll('.navbar-list__item');
    [].forEach.call(navbarListItem, el => {
        el.addEventListener('click', event => {
            let target = event.target;
            if (target.hasAttribute('data-scroll')) {
                let dataAttr = target.getAttribute('data-scroll');
                document.querySelector('.' + dataAttr).scrollIntoView({behavior: 'smooth'})
            }
        })
})


const contentArr = [
    {
        title: 'Специальная оценка условий труда',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Организация мед. осмотров',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Системы управления охраной труда',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Аутсорсинг охраны труда',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Аудит по охране труда',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Документы по охране труда',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Декларация СОУТ',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Расследование несчастных случаев',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Возмещение средств из ФСС',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    },
    {
        title: 'Производственный контроль',
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu felis a nibh consequat " +
        "scelerisque eu id nibh. Donec gravida blandit erat. Fusce tempus scelerisque vehicula. " +
        "Cras non neque vel eros tempus dignissim. Integer tincidunt aliquam neque eu lacinia. " +
        "Nam vitae neque sit amet eros consequat varius. Pellentesque habitant morbi tristique" +
        " senectus et netus et malesuada fames ac turpis egestas. Nullam lobortis sem lorem," +
        " in hendrerit arcu vehicula sit amet. Duis interdum felis a rhoncus aliquam. Etiam in " +
        "dolor eget ante interdum eleifend. Vestibulum ullamcorper porta nisi, porta euismod " +
        "dolor vehicula id. Quisque efficitur quam eget diam aliquet ullamcorper quis sed mauris." +
        " Ut tellus elit, tincidunt vitae ligula vitae, dapibus tincidunt odio. Morbi quis tortor" +
        " commodo, ultricies ante non, feugiat tortor. Suspendisse nec nibh id ante auctor sodales " +
        "sed nec elit. Vivamus semper, dui facilisis porta ornare, dui sem aliquet diam, sit amet " +
        "pharetra velit eros sed quam. Sed elementum pretium ligula, eget imperdiet justo rutrum sed." +
        " Nulla facilisi. Fusce vitae molestie mi, at vehicula lacus. Donec in varius ex, quis" +
        "posuere neque. In magna eros, vehicula ac sapien eu, cursus dignissim magna. Nulla diam" +
        " massa, accumsan ut faucibus sed, ultrices vitae est.Duis et euismod mauris. Proin fringilla " +
        "vehicula felis id eleifend. Duis a ante velit. Suspendisse imperdiet malesuada libero laoreet " +
        "auctor. Praesent id eros volutpat, molestie est non, euismod mi. Morbi porta dui mi, eget congue " +
        "neque elementum dignissim. Curabitur convallis sem risus, et ultrices nisi malesuada sed.Pellentesque" +
        " at auctor mi. Nulla maximus turpis id diam aliquet suscipit. Ut lacinia sit amet dui id posuere. Nulla" +
        " et elementum nisi. Vivamus eget mi sed orci accumsan fermentum. Vivamus quam leo, hendrerit sed tortor ac, " +
        "dictum gravida augue. Duis ornare mollis convallis. In hac habitasse platea dictumst.Maecenas orci diam, " +
        "pulvinar vel eleifend at, egestas sed neque. Sed a elit pharetra dui vehicula consectetur. Morbi imperdiet" +
        " ullamcorper convallis. In maximus quis est eget convallis. Nullam venenatis feugiat ligula, sit " +
        "amet lobortis justo volutpat dictum. Integer consequat odio egestas ex iaculis, nec tincidunt neque laoreet." +
        " In vitae mi consectetur, ullamcorper libero tincidunt, accumsan ex. Suspendisse feugiat vestibulum " +
        "faucibus. Aliquam in aliquet sem, ut laoreet erat. Vestibulum ante ipsum primis in faucibus orci luctus " +
        "et ultrices posuere cubilia Curae; Nunc posuere ultricies ligula at fermentum. Vestibulum velit urna," +
        "volutpat iaculis sem in, tristique dignissim ante. Nam ut tellus eleifend, semper neque ac, pulvinar " +
        "tortor. Cras sollicitudin ac risus ac tempus."
    }
];


const modalPopup = (function () {
    
    let popupContent;
    let activeItem;
    let popUpTitle;
    let popUpIntro;
    let navListItem;

    function open(idx, target) {
        const templateStore = getTemplate(popupContent, idx);
        target.insertAdjacentHTML('beforeEnd', templateStore);
        activeItem = idx;
        addHandlers();
        setActiveItem(idx);
        document.body.style.overflow = 'hidden';
        document.querySelector('.popup-container').style.overflow = 'auto'
    }

    function addHandlers() {
        document.querySelector('#left').addEventListener('click', _prevItem);
        document.querySelector('#right').addEventListener('click', _nextItem);
        document.querySelector('.popup__close').addEventListener('click', _close);
        keyDownEvent();
        popUpTitle = document.querySelector('.popup__title');
        popUpIntro = document.querySelector('.popup__intro');
        navListItem = document.querySelectorAll('.popupnav-list__item');
        [].forEach.call(navListItem, (el, idx) => {
            el.addEventListener('click', event => setActiveItem(idx))
        })
    }
    
    function _prevItem() {
        setActiveItem(activeItem > 0 ? activeItem - 1 : contentArr.length - 1);
    }

    function _nextItem() {
        setActiveItem(activeItem < contentArr.length - 1 ? activeItem + 1 : 0);
    }

    function keyDownEvent() {
        document.body.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') {
               _prevItem()
            } else if (event.key === 'ArrowRight') {
                _nextItem()
            } else if (event.key === 'Escape') {
                _close()
            }
        })
    }
    
    function setActiveItem(idx) {
        popUpTitle.innerHTML = contentArr[idx].title;
        popUpIntro.innerHTML = contentArr[idx].intro;
        _setNavListItem(idx);
        activeItem = idx;
    }
    
    function _setNavListItem(idx) {
        navListItem[activeItem].style.background = 'none';
        navListItem[idx].style.background = "rgba(49, 196, 189, 0.44)"
    }
    function _close() {
        document.querySelector('#popup').remove();
        document.body.style.overflow = '';
    }
    
    function init(content) {
        popupContent = content;
    }

    function getTemplate(arr, idx) {
        let m  = [];
        let title = arr[idx].title;
        let intro = arr[idx].intro;
        arr.forEach( el => m.push(`<li class="popupnav-list__item">${el.title}</li>`));
        const res = m.join('');
        return `<div class="popup" id="popup">
                                <div class="popupnav">
                                    <ul class="popupnav-list">
                                        ${res}
                                    </ul>
                                </div>
                                <div class="popup-container">
                                    <div class="popup__arrow" id="left">
                                        <i class="material-icons">chevron_left</i>
                                    </div>
                                    <div class="popup-content">
                                        <div class="popup__title" id="title">
                                          ${title}
                                        </div>
                                        <div class="popup__intro" id="intro">
                                            ${intro}
                                        </div>
                                    </div>   
                                    <div class="popup__arrow" id="right">
                                        <i class="material-icons">chevron_right</i>
                                    </div>
                                    <div class="popup__close" data-icon="&#xf216" id="close">
                                                                        
                                    </div>
                                </div>
                         </div>`
    }
    return {openModal: open,
            addContent: init}
})();

const target = document.querySelector('.services');
const items = document.querySelectorAll('.service');
const content = contentArr;
modalPopup.addContent(content);

[].forEach.call(items, function (el, idx) {
    el.addEventListener('click', (event) => {
        modalPopup.openModal(idx, target);
    });
});




    let lastScrollPos = 0;
    let scrollBtn = document.querySelector('.scroll-btn');
    let benefits = document.querySelector('.benefits');
    let servicesCont = document.querySelector('.services-container');

    function animateBtn(scrollPos) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'scale(2)'
    }

    function animateBenefitsContainer(scrollPos) {
        benefits.style.opacity = '1';
    }

    function animateServicesContainer(scrollPos) {
        servicesCont.style.opacity = '1'
    }


    window.addEventListener('scroll', function (e) {
        lastScrollPos = window.scrollY;
        if (lastScrollPos > 500) {
            window.requestAnimationFrame(function () {
                animateBtn(lastScrollPos);
            });
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'scale(0.5)'
        }
        if (lastScrollPos > 400) {
            window.requestAnimationFrame(function () {
                animateBenefitsContainer(lastScrollPos);
            });
        } else {
            benefits.style.opacity = '0';
        }
        if (lastScrollPos > 1405) {
            window.requestAnimationFrame(function () {
                animateServicesContainer(lastScrollPos);
            });
        } else {
            servicesCont.style.opacity = '0';
        }
    });


    scrollBtn.addEventListener('click', function (el) {
        document.querySelector('.header').scrollIntoView({behavior: 'smooth'})
    })






'use strict';

/*
 * aliases
 * w: window global object
 * d: document
 */
var w = window;
var d = document;

/**
 * indicates if a the current browser is made by Microsoft
 * @method isMicrosoftBrowser
 * @param {String} userAgent
 * @returns {Boolean}
 */
function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
}

// polyfill
function polyfill() {
    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style
        && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    // object gathering original scroll methods
    var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
        if (firstArg === null
            || typeof firstArg !== 'object'
            || firstArg.behavior === undefined
            || firstArg.behavior === 'auto'
            || firstArg.behavior === 'instant') {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            // first argument is an object and behavior is smooth
            return false;
        }

        // throw error when behavior is not supported
        throw new TypeError(
            'behavior member of ScrollOptions '
            + firstArg.behavior
            + ' is not a valid value for enumeration ScrollBehavior.'
        );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
            return (el.clientHeight + ROUNDING_TOLERANCE) < el.scrollHeight;
        }

        if (axis === 'X') {
            return (el.clientWidth + ROUNDING_TOLERANCE) < el.scrollWidth;
        }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

        return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

        return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
        var isBody;

        do {
            el = el.parentNode;

            isBody = el === d.body;
        } while (isBody === false && isScrollable(el) === false);

        isBody = null;

        return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;

        // avoid elapsed times higher than one
        elapsed = elapsed > 1 ? 1 : elapsed;

        // apply easing to elapsed time
        value = ease(elapsed);

        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;

        context.method.call(context.scrollable, currentX, currentY);

        // scroll more if we have not reached our destination
        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();

        // define scroll context
        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }

        // scroll looping over a frame
        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
        });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(
                w,
                arguments[0].left !== undefined
                    ? arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : (w.scrollX || w.pageXOffset),
                // use top prop, second argument if present or fallback to scrollY
                arguments[0].top !== undefined
                    ? arguments[0].top
                    : arguments[1] !== undefined
                    ? arguments[1]
                    : (w.scrollY || w.pageYOffset)
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            w,
            d.body,
            arguments[0].left !== undefined
                ? ~~arguments[0].left
                : (w.scrollX || w.pageXOffset),
            arguments[0].top !== undefined
                ? ~~arguments[0].top
                : (w.scrollY || w.pageYOffset)
        );
    };

    // w.scrollBy
    w.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(
                w,
                arguments[0].left !== undefined
                    ? arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : 0,
                arguments[0].top !== undefined
                    ? arguments[0].top
                    : arguments[1] !== undefined
                    ? arguments[1]
                    : 0
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            w,
            d.body,
            ~~arguments[0].left + (w.scrollX || w.pageXOffset),
            ~~arguments[0].top + (w.scrollY || w.pageYOffset)
        );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value couldn\'t be converted');
            }

            original.elementScroll.call(
                this,
                // use left prop, first number argument or fallback to scrollLeft
                arguments[0].left !== undefined
                    ? ~~arguments[0].left
                    : typeof arguments[0] !== 'object'
                    ? ~~arguments[0]
                    : this.scrollLeft,
                // use top prop, second argument or fallback to scrollTop
                arguments[0].top !== undefined
                    ? ~~arguments[0].top
                    : arguments[1] !== undefined
                    ? ~~arguments[1]
                    : this.scrollTop
            );

            return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top;

        // LET THE SMOOTHNESS BEGIN!
        smoothScroll.call(
            this,
            this,
            typeof left === 'undefined' ? this.scrollLeft : ~~left,
            typeof top === 'undefined' ? this.scrollTop : ~~top
        );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
            return;
        }

        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(
                this,
                arguments[0].left !== undefined
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== undefined
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
            );

            return;
        }

        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
        });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(
                this,
                arguments[0] === undefined
                    ? true
                    : arguments[0]
            );

            return;
        }

        // LET THE SMOOTHNESS BEGIN!
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(
                this,
                scrollableParent,
                scrollableParent.scrollLeft + clientRects.left - parentRects.left,
                scrollableParent.scrollTop + clientRects.top - parentRects.top
            );

            // reveal parent in viewport unless is fixed
            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth'
                });
            }
        } else {
            // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth'
            });
        }
    };
}

if (typeof exports === 'object') {
    // commonjs
    module.exports = { polyfill: polyfill };
} else {
    // global
    polyfill();
}