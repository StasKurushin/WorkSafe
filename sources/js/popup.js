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


