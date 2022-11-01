import Tool from './components/Tool'

Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'nova-filemanager',
            path: '/nova-filemanager',
            component: Tool,
        },
    ]);
});
